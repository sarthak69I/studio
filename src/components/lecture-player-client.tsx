'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, Maximize, Bot, Loader2, Timer, AlertCircle } from 'lucide-react';
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  aarambh9CourseContent,
  type CourseContentMap,
  type Lecture,
  type Topic,
} from '@/lib/course-data';
import { getParamAsString } from '@/lib/utils';
import { FaqDialogContent } from '@/components/faq-dialog-content';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { useAuth } from '@/context/AuthContext';
import { generateLectureStorageKey, awardPointForWatchTime, listenToProgress, UserProgress } from '@/lib/progress-manager';

const LECTURE_DURATION_SECONDS = 90 * 60; // 1 hour 30 minutes
const POINT_INTERVAL_SECONDS = 2 * 60; // 2 minutes

const formatTime = (timeInSeconds: number): string => {
  if (isNaN(timeInSeconds) || timeInSeconds < 0) return '00:00:00';
  const hours = Math.floor(timeInSeconds / 3600);
  const minutes = Math.floor((timeInSeconds % 3600) / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export default function LecturePlayerClient() {
  const router = useRouter();
  const params = useParams();
  const { user, loading: authLoading } = useAuth();

  // Route params
  const courseId = getParamAsString(params.courseId);
  const mode = getParamAsString(params.mode);
  const subjectParam = getParamAsString(params.subjectParam);
  const topicParam = getParamAsString(params.topicParam);
  const lectureId = getParamAsString(params.lectureId);

  // Component State
  const [lecture, setLecture] = React.useState<Lecture | null>(null);
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
  const [isFaqsDialogOpen, setIsFaqsDialogOpen] = React.useState(false);

  // Timer & Progress State
  const [progress, setProgress] = React.useState<UserProgress | null>(null);
  const [remainingTime, setRemainingTime] = React.useState<number>(LECTURE_DURATION_SECONDS);
  const [isTabActive, setIsTabActive] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  
  const lectureKey = React.useMemo(() => {
    if (courseId && subjectParam && topicParam && lectureId) {
      return generateLectureStorageKey(courseId, subjectParam, topicParam, lectureId);
    }
    return '';
  }, [courseId, subjectParam, topicParam, lectureId]);


  // Effect for fetching lecture data (non-user-specific)
  React.useEffect(() => {
    if (courseId && subjectParam && topicParam && lectureId && mode === 'video') {
      try {
        const decodedSubjectName = decodeURIComponent(subjectParam);
        const decodedTopicName = decodeURIComponent(topicParam);
        const decodedLectureId = decodeURIComponent(lectureId);

        let currentCourseMap: CourseContentMap | undefined;
        if (courseId === '1') currentCourseMap = scienceCourseContent;
        else if (courseId === '2') currentCourseMap = commerceCourseContent;
        else if (courseId === '3') currentCourseMap = aarambhCourseContent;
        else if (courseId === '4') currentCourseMap = aarambh9CourseContent;

        if (currentCourseMap) {
          const subjectData = currentCourseMap[decodedSubjectName];
          if (Array.isArray(subjectData)) {
            const currentTopic = subjectData.find((t: Topic) => t.name === decodedTopicName);
            if (currentTopic?.lectures) {
              const currentLecture = currentTopic.lectures.find(l => l.id === decodedLectureId);
              if (currentLecture?.videoEmbedUrl) {
                setLecture(currentLecture);
                document.title = `Playing: ${currentLecture.title} | E-Leak`;
              } else {
                setStatusMessage(`Video for this lecture is not available.`);
              }
            } else {
              setStatusMessage(`Topic "${decodedTopicName}" not found or has no lectures.`);
            }
          }
        } else {
          setStatusMessage(`Course data not found for course ID: ${courseId}.`);
        }
      } catch (e) {
        setStatusMessage("Could not load video due to an error.");
      }
    } else {
      setStatusMessage('Required information to load video is missing from URL.');
    }
  }, [courseId, subjectParam, topicParam, lectureId, mode]);
  
  // Effect for fetching user progress
  React.useEffect(() => {
    if (authLoading || !lectureKey) return;

    if (user) {
      setIsLoading(true);
      const unsubscribe = listenToProgress(user.uid, (progressData) => {
        setProgress(progressData);
        const pointsEarned = progressData.score.pointsPerLecture[lectureKey] || 0;
        const timeWatchedSeconds = pointsEarned * POINT_INTERVAL_SECONDS;
        setRemainingTime(Math.max(0, LECTURE_DURATION_SECONDS - timeWatchedSeconds));
        setIsLoading(false);
      });
      return () => unsubscribe();
    } else {
      setRemainingTime(LECTURE_DURATION_SECONDS);
      setIsLoading(false);
    }
  }, [user, authLoading, lectureKey]);

  // Effect for handling tab visibility to pause/resume timer
  React.useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // The main timer and point-awarding effect
  React.useEffect(() => {
    if (!user || !isTabActive || isLoading || remainingTime <= 0) {
      return; // Do nothing if not logged in, tab is inactive, still loading, or time is up
    }

    let totalElapsedSecondsThisSession = 0;
    const interval = setInterval(() => {
      setRemainingTime(prev => Math.max(0, prev - 1));
      totalElapsedSecondsThisSession++;
      
      if (totalElapsedSecondsThisSession > 0 && totalElapsedSecondsThisSession % POINT_INTERVAL_SECONDS === 0) {
         awardPointForWatchTime(lectureKey);
      }

    }, 1000);

    return () => clearInterval(interval);
  }, [user, isTabActive, isLoading, lectureKey, remainingTime]);

  const renderPlayer = () => {
    if (!lecture || !lecture.videoEmbedUrl) {
      return null;
    }
    const playerContainerClasses = "aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black border border-border";
    return (
      <div className={playerContainerClasses}>
        <iframe
          src={lecture.videoEmbedUrl}
          title={lecture.title}
          width="100%"
          height="100%"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="border-0"
        ></iframe>
      </div>
    );
  };
  
  const pointsEarned = progress?.score.pointsPerLecture[lectureKey] || 0;

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background text-foreground px-2 py-4 sm:px-4 md:p-6">
        <header className="flex items-center justify-between mb-8 w-full max-w-5xl mx-auto">
          <Button variant="outline" size="lg" onClick={() => router.back()} className="rounded-lg">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back
          </Button>
          <Link href="/" passHref>
            <Button variant="outline" size="lg" className="rounded-lg">
              <HomeIcon className="mr-2 h-5 w-5" /> Home
            </Button>
          </Link>
        </header>

        <main className="flex-grow flex flex-col justify-start items-center pt-10 md:pt-12 w-full">
          {lecture ? (
            <div className="w-full max-w-2xl">
              <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4 text-center">
                {lecture.title}
              </h1>

              <div className="mb-4 text-center">
                {isLoading ? (
                  <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground">
                    <Loader2 className="h-4 w-4 animate-spin"/> Loading progress...
                  </div>
                ) : user ? (
                  <div className="flex justify-center items-center gap-2 text-sm font-mono p-2 bg-muted rounded-md max-w-xs mx-auto">
                    <Timer className={`h-4 w-4 ${isTabActive && remainingTime > 0 ? 'text-green-500' : 'text-muted-foreground'}`}/>
                    <span>Time Remaining:</span>
                    <span className="font-semibold">{formatTime(remainingTime)}</span>
                  </div>
                ) : (
                  <div className="flex justify-center items-center gap-2 text-sm p-2 bg-amber-500/10 text-amber-600 rounded-md max-w-sm mx-auto">
                    <AlertCircle className="h-4 w-4"/>
                    Sign in to earn points and track progress.
                  </div>
                )}
              </div>

              {renderPlayer()}
              
              <div className="mt-3 text-center text-sm text-muted-foreground p-2 bg-card/50 rounded-md max-w-md mx-auto">
                <Maximize className="inline h-4 w-4 mr-1" />
                For the best viewing experience, use the player's full-screen button.
              </div>

              <p className="text-muted-foreground text-center mt-4 text-sm px-2">
                Playing: {lecture.title} from {decodeURIComponent(topicParam || '')} - {decodeURIComponent(subjectParam || '')}
              </p>
            </div>
          ) : statusMessage ? (
            <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md text-center">{statusMessage}</p>
          ) : (
            <Loader2 className="h-10 w-10 animate-spin text-primary" />
          )}
        </main>
      </div>
      <Dialog open={isFaqsDialogOpen} onOpenChange={setIsFaqsDialogOpen}>
        <DialogContent className="sm:max-w-lg rounded-xl">
          <DialogHeader>
            <DialogTitle className="text-xl">Frequently Asked Questions</DialogTitle>
          </DialogHeader>
          <FaqDialogContent />
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
