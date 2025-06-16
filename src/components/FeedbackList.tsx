
// src/components/FeedbackList.tsx
'use client';

import * as React from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, Timestamp, type DocumentData } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquareText, CalendarDays, UserCircle } from 'lucide-react'; // Added UserCircle for anonymous
import { Skeleton } from '@/components/ui/skeleton';

interface FeedbackEntry {
  id: string;
  text: string;
  timestamp: Timestamp | null;
}

export default function FeedbackList() {
  const [feedbackEntries, setFeedbackEntries] = React.useState<FeedbackEntry[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, 'feedback'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const entries: FeedbackEntry[] = [];
      querySnapshot.forEach((doc: DocumentData) => {
        const data = doc.data();
        entries.push({
          id: doc.id,
          text: data.text,
          timestamp: data.timestamp as Timestamp | null, // Firestore serverTimestamp might be null initially
        });
      });
      setFeedbackEntries(entries);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching feedback:", error);
      setIsLoading(false);
      // Optionally, set an error state here to display to the user
    });

    return () => unsubscribe();
  }, []);

  const formatDate = (timestamp: Timestamp | null) => {
    if (!timestamp) return 'Just now';
    return new Date(timestamp.seconds * 1000).toLocaleString(undefined, {
        year: 'numeric', month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit'
    });
  };

  if (isLoading) {
    return (
      <div className="w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-semibold text-center mb-6 text-primary">Recent Feedback</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <Card key={n} className="bg-card/80 backdrop-blur-sm shadow-lg border border-border/50 animate-pulse">
              <CardHeader>
                <div className="flex items-center justify-between">
                    <Skeleton className="h-5 w-2/5" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
              </CardHeader>
              <CardContent>
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mt-12">
      <h2 className="text-2xl font-semibold text-center mb-8 text-primary">
        <MessageSquareText className="inline-block mr-2 h-7 w-7 align-text-bottom" />
        Recent Feedback
      </h2>
      {feedbackEntries.length === 0 ? (
        <p className="text-center text-muted-foreground">No feedback submitted yet. Be the first!</p>
      ) : (
        <ScrollArea className="h-[400px] pr-4 -mr-4"> {/* Added negative margin to offset scrollbar */}
          <div className="space-y-4">
            {feedbackEntries.map((entry) => (
              <Card key={entry.id} className="bg-card/90 backdrop-blur-sm shadow-lg border-border/70 transition-all hover:shadow-xl hover:border-primary/50">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center">
                       <UserCircle className="mr-1.5 h-4 w-4 text-primary/70" />
                       <span>Anonymous User</span>
                    </div>
                    <div className="flex items-center">
                      <CalendarDays className="mr-1.5 h-4 w-4 text-primary/70" />
                      <span>{formatDate(entry.timestamp)}</span>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground leading-relaxed">{entry.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}
