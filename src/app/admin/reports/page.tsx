// src/app/admin/reports/page.tsx
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { collection, query, orderBy, onSnapshot, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { format } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, MessageSquare, ArrowLeft, Send } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import Link from 'next/link';

export interface BugReport {
  id: string;
  userId: string;
  userDisplayName: string;
  userEmail: string;
  issueType: string;
  description: string;
  status: 'Pending' | 'In Progress' | 'Resolved' | 'Delayed';
  createdAt: any; // Firestore Timestamp
  ticketId: string;
  adminReply?: string;
  updatedAt?: any;
}

export default function AdminReportsPage() {
  const [reports, setReports] = useState<BugReport[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedReport, setSelectedReport] = useState<BugReport | null>(null);
  const [replyText, setReplyText] = useState('');
  const [isReplying, setIsReplying] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    document.title = "User Bug Reports | E-Leak Courses Hub";
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'bugReports'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reportsData: BugReport[] = [];
      querySnapshot.forEach((doc) => {
        reportsData.push({ id: doc.id, ...doc.data() } as BugReport);
      });
      setReports(reportsData);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching reports: ", error);
      setIsLoading(false);
      toast({ variant: 'destructive', title: 'Error', description: 'Could not fetch bug reports.' });
    });

    return () => unsubscribe();
  }, [toast]);

  const handleStatusChange = async (reportId: string, newStatus: BugReport['status']) => {
    const reportRef = doc(db, 'bugReports', reportId);
    try {
      await updateDoc(reportRef, {
        status: newStatus,
        updatedAt: serverTimestamp(),
      });
      toast({ title: 'Status Updated', description: `Ticket status changed to ${newStatus}.` });
      if (selectedReport?.id === reportId) {
        setSelectedReport(prev => prev ? { ...prev, status: newStatus } : null);
      }
    } catch (error) {
      console.error("Error updating status: ", error);
      toast({ variant: 'destructive', title: 'Error', description: 'Failed to update status.' });
    }
  };

  const handleReplySubmit = async () => {
    if (!selectedReport || !replyText.trim()) return;
    setIsReplying(true);
    const reportRef = doc(db, 'bugReports', selectedReport.id);
    try {
      await updateDoc(reportRef, {
        adminReply: replyText,
        updatedAt: serverTimestamp(),
        status: 'Resolved' // Automatically set to resolved on reply
      });
      toast({ title: 'Reply Sent', description: 'Your reply has been sent to the user.' });
      setReplyText('');
      setSelectedReport(prev => prev ? { ...prev, adminReply: replyText, status: 'Resolved' } : null);
    } catch (error) {
       console.error("Error sending reply: ", error);
       toast({ variant: 'destructive', title: 'Error', description: 'Failed to send reply.' });
    } finally {
       setIsReplying(false);
    }
  };
  
  const getStatusColor = (status: BugReport['status']) => {
    switch (status) {
      case 'Pending': return 'bg-yellow-500';
      case 'In Progress': return 'bg-blue-500';
      case 'Resolved': return 'bg-green-500';
      case 'Delayed': return 'bg-orange-500';
      default: return 'bg-gray-500';
    }
  };

  if (isLoading) {
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
            <Link href="/" className="inline-block mb-4">
                <Button variant="outline"><ArrowLeft className="mr-2 h-4 w-4" /> Back to Home</Button>
            </Link>
            <h1 className="text-4xl font-bold logo-gradient-text animate-gradient">User Bug Reports</h1>
            <p className="text-muted-foreground mt-2">Review, manage, and respond to user-submitted issues.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>All Tickets ({reports.length})</CardTitle>
                <CardDescription>Select a ticket to view details.</CardDescription>
              </CardHeader>
              <CardContent className="p-2">
                 <div className="max-h-[60vh] overflow-y-auto">
                    {reports.length > 0 ? (
                        reports.map(report => (
                            <button
                                key={report.id}
                                onClick={() => setSelectedReport(report)}
                                className={`w-full text-left p-3 rounded-lg border-l-4 transition-colors ${
                                    selectedReport?.id === report.id ? 'bg-muted border-primary' : 'hover:bg-muted/50 border-transparent'
                                }`}
                            >
                                <div className="flex justify-between items-start">
                                    <p className="font-semibold truncate pr-2">{report.issueType}: {report.ticketId}</p>
                                    <Badge variant={report.status === 'Resolved' ? 'default' : 'secondary'} className="capitalize shrink-0">{report.status}</Badge>
                                </div>
                                <p className="text-sm text-muted-foreground truncate">{report.userDisplayName}</p>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {format(report.createdAt.toDate(), 'MMM d, yyyy, h:mm a')}
                                </p>
                            </button>
                        ))
                    ) : (
                        <p className="text-muted-foreground text-center p-4">No reports submitted yet.</p>
                    )}
                 </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            {selectedReport ? (
              <Card>
                <CardHeader>
                    <div className="flex justify-between items-center">
                        <CardTitle className="text-2xl">Ticket #{selectedReport.ticketId}</CardTitle>
                         <Select value={selectedReport.status} onValueChange={(value) => handleStatusChange(selectedReport.id, value as BugReport['status'])}>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Set status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Pending">Pending</SelectItem>
                                <SelectItem value="In Progress">In Progress</SelectItem>
                                <SelectItem value="Resolved">Resolved</SelectItem>
                                <SelectItem value="Delayed">Delayed</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                  <CardDescription>
                    Reported by {selectedReport.userDisplayName} ({selectedReport.userEmail})
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-semibold mb-1">Issue Type</h3>
                    <p>{selectedReport.issueType}</p>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">User's Description</h3>
                    <p className="text-muted-foreground whitespace-pre-wrap p-3 bg-muted rounded-md">{selectedReport.description}</p>
                  </div>
                  {selectedReport.adminReply && (
                     <div>
                        <h3 className="font-semibold mb-1">Your Reply</h3>
                        <p className="text-muted-foreground whitespace-pre-wrap p-3 bg-green-500/10 rounded-md border border-green-500/20">{selectedReport.adminReply}</p>
                    </div>
                  )}
                  <div>
                     <h3 className="font-semibold mb-1">Reply to User</h3>
                     <Textarea
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        placeholder={`Replying to ${selectedReport.userDisplayName}...`}
                        rows={4}
                     />
                  </div>
                </CardContent>
                <CardFooter>
                    <Button onClick={handleReplySubmit} disabled={isReplying || !replyText.trim()}>
                        {isReplying && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Send Reply & Resolve
                    </Button>
                </CardFooter>
              </Card>
            ) : (
              <div className="flex flex-col items-center justify-center h-full min-h-[400px] bg-card rounded-lg border-2 border-dashed">
                <MessageSquare className="h-16 w-16 text-muted-foreground/50" />
                <p className="mt-4 text-lg font-medium text-muted-foreground">Select a report to view details</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
