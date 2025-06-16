
// src/components/FeedbackForm.tsx
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Added missing import
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription, DialogClose } from '@/components/ui/dialog';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Send, User, MessageSquarePlus } from 'lucide-react';

// Schema for the main feedback text
const feedbackTextSchema = z.object({
  feedbackText: z.string().min(10, { message: 'Feedback must be at least 10 characters.' }).max(1000, { message: 'Feedback must not exceed 1000 characters.' }),
});
type FeedbackTextFormValues = z.infer<typeof feedbackTextSchema>;

export default function FeedbackForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [isUsernameDialogOpen, setIsUsernameDialogOpen] = React.useState(false);
  const [pendingFeedbackText, setPendingFeedbackText] = React.useState('');
  const [username, setUsername] = React.useState(''); // For the dialog input

  const feedbackTextForm = useForm<FeedbackTextFormValues>({
    resolver: zodResolver(feedbackTextSchema),
    defaultValues: {
      feedbackText: '',
    },
  });

  // Triggered when the "Next: Add Your Name" button is clicked
  const handleFeedbackTextSubmit = (data: FeedbackTextFormValues) => {
    setPendingFeedbackText(data.feedbackText);
    setIsUsernameDialogOpen(true);
  };

  // Triggered when the final "Submit Feedback" button in the dialog is clicked
  const handleFinalSubmit = async () => {
    if (!pendingFeedbackText) return; // Should not happen if flow is correct

    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'feedback'), {
        username: username.trim() || 'Anonymous',
        text: pendingFeedbackText,
        timestamp: serverTimestamp(),
        likes: 0,
        dislikes: 0,
      });
      toast({
        title: 'Feedback Submitted!',
        description: 'Thank you for your valuable feedback.',
      });
      feedbackTextForm.reset(); // Reset the main form
      setPendingFeedbackText('');
      setUsername('');
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

  return (
    <>
      <Card className="w-full max-w-xl bg-card/70 backdrop-blur-md border-border/50 shadow-xl">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-semibold text-primary flex items-center justify-center">
            <MessageSquarePlus className="mr-2 h-7 w-7" />
            Share Your Thoughts
          </CardTitle>
          <CardDescription className="text-muted-foreground">
            We value your input! Let us know how we can improve E-Leak.
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
              <Button type="submit" className="w-full py-3 rounded-lg text-base group" disabled={isSubmitting || isUsernameDialogOpen}>
                Next: Add Your Name
                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>

      <Dialog open={isUsernameDialogOpen} onOpenChange={(open) => {
        if (!open && !isSubmitting) { // If dialog is closed without submitting
            setPendingFeedbackText(''); // Clear pending text
        }
        setIsUsernameDialogOpen(open);
      }}>
        <DialogContent className="sm:max-w-md rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center">
              <User className="mr-2 h-5 w-5 text-primary" /> Add Your Name (Optional)
            </DialogTitle>
            <DialogDescription className="pt-2">
              You can submit anonymously, or let us know who you are!
            </DialogDescription>
          </DialogHeader>
          <div className="py-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username-dialog" className="text-foreground/80">Username</Label>
              <Input
                id="username-dialog"
                placeholder="Your name or alias (leave blank for Anonymous)"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-background/80 focus:bg-background"
                disabled={isSubmitting}
              />
              {username.length > 50 && <p className="text-sm text-destructive">Username must not exceed 50 characters.</p>}
            </div>
          </div>
          <DialogFooter className="mt-2 flex flex-col sm:flex-row gap-2">
             <DialogClose asChild>
                <Button type="button" variant="outline" onClick={() => { setPendingFeedbackText(''); setUsername(''); }} disabled={isSubmitting}>
                    Cancel
                </Button>
            </DialogClose>
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
