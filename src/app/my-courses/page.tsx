
'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Loader2, Compass, BookOpen, LogIn } from 'lucide-react';
import Link from 'next/link';
import { listenToProgress, UserProgress } from '@/lib/progress-manager';
import { getCourseNameById } from '@/lib/course-analytics';
import LoginDialog from '@/components/LoginDialog';

export default function MyCoursesPage() {
    const { user, loading: authLoading } = useAuth();
    const router = useRouter();
    const [progress, setProgress] = useState<UserProgress | null>(null);
    const [isProgressLoading, setIsProgressLoading] = useState(true);
    const [isLoginDialogOpen, setIsLoginDialogOpen] = useState(false);

    useEffect(() => {
        document.title = "My Courses | E-Leak Courses Hub";
    }, []);

    useEffect(() => {
        if (!authLoading && !user) {
            setIsLoginDialogOpen(true);
            setIsProgressLoading(false);
            return;
        }

        if (user) {
            setIsProgressLoading(true);
            const unsubscribe = listenToProgress(user.uid, (progressData) => {
                setProgress(progressData);
                setIsProgressLoading(false);
            });
            return () => unsubscribe();
        }
    }, [user, authLoading]);
    
    if (authLoading || isProgressLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-background">
                <Loader2 className="h-12 w-12 animate-spin text-primary" />
            </div>
        );
    }
    
    const enrolledCourseIds = progress?.enrolledCourseIds || [];

    return (
        <>
            <div className="flex flex-col min-h-screen items-center p-4 sm:p-6 md:p-8">
                <div className="w-full max-w-4xl mx-auto space-y-8 animate-fadeIn-custom">
                    <header>
                        <h1 className="text-4xl md:text-5xl font-bold logo-gradient-text animate-gradient">
                            My Courses
                        </h1>
                        <p className="text-muted-foreground mt-2">All your enrolled courses in one place. Keep learning!</p>
                    </header>
                    
                    {enrolledCourseIds.length === 0 ? (
                         <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-3 text-xl"><Compass className="text-primary" />Your Courses</CardTitle>
                                <CardDescription>You haven't enrolled in any courses yet. Explore our courses to get started.</CardDescription>
                            </CardHeader>
                            <CardContent>
                               <Button asChild className="w-full">
                                    <Link href="/">
                                        <BookOpen className="mr-2"/>
                                        Explore All Courses
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                             {enrolledCourseIds.map(courseId => {
                                const courseName = getCourseNameById(courseId);
                                return (
                                    <Card key={courseId} className="flex flex-col">
                                        <CardHeader>
                                            <CardTitle>{courseName.split(' (')[0]}</CardTitle>
                                            <CardDescription>Class {courseName.split(' (')[1]?.replace(')','') || ''}</CardDescription>
                                        </CardHeader>
                                        <CardContent className="flex-grow">
                                            <p className="text-sm text-green-500 font-bold">Free Access</p>
                                        </CardContent>
                                        <CardFooter>
                                            <Button asChild className="w-full">
                                                <Link href={`/courses/${courseId}/enroll`}>
                                                    Go to Course
                                                </Link>
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
            <LoginDialog 
                open={isLoginDialogOpen} 
                onOpenChange={(isOpen) => {
                    if (!isOpen) {
                        setIsLoginDialogOpen(false);
                        router.push('/'); // Redirect home if they close the dialog
                    }
                }} 
            />
        </>
    );
}
