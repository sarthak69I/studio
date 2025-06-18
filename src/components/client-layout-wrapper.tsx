
'use client';

import React, { useEffect, useState, useRef, type ReactNode } from 'react';
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
import { Bot, Bell } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, limit, getDocs, Timestamp } from 'firebase/firestore';

// --- Configuration Start ---
const MAINTENANCE_MODE_ENABLED = false;
const MAINTENANCE_END_TIME_HHMM: string | null = "10:00";
const FEEDBACK_PROMPT_INTERVAL_HOURS = 20;
const LAST_NOTIFICATIONS_VIEWED_KEY = 'eleakLastNotificationsViewedAt';
// --- Configuration End ---

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

export default function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const pathname = usePathname();
  const [showMaintenance, setShowMaintenance] = useState(false);
  const [maintenanceEndTime, setMaintenanceEndTime] = useState<Date | null>(null);
  const feedbackSectionRef = useRef<HTMLDivElement>(null);
  const [showFeedbackPrompt, setShowFeedbackPrompt] = useState(false);
  const [hasUnreadNotifications, setHasUnreadNotifications] = useState(false);

  useEffect(() => {
    if (MAINTENANCE_MODE_ENABLED) {
      if (MAINTENANCE_END_TIME_HHMM && /^\d{2}:\d{2}$/.test(MAINTENANCE_END_TIME_HHMM)) {
        const [hours, minutes] = MAINTENANCE_END_TIME_HHMM.split(':').map(Number);
        const now = new Date();
        const MaintEndTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes, 0, 0);
        
        setMaintenanceEndTime(MaintEndTime);
        if (now < MaintEndTime) {
          setShowMaintenance(true);
        } else {
          setShowMaintenance(false);
        }
      } else {
        setShowMaintenance(false);
        setMaintenanceEndTime(null); 
      }
    } else {
      setShowMaintenance(false);
    }

    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    
    if (typeof window !== 'undefined') {
      const lastPromptTime = localStorage.getItem('lastFeedbackPromptTime');
      const now = Date.now();
      const intervalMs = FEEDBACK_PROMPT_INTERVAL_HOURS * 60 * 60 * 1000;

      const excludedPathsForPrompt = ['/help-center', '/generate-access', '/auth/callback', '/public-chat', '/notifications'];
      if (!excludedPathsForPrompt.includes(pathname)) {
        if (!lastPromptTime || (now - parseInt(lastPromptTime, 10) > intervalMs)) {
          setShowFeedbackPrompt(true);
        }
      } else {
        setShowFeedbackPrompt(false); 
      }
    }

    // Check for unread notifications
    const checkUnreadNotifications = async () => {
      try {
        const q = query(collection(db, 'global_announcements'), orderBy('timestamp', 'desc'), limit(1));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const latestAnnouncement = querySnapshot.docs[0].data();
          const latestTimestamp = (latestAnnouncement.timestamp as Timestamp)?.toMillis();
          if (latestTimestamp) {
            const lastViewedTimestamp = parseInt(localStorage.getItem(LAST_NOTIFICATIONS_VIEWED_KEY) || '0', 10);
            if (latestTimestamp > lastViewedTimestamp) {
              setHasUnreadNotifications(true);
            } else {
              setHasUnreadNotifications(false);
            }
          }
        } else {
          setHasUnreadNotifications(false); // No announcements, so no unread
        }
      } catch (error) {
        console.error("Error checking unread notifications:", error);
        setHasUnreadNotifications(false);
      }
    };

    // Only check notifications if not on excluded pages
    const showNotificationBellForPath = !['/help-center', '/generate-access', '/auth/callback', '/notifications'].includes(pathname) && !showMaintenance;
    if (showNotificationBellForPath) {
      checkUnreadNotifications();
    } else {
      setHasUnreadNotifications(false); // Ensure badge is hidden on excluded pages
    }
    

    return () => {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, [pathname, showMaintenance]); // Rerun on pathname change to update badge status

  const excludedPathsForFeedbackAndSupport = ['/help-center', '/generate-access', '/auth/callback', '/public-chat', '/notifications'];
  const showFeedbackAndSupportSection = !excludedPathsForFeedbackAndSupport.includes(pathname) && !showMaintenance;
  
  const showGlobalUIElements = !pathname.startsWith('/auth/callback') && !pathname.startsWith('/generate-access') && !showMaintenance;
  const showNotificationBell = !['/help-center', '/generate-access', '/auth/callback', '/notifications'].includes(pathname) && !showMaintenance;


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
      {showNotificationBell && (
        <div className="fixed top-4 left-4 z-50 sm:top-6 sm:left-6">
          <Link href="/notifications" passHref className="relative">
            <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted" aria-label="View Notifications">
              <Bell className="h-5 w-5" />
              {hasUnreadNotifications && (
                <span className="absolute top-0 right-0 block h-2.5 w-2.5 transform -translate-y-1/2 translate-x-1/2 rounded-full bg-red-500 ring-2 ring-background" />
              )}
            </Button>
          </Link>
        </div>
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
