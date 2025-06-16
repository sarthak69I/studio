
// src/components/FeedbackList.tsx
'use client';

import * as React from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, Timestamp, type DocumentData, doc, runTransaction, increment } from 'firebase/firestore';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { MessageSquareText, CalendarDays, UserCircle, ThumbsUp, ThumbsDown, Loader2 } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

interface FeedbackEntry {
  id: string;
  username: string;
  text: string;
  timestamp: Timestamp | null;
  likes: number;
  dislikes: number;
}

type UserVote = 'like' | 'dislike' | null;
interface UserVotes {
  [feedbackId: string]: UserVote;
}

const FEEDBACK_VOTES_KEY = 'eleakFeedbackVotes_v1';

export default function FeedbackList() {
  const [feedbackEntries, setFeedbackEntries] = React.useState<FeedbackEntry[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [userVotes, setUserVotes] = React.useState<UserVotes>({});
  const [votingStates, setVotingStates] = React.useState<{[feedbackId: string]: {isVoting: boolean, voteType: 'like' | 'dislike' | null}} >({});
  const { toast } = useToast();

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedVotes = localStorage.getItem(FEEDBACK_VOTES_KEY);
      if (storedVotes) {
        try {
          setUserVotes(JSON.parse(storedVotes));
        } catch (e) {
          console.error("Failed to parse votes from localStorage", e);
          localStorage.removeItem(FEEDBACK_VOTES_KEY);
        }
      }
    }

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
          likes: data.likes || 0,
          dislikes: data.dislikes || 0,
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

  const handleVote = async (feedbackId: string, voteType: 'like' | 'dislike') => {
    if (votingStates[feedbackId]?.isVoting) return;

    setVotingStates(prev => ({...prev, [feedbackId]: {isVoting: true, voteType: voteType }}));

    const currentStoredVote = userVotes[feedbackId] || null;
    let newVoteState: UserVote = null;

    const feedbackDocRef = doc(db, 'feedback', feedbackId);

    try {
      await runTransaction(db, async (transaction) => {
        const feedbackDoc = await transaction.get(feedbackDocRef);
        if (!feedbackDoc.exists()) {
          throw new Error("Document does not exist!");
        }

        const currentLikes = feedbackDoc.data()?.likes || 0;
        const currentDislikes = feedbackDoc.data()?.dislikes || 0;
        const updates: { likes?: any; dislikes?: any } = {};

        if (currentStoredVote === voteType) { // User is un-voting
          newVoteState = null;
          if (voteType === 'like' && currentLikes > 0) updates.likes = increment(-1);
          else if (voteType === 'dislike' && currentDislikes > 0) updates.dislikes = increment(-1);
        } else { // New vote or changing vote
          newVoteState = voteType;
          if (voteType === 'like') {
            updates.likes = increment(1);
            if (currentStoredVote === 'dislike' && currentDislikes > 0) updates.dislikes = increment(-1);
          } else { // voteType is 'dislike'
            updates.dislikes = increment(1);
            if (currentStoredVote === 'like' && currentLikes > 0) updates.likes = increment(-1);
          }
        }
        if (Object.keys(updates).length > 0) {
          transaction.update(feedbackDocRef, updates);
        } else {
          // No actual change to Firestore if un-voting something already at 0 or no valid update.
          // This branch might be hit if trying to un-like a 0-like item.
        }
      });

      const updatedVotes = { ...userVotes, [feedbackId]: newVoteState };
      if (newVoteState === null) {
        delete updatedVotes[feedbackId];
      }
      setUserVotes(updatedVotes);
      if (typeof window !== 'undefined') {
        localStorage.setItem(FEEDBACK_VOTES_KEY, JSON.stringify(updatedVotes));
      }

    } catch (error) {
      console.error("Error processing vote:", error);
      toast({
        variant: 'destructive',
        title: 'Vote Failed',
        description: 'Could not process your vote. Please try again.',
      });
    } finally {
       setVotingStates(prev => ({...prev, [feedbackId]: {isVoting: false, voteType: null}}));
    }
  };

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
              <CardFooter className="pt-2 pb-3 flex justify-end gap-3">
                <Skeleton className="h-8 w-16 rounded-md" />
                <Skeleton className="h-8 w-16 rounded-md" />
              </CardFooter>
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
              const userVoteForThisItem = userVotes[entry.id];
              const currentVotingState = votingStates[entry.id] || {isVoting: false, voteType: null};

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
                  <CardFooter className="pt-2 pb-4 flex justify-end items-center gap-3 border-t border-border/50">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleVote(entry.id, 'like')}
                      disabled={currentVotingState.isVoting}
                      className={cn(
                        "text-muted-foreground hover:text-green-500",
                        userVoteForThisItem === 'like' && "text-green-500"
                      )}
                      aria-label={`Like feedback (currently ${entry.likes} likes)`}
                    >
                      {currentVotingState.isVoting && currentVotingState.voteType === 'like' ? <Loader2 className="h-4 w-4 animate-spin" /> : <ThumbsUp className={cn("h-5 w-5", userVoteForThisItem === 'like' && "fill-green-500")} />}
                      <span className="ml-1.5 text-xs tabular-nums">{entry.likes}</span>
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleVote(entry.id, 'dislike')}
                      disabled={currentVotingState.isVoting}
                      className={cn(
                        "text-muted-foreground hover:text-red-500",
                        userVoteForThisItem === 'dislike' && "text-red-500"
                      )}
                      aria-label={`Dislike feedback (currently ${entry.dislikes} dislikes)`}
                    >
                       {currentVotingState.isVoting && currentVotingState.voteType === 'dislike' ? <Loader2 className="h-4 w-4 animate-spin" /> : <ThumbsDown className={cn("h-5 w-5", userVoteForThisItem === 'dislike' && "fill-red-500")} />}
                      <span className="ml-1.5 text-xs tabular-nums">{entry.dislikes}</span>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        </ScrollArea>
      )}
    </div>
  );
}

