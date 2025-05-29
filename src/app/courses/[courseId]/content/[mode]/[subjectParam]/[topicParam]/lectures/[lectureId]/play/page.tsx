
'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, HelpCircle } from 'lucide-react';
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  type CourseContentMap,
  type Lecture,
  type Topic,
} from '@/lib/course-data';
import { getParamAsString } from '@/lib/utils';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { FaqDialogContent } from '@/components/faq-dialog-content';

export default function LecturePlayPage() {
  const router = useRouter();
  const params = useParams();

  const courseId = getParamAsString(params.courseId);
  // const mode = getParamAsString(params.mode); // mode will always be 'video' here
  const subjectParam = getParamAsString(params.subjectParam);
  const topicParam = getParamAsString(params.topicParam);
  const lectureId = getParamAsString(params.lectureId);

  const [lecture, setLecture] = React.useState<Lecture | null>(null);
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isFaqsDialogOpen, setIsFaqsDialogOpen] = React.useState(false);


  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (isMounted && courseId && subjectParam && topicParam && lectureId) {
      try {
        const decodedSubjectName = decodeURIComponent(subjectParam);
        const decodedTopicName = decodeURIComponent(topicParam);
        const decodedLectureId = decodeURIComponent(lectureId);

        let currentCourseMap: CourseContentMap | undefined;
        if (courseId === '1') currentCourseMap = scienceCourseContent;
        else if (courseId === '2') currentCourseMap = commerceCourseContent;
        else if (courseId === '3') currentCourseMap = aarambhCourseContent;

        if (currentCourseMap) {
          const subjectData = currentCourseMap[decodedSubjectName];
          if (typeof subjectData === 'string') {
            setStatusMessage(`Subject data for "${decodedSubjectName}" is unavailable.`);
          } else if (Array.isArray(subjectData)) {
            const currentTopic = subjectData.find((t: Topic) => t.name === decodedTopicName);
            if (currentTopic && currentTopic.lectures) {
              const currentLecture = currentTopic.lectures.find(l => l.id === decodedLectureId);
              if (currentLecture) {
                if (currentLecture.videoEmbedUrl) {
                  setLecture(currentLecture);
                  setStatusMessage(null);
                } else {
                  setStatusMessage(`Video for lecture "${currentLecture.title}" is not available.`);
                }
              } else {
                setStatusMessage(`Lecture "${decodedLectureId}" not found in topic "${decodedTopicName}".`);
              }
            } else {
              setStatusMessage(`Topic "${decodedTopicName}" not found or has no lectures.`);
            }
          } else {
            setStatusMessage(`Content structure for "${decodedSubjectName}" is not recognized.`);
          }
        } else {
          setStatusMessage(`Course data not found for course ID: ${courseId}.`);
        }
      } catch (e) {
        console.error("Failed to load lecture video:", e);
        setStatusMessage("Could not load video due to an error.");
      }
    } else if (isMounted) {
      setStatusMessage('Required information to load video is missing from URL.');
    }
  }, [isMounted, courseId, subjectParam, topicParam, lectureId]);

  React.useEffect(() => {
    if (isMounted && lecture) {
      document.title = `Playing: ${lecture.title} | E-Leak`;
    } else if (isMounted && statusMessage) {
       document.title = `Video Player | E-Leak`;
    }
  }, [isMounted, lecture, statusMessage]);
  
  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading Player...</p>
      </div>
    );
  }

  return (
    <>
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
      <header className="flex items-center justify-between mb-8 w-full max-w-5xl mx-auto">
        <Button variant="outline" size="lg" onClick={() => router.back()} className="rounded-lg">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back
        </Button>
        <Link href="/" passHref>
          <Button variant="outline" size="lg" className="rounded-lg">
            <HomeIcon className="mr-2 h-5 w-5" />
            Home
          </Button>
        </Link>
      </header>

      <main className="flex-grow flex flex-col justify-start items-center pt-10 md:pt-12 w-full">
        {lecture ? (
          <div className="w-full max-w-4xl">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              {lecture.title}
            </h1>
            <div className="aspect-video w-full rounded-xl overflow-hidden shadow-2xl border border-border bg-black">
              {lecture.videoEmbedUrl && (
                <iframe
                  src={lecture.videoEmbedUrl}
                  title={lecture.title}
                  width="100%"
                  height="100%"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="border-0"
                ></iframe>
              )}
            </div>
            <p className="text-muted-foreground text-center mt-4">
              Playing: {lecture.title} from {decodeURIComponent(topicParam || '')} - {decodeURIComponent(subjectParam || '')}
            </p>
          </div>
        ) : statusMessage ? (
          <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md text-center">{statusMessage}</p>
        ) : (
          <p className="text-xl text-muted-foreground text-center">Loading video information...</p>
        )}
      </main>

      <div className="mt-12 text-center">
        <Button 
          variant="outline" 
          size="lg"
          onClick={() => setIsFaqsDialogOpen(true)}
          className="rounded-lg"
          aria-label="View FAQs"
        >
          <HelpCircle className="mr-2 h-5 w-5" />
          Frequently Asked Questions
        </Button>
      </div>

      <footer className="text-center text-sm text-muted-foreground mt-auto py-4">
        <p>© E-Leak All rights reserved.</p>
      </footer>
    </div>
    <Dialog open={isFaqsDialogOpen} onOpenChange={setIsFaqsDialogOpen}>
      <DialogContent className="sm:max-w-lg rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl">Frequently Asked Questions</DialogTitle>
        </DialogHeader>
        <FaqDialogContent />
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
    </>
  );
}
