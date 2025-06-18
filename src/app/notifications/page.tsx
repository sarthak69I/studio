
// src/app/notifications/page.tsx
'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, BellRing, AlertCircle } from 'lucide-react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, Timestamp, type DocumentData } from 'firebase/firestore';
import NotificationItem from '@/components/NotificationItem';
import { Skeleton } from '@/components/ui/skeleton';

export interface Announcement {
  id: string;
  message: string;
  timestamp: Timestamp | null;
  link?: string;
  type?: 'info' | 'warning' | 'new_content' | string; // Allow custom types
}

const LAST_NOTIFICATIONS_VIEWED_KEY = 'eleakLastNotificationsViewedAt';

export default function NotificationsPage() {
  const router = useRouter();
  const [announcements, setAnnouncements] = React.useState<Announcement[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState<string | null>(null);

  React.useEffect(() => {
    document.title = "Notifications | E-Leak";

    const q = query(collection(db, 'global_announcements'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const fetchedAnnouncements: Announcement[] = [];
      let latestTimestamp = 0;
      querySnapshot.forEach((doc: DocumentData) => {
        const announcementData = { id: doc.id, ...doc.data() } as Announcement;
        fetchedAnnouncements.push(announcementData);
        if (announcementData.timestamp && announcementData.timestamp.toMillis() > latestTimestamp) {
          latestTimestamp = announcementData.timestamp.toMillis();
        }
      });
      setAnnouncements(fetchedAnnouncements);
      setIsLoading(false);
      setError(null);

      // Mark notifications as viewed by setting the timestamp of the latest one seen (or current time if none)
      if (typeof window !== 'undefined') {
        const viewTimestamp = latestTimestamp > 0 ? latestTimestamp : Date.now();
        localStorage.setItem(LAST_NOTIFICATIONS_VIEWED_KEY, viewTimestamp.toString());
        // Optionally, dispatch a custom event if client-layout-wrapper needs to react immediately
        // window.dispatchEvent(new CustomEvent('notificationsViewed'));
      }

    }, (err) => {
      console.error("Error fetching announcements:", err);
      setError("Could not load announcements. Please try again later.");
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
      <header className="flex items-center justify-between mb-8 w-full max-w-4xl mx-auto">
        <Button variant="outline" size="lg" onClick={() => router.back()} className="rounded-lg">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
        <Link href="/" passHref>
          <Button variant="outline" size="lg" className="rounded-lg">
            <HomeIcon className="mr-2 h-5 w-5" />
            Home
          </Button>
        </Link>
      </header>

      <main className="flex-grow flex flex-col items-center pt-8 md:pt-12 w-full max-w-2xl mx-auto">
        <div className="flex items-center text-3xl md:text-4xl font-bold text-primary mb-10">
          <BellRing className="mr-3 h-8 w-8 md:h-10 md:w-10" />
          Notifications & Announcements
        </div>

        {isLoading && (
          <div className="space-y-4 w-full">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 bg-card rounded-lg shadow-md border border-border">
                <Skeleton className="h-5 w-3/4 mb-2" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))}
          </div>
        )}

        {!isLoading && error && (
          <div className="w-full p-6 bg-destructive/10 border border-destructive text-destructive rounded-lg shadow-md flex items-center">
            <AlertCircle className="h-6 w-6 mr-3 flex-shrink-0" />
            <p>{error}</p>
          </div>
        )}

        {!isLoading && !error && announcements.length === 0 && (
          <div className="w-full p-6 bg-card rounded-lg shadow-md border border-border text-center">
            <p className="text-muted-foreground">No new announcements at the moment. Check back later!</p>
          </div>
        )}

        {!isLoading && !error && announcements.length > 0 && (
          <div className="space-y-4 w-full">
            {announcements.map(announcement => (
              <NotificationItem key={announcement.id} announcement={announcement} />
            ))}
          </div>
        )}
      </main>

      <footer className="text-center text-sm text-muted-foreground mt-12 py-4">
        <p>© E-Leak All rights reserved.</p>
      </footer>
    </div>
  );
}
