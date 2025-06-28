'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ExternalLink, Timer, AlertCircle, Info, Loader2 } from 'lucide-react';
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

  const courseId = getParamAsString(params.courseId);
  const subjectParam = getParamAsString(params.subjectParam);
  const topicParam = getParamAsString(params.topicParam);
  const lectureId = getParamAsString(params.lectureId);

  const [lecture, setLecture] = React.useState<Lecture | null>(null);
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
  
  const [remainingTime, setRemainingTime] = React.useState<number>(LECTURE_DURATION_SECONDS);
  const [isTabActive, setIsTabActive] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(true);
  const [timerHasStarted, setTimerHasStarted] = React.useState(false);

  const lectureKey = React.useMemo(() => {
    if (courseId && subjectParam && topicParam && lectureId) {
      return generateLectureStorageKey(courseId, subjectParam, topicParam, lectureId);
    }
    return '';
  }, [courseId, subjectParam, topicParam, lectureId]);
  
  const openExternalPlayer = (url: string) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  React.useEffect(() => {
    if (courseId && subjectParam && topicParam && lectureId) {
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
                document.title = `Timer: ${currentLecture.title} | E-Leak`;
                // Open the external player automatically
                openExternalPlayer(currentLecture.videoEmbedUrl);
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
        setStatusMessage("Could not load lecture data due to an error.");
      }
    } else {
      setStatusMessage('Required information is missing from URL.');
    }
  }, [courseId, subjectParam, topicParam, lectureId]);
  
  React.useEffect(() => {
    if (authLoading || !lectureKey) return;

    if (user) {
      setIsLoading(true);
      const unsubscribe = listenToProgress(user.uid, (progressData) => {
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

  React.useEffect(() => {
    const handleVisibilityChange = () => {
      setIsTabActive(!document.hidden);
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  // Main timer logic based on user's request
  React.useEffect(() => {
    // Start timer when tab is INACTIVE
    if (!user || isTabActive || isLoading || remainingTime <= 0) {
      return; 
    }
    
    if(!timerHasStarted) setTimerHasStarted(true);

    let totalElapsedSecondsThisSession = 0;
    const interval = setInterval(() => {
      setRemainingTime(prev => Math.max(0, prev - 1));
      totalElapsedSecondsThisSession++;
      
      if (totalElapsedSecondsThisSession > 0 && totalElapsedSecondsThisSession % POINT_INTERVAL_SECONDS === 0) {
         awardPointForWatchTime(lectureKey);
      }

    }, 1000);

    return () => clearInterval(interval);
  }, [user, isTabActive, isLoading, lectureKey, remainingTime, timerHasStarted]);

  const getTimerStatusMessage = () => {
      if(isLoading) return "Loading your progress...";
      if (!user) return "Sign in to earn points for watching lectures.";
      if (remainingTime <= 0) return "Points for this lecture are maxed out.";
      if (isTabActive) {
          if(!timerHasStarted) return "Timer will start when you go to the video tab.";
          return "Timer paused. Go to the video tab to continue earning points.";
      }
      return "Timer is running. You are earning points!";
  }

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground px-2 py-4 sm:px-4 md:p-6">
      <header className="flex items-center justify-between mb-8 w-full max-w-5xl mx-auto">
        <Button variant="outline" size="lg" onClick={() => router.back()} className="rounded-lg">
          <ArrowLeft className="mr-2 h-5 w-5" /> Back to Lectures
        </Button>
        <Link href="/" passHref>
          <Button variant="outline" size="lg" className="rounded-lg">
            <HomeIcon className="mr-2 h-5 w-5" /> Home
          </Button>
        </Link>
      </header>
      <main className="flex-grow flex flex-col justify-center items-center w-full">
        {lecture ? (
          <div className="w-full max-w-md text-center bg-card p-8 rounded-2xl shadow-2xl border">
            <h1 className="text-2xl font-bold text-foreground mb-4">
              {lecture.title}
            </h1>
            <p className="text-muted-foreground mb-6">
              Your video has opened in a new tab. Keep this page open in the background to earn points while you watch.
            </p>
            <div className="font-mono p-4 bg-muted rounded-lg mb-6">
                <div className="flex justify-center items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Timer className="h-4 w-4"/>
                    <span>Time Remaining for Points</span>
                </div>
                <div className="text-4xl font-bold text-primary tracking-wider">
                    {formatTime(remainingTime)}
                </div>
            </div>
            
            <div className="text-sm p-3 bg-primary/10 text-primary-foreground/80 rounded-md">
                <Info className="inline h-4 w-4 mr-2" />
                {getTimerStatusMessage()}
            </div>

            <Button variant="outline" className="w-full mt-6" onClick={() => lecture && openExternalPlayer(lecture.videoEmbedUrl!)}>
                <ExternalLink className="mr-2 h-4 w-4"/>
                Re-open Video Tab
            </Button>
          </div>
        ) : statusMessage ? (
          <div className="text-center bg-destructive text-destructive-foreground p-6 rounded-lg max-w-md">
            <AlertCircle className="mx-auto h-12 w-12 mb-4" />
            <h2 className="text-xl font-bold">Could not start session</h2>
            <p>{statusMessage}</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="h-12 w-12 animate-spin text-primary" />
            <p className="text-muted-foreground">Preparing your session...</p>
          </div>
        )}
      </main>
    </div>
  );
}
