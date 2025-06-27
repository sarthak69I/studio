
'use client';

import React, { useEffect, useState, useRef, type ReactNode, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Toaster } from "@/components/ui/toaster";
import CookieConsentBanner from './cookie-consent-banner';
import MaintenancePage from './maintenance-page';
import LoginPromptDialog from './LoginPromptDialog';
import LoginDialog from '@/components/LoginDialog';
import { FaqDialogContent } from '@/components/faq-dialog-content';
import { Skeleton } from '@/components/ui/skeleton';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button, buttonVariants } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";
import { Bot, Bell, BellRing, Loader2, AlertCircle, MailOpen, X, Menu, HelpCircle, Sun, Moon, Download, LayoutDashboard, LogIn, User, ChevronDown, LogOut, Send } from 'lucide-react';
import { db, logout } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs, Timestamp, onSnapshot } from 'firebase/firestore';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import NotificationItem from '@/components/NotificationItem';
import type { Announcement as AnnouncementType } from '@/components/NotificationItem';
import { useToast } from '@/hooks/use-toast';
import { AuthProvider, useAuth } from '@/context/AuthContext';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from '@/components/ui/dropdown-menu';
import SubscriptionPrompt from './SubscriptionPrompt';
import Footer from './Footer';
import ContinueWatchingCard from './ContinueWatchingCard';

const MAINTENANCE_MODE_ENABLED = false;
const MAINTENANCE_END_TIME_HHMM: string | null = "12:00";
const LOCAL_STORAGE_LAST_SHEET_OPEN_TIMESTAMP_KEY = 'eleakLastNotificationsSheetOpenedAt_v3';
const LOCAL_STORAGE_LAST_TOASTED_ANNOUNCEMENT_TIMESTAMP_KEY = 'eleakLastToastedAnnouncementTimestamp_v3';
const LOGIN_PROMPT_LAST_SHOWN_KEY = 'loginPromptLastShown_v2';
const SUBSCRIPTION_PROMPT_LAST_SHOWN_KEY = 'subscriptionPromptLastShown_v1';
const NOTIFICATIONS_POLL_INTERVAL_MS = 30000;
const ANNOUNCEMENTS_FETCH_LIMIT = 20;
const LOGIN_PROMPT_DELAY_DAYS = 2;


function AppContent({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { toast } = useToast();
  const [showMaintenance, setShowMaintenance] = useState(false);
  const [maintenanceEndTime, setMaintenanceEndTime] = useState<Date | null>(null);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const { user, userData, loading: authLoading } = useAuth();

  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
  const [isNotificationsSheetOpen, setIsNotificationsSheetOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);
  const [isLoadingAnnouncements, setIsLoadingAnnouncements] = useState(true);
  const [announcementsError, setAnnouncementsError] = useState<string | null>(null);
  
  const [globallyLatestFetchedTimestamp, setGloballyLatestFetchedTimestamp] = useState<number>(0);
  const initialLoadDone = useRef(false);

  const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);
  const [isFaqsDialogOpen, setIsFaqsDialogOpen] = useState(false);
  const [isMenuSheetOpen, setIsMenuSheetOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState<string>('dark');
  const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = React.useState(false);
  const [showSubscriptionPrompt, setShowSubscriptionPrompt] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme) {
      setCurrentTheme(storedTheme);
      document.documentElement.className = storedTheme;
    } else {
      setCurrentTheme('dark');
      localStorage.setItem('theme', 'dark');
      document.documentElement.className = 'dark';
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    setCurrentTheme(newTheme);
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', 'dark');
  };
  
  const getInitials = (name: string | null | undefined) => {
    if (!name) return <User />;
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }

  const handleLogout = async () => {
    setIsLogoutConfirmOpen(false);
    await logout();
    toast({
        title: "Signed Out",
        description: "You have been successfully logged out.",
    });
  };

  const markNotificationsAsViewed = useCallback((viewedTimestamp: number) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_LAST_SHEET_OPEN_TIMESTAMP_KEY, viewedTimestamp.toString());
      setUnreadNotificationCount(0);
    }
  }, [setUnreadNotificationCount]);

  const fetchAnnouncementsForSheetContent = useCallback(async (): Promise<number> => {
    setIsLoadingAnnouncements(true);
    setAnnouncementsError(null);
    let latestTimestampInFetchedBatch = 0;
    try {
      const q = query(collection(db, 'global_announcements'), orderBy('timestamp', 'desc'), limit(ANNOUNCEMENTS_FETCH_LIMIT));
      const querySnapshot = await getDocs(q);
      const fetchedAnnouncements: AnnouncementType[] = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const docTimestamp = data.timestamp instanceof Timestamp ? data.timestamp : null;
        if (docTimestamp) {
          latestTimestampInFetchedBatch = Math.max(latestTimestampInFetchedBatch, docTimestamp.toMillis());
        }
        fetchedAnnouncements.push({
          id: doc.id,
          message: data.message || "No message content",
          timestamp: docTimestamp,
          link: data.link,
          type: data.type || 'info',
        });
      });
      setAnnouncements(fetchedAnnouncements);
      setGloballyLatestFetchedTimestamp(prev => Math.max(prev, latestTimestampInFetchedBatch));
      markNotificationsAsViewed(latestTimestampInFetchedBatch || Date.now());
    } catch (error) {
      console.error("Error fetching announcements for sheet:", error);
      setAnnouncementsError("Could not load announcements. Please check your internet connection and try again.");
      setAnnouncements([]);
    } finally {
      setIsLoadingAnnouncements(false);
    }
    return latestTimestampInFetchedBatch;
  }, [markNotificationsAsViewed, setAnnouncements, setIsLoadingAnnouncements, setAnnouncementsError, setGloballyLatestFetchedTimestamp]);

  const checkNewAnnouncements = useCallback(async () => {
    try {
      const latestAnnQuery = query(collection(db, 'global_announcements'), orderBy('timestamp', 'desc'), limit(ANNOUNCEMENTS_FETCH_LIMIT));
      const querySnapshot = await getDocs(latestAnnQuery);

      let overallLatestTimestampInBatch = 0;
      let unreadCountForBadge = 0;
      const lastSheetOpenTimestamp = parseInt(localStorage.getItem(LOCAL_STORAGE_LAST_SHEET_OPEN_TIMESTAMP_KEY) || '0', 10);
      const lastToastedTimestamp = parseInt(localStorage.getItem(LOCAL_STORAGE_LAST_TOASTED_ANNOUNCEMENT_TIMESTAMP_KEY) || '0', 10);
      
      let newestAnnouncementForToast: AnnouncementType | null = null;

      querySnapshot.forEach(doc => {
        const data = doc.data();
        if (data.timestamp instanceof Timestamp) {
          const currentDocTimestamp = data.timestamp.toMillis();
          overallLatestTimestampInBatch = Math.max(overallLatestTimestampInBatch, currentDocTimestamp);

          if (currentDocTimestamp > lastSheetOpenTimestamp) {
            unreadCountForBadge++;
          }
          
          if (currentDocTimestamp > lastToastedTimestamp) {
            if (!newestAnnouncementForToast || currentDocTimestamp > (newestAnnouncementForToast.timestamp?.toMillis() || 0)) {
              newestAnnouncementForToast = {
                id: doc.id,
                message: data.message || "No message content",
                timestamp: data.timestamp,
                link: data.link,
                type: data.type || 'info',
              };
            }
          }
        }
      });

      setGloballyLatestFetchedTimestamp(prev => Math.max(prev, overallLatestTimestampInBatch));
      setUnreadNotificationCount(unreadCountForBadge);

      if (newestAnnouncementForToast && newestAnnouncementForToast.timestamp) {
        const newToastTimestamp = newestAnnouncementForToast.timestamp.toMillis();
        toast({
          title: newestAnnouncementForToast.type === 'warning' ? "Important Update" : "New Announcement!",
          description: (newestAnnouncementForToast.message.substring(0, 70) + (newestAnnouncementForToast.message.length > 70 ? "..." : "")),
          action: (
            <Button variant="outline" size="sm" onClick={() => {
              setIsNotificationsSheetOpen(true);
              markNotificationsAsViewed(newToastTimestamp); 
            }}>
              View
            </Button>
          ),
          variant: newestAnnouncementForToast.type === 'warning' ? 'destructive' : 'default',
        });
        localStorage.setItem(LOCAL_STORAGE_LAST_TOASTED_ANNOUNCEMENT_TIMESTAMP_KEY, newToastTimestamp.toString());
      }

    } catch (error) {
      console.error("Error checking for new announcements/badge:", error);
    }
  }, [toast, markNotificationsAsViewed, setIsNotificationsSheetOpen, setGloballyLatestFetchedTimestamp, setUnreadNotificationCount]);

  useEffect(() => {
    if (!initialLoadDone.current) {
      checkNewAnnouncements();
      initialLoadDone.current = true;
    }
    const excludedPathsForPolling = ['/help-center', '/generate-access', '/auth/callback', '/dashboard'];
    const shouldPoll = !excludedPathsForPolling.includes(pathname) && !showMaintenance;
    let pollInterval: NodeJS.Timeout | undefined;
    if (shouldPoll) {
      pollInterval = setInterval(checkNewAnnouncements, NOTIFICATIONS_POLL_INTERVAL_MS);
    }
    return () => {
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [pathname, showMaintenance, checkNewAnnouncements]);

  useEffect(() => {
    let isMounted = true;
    if (isNotificationsSheetOpen) {
      fetchAnnouncementsForSheetContent();
    }
    return () => {
      isMounted = false;
    };
  }, [isNotificationsSheetOpen, fetchAnnouncementsForSheetContent]);

  useEffect(() => {
    if (MAINTENANCE_MODE_ENABLED && MAINTENANCE_END_TIME_HHMM) {
      const [hours, minutes] = MAINTENANCE_END_TIME_HHMM.split(':').map(Number);
      const today = new Date();
      const endTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes, 0);
      setMaintenanceEndTime(endTime);
      setShowMaintenance(new Date() < endTime);
    } else {
      setShowMaintenance(false);
    }

    const handleContextmenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextmenu);
    
    return () => document.removeEventListener('contextmenu', handleContextmenu);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || authLoading) return;
  
    const excludedPathsForPrompts = ['/help-center', '/generate-access', '/auth/callback'];
    const shouldShowPrompts = !excludedPathsForPrompts.includes(pathname) && !showMaintenance;
  
    if (shouldShowPrompts) {
      // Login Prompt Logic
      if (!user) {
        const lastLoginPromptTime = localStorage.getItem(LOGIN_PROMPT_LAST_SHOWN_KEY);
        const twoDays = LOGIN_PROMPT_DELAY_DAYS * 24 * 60 * 60 * 1000;
        if (!lastLoginPromptTime || Date.now() - parseInt(lastLoginPromptTime, 10) > twoDays) {
          const timer = setTimeout(() => setShowLoginPrompt(true), 5000);
          return () => clearTimeout(timer);
        }
      }

      // Subscription Prompt Logic
      const lastSubPromptTime = localStorage.getItem(SUBSCRIPTION_PROMPT_LAST_SHOWN_KEY);
      const threeDays = 3 * 24 * 60 * 60 * 1000;
      if (!lastSubPromptTime || Date.now() - parseInt(lastSubPromptTime, 10) > threeDays) {
        const timer = setTimeout(() => setShowSubscriptionPrompt(true), 15000); // Show after 15 seconds
        return () => clearTimeout(timer);
      }
    }
  }, [pathname, showMaintenance, authLoading, user]);

  const handleLoginPromptDismiss = () => {
    setShowLoginPrompt(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOGIN_PROMPT_LAST_SHOWN_KEY, Date.now().toString());
    }
  };

  const handleSubscriptionPromptClose = () => {
    setShowSubscriptionPrompt(false);
    localStorage.setItem(SUBSCRIPTION_PROMPT_LAST_SHOWN_KEY, Date.now().toString());
  };

  if (showMaintenance && maintenanceEndTime) {
    return <MaintenancePage maintenanceEndTime={maintenanceEndTime} />;
  }

  const NotificationBellIconToUse = unreadNotificationCount > 0 ? BellRing : Bell;
  const excludedPathsForHeader = ['/auth/callback', '/generate-access', '/help-center'];
  const showHeader = !excludedPathsForHeader.includes(pathname) && !showMaintenance;
  
  const excludedPathsForFeatures = ['/generate-access', '/auth/callback', '/help-center'];
  const showAppFeatures = !excludedPathsForFeatures.includes(pathname) && !showMaintenance;


  return (
    <>
      {showHeader && (
        <header className="fixed top-0 left-0 right-0 z-50 p-2 sm:p-4 flex items-center justify-between bg-background/80 backdrop-blur-sm border-b border-border/80">
          <Sheet open={isNotificationsSheetOpen} onOpenChange={setIsNotificationsSheetOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full h-10 w-10"
                aria-label="View Notifications"
              >
                <NotificationBellIconToUse className="h-5 w-5 text-foreground" />
                {unreadNotificationCount > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold ring-2 ring-background">
                    {unreadNotificationCount > 9 ? '9+' : unreadNotificationCount}
                  </span>
                )}
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[380px] sm:w-[480px] p-0 flex flex-col bg-card shadow-xl border-r border-border">
              <SheetHeader className="p-6 pb-4 border-b border-border">
                <div className="flex justify-between items-center">
                  <SheetTitle className="text-xl font-semibold text-foreground flex items-center">
                    <Bell className="mr-2 h-5 w-5 text-primary"/>
                    Updates & Announcements
                  </SheetTitle>
                </div>
                <SheetDescription className="text-sm text-muted-foreground pt-1">
                  Stay informed with the latest news and updates from E-Leak.
                </SheetDescription>
              </SheetHeader>
              <ScrollArea className="flex-grow">
                <div className="p-4 space-y-3">
                    {isLoadingAnnouncements && (
                      <div className="flex flex-col items-center justify-center h-64 text-muted-foreground">
                        <Loader2 className="h-10 w-10 animate-spin text-primary mb-4" />
                        <p>Loading announcements...</p>
                      </div>
                    )}
                    {!isLoadingAnnouncements && announcementsError && (
                      <div className="p-4 bg-destructive/10 border border-destructive/30 text-destructive rounded-lg flex flex-col items-center text-center text-sm">
                        <AlertCircle className="h-10 w-10 mb-3" />
                        <p className="font-medium">Oops! Something went wrong.</p>
                        <p>{announcementsError}</p>
                      </div>
                    )}
                    {!isLoadingAnnouncements && !announcementsError && announcements.length === 0 && (
                      <div className="flex flex-col items-center justify-center h-64 text-center text-muted-foreground">
                        <MailOpen className="h-16 w-16 mb-4 text-primary/40" />
                        <p className="text-lg font-medium">All caught up!</p>
                        <p className="text-sm">There are no new announcements right now.</p>
                      </div>
                    )}
                    {!isLoadingAnnouncements && !announcementsError && announcements.length > 0 &&
                      announcements.map((announcement, index) => (
                        <div
                          key={announcement.id}
                          className="animate-in fade-in-0 slide-in-from-top-3 duration-300 ease-out"
                          style={{ animationDelay: `${index * 80}ms` }}
                        >
                          <NotificationItem announcement={announcement} />
                        </div>
                      ))
                    }
                </div>
              </ScrollArea>
            </SheetContent>
          </Sheet>

          <div className="flex items-center gap-2">
             {authLoading ? (
                <Skeleton className="h-10 w-32 rounded-full" />
              ) : user ? (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="flex items-center gap-2 h-10 px-3 rounded-full border border-border hover:bg-muted p-2">
                        <span className="text-sm font-medium text-foreground">Hi, {userData?.displayName?.split(' ')[0] || user.displayName?.split(' ')[0]}</span>
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={userData?.photoURL || user.photoURL || ''} alt={userData?.displayName || user.displayName || 'User'} />
                            <AvatarFallback>{getInitials(userData?.displayName || user.displayName)}</AvatarFallback>
                        </Avatar>
                    </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-56">
                        <DropdownMenuLabel className="font-normal">
                            <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{userData?.displayName || user.displayName}</p>
                            <p className="text-xs leading-none text-muted-foreground">
                                {userData?.email || user.email}
                            </p>
                            </div>
                        </DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem asChild>
                            <Link href="/dashboard">
                                <LayoutDashboard className="mr-2 h-4 w-4" />
                                <span>Dashboard</span>
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem onSelect={(e) => { e.preventDefault(); setIsLogoutConfirmOpen(true); }}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Button className="btn-login rounded-full" onClick={() => setIsLoginDialogOpen(true)}>
                  Login/Register
                </Button>
              )}

            <Sheet open={isMenuSheetOpen} onOpenChange={setIsMenuSheetOpen}>
              <SheetTrigger asChild>
                 <Button
                  variant="ghost"
                  size="icon"
                  aria-label="Open menu"
                  className="rounded-full h-10 w-10"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0 flex flex-col">
                <SheetHeader className="p-6 pb-2">
                  <SheetTitle className="text-2xl font-semibold">Menu</SheetTitle>
                </SheetHeader>
                <div className="space-y-1 p-4 flex-grow">
                  {user && (
                    <Button variant="ghost" className="w-full justify-start p-3 text-base font-normal rounded-md" asChild>
                      <Link href="/dashboard" onClick={() => setIsMenuSheetOpen(false)} className="flex items-center">
                        <Avatar className="mr-3 h-7 w-7">
                          <AvatarImage src={userData?.photoURL || user.photoURL || ''} alt={userData?.displayName || user.displayName || 'User'} />
                          <AvatarFallback>{getInitials(userData?.displayName || user.displayName)}</AvatarFallback>
                        </Avatar>
                        My Dashboard
                      </Link>
                    </Button>
                  )}
                  
                  <Button variant="ghost" className="w-full justify-start p-3 text-base font-normal rounded-md" onClick={toggleTheme}>
                    {currentTheme === 'light' ? <Moon className="mr-3 h-5 w-5 text-primary" /> : <Sun className="mr-3 h-5 w-5 text-primary" />}
                    {currentTheme === 'light' ? 'Enable Dark Mode' : 'Enable Light Mode'}
                  </Button>

                  <Button variant="ghost" className="w-full justify-start p-3 text-base font-normal rounded-md" onClick={() => { setIsFaqsDialogOpen(true); setIsMenuSheetOpen(false); }}>
                    <HelpCircle className="mr-3 h-5 w-5 text-primary" />
                    FAQs
                  </Button>
                  
                  <Button variant="ghost" className="w-full justify-start p-3 text-base font-normal rounded-md" asChild>
                    <a href="https://e-leak-in.vercel.app/" onClick={() => setIsMenuSheetOpen(false)}>
                      <Download className="mr-3 h-5 w-5 text-primary" />
                      Download App
                    </a>
                  </Button>

                  <Button variant="ghost" className="w-full justify-start p-3 text-base font-normal rounded-md" asChild>
                    <Link href="/help-center" onClick={() => setIsMenuSheetOpen(false)}>
                      <Bot className="mr-3 h-5 w-5 text-primary" />
                      E-Leak 24/7 Support
                    </Link>
                  </Button>
                </div>
                 <SheetClose asChild>
                    <Button variant="outline" className="w-full m-4 mt-0">Close Menu</Button>
                  </SheetClose>
              </SheetContent>
            </Sheet>
          </div>
        </header>
      )}

      <main className={showHeader ? 'pt-20' : ''}>
        {children}
      </main>

      {showAppFeatures && (
        <>
          <a
            href="https://t.me/eleakcoursehub"
            target="_blank"
            rel="noopener noreferrer"
            className="telegram-float"
            aria-label="Join our Telegram channel"
            title="Join our Telegram channel"
          >
            <Send className="h-7 w-7 text-white" />
          </a>
          <ContinueWatchingCard />
          <Footer />
        </>
      )}

      <Toaster />
      
       <Dialog open={isFaqsDialogOpen} onOpenChange={setIsFaqsDialogOpen}>
        <DialogContent className="sm:max-w-lg rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-xl">Frequently Asked Questions</DialogTitle>
          </DialogHeader>
          <FaqDialogContent />
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      
      <LoginDialog open={isLoginDialogOpen} onOpenChange={setIsLoginDialogOpen} />

      <CookieConsentBanner />

      <LoginPromptDialog
          open={showLoginPrompt}
          onOpenChange={(isOpen) => {
            if (!isOpen) handleLoginPromptDismiss();
          }}
          onOpenLoginDialog={() => {
            handleLoginPromptDismiss();
            setIsLoginDialogOpen(true);
          }}
      />
      
      <SubscriptionPrompt 
        open={showSubscriptionPrompt}
        onClose={handleSubscriptionPromptClose}
      />

      <AlertDialog open={isLogoutConfirmOpen} onOpenChange={setIsLogoutConfirmOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure you want to log out?</AlertDialogTitle>
            <AlertDialogDescription>
              Your progress is saved, and you can sign back in anytime.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleLogout} className={buttonVariants({ variant: "destructive" })}>Log Out</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default function ClientLayoutWrapper({ children }: { children: React.Node }) {
  return (
    <AuthProvider>
      <AppContent>{children}</AppContent>
    </AuthProvider>
  );
}
