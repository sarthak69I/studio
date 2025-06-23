// src/components/FeedbackForm.tsx
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Send, User, MessageSquarePlus, Star, KeyRound, AlertCircle } from 'lucide-react';
import RatingStars from '@/components/ui/rating-stars';
import { cn } from '@/lib/utils';

// Schema for the main feedback text with added validation
const feedbackTextSchema = z.object({
  feedbackText: z.string()
    .min(10, { message: 'Feedback must be at least 10 characters.' })
    .max(1000, { message: 'Feedback must not exceed 1000 characters.' })
    .refine(value => !/\d/.test(value), {
      message: 'Feedback should not contain numbers.',
    })
    .refine(value => !/https?:\/\//.test(value), {
      message: 'Feedback should not contain links or URLs.',
    }),
  rating: z.number().min(0).max(5).optional(),
});
type FeedbackTextFormValues = z.infer<typeof feedbackTextSchema>;

export default function FeedbackForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isUsernameDialogOpen, setIsUsernameDialogOpen] = React.useState(false);
  const [pendingFeedback, setPendingFeedback] = React.useState<FeedbackTextFormValues | null>(null);
  const [username, setUsername] = React.useState('');
  const [passwordInput, setPasswordInput] = React.useState('');
  const [passwordError, setPasswordError] = React.useState<string | null>(null);
  const [currentRating, setCurrentRating] = React.useState(0);

  const feedbackTextForm = useForm<FeedbackTextFormValues>({
    resolver: zodResolver(feedbackTextSchema),
    defaultValues: {
      feedbackText: '',
      rating: 0,
    },
  });

  const handleFeedbackTextSubmit = (data: FeedbackTextFormValues) => {
    setPendingFeedback({ ...data, rating: currentRating });
    setIsUsernameDialogOpen(true);
  };

  const handleFinalSubmit = async () => {
    if (!pendingFeedback) return;

    // Admin password check
    if (username.trim().toLowerCase() === 'admin') {
      if (passwordInput !== 'admin123') {
        setPasswordError('Incorrect admin password.');
        return; // Stop submission
      }
    }

    setIsSubmitting(true);
    setPasswordError(null);
    try {
      const feedbackData: any = {
        username: username.trim() || 'Anonymous',
        text: pendingFeedback.feedbackText,
        timestamp: serverTimestamp(),
      };
      if (pendingFeedback.rating && pendingFeedback.rating > 0) {
        feedbackData.rating = pendingFeedback.rating;
      }

      await addDoc(collection(db, 'feedback'), feedbackData);
      toast({
        title: 'Feedback Submitted!',
        description: 'Thank you for your valuable feedback.',
      });
      feedbackTextForm.reset();
      setCurrentRating(0);
      setPendingFeedback(null);
      setUsername('');
      setPasswordInput('');
      setIsUsernameDialogOpen(false);
    } catch (error) {
      console.error('Error submitting feedback:', error);
      toast({
        variant: 'destructive',
        title: 'Submission Failed',
        description: 'Could not submit your feedback. Please try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleDialogClose = () => {
    if (!isSubmitting) {
        setPendingFeedback(null);
        setUsername('');
        setPasswordInput('');
        setPasswordError(null);
    }
    setIsUsernameDialogOpen(false);
  };

  return (
    <>
      <Card className="w-full max-w-xl bg-card/70 backdrop-blur-md border-border/50 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-primary flex items-center justify-center">
            <MessageSquarePlus className="mr-2 h-7 w-7" />
            Share Your Thoughts
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            Let us know how we can improve E-Leak. Add a rating if you like!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...feedbackTextForm}>
            <form onSubmit={feedbackTextForm.handleSubmit(handleFeedbackTextSubmit)} className="space-y-6">
              <FormField
                control={feedbackTextForm.control}
                name="feedbackText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="sr-only">Your Feedback</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Tell us what you think..."
                        className="min-h-[120px] resize-none bg-background/80 focus:bg-background"
                        {...field}
                        disabled={isSubmitting || isUsernameDialogOpen}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormItem>
                <FormLabel className="block text-sm font-medium text-foreground/80 mb-2 text-center">Rate your experience (Optional)</FormLabel>
                <div className="flex justify-center">
                   <RatingStars currentRating={currentRating} onRatingChange={setCurrentRating} maxRating={5} size="lg" interactive={!(isSubmitting || isUsernameDialogOpen)} />
                </div>
              </FormItem>
              <Button type="submit" className="w-full py-3 rounded-lg text-base group" disabled={isSubmitting || isUsernameDialogOpen}>
                Submit Feedback
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Dialog open={isUsernameDialogOpen} onOpenChange={(open) => { if (!open) handleDialogClose() }}>
        <DialogContent className="sm:max-w-md rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center">
              <User className="mr-2 h-5 w-5 text-primary" /> Add Your Name (Optional)
            </DialogTitle>
            <DialogDescription className="pt-2">
              Your name will be displayed with your feedback. Leave blank to submit as "Anonymous".
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username-dialog" className="text-foreground/80">Username</Label>
              <Input
                id="username-dialog"
                placeholder="e.g. Alex"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  if (passwordError) setPasswordError(null);
                }}
                className="bg-background/80 focus:bg-background"
                disabled={isSubmitting}
                maxLength={50}
              />
               {username.length > 50 && <p className="text-sm text-destructive">Username must not exceed 50 characters.</p>}
            </div>
            {username.trim().toLowerCase() === 'admin' && (
              <div className="space-y-2 animate-fadeIn-custom">
                <Label htmlFor="password-dialog" className="text-destructive flex items-center">
                  <KeyRound className="mr-2 h-4 w-4" /> Admin Password Required
                </Label>
                <Input
                  id="password-dialog"
                  type="password"
                  placeholder="Enter admin password"
                  value={passwordInput}
                  onChange={(e) => {
                    setPasswordInput(e.target.value);
                    if (passwordError) setPasswordError(null);
                  }}
                  className={cn("bg-background/80 focus:bg-background", passwordError && "border-destructive ring-destructive focus-visible:ring-destructive")}
                  disabled={isSubmitting}
                />
                {passwordError && (
                  <p className="text-sm text-destructive flex items-center"><AlertCircle className="mr-1 h-4 w-4" />{passwordError}</p>
                )}
              </div>
            )}
          </div>
          <DialogFooter className="mt-2 flex flex-col sm:flex-row gap-2">
             <Button type="button" variant="outline" onClick={handleDialogClose} disabled={isSubmitting}>
                    Cancel
                </Button>
            <Button type="button" onClick={handleFinalSubmit} className="group" disabled={isSubmitting || username.length > 50}>
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
              <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
