
'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2, LogOut, ShieldCheck, Mail, BookOpen, Lightbulb, TrendingUp } from 'lucide-react';
import { logout } from '@/lib/firebase';
import Link from 'next/link';
import { listenToProgress } from '@/lib/progress-manager';
import { getTotalLectureCount } from '@/lib/course-analytics';

// New component for the Study Tip
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
  const [isProgressLoading, setIsProgressLoading] = useState(true);

  // Memoize total lecture count to avoid re-calculating on every render
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
      const unsubscribe = listenToProgress(user.uid, (keys) => {
        setCompletedLectures(keys);
        setIsProgressLoading(false);
      });
      
      // Cleanup listener on component unmount
      return () => unsubscribe();
    }
  }, [user]);

  const getInitials = (name: string | null | undefined) => {
    if (!name) return 'U';
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }

  if (loading) {
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
      <div className="w-full max-w-4xl mx-auto space-y-8 animate-fadeIn-custom">
        <header>
          <h1 className="text-3xl md:text-4xl font-bold">Welcome back, {user.displayName?.split(' ')[0] || 'Student'}!</h1>
          <p className="text-muted-foreground">Here's your learning snapshot. Keep up the great work!</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="lg:col-span-1">
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
            <Card className="md:col-span-2 lg:col-span-2">
                <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                        <TrendingUp className="text-primary"/>
                        Your Learning Progress
                    </CardTitle>
                    <CardDescription>You're on the right track. Keep going!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {isProgressLoading ? (
                        <div className="flex items-center justify-center h-24">
                           <Loader2 className="h-8 w-8 animate-spin text-primary" />
                        </div>
                    ) : (
                        <>
                            <div className="flex justify-between items-baseline">
                                <h3 className="text-4xl font-bold text-primary">{completedCount}</h3>
                                <p className="text-muted-foreground">/ {totalLectures} lectures completed</p>
                            </div>
                            <Progress value={progressPercentage} aria-label={`${progressPercentage.toFixed(0)}% complete`} />
                        </>
                    )}
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href="/">
                            <BookOpen className="mr-2"/>
                            Continue Learning
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
        
        {/* Study Tip Card */}
        <StudyTipCard />
        
        {/* Actions section */}
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

