
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Home as HomeIcon, PlayCircle, Clock } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { courseLiveDetails } from '@/lib/live-class-data';
import { Badge } from '@/components/ui/badge';
import { useRouter } from 'next/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "All Live Classes | E-Leak Courses Hub",
};

interface LiveClassInfo {
  courseId: string;
  courseName: string;
  subject: string;
  liveStreamUrl?: string;
  classTimeLabel: string;
  status: 'live' | 'upcoming' | 'completed';
  startTime: Date;
  endTime: Date;
}

const LiveClassCard: React.FC<LiveClassInfo> = ({ courseName, subject, liveStreamUrl, status, classTimeLabel }) => {
  const router = useRouter();

  const handleJoinClick = () => {
    if (liveStreamUrl) {
      // Use custom player for HLS streams, otherwise open directly
      const urlToOpen = liveStreamUrl.includes('.m3u8')
        ? `https://e-leak-strm.web.app/?url=${encodeURIComponent(liveStreamUrl)}`
        : liveStreamUrl;
      window.open(urlToOpen, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="w-full max-w-md animate-fadeInUp-custom overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="pb-3">
          <div className="flex justify-between items-start">
             <CardTitle className="text-xl font-bold">{subject}</CardTitle>
             {status === 'live' && <Badge variant="destructive" className="animate-pulse">LIVE</Badge>}
             {status === 'upcoming' && <Badge variant="secondary">Upcoming</Badge>}
             {status === 'completed' && <Badge variant="outline">Completed</Badge>}
          </div>
          <CardDescription className="pt-1">{courseName}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-2 h-4 w-4" />
          <span>{classTimeLabel}</span>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={handleJoinClick} disabled={status !== 'live'} className="w-full">
          <PlayCircle className="mr-2 h-5 w-5" />
          {status === 'live' ? "Join Live" : (status === 'upcoming' ? "Starts Soon" : "Class Ended")}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default function LiveClassesPage() {
  const [allClasses, setAllClasses] = React.useState<LiveClassInfo[]>([]);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    document.title = "All Live Classes | E-Leak Courses Hub";
    setIsMounted(true);
    const updateClasses = () => {
        const now = new Date();
        const combinedClasses: LiveClassInfo[] = [];

        Object.entries(courseLiveDetails).forEach(([courseId, course]) => {
            if (course.class1Visible && course.class1Subject && course.class1Times) {
                const { start, end } = course.class1Times(now);
                let status: LiveClassInfo['status'] = 'completed';
                if (now >= start && now < end) status = 'live';
                else if (now < start && (start.getTime() - now.getTime()) <= 60 * 60 * 1000) status = 'live'; // Within 1 hour before start
                else if (now < start) status = 'upcoming';
                
                combinedClasses.push({
                    courseId,
                    courseName: course.pageTitle,
                    subject: course.class1Subject,
                    liveStreamUrl: course.class1LiveStreamUrl,
                    status,
                    startTime: start,
                    endTime: end,
                    classTimeLabel: course.classTimeLabel || "N/A"
                });
            }
            if (course.class2Visible && course.class2Subject && course.class2Times) {
                const { start, end } = course.class2Times(now);
                let status: LiveClassInfo['status'] = 'completed';
                if (now >= start && now < end) status = 'live';
                else if (now < start && (start.getTime() - now.getTime()) <= 60 * 60 * 1000) status = 'live'; // Within 1 hour before start
                else if (now < start) status = 'upcoming';

                combinedClasses.push({
                    courseId,
                    courseName: course.pageTitle,
                    subject: course.class2Subject,
                    liveStreamUrl: course.class2LiveStreamUrl,
                    status,
                    startTime: start,
                    endTime: end,
                    classTimeLabel: course.classTimeLabel2 || "N/A"
                });
            }
        });
        setAllClasses(combinedClasses);
    }
    
    updateClasses();
    const interval = setInterval(updateClasses, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);
  
  if (!isMounted) {
      return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  const liveNow = allClasses.filter(c => c.status === 'live').sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  const upcoming = allClasses.filter(c => c.status === 'upcoming').sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  const completed = allClasses.filter(c => c.status === 'completed').sort((a, b) => b.startTime.getTime() - a.startTime.getTime());

  const renderClassList = (classes: LiveClassInfo[]) => {
    if (classes.length === 0) {
      return <p className="text-muted-foreground text-center py-8">No classes in this category right now.</p>;
    }
    return (
      <div className="space-y-4">
        {classes.map((c, index) => <LiveClassCard key={`${c.courseId}-${c.subject}-${index}`} {...c} />)}
      </div>
    );
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider logo-gradient-text animate-gradient mb-2">
            All Live Classes
          </h1>
          <p className="text-muted-foreground opacity-80 text-lg">Stay updated with all live sessions across courses.</p>
        </header>

        <Tabs defaultValue="live" className="w-full max-w-2xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="live">Live Now ({liveNow.length})</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming ({upcoming.length})</TabsTrigger>
            <TabsTrigger value="completed">Completed</TabsTrigger>
          </TabsList>
          <TabsContent value="live" className="mt-6">
            {renderClassList(liveNow)}
          </TabsContent>
          <TabsContent value="upcoming" className="mt-6">
            {renderClassList(upcoming)}
          </TabsContent>
          <TabsContent value="completed" className="mt-6">
            {renderClassList(completed)}
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}
