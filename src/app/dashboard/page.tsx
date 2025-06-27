
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
import { Loader2, LogOut, ShieldCheck, Mail, BookOpen, Lightbulb, TrendingUp, PlayCircle, Play, Compass, Edit, CalendarPlus, Trophy, Link as LinkIcon, AlertTriangle, User as UserIcon } from 'lucide-react';
import { logout, updateUserProfile, db } from '@/lib/firebase';
import Link from 'next/link';
import { listenToProgress } from '@/lib/progress-manager';
import { getTotalLectureCount, getLectureDetailsFromKey, getCourseNameById } from '@/lib/course-analytics';
import type { Lecture, Topic } from '@/lib/course-data';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter, DialogClose } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import { format } from 'date-fns';

// --- Edit Profile Dialog Schema ---
const profileSchema = z.object({
  displayName: z.string().min(2, { message: "Name must be at least 2 characters." }).max(50, { message: "Name cannot exceed 50 characters." }),
  photoURL: z.string().url({ message: "Please enter a valid URL." }).or(z.literal('')),
});

// --- User Data type from Firestore ---
interface UserData {
    uid: string;
    displayName: string;
    email: string;
    photoURL: string;
    lastLogin: Timestamp;
    createdAt: Timestamp;
}

// Component for "Continue Learning"
const ContinueLearningCard = ({ lastWatchedKey }: { lastWatchedKey: string | null }) => {
  const [details, setDetails] = useState<{ lecture: Lecture, topic: Topic, subjectName: string, courseId: string } | null>(null);

  useEffect(() => {
    if (lastWatchedKey) {
      setDetails(getLectureDetailsFromKey(lastWatchedKey));
    } else {
      setDetails(null);
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

// Component for Enrolled Courses
const EnrolledCoursesCard = ({ completedLectures }: { completedLectures: Set<string> }) => {
    const enrolledCourseIds = useMemo(() => {
        const ids = new Set<string>();
        completedLectures.forEach(key => {
            const courseId = key.split('::')[0];
            if (courseId) ids.add(courseId);
        });
        return Array.from(ids);
    }, [completedLectures]);

    if (enrolledCourseIds.length === 0) {
        return (
             <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl"><Compass className="text-primary" />Your Courses</CardTitle>
                    <CardDescription>Start a lecture to see your courses here.</CardDescription>
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
                <CardTitle className="flex items-center gap-3 text-xl"><Compass className="text-primary" />Your Courses</CardTitle>
                <CardDescription>Courses you have started.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {enrolledCourseIds.map(courseId => {
                    const courseName = getCourseNameById(courseId);
                    return (
                        <Button key={courseId} asChild variant="secondary" className="justify-start text-left h-auto py-3">
                            <Link href={`/courses/${courseId}/enroll`}>
                                <BookOpen className="mr-3 h-5 w-5 flex-shrink-0 text-primary"/>
                                <div>
                                    <p className="font-semibold">{courseName.split(' (')[0]}</p>
                                    <p className="text-xs text-muted-foreground">{courseName.split(' (')[1] ? `Class ${courseName.split(' (')[1]}`: ''}</p>
                                </div>
                            </Link>
                        </Button>
                    );
                })}
            </CardContent>
        </Card>
    )
}

// Edit Profile Dialog Component
const EditProfileDialog = ({ open, onOpenChange, user, onProfileUpdate }: { open: boolean, onOpenChange: (open: boolean) => void, user: User, onProfileUpdate: () => void }) => {
    const { toast } = useToast();
    const [isLoading, setIsLoading] = React.useState(false);

    const form = useForm<z.infer<typeof profileSchema>>({
        resolver: zodResolver(profileSchema),
        defaultValues: {
            displayName: user.displayName || "",
            photoURL: user.photoURL || "",
        },
    });

    const onSubmit = async (values: z.infer<typeof profileSchema>) => {
        setIsLoading(true);
        try {
            await updateUserProfile(user, values.displayName, values.photoURL);
            toast({
                title: "Profile Updated!",
                description: "Your changes have been saved successfully.",
            });
            onProfileUpdate(); // Callback to refresh dashboard data
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
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md">
                <DialogHeader>
                    <DialogTitle className="text-xl">Edit Your Profile</DialogTitle>
                    <DialogDescription>
                        Update your display name and profile picture URL.
                    </DialogDescription>
                </DialogHeader>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
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
                        <FormField
                            control={form.control}
                            name="photoURL"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Photo URL</FormLabel>
                                    <FormControl>
                                        <Input placeholder="https://example.com/image.png" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <DialogFooter>
                            <Button type="submit" disabled={isLoading} className="w-full">
                                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                                Save Changes
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    );
};


export default function DashboardPage() {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [completedLectures, setCompletedLectures] = useState<Set<string>>(new Set());
  const [lastWatchedKey, setLastWatchedKey] = useState<string | null>(null);
  const [isProgressLoading, setIsProgressLoading] = useState(true);
  const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
  const [userData, setUserData] = useState<UserData | null>(null);

  const totalLectures = useMemo(() => getTotalLectureCount(), []);

  const fetchUserData = async (userId: string) => {
    const userDocRef = doc(db, 'users', userId);
    const docSnap = await getDoc(userDocRef);
    if (docSnap.exists()) {
        setUserData(docSnap.data() as UserData);
    }
  };

  useEffect(() => {
    if (!loading && !user) {
      router.replace('/');
    }
  }, [user, loading, router]);
  
  useEffect(() => {
    if (user) {
      document.title = `${user.displayName}'s Dashboard | E-Leak`;
      
      setIsProgressLoading(true);
      fetchUserData(user.uid);
      const unsubscribe = listenToProgress(user.uid, (progress) => {
        setCompletedLectures(progress.keys);
        setLastWatchedKey(progress.lastWatchedKey);
        setIsProgressLoading(false);
      });
      
      return () => unsubscribe();
    }
  }, [user]);

  const getInitials = (name: string | null | undefined) => {
    if (!name) return <UserIcon />;
    return name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
  }

  if (loading || isProgressLoading || !userData) {
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
  const joinedDate = userData.createdAt ? format(userData.createdAt.toDate(), 'MMMM d, yyyy') : 'N/A';

  return (
    <>
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
                    <Avatar className="h-24 w-24 mb-3 border-4 border-primary">
                        <AvatarImage src={user.photoURL || ''} alt={user.displayName || 'User'} />
                        <AvatarFallback className="text-3xl bg-muted">{getInitials(user.displayName)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-xl">{user.displayName}</CardTitle>
                    <CardDescription className="flex items-center gap-2"><Mail className="h-4 w-4"/>{user.email}</CardDescription>
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
                    <CardDescription>You're on the right track. Keep going!</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="flex justify-between items-baseline">
                        <h3 className="text-4xl font-bold text-primary">{completedCount}</h3>
                        <p className="text-muted-foreground">/ {totalLectures} lectures completed</p>
                    </div>
                    <Progress value={progressPercentage} aria-label={`${progressPercentage.toFixed(0)}% complete`} />
                </CardContent>
                 <CardFooter className="text-xs text-muted-foreground">
                    <Trophy className="mr-2 h-4 w-4 text-amber-500" />
                    Keep learning to unlock achievements!
                </CardFooter>
            </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContinueLearningCard lastWatchedKey={lastWatchedKey} />
            <EnrolledCoursesCard completedLectures={completedLectures} />
        </div>
        
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
        user={user}
        onProfileUpdate={() => fetchUserData(user.uid)}
     />
    </>
  );
}
