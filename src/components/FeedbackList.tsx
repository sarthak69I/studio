
// src/components/FeedbackList.tsx
'use client';

import * as React from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, Timestamp, type DocumentData } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'; // Removed CardFooter if not used
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquareText, CalendarDays, UserCircle } from 'lucide-react'; // Removed ThumbsUp, ThumbsDown, Loader2
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';

interface FeedbackEntry {
  id: string;
  username: string;
  text: string;
  timestamp: Timestamp | null;
  // likes and dislikes removed
}

export default function FeedbackList() {
  const [feedbackEntries, setFeedbackEntries] = React.useState<FeedbackEntry[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { toast } = useToast();

  React.useEffect(() => {
    setIsLoading(true);
    const q = query(collection(db, 'feedback'), orderBy('timestamp', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const entries: FeedbackEntry[] = [];
      querySnapshot.forEach((docSnap: DocumentData) => {
        const data = docSnap.data();
        entries.push({
          id: docSnap.id,
          username: data.username || 'Anonymous',
          text: data.text,
          timestamp: data.timestamp as Timestamp | null,
          // likes and dislikes removed
        });
      });
      setFeedbackEntries(entries);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching feedback:", error);
      setIsLoading(false);
      toast({
        variant: 'destructive',
        title: 'Error Fetching Feedback',
        description: 'Could not load feedback entries. Please try again later.',
      });
    });

    return () => unsubscribe();
  }, [toast]);

  const formatDate = (timestamp: Timestamp | null) => {
    if (!timestamp) return 'Just now';
    return new Date(timestamp.seconds * 1000).toLocaleString(undefined, {
        month: 'short', day: 'numeric',
        hour: '2-digit', minute: '2-digit', hour12: true
    });
  };

  if (isLoading && feedbackEntries.length === 0) {
    return (
      <div className="w-full max-w-2xl mt-10">
        <h2 className="text-2xl font-semibold text-center mb-6 text-primary">Recent Feedback</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((n) => (
            <Card key={n} className="bg-card/80 backdrop-blur-sm shadow-lg border border-border/50">
              <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <Skeleton className="h-5 w-2/5" />
                    <Skeleton className="h-4 w-1/4" />
                </div>
              </CardHeader>
              <CardContent className="pt-2 pb-4">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
              </CardContent>
              {/* Footer with like/dislike skeletons removed */}
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
      {feedbackEntries.length === 0 && !isLoading ? (
        <p className="text-center text-muted-foreground py-10">No feedback submitted yet. Be the first!</p>
      ) : (
        <ScrollArea className="h-[500px] pr-4 -mr-4">
          <div className="space-y-4">
            {feedbackEntries.map((entry) => {
              return (
                <Card key={entry.id} className="bg-card/90 backdrop-blur-sm shadow-lg border-border/70 transition-all hover:shadow-xl hover:border-primary/30">
                  <CardHeader className="pb-2 pt-4">
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <div className="flex items-center">
                         <UserCircle className="mr-1.5 h-4 w-4 text-primary/70" />
                         <span className="font-medium text-foreground/90">{entry.username || 'Anonymous'}</span>
                      </div>
                      <div className="flex items-center">
                        <CalendarDays className="mr-1.5 h-4 w-4 text-primary/70" />
                        <span>{formatDate(entry.timestamp)}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-2 pb-4">
                    <p className="text-foreground leading-relaxed prose prose-sm max-w-none">{entry.text}</p>
                  </CardContent>
                  {/* CardFooter with like/dislike buttons removed. Can add other actions here later if needed. */}
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}
