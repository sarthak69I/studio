
// src/components/FeedbackForm.tsx
'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { db } from '@/lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';

const feedbackFormSchema = z.object({
  feedbackText: z.string().min(10, { message: 'Feedback must be at least 10 characters.' }).max(1000, { message: 'Feedback must not exceed 1000 characters.' }),
});

type FeedbackFormValues = z.infer<typeof feedbackFormSchema>;

export default function FeedbackForm() {
  const { toast } = useToast();
  const form = useForm<FeedbackFormValues>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      feedbackText: '',
    },
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const onSubmit = async (data: FeedbackFormValues) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, 'feedback'), {
        text: data.feedbackText,
        timestamp: serverTimestamp(),
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
    <div className="w-full max-w-xl p-6 bg-card rounded-xl shadow-xl border border-border">
      <h2 className="text-2xl font-semibold text-center mb-6 text-primary">Share Your Feedback</h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="feedbackText"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Your Feedback</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us what you think about E-Leak..."
                    className="min-h-[120px] resize-none"
                    {...field}
                    disabled={isSubmitting}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full py-3 rounded-lg" disabled={isSubmitting}>
            <Send className="mr-2 h-5 w-5" />
            {isSubmitting ? 'Submitting...' : 'Submit Feedback'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
