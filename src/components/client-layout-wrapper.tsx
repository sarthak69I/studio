
'use client';

import React, { useEffect, useState, type ReactNode } from 'react';
import Link from 'next/link';
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
} from "@/components/ui/dialog";

interface AppNotification {
  id: string;
  timestamp: string;
  title: string;
  message: string;
}

interface ClientLayoutWrapperProps {
  children: ReactNode;
}

export default function ClientLayoutWrapper({ children }: ClientLayoutWrapperProps) {
  const [notifications, setNotifications] = useState<AppNotification[]>([]);
  const [isNotificationsDialogOpen, setIsNotificationsDialogOpen] = useState(false);
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
        return;
      }
      const data: AppNotification[] = await response.json();
      data.sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
      setNotifications(data);
      updateUnreadCount(data);
    } catch (error) {
      console.error('Error fetching notifications:', error);
      setNotifications([]);
    }
  };

  const updateUnreadCount = (fetchedNotifications: AppNotification[]) => {
    const lastSeenTimestamp = localStorage.getItem('lastSeenNotificationTimestamp');
    if (fetchedNotifications.length > 0) {
      const newNotifications = fetchedNotifications.filter(notif => 
        !lastSeenTimestamp || new Date(notif.timestamp) > new Date(lastSeenTimestamp)
      );
      setUnreadNotificationCount(newNotifications.length);
    } else {
      setUnreadNotificationCount(0);
    }
  };

  const handleOpenNotifications = () => {
    setIsNotificationsDialogOpen(true);
    if (notifications.length > 0) {
      localStorage.setItem('lastSeenNotificationTimestamp', notifications[0].timestamp);
    }
    setUnreadNotificationCount(0); // Mark all as read when dialog is opened
  };

  return (
    <>
      <div className="fixed top-6 left-6 z-50">
        <Button
          variant="outline"
          size="icon"
          aria-label="View Notifications"
          className="p-2 rounded-full text-foreground bg-background/80 backdrop-blur-sm hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 relative"
          onClick={handleOpenNotifications}
        >
          <Bell className="h-6 w-6" />
          {unreadNotificationCount > 0 && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-xs leading-none">
              {unreadNotificationCount > 9 ? '9+' : unreadNotificationCount}
            </span>
          )}
        </Button>
      </div>

      <Dialog open={isNotificationsDialogOpen} onOpenChange={setIsNotificationsDialogOpen}>
        <DialogContent className="sm:max-w-md rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-xl">Notifications</DialogTitle>
          </DialogHeader>
          <div className="py-4 space-y-3 text-sm max-h-[60vh] overflow-y-auto">
            {notifications.length > 0 ? (
              notifications.map(notif => (
                <div key={notif.id} className="p-3 bg-muted/50 rounded-md border border-border">
                  <p className="font-semibold text-foreground">{notif.title}</p>
                  <p className="text-xs text-muted-foreground mt-1">{notif.message}</p>
                  <p className="text-xs text-muted-foreground/70 mt-2 text-right">
                    {new Date(notif.timestamp).toLocaleDateString()} - {new Date(notif.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center text-muted-foreground">No new notifications.</p>
            )}
          </div>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {children}
      <Toaster />
      {/* Telegram Floating Button */}
      <a href="https://t.me/DatabaseCourseNT" target="_blank" rel="noopener noreferrer" className="telegram-float" aria-label="Join Telegram">
        <img src="https://cdn-icons-png.flaticon.com/512/2111/2111646.png" alt="Telegram" />
      </a>
    </>
  );
}
