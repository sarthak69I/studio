
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
import { Bot, Bell } from 'lucide-react'; // Added Bell

// --- Configuration Start ---
const MAINTENANCE_MODE_ENABLED = false;
const MAINTENANCE_END_TIME_HHMM: string | null = "10:00";
const FEEDBACK_PROMPT_INTERVAL_HOURS = 20;
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

    return () => {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, [pathname]);

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
        <div className="fixed top-4 right-20 z-50 sm:top-6 sm:right-24">
          <Link href="/notifications" passHref>
            <Button variant="outline" size="icon" className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-muted" aria-label="View Notifications">
              <Bell className="h-5 w-5" />
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
