// src/components/ReportBugDialog.tsx
'use client';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/context/AuthContext';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Loader2, Ticket, CheckCircle } from 'lucide-react';
import { nanoid } from 'nanoid';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const reportSchema = z.object({
  issueType: z.string().min(1, { message: "Please select an issue type." }),
  description: z.string().min(20, { message: "Please provide a detailed description (at least 20 characters)." }).max(1000),
});

interface ReportBugDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function ReportBugDialog({ open, onOpenChange }: ReportBugDialogProps) {
  const { toast } = useToast();
  const { user, userData } = useAuth();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [submittedTicketId, setSubmittedTicketId] = useState<string | null>(null);

  const form = useForm<z.infer<typeof reportSchema>>({
    resolver: zodResolver(reportSchema),
    defaultValues: {
      issueType: '',
      description: '',
    },
  });

  const handleDialogClose = () => {
    onOpenChange(false);
    // Reset form after a delay to allow dialog to close smoothly
    setTimeout(() => {
        form.reset();
        setSubmittedTicketId(null);
    }, 300);
  };
  
  const handleViewReportClick = () => {
    // Set a flag in sessionStorage to trigger the timer on the reports page
    sessionStorage.setItem('showReportsLoading', 'true');
    handleDialogClose();
    router.push('/reports');
  };

  const onSubmit = async (values: z.infer<typeof reportSchema>) => {
    if (!user || !userData) {
      toast({ variant: 'destructive', title: 'Not Logged In', description: 'You must be logged in to submit a report.' });
      return;
    }
    setIsLoading(true);
    const ticketId = nanoid(8).toUpperCase();
    try {
      await addDoc(collection(db, 'bugReports'), {
        userId: user.uid,
        userDisplayName: userData.displayName || 'N/A',
        userEmail: userData.email,
        issueType: values.issueType,
        description: values.description,
        status: 'Pending',
        createdAt: serverTimestamp(),
        ticketId: ticketId,
      });
      setSubmittedTicketId(ticketId);
    } catch (error) {
      console.error("Error submitting report: ", error);
      toast({ variant: 'destructive', title: 'Submission Failed', description: 'Could not submit your report. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleDialogClose}>
      <DialogContent className="sm:max-w-lg">
        {!submittedTicketId ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl flex items-center gap-2">
                <Ticket className="h-6 w-6 text-primary" /> Report an Issue
              </DialogTitle>
              <DialogDescription>
                Help us improve E-Leak. Please provide as much detail as possible.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                <FormField
                  control={form.control}
                  name="issueType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Type of Issue</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select a category..." />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Video Playback">Video Playback Issue</SelectItem>
                          <SelectItem value="Notes/DPP Access">Notes/DPP Access Issue</SelectItem>
                          <SelectItem value="Login/Account">Login/Account Problem</SelectItem>
                          <SelectItem value="UI/Layout Glitch">UI/Layout Glitch</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Describe the Issue</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="e.g., The video for 'Motion L2' is not loading on Chrome. I tried refreshing but it's still stuck."
                          rows={6}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit" disabled={isLoading} className="w-full">
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Ticket className="mr-2 h-4 w-4" />}
                    Submit Report
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </>
        ) : (
            <div className="py-8 text-center flex flex-col items-center">
                <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
                <h2 className="text-xl font-bold">Report Submitted!</h2>
                <p className="text-muted-foreground mt-2">Your ticket has been received. Thank you for your feedback.</p>
                <div className="mt-6">
                    <p className="text-sm text-muted-foreground">Your Ticket ID is:</p>
                    <p className="text-2xl font-mono font-bold bg-muted text-foreground p-2 rounded-md inline-block">
                        {submittedTicketId}
                    </p>
                </div>
                 <p className="text-sm text-muted-foreground mt-2">
                    See your report on{' '}
                    <button onClick={handleViewReportClick} className="text-primary underline hover:text-primary/80">
                         My Reports
                    </button>.
                 </p>
                 <Button onClick={handleDialogClose} className="mt-6 w-full">Close</Button>
            </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
