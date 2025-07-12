// src/app/reports/page.tsx
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { collection, query, where, onSnapshot, orderBy } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { formatDistanceToNow } from 'date-fns';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Loader2, Ticket, MessageSquare, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import ReportBugDialog from '@/components/ReportBugDialog';
import type { BugReport } from '../admin/reports/page';

export default function MyReportsPage() {
  const router = useRouter();
  const { user, loading: authLoading } = useAuth();
  const [reports, setReports] = useState<BugReport[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isReportDialogOpen, setIsReportDialogOpen] = useState(false);

  useEffect(() => {
    document.title = "My Reports | E-Leak Courses Hub";
  }, []);

  useEffect(() => {
    if (authLoading) return;
    if (!user) {
      router.replace('/');
      return;
    }

    setIsLoading(true);
    const q = query(
      collection(db, 'bugReports'),
      where('userId', '==', user.uid),
      orderBy('createdAt', 'desc')
    );

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const reportsData: BugReport[] = [];
      querySnapshot.forEach((doc) => {
        reportsData.push({ id: doc.id, ...doc.data() } as BugReport);
      });
      setReports(reportsData);
      setIsLoading(false);
    }, (error) => {
      console.error("Error fetching user reports: ", error);
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, [user, authLoading, router]);

  const getStatusInfo = (status: BugReport['status']) => {
    switch (status) {
      case 'Pending': return { color: 'bg-yellow-500', icon: <Clock className="h-4 w-4" /> };
      case 'In Progress': return { color: 'bg-blue-500', icon: <Loader2 className="h-4 w-4 animate-spin" /> };
      case 'Resolved': return { color: 'bg-green-500', icon: <CheckCircle className="h-4 w-4" /> };
      case 'Delayed': return { color: 'bg-orange-500', icon: <AlertTriangle className="h-4 w-4" /> };
      default: return { color: 'bg-gray-500', icon: <Ticket className="h-4 w-4" /> };
    }
  };

  if (authLoading || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-background p-4 sm:p-6 md:p-8">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold logo-gradient-text animate-gradient">My Reports</h1>
            <p className="text-muted-foreground mt-2">Track the status of issues you've submitted or create a new report.</p>
          </header>
          
          <div className="mb-6 text-right">
             <Button onClick={() => setIsReportDialogOpen(true)}>
                <Ticket className="mr-2 h-4 w-4" />
                Submit a New Report
            </Button>
          </div>

          <div className="space-y-4">
            {reports.length > 0 ? (
              reports.map(report => {
                const statusInfo = getStatusInfo(report.status);
                return (
                  <Card key={report.id} className="overflow-hidden">
                     <CardHeader className="flex flex-row items-center justify-between bg-muted/50 p-4">
                        <div>
                           <CardTitle className="text-lg">#{report.ticketId}</CardTitle>
                           <CardDescription>{report.issueType}</CardDescription>
                        </div>
                        <Badge className={`capitalize text-white ${statusInfo.color}`}>
                           {statusInfo.icon}
                           <span className="ml-2">{report.status}</span>
                        </Badge>
                     </CardHeader>
                     <CardContent className="p-4 space-y-4">
                        <div>
                           <h4 className="font-semibold text-sm mb-1">Your Description:</h4>
                           <p className="text-muted-foreground text-sm p-3 bg-background rounded-md border whitespace-pre-wrap">{report.description}</p>
                        </div>
                        {report.adminReply && (
                            <div>
                               <h4 className="font-semibold text-sm mb-1">Admin Reply:</h4>
                               <div className="p-3 bg-green-500/10 rounded-md border border-green-500/20 text-sm">
                                  <p className="whitespace-pre-wrap">{report.adminReply}</p>
                                  {report.updatedAt && (
                                     <p className="text-xs text-muted-foreground mt-2 text-right">
                                       Replied {formatDistanceToNow(report.updatedAt.toDate(), { addSuffix: true })}
                                     </p>
                                  )}
                               </div>
                            </div>
                        )}
                     </CardContent>
                  </Card>
                )
              })
            ) : (
              <div className="text-center py-16 border-2 border-dashed rounded-lg">
                <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground/50 mb-4" />
                <p className="font-semibold text-lg text-muted-foreground">You haven't submitted any reports yet.</p>
                <p className="text-sm text-muted-foreground">If you encounter an issue, click the button above to let us know!</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <ReportBugDialog open={isReportDialogOpen} onOpenChange={setIsReportDialogOpen} />
    </>
  );
}
