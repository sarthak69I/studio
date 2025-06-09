
'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight, Video, FileText, Bot } from 'lucide-react';
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent, // Class 10
  aarambh9CourseContent, // Class 9
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


export default function TopicLecturesPage() {
  const router = useRouter();
  const params = useParams();

  const courseId = getParamAsString(params.courseId);
  const mode = getParamAsString(params.mode);
  const subjectParam = getParamAsString(params.subjectParam);
  const topicParam = getParamAsString(params.topicParam);

  const [topicName, setTopicName] = React.useState('');
  const [subjectName, setSubjectName] = React.useState('');
  const [lectures, setLectures] = React.useState<Lecture[]>([]);
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isFaqsDialogOpen, setIsFaqsDialogOpen] = React.useState(false);


  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (isMounted && topicParam && subjectParam && courseId) {
      try {
        const decodedTopicName = decodeURIComponent(topicParam);
        const decodedSubjectName = decodeURIComponent(subjectParam);
        setTopicName(decodedTopicName);
        setSubjectName(decodedSubjectName);

        let currentCourseMap: CourseContentMap | undefined;
        if (courseId === '1') currentCourseMap = scienceCourseContent;
        else if (courseId === '2') currentCourseMap = commerceCourseContent;
        else if (courseId === '3') currentCourseMap = aarambhCourseContent; // Class 10
        else if (courseId === '4') currentCourseMap = aarambh9CourseContent; // Class 9

        if (currentCourseMap) {
          const subjectData = currentCourseMap[decodedSubjectName];
          if (typeof subjectData === 'string') {
            setStatusMessage(subjectData); // e.g., "Coming Soon"
            setLectures([]);
          } else if (Array.isArray(subjectData)) { // Array of Topic objects
            const currentTopic = subjectData.find((t: Topic) => t.name === decodedTopicName);
            if (currentTopic && currentTopic.lectures && currentTopic.lectures.length > 0) {
              setLectures(currentTopic.lectures);
              setStatusMessage(null);
            } else if (currentTopic) {
              setStatusMessage(`Lectures for ${decodedTopicName} are not yet available.`);
              setLectures([]);
            } else {
              setStatusMessage(`Topic "${decodedTopicName}" not found in ${decodedSubjectName}.`);
              setLectures([]);
            }
          } else {
             setStatusMessage(`Content structure for ${decodedSubjectName} is not recognized.`);
             setLectures([]);
          }
        } else {
          setStatusMessage(`Course data not found for course ID: ${courseId}.`);
          setLectures([]);
        }
      } catch (e) {
        console.error("Failed to decode params or load lectures:", e);
        setTopicName("Invalid Topic");
        setStatusMessage("Could not load lectures due to a decoding error.");
        setLectures([]);
      }
    } else if (isMounted) {
      setTopicName('Unknown Topic');
      setStatusMessage('No topic or subject specified in URL.');
      setLectures([]);
    }
  }, [isMounted, topicParam, subjectParam, courseId]);


  React.useEffect(() => {
    if (isMounted && topicName && topicName !== 'Unknown Topic' && topicName !== 'Invalid Topic') {
      const modeText = mode === 'notes' ? 'Notes' : 'Videos';
      document.title = `Lectures: ${topicName} - ${modeText} | E-Leak`;
    } else if (isMounted && topicName) {
      document.title = `${topicName} | E-Leak`;
    } else if (isMounted) {
      document.title = 'Lectures | E-Leak';
    }
  }, [isMounted, topicName, mode]);

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading...</p>
      </div>
    );
  }

  const renderLectureCard = (lecture: Lecture, index: number) => {
    const cardContent = (
      <div
        className="bg-card text-card-foreground p-6 sm:px-8 sm:py-6 rounded-xl shadow-xl w-full max-w-md
                   transform opacity-0 animate-fadeInUp-custom
                   transition-all duration-200 ease-in-out hover:scale-105 hover:bg-card/90"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-semibold">{lecture.title}</span>
           {(mode === 'notes' && lecture.notesLink && lecture.notesLink !== '#') || (mode === 'video' && lecture.videoEmbedUrl) ? (
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
          ) : null}
        </div>
        <p className="text-sm text-muted-foreground mt-2 capitalize">
          {mode === 'notes' ? <FileText className="inline h-4 w-4 mr-1" /> : <Video className="inline h-4 w-4 mr-1" />}
          {lecture.title} - {mode}
        </p>
      </div>
    );

    if (mode === 'notes' && lecture.notesLink && lecture.notesLink !== '#') {
      return (
        <a
          key={lecture.id}
          href={lecture.notesLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md block mb-6 cursor-pointer"
        >
          {cardContent}
        </a>
      );
    }

    if (mode === 'video' && lecture.videoEmbedUrl) {
      // Construct the external player URL
      const externalPlayerUrl = `https://e-leak-strm.web.app/?url=${encodeURIComponent(lecture.videoEmbedUrl)}`;
      return (
        <a // Changed from Link to <a> for direct external URL
          key={lecture.id}
          href={externalPlayerUrl}
          className="w-full max-w-md block mb-6 cursor-pointer"
          target="_blank"
          rel="noopener noreferrer"
        >
          {cardContent}
        </a>
      );
    }

    return (
       <div
        key={lecture.id}
        className="w-full max-w-md block mb-6 cursor-default"
      >
        {cardContent}
      </div>
    );
  };

  return (
    <>
      <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
        <header className="flex items-center justify-between mb-8 w-full max-w-4xl mx-auto">
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

        <main className="flex-grow flex flex-col justify-start items-center pt-10 md:pt-16 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8 text-center">
            {topicName || "Loading Topic..."} <span className="capitalize">{mode}</span>
          </h1>

          {statusMessage ? (
            (topicName === 'Unknown Topic' || topicName === 'Invalid Topic' || statusMessage.includes('Could not load') || statusMessage.includes('not found') || statusMessage.includes('not recognized')) ? (
                 <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">{statusMessage}</p>
            ) : (
                 <p className="text-xl text-muted-foreground">{statusMessage}</p>
            )
          ) : lectures.length > 0 ? (
            lectures.map((lecture, index) => renderLectureCard(lecture, index))
          ) : (
             <p className="text-xl text-muted-foreground">Loading lectures or no lectures available for this topic.</p>
          )}
        </main>

        <div className="mt-12 mb-6 text-center">
          <p className="text-muted-foreground mb-2">Need AI Assistance?</p>
          <a href="https://eleakai.vercel.app/">
            <Button variant="outline" size="lg" className="rounded-lg">
              <Bot className="mr-2 h-5 w-5" />
              E-Leak AI
            </Button>
          </a>
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

    