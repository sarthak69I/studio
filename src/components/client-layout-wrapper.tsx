
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
import { Bot, Bell, Loader2, AlertCircle } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs, Timestamp } from 'firebase/firestore';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
  SheetDescription,
  SheetTrigger,
} from "@/components/ui/sheet";
import NotificationItem from '@/components/NotificationItem';
import type { Announcement as AnnouncementType } from '@/components/NotificationItem';
import { useToast } from '@/hooks/use-toast';

// --- Configuration Start ---
const MAINTENANCE_MODE_ENABLED = false;
const MAINTENANCE_END_TIME_HHMM: string | null = "10:00";
const FEEDBACK_PROMPT_INTERVAL_HOURS = 20;
const LOCAL_STORAGE_LAST_SHEET_OPEN_TIMESTAMP_KEY = 'eleakLastNotificationsSheetOpenedAt_v1';
const LOCAL_STORAGE_LAST_TOASTED_ANNOUNCEMENT_TIMESTAMP_KEY = 'eleakLastToastedAnnouncementTimestamp_v1';
const NOTIFICATIONS_POLL_INTERVAL_MS = 60000; // 1 minute
const ANNOUNCEMENTS_FETCH_LIMIT = 20; // How many announcements to fetch for sheet and badge calculation
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

  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [announcements, setAnnouncements] = useState<AnnouncementType[]>([]);
  const [isLoadingAnnouncements, setIsLoadingAnnouncements] = useState(false);
  const [announcementsError, setAnnouncementsError] = useState<string | null>(null);
  const [showBellIconBasedOnScroll, setShowBellIconBasedOnScroll] = useState(true);
  const initialCheckDone = useRef(false);

  // Fetches announcements for display in the sheet
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
        const announcementItem: AnnouncementType = {
          id: doc.id,
          message: data.message || "No message content",
          timestamp: data.timestamp instanceof Timestamp ? data.timestamp : null,
          link: data.link,
          type: data.type,
        };
        fetchedAnnouncements.push(announcementItem);
        if (announcementItem.timestamp instanceof Timestamp) {
          latestTimestampInFetchedBatch = Math.max(latestTimestampInFetchedBatch, announcementItem.timestamp.toMillis());
        }
      });
      setAnnouncements(fetchedAnnouncements);
    } catch (error) {
      console.error("Error fetching announcements for sheet:", error);
      setAnnouncementsError("Could not load announcements. Please check your internet connection.");
    } finally {
      setIsLoadingAnnouncements(false);
    }
    return latestTimestampInFetchedBatch;
  }, [setIsLoadingAnnouncements, setAnnouncementsError, setAnnouncements]);

  // Polls for new announcements, updates badge count, and triggers toasts for new items
  const checkNewAnnouncementsAndBadge = useCallback(async (isInitial: boolean = false) => {
    try {
      // 1. Handle Toasts for genuinely new announcements
      const latestAnnQuery = query(collection(db, 'global_announcements'), orderBy('timestamp', 'desc'), limit(1));
      const latestAnnSnapshot = await getDocs(latestAnnQuery);
      let newLatestOverallTimestamp = 0;

      if (!latestAnnSnapshot.empty) {
        const latestDoc = latestAnnSnapshot.docs[0];
        const latestData = latestDoc.data();
        if (latestData.timestamp instanceof Timestamp) {
          newLatestOverallTimestamp = latestData.timestamp.toMillis();
          const lastToastedTimestamp = parseInt(localStorage.getItem(LOCAL_STORAGE_LAST_TOASTED_ANNOUNCEMENT_TIMESTAMP_KEY) || '0', 10);

          if (newLatestOverallTimestamp > lastToastedTimestamp && !isInitial) { // Don't toast on initial load
            toast({
              title: latestData.type === 'warning' ? "Important Update" : "New Announcement!",
              description: (latestData.message || "Check out the latest updates.").substring(0, 70) + ((latestData.message || "").length > 70 ? "..." : ""),
              action: (
                <Button variant="outline" size="sm" onClick={() => setIsSheetOpen(true)}>
                  View
                </Button>
              ),
              variant: latestData.type === 'warning' ? 'destructive' : 'default',
            });
            localStorage.setItem(LOCAL_STORAGE_LAST_TOASTED_ANNOUNCEMENT_TIMESTAMP_KEY, newLatestOverallTimestamp.toString());
          } else if (isInitial) {
            // On initial load, if there's a new announcement, set the last toasted timestamp
            // to avoid toasting it immediately if it's already seen on a previous session.
             const storedLastToasted = parseInt(localStorage.getItem(LOCAL_STORAGE_LAST_TOASTED_ANNOUNCEMENT_TIMESTAMP_KEY) || '0', 10);
             if (newLatestOverallTimestamp > storedLastToasted) {
                // If it's truly newer than anything toasted before, update, but don't toast yet.
                // This line is to sync up the "last toasted" if the user cleared localStorage or something.
                // The toast logic above (with !isInitial) will handle subsequent new items.
             }
          }
        }
      }

      // 2. Update Badge Count
      // Fetch recent announcements to calculate unread count for the badge
      const recentAnnouncementsQuery = query(collection(db, 'global_announcements'), orderBy('timestamp', 'desc'), limit(ANNOUNCEMENTS_FETCH_LIMIT));
      const recentAnnouncementsSnapshot = await getDocs(recentAnnouncementsQuery);
      let unreadCount = 0;
      const lastSheetOpenTimestamp = parseInt(localStorage.getItem(LOCAL_STORAGE_LAST_SHEET_OPEN_TIMESTAMP_KEY) || '0', 10);

      recentAnnouncementsSnapshot.forEach(doc => {
        const data = doc.data();
        if (data.timestamp instanceof Timestamp) {
          if (data.timestamp.toMillis() > lastSheetOpenTimestamp) {
            unreadCount++;
          }
        }
      });
      setUnreadNotificationCount(unreadCount);

    } catch (error) {
      console.error("Error checking for new announcements/badge:", error);
      // Don't show a toast for this error, as it's a background check
    }
    if (isInitial) {
        initialCheckDone.current = true;
    }
  }, [toast, setUnreadNotificationCount, setIsSheetOpen]);


  // Effect for handling sheet opening and marking notifications as viewed
  useEffect(() => {
    let isMounted = true;
    if (isSheetOpen) {
      fetchAnnouncementsForSheetContent().then(latestTimestampInSheet => {
        if (isMounted && latestTimestampInSheet > 0) {
          localStorage.setItem(LOCAL_STORAGE_LAST_SHEET_OPEN_TIMESTAMP_KEY, latestTimestampInSheet.toString());
        } else if (isMounted && latestTimestampInSheet === 0 && announcements.length === 0) {
          // If sheet is opened and there are no announcements, still update the viewed time to now
          // so any future announcement becomes "new" for the badge.
          localStorage.setItem(LOCAL_STORAGE_LAST_SHEET_OPEN_TIMESTAMP_KEY, Date.now().toString());
        }
        if (isMounted) {
          setUnreadNotificationCount(0); // Clear badge count once sheet is opened
        }
      });
    }
    return () => {
      isMounted = false;
    };
  }, [isSheetOpen, fetchAnnouncementsForSheetContent, announcements.length, setUnreadNotificationCount]);


  // Effect for initial check and polling
  useEffect(() => {
    if (!initialCheckDone.current) {
      checkNewAnnouncementsAndBadge(true);
    }

    const excludedPathsForPolling = ['/help-center', '/generate-access', '/auth/callback'];
    const shouldPoll = !excludedPathsForPolling.includes(pathname) && !showMaintenance;

    let pollInterval: NodeJS.Timeout | undefined;
    if (shouldPoll) {
      pollInterval = setInterval(() => checkNewAnnouncementsAndBadge(false), NOTIFICATIONS_POLL_INTERVAL_MS);
    }

    return () => {
      if (pollInterval) clearInterval(pollInterval);
    };
  }, [pathname, showMaintenance, checkNewAnnouncementsAndBadge]);


  useEffect(() => {
    if (MAINTENANCE_MODE_ENABLED && MAINTENANCE_END_TIME_HHMM) {
      const [hours, minutes] = MAINTENANCE_END_TIME_HHMM.split(':').map(Number);
      const today = new Date();
      const endTime = new Date(today.getFullYear(), today.getMonth(), today.getDate(), hours, minutes, 0);
      setMaintenanceEndTime(endTime);
      if (new Date() < endTime) {
        setShowMaintenance(true);
      } else {
        setShowMaintenance(false);
      }
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


  const excludedPathsForFeedbackAndSupport = ['/help-center', '/generate-access', '/auth/callback'];
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
              {unreadNotificationCount > 0 && (
                <span className="absolute top-0 right-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-white text-xs font-bold transform -translate-y-1/2 translate-x-1/2 ring-2 ring-background">
                  {unreadNotificationCount > 9 ? '9+' : unreadNotificationCount}
                </span>
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
    
