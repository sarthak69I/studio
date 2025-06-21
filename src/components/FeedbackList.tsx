
// src/components/FeedbackList.tsx
'use client';

import * as React from 'react';
import { db } from '@/lib/firebase';
import { collection, query, orderBy, onSnapshot, Timestamp, type DocumentData, addDoc, serverTimestamp, doc } from 'firebase/firestore';
import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageSquareText, CalendarDays, UserCircle, MessageSquareReply, Send, CornerDownRight, User, Eye, EyeOff, Star, KeyRound, AlertCircle } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { useToast } from '@/hooks/use-toast';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import RatingStars from '@/components/ui/rating-stars';
import { cn } from '@/lib/utils';

interface FeedbackEntry {
  id: string;
  username: string;
  text: string;
  timestamp: Timestamp | null;
  rating?: number; // Optional rating
}

interface ReplyEntry {
  id: string;
  username: string;
  text: string;
  timestamp: Timestamp | null;
}

export default function FeedbackList() {
  const [feedbackEntries, setFeedbackEntries] = React.useState<FeedbackEntry[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const { toast } = useToast();

  const [feedbackReplies, setFeedbackReplies] = React.useState<{ [feedbackId: string]: ReplyEntry[] }>({});
  const [isLoadingReplies, setIsLoadingReplies] = React.useState<{ [feedbackId: string]: boolean }>({});
  const [expandedReplies, setExpandedReplies] = React.useState<{ [feedbackId: string]: boolean }>({});


  const [replyingToFeedbackId, setReplyingToFeedbackId] = React.useState<string | null>(null);
  const [currentReplyText, setCurrentReplyText] = React.useState<string>('');

  const [isReplyUsernameDialogOpen, setIsReplyUsernameDialogOpen] = React.useState(false);
  const [pendingReplyData, setPendingReplyData] = React.useState<{ feedbackId: string; text: string } | null>(null);
  const [replyUsername, setReplyUsername] = React.useState('');
  const [replyPasswordInput, setReplyPasswordInput] = React.useState('');
  const [replyPasswordError, setReplyPasswordError] = React.useState<string | null>(null);
  const [isSubmittingReply, setIsSubmittingReply] = React.useState(false);


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
          rating: data.rating, // Add rating here
        });
        if (!feedbackReplies[docSnap.id] && !isLoadingReplies[docSnap.id]) {
          fetchReplies(docSnap.id);
        }
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
  }, [toast]); // Removed feedbackReplies and isLoadingReplies from dependencies to avoid re-fetching on reply load

  const fetchReplies = (feedbackId: string) => {
    setIsLoadingReplies(prev => ({ ...prev, [feedbackId]: true }));
    const repliesQuery = query(collection(db, 'feedback', feedbackId, 'replies'), orderBy('timestamp', 'asc'));
    const unsubscribeReplies = onSnapshot(repliesQuery, (snapshot) => {
      const replies: ReplyEntry[] = [];
      snapshot.forEach((docSnap) => {
        const data = docSnap.data();
        replies.push({
          id: docSnap.id,
          username: data.username || 'Anonymous',
          text: data.text,
          timestamp: data.timestamp as Timestamp | null,
        });
      });
      setFeedbackReplies(prev => ({ ...prev, [feedbackId]: replies }));
      setIsLoadingReplies(prev => ({ ...prev, [feedbackId]: false }));
    }, (error) => {
      console.error(`Error fetching replies for feedback ${feedbackId}:`, error);
      toast({
        variant: 'destructive',
        title: 'Error Fetching Replies',
        description: `Could not load replies for a feedback item.`,
      });
      setIsLoadingReplies(prev => ({ ...prev, [feedbackId]: false }));
    });
  };

  const handleToggleReplyForm = (feedbackId: string) => {
    if (replyingToFeedbackId === feedbackId) {
      setReplyingToFeedbackId(null);
      setCurrentReplyText('');
    } else {
      setReplyingToFeedbackId(feedbackId);
      setCurrentReplyText('');
    }
  };

  const handleReplyTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setCurrentReplyText(e.target.value);
  };

  const handleInitiateReplySubmit = () => {
    if (!replyingToFeedbackId || currentReplyText.trim().length < 5 || currentReplyText.trim().length > 500) {
      toast({
        variant: 'destructive',
        title: 'Invalid Reply',
        description: 'Reply must be between 5 and 500 characters.',
      });
      return;
    }
    setPendingReplyData({ feedbackId: replyingToFeedbackId, text: currentReplyText });
    setIsReplyUsernameDialogOpen(true);
  };

  const handleFinalReplySubmit = async () => {
    if (!pendingReplyData) return;

    if (replyUsername.trim().toLowerCase() === 'admin') {
      if (replyPasswordInput !== 'admin123') {
        setReplyPasswordError('Incorrect admin password.');
        return;
      }
    }
    
    setIsSubmittingReply(true);
    setReplyPasswordError(null);
    try {
      const { feedbackId, text } = pendingReplyData;
      await addDoc(collection(db, 'feedback', feedbackId, 'replies'), {
        username: replyUsername.trim() || 'Anonymous',
        text: text,
        timestamp: serverTimestamp(),
      });
      toast({
        title: 'Reply Submitted!',
        description: 'Your reply has been posted.',
      });
      setCurrentReplyText('');
      setReplyingToFeedbackId(null);
      setReplyUsername('');
      setReplyPasswordInput('');
      setPendingReplyData(null);
      setIsReplyUsernameDialogOpen(false);
      setExpandedReplies(prev => ({ ...prev, [feedbackId]: true })); 
      fetchReplies(feedbackId);
    } catch (error) {
      console.error('Error submitting reply:', error);
      toast({
        variant: 'destructive',
        title: 'Reply Failed',
        description: 'Could not submit your reply. Please try again.',
      });
    } finally {
      setIsSubmittingReply(false);
    }
  };

  const toggleRepliesVisibility = (feedbackId: string) => {
    setExpandedReplies(prev => ({ ...prev, [feedbackId]: !prev[feedbackId] }));
    if (!feedbackReplies[feedbackId] && !isLoadingReplies[feedbackId] && !expandedReplies[feedbackId]) {
        fetchReplies(feedbackId); // Fetch if not already fetched and not loading, and about to expand
    }
  };

  const handleReplyDialogClose = () => {
    if (!isSubmittingReply) {
      setPendingReplyData(null);
      setReplyUsername('');
      setReplyPasswordInput('');
      setReplyPasswordError(null);
    }
    setIsReplyUsernameDialogOpen(false);
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
                 <Skeleton className="h-5 w-1/3 mt-1" />
              </CardHeader>
              <CardContent className="pt-2 pb-4">
                <Skeleton className="h-4 w-full mb-2" />
                <Skeleton className="h-4 w-3/4 mb-4" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="w-full max-w-2xl mt-12">
        <h2 className="text-2xl font-semibold text-center mb-8 text-primary">
          <MessageSquareText className="inline-block mr-2 h-7 w-7 align-text-bottom" />
          Recent Feedback
        </h2>
        {feedbackEntries.length === 0 && !isLoading ? (
          <p className="text-center text-muted-foreground py-10">No feedback submitted yet. Be the first!</p>
        ) : (
          <ScrollArea className="h-[600px] pr-4 -mr-4 opacity-100">
            <div className="space-y-4">
              {feedbackEntries.map((entry) => (
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
                    {entry.rating && entry.rating > 0 && (
                      <div className="mt-1.5">
                        <RatingStars currentRating={entry.rating} maxRating={5} size="sm" />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="pt-2 pb-3">
                    <p className="text-foreground leading-relaxed prose prose-sm max-w-none">{entry.text}</p>
                  </CardContent>
                  <CardFooter className="pt-1 pb-3 px-6 flex flex-col items-start">
                    <div className="w-full flex justify-between items-center mb-2">
                        {isLoadingReplies[entry.id] && <Skeleton className="h-6 w-24" /> }
                        {!isLoadingReplies[entry.id] && feedbackReplies[entry.id] && feedbackReplies[entry.id].length > 0 && (
                             <Button
                                variant="outline"
                                size="sm"
                                onClick={() => toggleRepliesVisibility(entry.id)}
                                className="text-xs px-2 py-1 h-auto"
                            >
                                {expandedReplies[entry.id] ? <EyeOff className="mr-1.5 h-3.5 w-3.5" /> : <Eye className="mr-1.5 h-3.5 w-3.5" />}
                                {expandedReplies[entry.id] ? 'Hide Replies' : `View ${feedbackReplies[entry.id].length} Repl${feedbackReplies[entry.id].length === 1 ? 'y' : 'ies'}`}
                            </Button>
                        )}
                        {!isLoadingReplies[entry.id] && (!feedbackReplies[entry.id] || feedbackReplies[entry.id].length === 0) && (
                            <div></div>
                        )}
                       <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleToggleReplyForm(entry.id)}
                        className="text-xs text-primary hover:text-primary/80 px-2 py-1 h-auto"
                      >
                        <MessageSquareReply className="mr-1.5 h-3.5 w-3.5" />
                        {replyingToFeedbackId === entry.id ? 'Cancel' : 'Reply'}
                      </Button>
                    </div>
                    
                    {replyingToFeedbackId === entry.id && (
                      <div className="w-full mt-1 space-y-2 animate-fadeIn-custom">
                        <Textarea
                          placeholder="Write your reply... (5-500 characters)"
                          value={currentReplyText}
                          onChange={handleReplyTextChange}
                          className="min-h-[80px] text-sm bg-background/70"
                          maxLength={500}
                        />
                        <Button
                          size="sm"
                          onClick={handleInitiateReplySubmit}
                          disabled={currentReplyText.trim().length < 5 || currentReplyText.trim().length > 500 || isSubmittingReply}
                          className="text-xs"
                        >
                          <Send className="mr-1.5 h-3.5 w-3.5" />
                          Post Reply
                        </Button>
                      </div>
                    )}

                    {expandedReplies[entry.id] && feedbackReplies[entry.id] && feedbackReplies[entry.id].length > 0 && (
                        <div className="mt-2 w-full space-y-2 pl-4 border-l-2 border-muted/50 animate-fadeIn-custom">
                            {feedbackReplies[entry.id].map(reply => (
                            <div key={reply.id} className="text-xs bg-muted/30 p-2.5 rounded-md shadow-sm">
                                <div className="flex items-center justify-between mb-1 text-muted-foreground/80">
                                <div className="flex items-center font-medium text-foreground/80">
                                    <CornerDownRight className="h-3.5 w-3.5 mr-1.5 text-primary/60" />
                                    <UserCircle className="mr-1 h-3.5 w-3.5 text-primary/60" />
                                    {reply.username || 'Anonymous'}
                                </div>
                                <span className="text-xs">{formatDate(reply.timestamp)}</span>
                                </div>
                                <p className="text-foreground/90 pl-1">{reply.text}</p>
                            </div>
                            ))}
                        </div>
                    )}
                  </CardFooter>
                </Card>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>

      <Dialog open={isReplyUsernameDialogOpen} onOpenChange={(open) => { if (!open) handleReplyDialogClose(); }}>
        <DialogContent className="sm:max-w-md rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center">
              <User className="mr-2 h-5 w-5 text-primary" /> Add Your Name for Reply (Optional)
            </DialogTitle>
            <DialogDescription className="pt-2">
              Your name will be displayed with your reply. Leave blank to reply as "Anonymous".
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="reply-username-dialog" className="text-foreground/80">Username</Label>
              <Input
                id="reply-username-dialog"
                placeholder="Your name (e.g., Alex)"
                value={replyUsername}
                onChange={(e) => {
                  setReplyUsername(e.target.value);
                  if (replyPasswordError) setReplyPasswordError(null);
                }}
                className="bg-background/80 focus:bg-background"
                disabled={isSubmittingReply}
                maxLength={50}
              />
              {replyUsername.length > 50 && <p className="text-sm text-destructive">Username must not exceed 50 characters.</p>}
            </div>
            {replyUsername.trim().toLowerCase() === 'admin' && (
               <div className="space-y-2 animate-fadeIn-custom">
                <Label htmlFor="reply-password-dialog" className="text-destructive flex items-center">
                  <KeyRound className="mr-2 h-4 w-4" /> Admin Password Required
                </Label>
                <Input
                  id="reply-password-dialog"
                  type="password"
                  placeholder="Enter admin password"
                  value={replyPasswordInput}
                  onChange={(e) => {
                    setReplyPasswordInput(e.target.value);
                    if (replyPasswordError) setReplyPasswordError(null);
                  }}
                  className={cn("bg-background/80 focus:bg-background", replyPasswordError && "border-destructive ring-destructive focus-visible:ring-destructive")}
                  disabled={isSubmittingReply}
                />
                {replyPasswordError && (
                  <p className="text-sm text-destructive flex items-center"><AlertCircle className="mr-1 h-4 w-4" />{replyPasswordError}</p>
                )}
              </div>
            )}
          </div>
          <DialogFooter className="mt-2 flex flex-col sm:flex-row gap-2">
             <Button type="button" variant="outline" onClick={handleReplyDialogClose} disabled={isSubmittingReply}>
                    Cancel
                </Button>
            <Button type="button" onClick={handleFinalReplySubmit} className="group" disabled={isSubmittingReply || replyUsername.length > 50}>
              {isSubmittingReply ? 'Posting Reply...' : 'Post Reply'}
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
