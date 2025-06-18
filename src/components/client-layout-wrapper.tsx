
'use client';

import React, { useEffect, useState, useRef, type ReactNode, useCallback } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Toaster } from "@/components/ui/toaster";
import CookieConsentBanner from './cookie-consent-banner';
import MaintenancePage from './maintenance-page';
import FeedbackForm from '@/components/FeedbackForm';
import FeedbackList from '@/components/FeedbackList';
import { Separator } from '@/components/ui/separator';
import FeedbackPromptDialog from './FeedbackPromptDialog';
import { Button } from '@/components/ui/button';
import { Bot, Bell, BellRing, Loader2, AlertCircle, MailOpen, X } from 'lucide-react';
import { db } from '@/lib/firebase';
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

const MAINTENANCE_MODE_ENABLED = false;
const MAINTENANCE_END_TIME_HHMM: string | null = "10:00";
const FEEDBACK_PROMPT_INTERVAL_HOURS = 20;
const LOCAL_STORAGE_LAST_SHEET_OPEN_TIMESTAMP_KEY = 'eleakLastNotificationsSheetOpenedAt_v3';
const LOCAL_STORAGE_LAST_TOASTED_ANNOUNCEMENT_TIMESTAMP_KEY = 'eleakLastToastedAnnouncementTimestamp_v3';
const NOTIFICATIONS_POLL_INTERVAL_MS = 60000; // 1 minute
const ANNOUNCEMENTS_FETCH_LIMIT = 20;

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

export default function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const pathname = usePathname();
  const { toast } = useToast();
  const [showMaintenance, setShowMaintenance] = useState(false);
  const [maintenanceEndTime, setMaintenanceEndTime] = useState<Date | null>(null);
  const feedbackSectionRef = useRef<HTMLDivElement>(null);
  const [showFeedbackPrompt, setShowFeedbackPrompt] = useState(false);

  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);
  const [isLoadingAnnouncements, setIsLoadingAnnouncements] = useState(true);
  const [announcementsError, setAnnouncementsError] = useState<string | null>(null);
  const [globallyLatestFetchedTimestamp, setGloballyLatestFetchedTimestamp] = useState<number>(0);
  const initialLoadDone = useRef(false);

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
        const timestamp = data.timestamp instanceof Timestamp ? data.timestamp : null;
        if (timestamp) {
          latestTimestampInFetchedBatch = Math.max(latestTimestampInFetchedBatch, timestamp.toMillis());
        }
        fetchedAnnouncements.push({
          id: doc.id,
          message: data.message || "No message content",
          timestamp: timestamp,
          link: data.link,
          type: data.type || 'info',
        });
      });
      setAnnouncements(fetchedAnnouncements);
      setGloballyLatestFetchedTimestamp(prev => Math.max(prev, latestTimestampInFetchedBatch));
    } catch (error) {
      console.error("Error fetching announcements for sheet:", error);
      setAnnouncementsError("Could not load announcements. Please check connection and try again.");
    } finally {
      setIsLoadingAnnouncements(false);
    }
    return latestTimestampInFetchedBatch;
  }, []); // Removed state setters, they don't need to be dependencies for useCallback if the function doesn't close over their changing values.

  const markNotificationsAsViewed = useCallback((viewedTimestamp: number) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem(LOCAL_STORAGE_LAST_SHEET_OPEN_TIMESTAMP_KEY, viewedTimestamp.toString());
      setUnreadNotificationCount(0);
    }
  }, []);

  const checkNewAnnouncements = useCallback(async (isInitialCheck = false) => {
    try {
      const latestAnnQuery = query(collection(db, 'global_announcements'), orderBy('timestamp', 'desc'), limit(ANNOUNCEMENTS_FETCH_LIMIT));
      const querySnapshot = await getDocs(latestAnnQuery);
      
      let newOverallLatestTimestamp = 0;
      let unreadCount = 0;
      const lastSheetOpenTimestamp = parseInt(localStorage.getItem(LOCAL_STORAGE_LAST_SHEET_OPEN_TIMESTAMP_KEY) || '0', 10);
      const lastToastedTimestamp = parseInt(localStorage.getItem(LOCAL_STORAGE_LAST_TOASTED_ANNOUNCEMENT_TIMESTAMP_KEY) || '0', 10);
      let latestUnreadToasted: AnnouncementType | null = null;

      querySnapshot.forEach(doc => {
        const data = doc.data();
        if (data.timestamp instanceof Timestamp) {
          const currentDocTimestamp = data.timestamp.toMillis();
          newOverallLatestTimestamp = Math.max(newOverallLatestTimestamp, currentDocTimestamp);
          
          if (currentDocTimestamp > lastSheetOpenTimestamp) {
            unreadCount++;
          }
          if (currentDocTimestamp > lastToastedTimestamp && !latestUnreadToasted) {
            latestUnreadToasted = {
                id: doc.id,
                message: data.message || "No message content",
                timestamp: data.timestamp,
                link: data.link,
                type: data.type || 'info',
            };
          }
        }
      });
      
      setGloballyLatestFetchedTimestamp(prev => Math.max(prev, newOverallLatestTimestamp));
      setUnreadNotificationCount(unreadCount);

      if (latestUnreadToasted && !isInitialCheck) {
        toast({
          title: latestUnreadToasted.type === 'warning' ? "Important Update" : "New Announcement!",
          description: (latestUnreadToasted.message.substring(0, 70) + (latestUnreadToasted.message.length > 70 ? "..." : "")),
          action: (
            <Button variant="outline" size="sm" onClick={() => {
              setIsSheetOpen(true); 
              // Mark as viewed immediately if they click the toast action
              markNotificationsAsViewed(Math.max(newOverallLatestTimestamp, globallyLatestFetchedTimestamp, Date.now()));
            }}>
              View
            </Button>
          ),
          variant: latestUnreadToasted.type === 'warning' ? 'destructive' : 'default',
        });
        localStorage.setItem(LOCAL_STORAGE_LAST_TOASTED_ANNOUNCEMENT_TIMESTAMP_KEY, newOverallLatestTimestamp.toString());
      } else if (latestUnreadToasted && isInitialCheck && newOverallLatestTimestamp > lastToastedTimestamp) {
        // If it's the initial check and there's a new announcement that hasn't been toasted,
        // update the last toasted timestamp to prevent an immediate toast on next poll
        localStorage.setItem(LOCAL_STORAGE_LAST_TOASTED_ANNOUNCEMENT_TIMESTAMP_KEY, newOverallLatestTimestamp.toString());
      }

    } catch (error) {
      console.error("Error checking for new announcements/badge:", error);
    }
  }, [toast, markNotificationsAsViewed, globallyLatestFetchedTimestamp]); // Added globallyLatestFetchedTimestamp to dependencies

  useEffect(() => {
    let isMounted = true;
    if (isSheetOpen) {
      fetchAnnouncementsForSheetContent().then(latestTimestampInSheet => {
        if (isMounted) {
          const effectiveViewedTimestamp = Math.max(latestTimestampInSheet, globallyLatestFetchedTimestamp, Date.now());
          markNotificationsAsViewed(effectiveViewedTimestamp);
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [isSheetOpen, fetchAnnouncementsForSheetContent, markNotificationsAsViewed, globallyLatestFetchedTimestamp]);

  useEffect(() => {
    if (!initialLoadDone.current) {
        checkNewAnnouncements(true);
        initialLoadDone.current = true;
    }

    const excludedPathsForPolling = ['/help-center', '/generate-access', '/auth/callback'];
    const shouldPoll = !excludedPathsForPolling.includes(pathname) && !showMaintenance;

    let pollInterval: NodeJS.Timeout | undefined;
    if (shouldPoll) {
      pollInterval = setInterval(() => checkNewAnnouncements(false), NOTIFICATIONS_POLL_INTERVAL_MS);
    }
    return () => {
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [pathname, showMaintenance, checkNewAnnouncements]);


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

    if (typeof window !== 'undefined') {
      const lastPromptTime = localStorage.getItem('lastFeedbackPromptTime');
      const now = Date.now();
      const intervalMs = FEEDBACK_PROMPT_INTERVAL_HOURS * 60 * 60 * 1000;
      const excludedPathsForPrompt = ['/help-center', '/generate-access', '/auth/callback'];
      
      if (!excludedPathsForPrompt.includes(pathname) && !showMaintenance) {
        if (!lastPromptTime || (now - parseInt(lastPromptTime, 10) > intervalMs)) {
          setShowFeedbackPrompt(true);
        }
      } else {
        setShowFeedbackPrompt(false);
      }
    }
    return () => document.removeEventListener('contextmenu', handleContextmenu);
  }, [pathname, showMaintenance]);

  const excludedPathsForFeedbackAndSupport = ['/help-center', '/generate-access', '/auth/callback'];
  const showFeedbackAndSupportSection = !excludedPathsForFeedbackAndSupport.includes(pathname) && !showMaintenance;
  const showNotificationBellTrigger = !excludedPathsForFeedbackAndSupport.includes(pathname) && !showMaintenance;

  const handlePromptDismiss = () => {
    setShowFeedbackPrompt(false);
    if (typeof window !== 'undefined') {
      localStorage.setItem('lastFeedbackPromptTime', Date.now().toString());
    }
  };

  const handleGoToFeedback = () => {
    handlePromptDismiss();
    feedbackSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (showMaintenance && maintenanceEndTime) {
    return <MaintenancePage maintenanceEndTime={maintenanceEndTime} />;
  }

  const NotificationBellIconToUse = unreadNotificationCount > 0 ? BellRing : Bell;

  return (
    <>
      {showNotificationBellTrigger && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed top-4 left-4 z-50 rounded-full bg-card/80 backdrop-blur-md shadow-lg hover:bg-muted/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              aria-label="View Notifications"
            >
              <NotificationBellIconToUse className="h-5 w-5 text-foreground" />
              {unreadNotificationCount > 0 && (
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold ring-2 ring-background">
                  {unreadNotificationCount > 9 ? '9+' : unreadNotificationCount}
                </span>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[360px] sm:w-[450px] p-0 flex flex-col bg-card shadow-xl border-l border-border">
            <SheetHeader className="p-6 pb-4 border-b border-border">
              <div className="flex justify-between items-center">
                <SheetTitle className="text-xl font-semibold text-foreground">Updates & Announcements</SheetTitle>
                <SheetClose asChild>
                  <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 text-muted-foreground hover:bg-muted">
                    <X className="h-5 w-5" />
                  </Button>
                </SheetClose>
              </div>
              <SheetDescription className="text-sm text-muted-foreground pt-1">
                Stay informed with the latest news from E-Leak.
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
                      className="animate-in fade-in-0 slide-in-from-top-5 duration-500"
                      style={{ animationDelay: `${index * 75}ms` }}
                    >
                      <NotificationItem announcement={announcement} />
                    </div>
                  ))
                }
              </div>
            </ScrollArea>
            <div className="p-4 border-t border-border">
              <SheetClose asChild>
                <Button variant="outline" className="w-full">Close</Button>
              </SheetClose>
            </div>
          </SheetContent>
        </Sheet>
      )}

      {children}

      {showFeedbackAndSupportSection && (
        <div ref={feedbackSectionRef} className="container mx-auto px-4 py-8 md:py-12">
          <Separator className="my-8 md:my-12" />
          <div className="flex flex-col items-center gap-10 md:gap-16">
            <FeedbackForm />
            <FeedbackList />
          </div>
          <div className="mt-16 mb-8 text-center">
            <p className="text-muted-foreground mb-2">Need Support?</p>
            <Link href="/help-center">
              <Button variant="outline" size="lg" className="rounded-lg">
                <Bot className="mr-2 h-5 w-5" />
                E-Leak 24/7 Support
              </Button>
            </Link>
          </div>
          <footer className="text-center text-sm text-muted-foreground pt-4 pb-6 animate-pulse-custom">
            <p>© E-Leak All rights reserved.</p>
          </footer>
        </div>
      )}

      <Toaster />

      {showFeedbackAndSupportSection && (
        <>
          <a href="https://e-leakzone.vercel.app" target="_blank" rel="noopener noreferrer" className="eleakzone-float" aria-label="E-Leak Zone">
            <img src="https://i.ibb.co/Z1vLWgVF/ZONE-removebg-preview.png" alt="E-Leak Zone Logo" />
          </a>
          <a href="https://t.me/eleakcoursehub" target="_blank" rel="noopener noreferrer" className="telegram-float" aria-label="Join Telegram">
            <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
          </a>
          <CookieConsentBanner />
        </>
      )}

      {showFeedbackPrompt && !showMaintenance && (
         <FeedbackPromptDialog
          open={showFeedbackPrompt}
          onOpenChange={(isOpen) => {
            if (!isOpen) handlePromptDismiss();
            else setShowFeedbackPrompt(true);
          }}
          onGoToFeedback={handleGoToFeedback}
          onDismiss={handlePromptDismiss}
        />
      )}
    </>
  );
}
