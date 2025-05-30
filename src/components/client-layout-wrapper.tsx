
'use client';

import React, { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
import { Toaster } from "@/components/ui/toaster";
import { Button } from '@/components/ui/button';
import { Bell } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetClose,
  SheetTrigger,
} from "@/components/ui/sheet";

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
  const [isNotificationsSheetOpen, setIsNotificationsSheetOpen] = useState(false);
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(0);

  useEffect(() => {
    const handleContextmenu = (e: MouseEvent) => {
      e.preventDefault();
    };
    document.addEventListener('contextmenu', handleContextmenu);
    
    fetchNotifications();

    return () => {
      document.removeEventListener('contextmenu', handleContextmenu);
    };
  }, []);

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
    setIsNotificationsSheetOpen(true);
    // Visually clear the badge for the current session when opened
    setUnreadNotificationCount(0); 
  };

  return (
    <>
      <div className="fixed top-6 left-6 z-50">
        <Sheet open={isNotificationsSheetOpen} onOpenChange={setIsNotificationsSheetOpen}>
          <SheetTrigger asChild>
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
          </SheetTrigger>
          <SheetContent side="right" className="w-full sm:w-[400px] p-0 flex flex-col">
            <SheetHeader className="p-6 pb-4 border-b">
              <SheetTitle className="text-xl font-semibold">Notifications</SheetTitle>
            </SheetHeader>
            <div className="flex-grow overflow-y-auto p-6 space-y-4">
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
            <SheetFooter className="p-4 border-t">
              <SheetClose asChild>
                <Button type="button" variant="outline" className="w-full">
                  Close
                </Button>
              </SheetClose>
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {children}
      <Toaster />
      {/* Telegram Floating Button */}
      <a href="https://t.me/DatabaseCourseNT" target="_blank" rel="noopener noreferrer" className="telegram-float" aria-label="Join Telegram">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
      </a>
    </>
  );
}
