
'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { Home as HomeIcon, Bot, PlayCircle, Clock } from 'lucide-react';
import { getParamAsString } from '@/lib/utils';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { courseLiveDetails } from '@/lib/live-class-data';

interface LiveClassCardProps {
  courseName: string;
  subject: string;
  liveStreamUrl?: string;
}

const LiveClassCard: React.FC<LiveClassCardProps> = ({ courseName, subject, liveStreamUrl }) => {
  const handleJoinClick = () => {
    if (liveStreamUrl) {
      window.open(liveStreamUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <Card className="w-full max-w-md animate-fadeInUp-custom">
      <CardHeader>
        <CardTitle>{subject}</CardTitle>
        <CardDescription>{courseName}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onClick={handleJoinClick} disabled={!liveStreamUrl} className="w-full">
          <PlayCircle className="mr-2 h-5 w-5" />
          {liveStreamUrl ? "Join Live" : "Not Live"}
        </Button>
      </CardContent>
    </Card>
  );
};

export default function LiveClassesPage() {
  const [liveNow, setLiveNow] = React.useState<LiveClassCardProps[]>([]);
  const [upcoming, setUpcoming] = React.useState<LiveClassCardProps[]>([]);
  const [completed, setCompleted] = React.useState<LiveClassCardProps[]>([]);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    const updateClasses = () => {
        const now = new Date();
        const live: LiveClassCardProps[] = [];
        const future: LiveClassCardProps[] = [];
        const past: LiveClassCardProps[] = [];

        Object.values(courseLiveDetails).forEach(course => {
            if (course.class1Visible && course.class1Subject && course.class1Times) {
                const { start, end } = course.class1Times(now);
                const classInfo = { courseName: course.pageTitle, subject: course.class1Subject, liveStreamUrl: course.class1LiveStreamUrl };
                if (now >= start && now < end) live.push(classInfo);
                else if (now < start) future.push(classInfo);
                else past.push(classInfo);
            }
            if (course.class2Visible && course.class2Subject && course.class2Times) {
                const { start, end } = course.class2Times(now);
                const classInfo = { courseName: course.pageTitle, subject: course.class2Subject, liveStreamUrl: course.class2LiveStreamUrl };
                if (now >= start && now < end) live.push(classInfo);
                else if (now < start) future.push(classInfo);
                else past.push(classInfo);
            }
        });
        setLiveNow(live);
        setUpcoming(future);
        setCompleted(past);
    }
    
    updateClasses();
    const interval = setInterval(updateClasses, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);
  
  if (!isMounted) {
      return <div className="flex justify-center items-center min-h-screen">Loading...</div>
  }

  const renderClassList = (classes: LiveClassCardProps[]) => {
    if (classes.length === 0) {
      return <p className="text-muted-foreground text-center py-8">No classes in this category right now.</p>;
    }
    return (
      <div className="space-y-4">
        {classes.map((c, index) => <LiveClassCard key={index} {...c} />)}
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
            <TabsTrigger value="live">Live Now</TabsTrigger>
            <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
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
