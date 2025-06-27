'use client';

import React, { useEffect, useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { useAuth } from '@/context/AuthContext';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Loader2, LogOut, Mail, BookOpen, TrendingUp, Play, Compass, Edit, CalendarPlus, Trophy, User as UserIcon } from 'lucide-react';
import { logout } from '@/lib/firebase';
import Link from 'next/link';
import { listenToProgress, RecentlyViewedEntry } from '@/lib/progress-manager';
import { getTotalLectureCount, getCourseNameById } from '@/lib/course-analytics';
import type { Lecture, Topic } from '@/lib/course-data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { format } from 'date-fns';
import ImageCropperDialog from '@/components/ImageCropperDialog';
import RecentlyViewedCard from '@/components/RecentlyViewedCard';
import type { UserData } from '@/context/AuthContext';


// --- Edit Profile Dialog Schema ---
const profileSchema = z.object({
  displayName: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50, { message: "Name cannot exceed 50 characters." }),
});

// --- Dashboard Cards ---

const EnrolledCoursesCard = ({ enrolledCourseIds }: { enrolledCourseIds: string[] }) => {
    if (enrolledCourseIds.length === 0) {
        return (
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl"><Compass className="text-primary" />Your Courses</CardTitle>
                    <CardDescription>Click 'Enroll Now' on any course from the homepage to see it here.</CardDescription>
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
        )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-3 text-xl"><Compass className="text-primary" />Your Enrolled Courses</CardTitle>
                <CardDescription>Quick access to the courses you've started.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {enrolledCourseIds.map(courseId => {
                    const courseName = getCourseNameById(courseId);
                    return (
                        <Link key={courseId} href={`/courses/${courseId}/enroll`}>
                            <div className="p-4 rounded-lg border hover:bg-muted transition-colors flex flex-col justify-between h-full">
                                <div>
                                    <p className="font-semibold">{courseName.split(' (')[0]}</p>
                                    <p className="text-xs text-muted-foreground">{courseName.split(' (')[1] ? `Class ${courseName.split(' (')[1]}`: ''}</p>
                                </div>
                                <div className="mt-3 text-right">
                                    <span className="text-sm font-bold text-green-500">Free</span>
                                </div>
                            </div>
                        </Link>
                    );
                })}
            </CardContent>
        </Card>
    )
}

const EditProfileDialog = ({ open, onOpenChange }: { open: boolean, onOpenChange: (open: boolean) => void }) => {
    const { toast } = useToast();
    const { user, userData } = useAuth();
    const [isLoading, setIsLoading] = React.useState(false);
    const [isCropperOpen, setIsCropperOpen] = React.useState(false);

    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            displayName: userData?.displayName || user?.displayName || "",
        },
    });
    
    // Reset form when user data changes
    useEffect(() => {
        form.reset({ displayName: userData?.displayName || user?.displayName || "" });
    }, [userData, user, form]);

    const onSubmit = async (values: z.infer<typeof profileSchema>) => {
        if (!user) {
            toast({ variant: "destructive", title: "Not Authenticated", description: "You must be signed in to update your profile." });
            return;
        }
        setIsLoading(true);
        try {
            // The photoURL is updated via the ImageCropperDialog, so here we only update the name.
            // We pass the existing photoURL from our userData context to avoid overwriting it.
            await updateUserProfile(user, values.displayName, userData?.photoURL || user.photoURL || "");
            toast({
                title: "Profile Updated!",
                description: "Your display name has been saved.",
            });
            onOpenChange(false);
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Update Failed",
                description: error.message || "Could not update your profile. Please try again.",
            });
        } finally {
            setIsLoading(false);
        }
    };
    
    return (
        <>
            <Dialog open={open} onOpenChange={onOpenChange}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle className="text-xl">Edit Your Profile</DialogTitle>
                        <DialogDescription>
                            Update your display name and profile picture.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="flex items-center gap-4 py-4">
                        <Avatar className="h-20 w-20">
                           <AvatarImage src={userData?.photoURL || user?.photoURL || ''} alt={userData?.displayName || 'User'} />
                           <AvatarFallback className="text-2xl bg-muted">{userData?.displayName?.charAt(0).toUpperCase()}</AvatarFallback>
                        </Avatar>
                        <Button variant="outline" onClick={() => setIsCropperOpen(true)}>Change Photo</Button>
                    </div>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="displayName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Display Name</FormLabel>
                                        <FormControl>
                                            <Input placeholder="Your Name" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <DialogFooter>
                                <Button type="submit" disabled={isLoading} className="w-full">
                                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                    Save Name Changes
                                </Button>
                            </DialogFooter>
                        </form>
                    </Form>
                </DialogContent>
            </Dialog>
            <ImageCropperDialog
                open={isCropperOpen}
                onOpenChange={setIsCropperOpen}
                onUploadComplete={() => {
                    setIsCropperOpen(false);
                    // No need to manually trigger refresh, AuthContext handles it.
                }}
            />
        </>
    );
};


export default function DashboardPage() {
  const router = useRouter();
  const { user, userData, loading: authLoading } = useAuth();
  const [completedCount, setCompletedCount] = useState(0);
  const [enrolledCourseIds, setEnrolledCourseIds] = useState<string[]>([]);
  const [recentlyViewed, setRecentlyViewed] = useState<RecentlyViewedEntry[]>([]);

  const [isProgressLoading, setIsProgressLoading] = useState(true);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);

  const totalLectures = useMemo(() => getTotalLectureCount(), []);

  useEffect(() => {
    if (!authLoading && !user) {
      router.replace('/');
    }
  }, [user, authLoading, router]);
  
  useEffect(() => {
    if (user) {
      document.title = `${userData?.displayName || user.displayName}'s Dashboard | E-Leak`;
      
      setIsProgressLoading(true);
      const unsubscribe = listenToProgress(user.uid, (progress) => {
        setCompletedCount(progress.completedLectures.length);
        setEnrolledCourseIds(progress.enrolledCourseIds);
        setRecentlyViewed(progress.recentlyViewed);
        setIsProgressLoading(false);
      });
      
      return () => unsubscribe();
    }
  }, [user, userData]);

  const getInitials = (name: string | null | undefined) => {
    if (!name) return <UserIcon />;
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }

  const isLoading = authLoading || isProgressLoading || !userData;

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!user || !userData) {
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

  const progressPercentage = totalLectures > 0 ? (completedCount / totalLectures) * 100 : 0;
  const joinedDate = userData.createdAt ? format(userData.createdAt.toDate(), 'MMMM d, yyyy') : 'N/A';
  const displayName = userData.displayName || user.displayName;
  const photoURL = userData.photoURL || user.photoURL;

  return (
    <>
    <div className="flex flex-col items-center min-h-screen bg-background p-4 sm:p-6 md:p-8">
      <div className="w-full max-w-5xl mx-auto space-y-8 animate-fadeIn-custom">
        <header>
          <h1 className="text-4xl md:text-5xl font-bold logo-gradient-text animate-gradient">
            Welcome back, {displayName?.split(' ')[0] || 'Student'}!
          </h1>
          <p className="text-muted-foreground mt-2">Here's your learning snapshot. Keep up the great work!</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Profile Card */}
            <Card className="md:col-span-1">
                <CardHeader className="text-center items-center">
                    <Avatar className="h-24 w-24 mb-3 border-4 border-primary">
                        <AvatarImage src={photoURL || ''} alt={displayName || 'User'} />
                        <AvatarFallback className="text-3xl bg-muted">{getInitials(displayName)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{displayName}</CardTitle>
                    <CardDescription className="flex items-center gap-2"><Mail className="h-4 w-4"/>{userData.email}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm text-muted-foreground space-y-2">
                     <div className="flex items-center justify-center">
                        <CalendarPlus className="h-4 w-4 mr-2"/>
                        <span>Joined on {joinedDate}</span>
                    </div>
                </CardContent>
                <CardFooter className="flex-col gap-2">
                     <Button variant="outline" className="w-full" onClick={() => setIsEditDialogOpen(true)}>
                        <Edit className="mr-2 h-4 w-4" /> Edit Profile
                     </Button>
                </CardFooter>
            </Card>

            {/* Progress Card */}
            <Card className="md:col-span-2">
                <CardHeader>
                    <CardTitle className="text-xl flex items-center gap-3">
                        <TrendingUp className="text-primary"/>
                        Your Learning Progress
                    </CardTitle>
                    <CardDescription>You're on the right track! Keep learning to unlock achievements!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex items-baseline gap-2">
                        <h3 className="text-4xl font-bold text-primary">{completedCount}</h3>
                        <p className="text-muted-foreground">lectures completed</p>
                    </div>
                    <Progress value={progressPercentage} aria-label={`${progressPercentage.toFixed(0)}% complete`} />
                </CardContent>
                 <CardFooter className="text-xs text-muted-foreground">
                    <Trophy className="mr-2 h-4 w-4 text-amber-500" />
                    Every lecture you watch moves you one step closer to your goal.
                </CardFooter>
            </Card>
        </div>
        
        <RecentlyViewedCard recentlyViewed={recentlyViewed} />
        <EnrolledCoursesCard enrolledCourseIds={enrolledCourseIds} />
        
        <div className="text-center mt-4">
             <Button onClick={handleSignOut} variant="destructive" className="w-full max-w-xs mx-auto">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
            </Button>
        </div>
      </div>
    </div>
    <EditProfileDialog
        open={isEditDialogOpen}
        onOpenChange={setIsEditDialogOpen}
     />
    </>
  );
}
