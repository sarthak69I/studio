
// src/components/FeedbackForm.tsx
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input'; // Added Input
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Send, User } from 'lucide-react'; // Added User icon

const feedbackFormSchema = z.object({
  username: z.string().max(50, { message: 'Username must not exceed 50 characters.' }).optional(), // Optional username
  feedbackText: z.string().min(10, { message: 'Feedback must be at least 10 characters.' }).max(1000, { message: 'Feedback must not exceed 1000 characters.' }),
});

type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

export default function FeedbackForm() {
  const { toast } = useToast();
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      username: '',
      feedbackText: '',
    },
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (data: FeedbackFormValues) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'feedback'), {
        username: data.username || 'Anonymous', // Default to Anonymous if empty
        text: data.feedbackText,
        timestamp: serverTimestamp(),
        likes: 0,
        dislikes: 0,
      });
      toast({
        title: 'Feedback Submitted!',
        description: 'Thank you for your valuable feedback.',
      });
      form.reset();
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
    <Card className="w-full max-w-xl bg-card/70 backdrop-blur-md border-border/50 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-semibold text-primary">Share Your Thoughts</CardTitle>
        <CardDescription className="text-muted-foreground">
          We value your input! Let us know how we can improve E-Leak.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center text-foreground/80">
                    <User className="mr-2 h-4 w-4" /> Username (Optional)
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your name or alias"
                      className="bg-background/80 focus:bg-background"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="feedbackText"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only">Your Feedback</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Tell us what you think..."
                      className="min-h-[120px] resize-none bg-background/80 focus:bg-background"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full py-3 rounded-lg text-base group" disabled={isSubmitting}>
              <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
