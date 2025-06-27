
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2, LogOut, ShieldCheck, Mail, BookOpen, Lightbulb, TrendingUp, PlayCircle, Play, Compass } from 'lucide-react';
import { logout } from '@/lib/firebase';
import Link from 'next/link';
import { listenToProgress } from '@/lib/progress-manager';
import { getTotalLectureCount, getLectureDetailsFromKey } from '@/lib/course-analytics';
import type { Lecture, Topic } from '@/lib/course-data';

// Component for "Continue Learning"
const ContinueLearningCard = ({ lastWatchedKey }: { lastWatchedKey: string | null }) => {
  const [details, setDetails] = useState<{ lecture: Lecture, topic: Topic, subjectName: string, courseId: string } | null>(null);

  useEffect(() => {
    if (lastWatchedKey) {
      setDetails(getLectureDetailsFromKey(lastWatchedKey));
    }
  }, [lastWatchedKey]);

  if (!details) {
    return null; // Don't render if no last watched lecture or details not found
  }

  const { lecture, topic, subjectName, courseId } = details;
  const lectureUrl = `/courses/${courseId}/content/video/${encodeURIComponent(subjectName)}/${encodeURIComponent(topic.name)}/lectures/${encodeURIComponent(lecture.id)}/play`;

  return (
    <Card className="bg-primary/10 border-primary/20 col-span-1 md:col-span-2">
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl">
          <PlayCircle className="text-primary"/>
          Continue Learning
        </CardTitle>
        <CardDescription>Pick up right where you left off.</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="font-semibold text-lg">{lecture.title}</p>
        <p className="text-sm text-muted-foreground">{subjectName} - {topic.name}</p>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={lectureUrl}>
            <Play className="mr-2"/>
            Watch Now
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

// Component for "Quick Access" Links
const QuickLinksCard = () => {
    const courses = [
        { id: '1', name: 'Science Batch (11th)' },
        { id: '4', name: 'Aarambh Batch (9th)' },
        { id: '2', name: 'Commerce Batch (11th)' },
        { id: '3', name: 'Aarambh Batch (10th)' },
    ];
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl"><Compass className="text-primary" />Quick Access</CardTitle>
                <CardDescription>Jump right into your courses.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {courses.map(course => (
                    <Button key={course.id} asChild variant="secondary" className="justify-start text-left h-auto py-3">
                        <Link href={`/courses/${course.id}/enroll`}>
                            <BookOpen className="mr-3 h-5 w-5 flex-shrink-0 text-primary"/>
                            <div>
                                <p className="font-semibold">{course.name.split(' (')[0]}</p>
                                <p className="text-xs text-muted-foreground">{`Class ${course.name.split(' (')[1]}`}</p>
                            </div>
                        </Link>
                    </Button>
                ))}
            </CardContent>
        </Card>
    )
}

// Study Tip Card (No changes needed, but kept for context)
const StudyTipCard = () => {
    const tips = [
        "Create a study schedule and stick to it.",
        "Break down large topics into smaller, manageable chunks.",
        "Take regular short breaks to stay focused.",
        "Test yourself regularly with practice questions.",
        "Explain concepts to someone else to solidify your understanding.",
        "Get enough sleep; it's crucial for memory consolidation.",
        "Stay hydrated and eat nutritious food to fuel your brain."
    ];
    const [tip, setTip] = useState('');

    useEffect(() => {
        setTip(tips[Math.floor(Math.random() * tips.length)]);
    }, []);

    return (
        <Card className="bg-primary/5 border-primary/20">
            <CardHeader className="flex-row items-center gap-4 space-y-0 pb-2">
                <div className="p-2 bg-primary/20 rounded-full">
                    <Lightbulb className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Study Tip of the Day</CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground">{tip}</p>
            </CardContent>
        </Card>
    );
};

export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [completedLectures, setCompletedLectures] = useState<Set<string>>(new Set());
  const [lastWatchedKey, setLastWatchedKey] = useState<string | null>(null);
  const [isProgressLoading, setIsProgressLoading] = useState(true);

  const totalLectures = useMemo(() => getTotalLectureCount(), []);

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/');
    }
  }, [user, loading, router]);
  
  useEffect(() => {
    if (user) {
      document.title = `${user.displayName}'s Dashboard | E-Leak`;
      
      setIsProgressLoading(true);
      const unsubscribe = listenToProgress(user.uid, (progress) => {
        setCompletedLectures(progress.keys);
        setLastWatchedKey(progress.lastWatchedKey);
        setIsProgressLoading(false);
      });
      
      return () => unsubscribe();
    }
  }, [user]);

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }

  if (loading || isProgressLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!user) {
    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <p>Redirecting...</p>
        </div>
    );
  }

  const handleSignOut = async () => {
    await logout();
    router.push('/');
  };

  const completedCount = completedLectures.size;
  const progressPercentage = totalLectures > 0 ? (completedCount / totalLectures) * 100 : 0;

  return (
    <div className="flex flex-col items-center min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-5xl mx-auto space-y-8 animate-fadeIn-custom">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold">Welcome back, {user.displayName?.split(' ')[0] || 'Student'}!</h1>
          <p className="text-muted-foreground">Here's your learning snapshot. Keep up the great work!</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="md:col-span-1">
                <CardHeader className="text-center items-center">
                    <Avatar className="h-20 w-20 mb-3 border-4 border-primary">
                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                        <AvatarFallback className="text-2xl">{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{user.displayName}</CardTitle>
                    <CardDescription className="flex items-center gap-2"><Mail className="h-4 w-4"/>{user.email}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                    <div className="flex items-center justify-center p-2 bg-green-500/10 text-green-700 rounded-lg">
                        <ShieldCheck className="h-5 w-5 mr-2"/>
                        <span className="text-sm font-medium">Account Verified</span>
                    </div>
                </CardContent>
            </Card>

            {/* Progress Card */}
            <Card className="md:col-span-2">
                <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                        <TrendingUp className="text-primary"/>
                        Your Learning Progress
                    </CardTitle>
                    <CardDescription>You're on the right track. Keep going!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-4xl font-bold text-primary">{completedCount}</h3>
                        <p className="text-muted-foreground">/ {totalLectures} lectures completed</p>
                    </div>
                    <Progress value={progressPercentage} aria-label={`${progressPercentage.toFixed(0)}% complete`} />
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href="/">
                            <BookOpen className="mr-2"/>
                            Explore Courses
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContinueLearningCard lastWatchedKey={lastWatchedKey} />
            <QuickLinksCard />
        </div>
        
        <StudyTipCard />
        
        <div className="text-center">
             <Button onClick={handleSignOut} variant="destructive" className="w-full max-w-xs mx-auto">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
            </Button>
        </div>
      </div>
    </div>
  );
}
