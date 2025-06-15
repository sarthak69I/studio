
'use client';

import React, { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Import usePathname
import { Toaster } from "@/components/ui/toaster";
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
  DialogTrigger,
} from "@/components/ui/dialog";
import CookieConsentBanner from './cookie-consent-banner';
import MaintenancePage from './maintenance-page'; 

interface AppNotification {
  id: string;
  timestamp: string;
  title: string;
  message: string;
}

interface NotificationsData {
  badgeCount: number;
  items: AppNotification[];
}

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

export default function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [isNotificationsDialogOpen, setIsNotificationsDialogOpen] = useState(false);
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);
  const pathname = usePathname();
  
  const [effectiveMaintenanceEndTime, setEffectiveMaintenanceEndTime] = useState<Date | null>(null);
  const [showMaintenance, setShowMaintenance] = useState(false);

  useEffect(() => {
    const maintenanceMode = process.env.NEXT_PUBLIC_MAINTENANCE_MODE;
    
    if (maintenanceMode === 'yes') {
      const endTimeStr = process.env.NEXT_PUBLIC_MAINTENANCE_END_TIME_HHMM || "10:00";
      const parts = endTimeStr.split(':');
      let targetHour = 10;
      let targetMinute = 0;

      if (parts.length === 2) {
        const parsedHour = parseInt(parts[0], 10);
        const parsedMinute = parseInt(parts[1], 10);
        if (!isNaN(parsedHour) && parsedHour >= 0 && parsedHour <= 23 &&
            !isNaN(parsedMinute) && parsedMinute >= 0 && parsedMinute <= 59) {
          targetHour = parsedHour;
          targetMinute = parsedMinute;
        }
      }
      
      const now = new Date();
      const maintenanceEnd = new Date(now.getFullYear(), now.getMonth(), now.getDate(), targetHour, targetMinute, 0);
      setEffectiveMaintenanceEndTime(maintenanceEnd);

      if (now < maintenanceEnd) {
        setShowMaintenance(true);
      } else {
        setShowMaintenance(false);
        // Clear session-based completion flag if maintenance time has passed.
        localStorage.removeItem('maintenanceModeCompleted'); 
      }
    } else {
      setShowMaintenance(false);
      localStorage.removeItem('maintenanceModeCompleted');
    }

    // Interval to re-check if maintenance time has passed, only if maintenance mode is active.
    let intervalId: NodeJS.Timeout | undefined;
    if (maintenanceMode === 'yes') {
      intervalId = setInterval(() => {
        const currentTime = new Date();
        if (effectiveMaintenanceEndTime && currentTime >= effectiveMaintenanceEndTime) {
          setShowMaintenance(false);
          localStorage.removeItem('maintenanceModeCompleted');
          if (intervalId) clearInterval(intervalId); 
        }
      }, 60000); // Check every minute
    }
    
    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, [effectiveMaintenanceEndTime]); // Re-run if effectiveMaintenanceEndTime changes (though it's set once)


  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    
    if (!showMaintenance) {
      fetchNotifications();
    }

    return () => {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, [showMaintenance]);

  const fetchNotifications = async () => {
    try {
      const response = await fetch('/notifications.json');
      if (!response.ok) {
        console.error('Failed to fetch notifications:', response.status);
        setNotifications([]);
        setUnreadNotificationCount(0);
        return;
      }
      const data: NotificationsData = await response.json();
      
      if (data && Array.isArray(data.items)) {
        data.items.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
        setNotifications(data.items);
      } else {
        setNotifications([]);
      }

      if (data && typeof data.badgeCount === 'number') {
        setUnreadNotificationCount(data.badgeCount);
      } else {
        setUnreadNotificationCount(0);
      }

    } catch (error) {
      console.error('Error fetching notifications:', error);
      setNotifications([]);
      setUnreadNotificationCount(0);
    }
  };

  const handleOpenNotifications = () => {
    setIsNotificationsDialogOpen(true);
    setUnreadNotificationCount(0); 
  };

  const isSpecialPage = pathname === '/generate-access' || pathname === '/help-center';
  const showGlobalUIElements = !showMaintenance && !isSpecialPage;


  if (showMaintenance && !isSpecialPage) {
    return <MaintenancePage maintenanceEndTime={effectiveMaintenanceEndTime} />;
  }

  return (
    <>
      {showGlobalUIElements && (
        <div className="fixed top-6 left-6 z-50">
          <Dialog open={isNotificationsDialogOpen} onOpenChange={setIsNotificationsDialogOpen}>
            <DialogTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="View Notifications"
                className="p-2 rounded-full text-foreground bg-background/80 backdrop-blur-sm hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative animate-pulse-custom"
                onClick={handleOpenNotifications}
              >
                <Bell className="h-6 w-6" />
                {unreadNotificationCount > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-xs leading-none">
                    {unreadNotificationCount > 9 ? '9+' : unreadNotificationCount}
                  </span>
                )}
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md rounded-xl">
              <DialogHeader className="border-b pb-3">
                <DialogTitle className="text-xl font-semibold">Notifications</DialogTitle>
              </DialogHeader>
              <div className="max-h-[60vh] overflow-y-auto p-1 space-y-4 py-4">
                {notifications.length > 0 ? (
                  notifications.map(notif => (
                    <div 
                      key={notif.id} 
                      className="p-4 bg-muted/50 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow"
                    >
                      <p className="font-semibold text-foreground mb-1">{notif.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{notif.message}</p>
                      <p className="text-xs text-muted-foreground/70 mt-3 text-right">
                        {new Date(notif.timestamp).toLocaleDateString()} - {new Date(notif.timestamp).toLocaleTimeString()}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-muted-foreground py-10">No new notifications.</p>
                )}
              </div>
              <DialogFooter className="border-t pt-3">
                <DialogClose asChild>
                  <Button type="button" variant="outline" className="w-full">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
      )}

      {children}
      <Toaster />
      
      {showGlobalUIElements && (
        <a href="https://e-leakzone.vercel.app" target="_blank" rel="noopener noreferrer" className="eleakzone-float" aria-label="E-Leak Zone">
          <img src="https://i.ibb.co/Z1vLWgVF/ZONE-removebg-preview.png" alt="E-Leak Zone Logo" />
        </a>
      )}

      <a href="https://t.me/DatabaseCourseNT" target="_blank" rel="noopener noreferrer" className="telegram-float" aria-label="Join Telegram">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
      </a>
      {!showMaintenance && <CookieConsentBanner />}
    </>
  );
}
