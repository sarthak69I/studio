
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
import { Bot, Bell, Loader2, AlertCircle } from 'lucide-react'; // Added Loader2, AlertCircle
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs, Timestamp, onSnapshot } from 'firebase/firestore'; // Added onSnapshot
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetDescription, // Added
} from "@/components/ui/sheet";
import NotificationItem from '@/components/NotificationItem'; // Will be used in the Sheet
import type { Announcement } from '@/components/NotificationItem'; // Assuming type is moved or defined in NotificationItem
import { useToast } from '@/hooks/use-toast'; // For automatic toasts

// --- Configuration Start ---
const MAINTENANCE_MODE_ENABLED = false;
const MAINTENANCE_END_TIME_HHMM: string | null = "10:00";
const FEEDBACK_PROMPT_INTERVAL_HOURS = 20;
const LAST_NOTIFICATIONS_VIEWED_KEY = 'eleakLastNotificationsViewedAt_v2'; // Version up for new logic
const NOTIFICATIONS_POLL_INTERVAL_MS = 60000; // Check for new notifications every 60 seconds
// --- Configuration End ---

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

  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [isLoadingAnnouncements, setIsLoadingAnnouncements] = useState(false);
  const [announcementsError, setAnnouncementsError] = useState<string | null>(null);
  const [showBellIconBasedOnScroll, setShowBellIconBasedOnScroll] = useState(true);
  const [latestFetchedTimestamp, setLatestFetchedTimestamp] = useState<number>(0);
  const initialCheckDone = useRef(false);


  const markNotificationsAsViewed = useCallback(() => {
    if (typeof window !== 'undefined') {
      const currentLatestTime = announcements.length > 0 && announcements[0].timestamp
        ? announcements[0].timestamp.toMillis()
        : latestFetchedTimestamp > 0 ? latestFetchedTimestamp : Date.now();

      localStorage.setItem(LAST_NOTIFICATIONS_VIEWED_KEY, currentLatestTime.toString());
      setHasUnreadNotifications(false);
    }
  }, [announcements, latestFetchedTimestamp]);

  // Fetch announcements for the Sheet
  const fetchAnnouncementsForSheet = useCallback(async () => {
    setIsLoadingAnnouncements(true);
    setAnnouncementsError(null);
    try {
      const q = query(collection(db, 'global_announcements'), orderBy('timestamp', 'desc'), limit(20));
      const querySnapshot = await getDocs(q);
      const fetchedAnnouncements: Announcement[] = [];
      querySnapshot.forEach((doc) => {
        fetchedAnnouncements.push({ id: doc.id, ...doc.data() } as Announcement);
      });
      setAnnouncements(fetchedAnnouncements);
      if (fetchedAnnouncements.length > 0 && fetchedAnnouncements[0].timestamp) {
        setLatestFetchedTimestamp(fetchedAnnouncements[0].timestamp.toMillis());
      }
    } catch (error) {
      console.error("Error fetching announcements for sheet:", error);
      setAnnouncementsError("Could not load announcements.");
    } finally {
      setIsLoadingAnnouncements(false);
    }
  }, []);


  // Effect for initial notification check and polling
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const checkNewAnnouncements = async (isInitialCheck = false) => {
      try {
        const q = query(collection(db, 'global_announcements'), orderBy('timestamp', 'desc'), limit(1));
        const querySnapshot = await getDocs(q);

        if (!querySnapshot.empty) {
          const latestAnnouncementDoc = querySnapshot.docs[0];
          const latestAnnouncement = latestAnnouncementDoc.data() as Omit<Announcement, 'id'>;
          const newLatestTimestamp = (latestAnnouncement.timestamp as Timestamp)?.toMillis();

          if (newLatestTimestamp) {
            setLatestFetchedTimestamp(prev => Math.max(prev, newLatestTimestamp)); // Keep track of the absolute latest
            const lastViewedTimestamp = parseInt(localStorage.getItem(LAST_NOTIFICATIONS_VIEWED_KEY) || '0', 10);

            if (newLatestTimestamp > lastViewedTimestamp) {
              setHasUnreadNotifications(true);
              if (!isInitialCheck && !isSheetOpen) { // Only toast if not initial check and sheet isn't open
                toast({
                  title: "New Announcement!",
                  description: latestAnnouncement.message.substring(0, 70) + (latestAnnouncement.message.length > 70 ? "..." : ""),
                  action: (
                    <Button variant="outline" size="sm" onClick={() => setIsSheetOpen(true)}>
                      View
                    </Button>
                  ),
                });
              }
            } else {
              setHasUnreadNotifications(false);
            }
          }
        } else {
          setHasUnreadNotifications(false);
        }
      } catch (error) {
        console.error("Error checking for new announcements:", error);
      }
      if (isInitialCheck) {
        initialCheckDone.current = true;
      }
    };

    // Perform initial check
    if (!initialCheckDone.current) {
       checkNewAnnouncements(true);
    }
    
    // Set up polling if not on excluded paths
    const excludedPathsForPolling = ['/help-center', '/generate-access', '/auth/callback'];
    const shouldPoll = !excludedPathsForPolling.includes(pathname) && !showMaintenance;

    let pollInterval: NodeJS.Timeout | undefined;
    if (shouldPoll) {
      pollInterval = setInterval(() => checkNewAnnouncements(false), NOTIFICATIONS_POLL_INTERVAL_MS);
    }

    return () => {
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [pathname, showMaintenance, toast, isSheetOpen]);


  useEffect(() => {
    if (isSheetOpen) {
      fetchAnnouncementsForSheet();
      markNotificationsAsViewed();
    }
  }, [isSheetOpen, fetchAnnouncementsForSheet, markNotificationsAsViewed]);


  // Maintenance and Feedback Prompt Logic (mostly unchanged)
  useEffect(() => {
    if (MAINTENANCE_MODE_ENABLED) {
      // ... (maintenance logic as before)
    } else {
      setShowMaintenance(false);
    }

    const handleContextmenu = (e: MouseEvent) => e.preventDefault();
    document.addEventListener('contextmenu', handleContextmenu);
    
    if (typeof window !== 'undefined') {
      const lastPromptTime = localStorage.getItem('lastFeedbackPromptTime');
      const now = Date.now();
      const intervalMs = FEEDBACK_PROMPT_INTERVAL_HOURS * 60 * 60 * 1000;
      const excludedPathsForPrompt = ['/help-center', '/generate-access', '/auth/callback', '/public-chat']; // Removed /notifications
      if (!excludedPathsForPrompt.includes(pathname)) {
        if (!lastPromptTime || (now - parseInt(lastPromptTime, 10) > intervalMs)) {
          setShowFeedbackPrompt(true);
        }
      } else {
        setShowFeedbackPrompt(false); 
      }
    }
    
    return () => document.removeEventListener('contextmenu', handleContextmenu);
  }, [pathname, showMaintenance]);

  // Scroll listener for bell icon visibility
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowBellIconBasedOnScroll(false);
      } else {
        setShowBellIconBasedOnScroll(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const excludedPathsForFeedbackAndSupport = ['/help-center', '/generate-access', '/auth/callback', '/public-chat'];
  const showFeedbackAndSupportSection = !excludedPathsForFeedbackAndSupport.includes(pathname) && !showMaintenance;
  
  const showGlobalUIElements = !pathname.startsWith('/auth/callback') && !pathname.startsWith('/generate-access') && !showMaintenance;
  const showNotificationBellTrigger = !['/help-center', '/generate-access', '/auth/callback'].includes(pathname) && !showMaintenance && showBellIconBasedOnScroll;

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

  return (
    <>
      {showNotificationBellTrigger && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="fixed top-4 left-4 z-50 rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted"
              aria-label="View Notifications"
            >
              <Bell className="h-5 w-5" />
              {hasUnreadNotifications && (
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 transform -translate-y-1/2 translate-x-1/2 rounded-full bg-red-500 ring-2 ring-background" />
              )}
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 flex flex-col">
            <SheetHeader className="p-4 border-b">
              <SheetTitle className="text-lg">Notifications</SheetTitle>
              <SheetDescription className="text-xs">
                Recent announcements and updates.
              </SheetDescription>
            </SheetHeader>
            <div className="flex-grow overflow-y-auto p-4 space-y-3">
              {isLoadingAnnouncements && (
                <div className="flex justify-center items-center h-full">
                  <Loader2 className="h-8 w-8 animate-spin text-primary" />
                </div>
              )}
              {!isLoadingAnnouncements && announcementsError && (
                <div className="p-4 bg-destructive/10 border border-destructive text-destructive rounded-lg flex items-center text-sm">
                  <AlertCircle className="h-5 w-5 mr-2 flex-shrink-0" />
                  <p>{announcementsError}</p>
                </div>
              )}
              {!isLoadingAnnouncements && !announcementsError && announcements.length === 0 && (
                <p className="text-muted-foreground text-sm text-center py-10">No new announcements.</p>
              )}
              {!isLoadingAnnouncements && !announcementsError && announcements.length > 0 &&
                announcements.map(announcement => (
                  <NotificationItem key={announcement.id} announcement={announcement} />
                ))
              }
            </div>
            <div className="p-4 border-t">
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
      
      {showGlobalUIElements && (
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
