'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight, Video, FileText, Bot, CheckCircle2 } from 'lucide-react';
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
import { markLectureAsCompleted, isLectureCompleted, getCompletedLectureKeys } from '@/lib/progress-manager';


export default function TopicLecturesPage() {
  const router = useRouter();
  const params = useParams();

  const courseId = getParamAsString(params.courseId);
  const mode = getParamAsString(params.mode);
  const subjectParam = getParamAsString(params.subjectParam);
  const topicParam = getParamAsString(params.topicParam);

  const [topicName, setTopicName] = React.useState('');
  const [subjectNameState, setSubjectNameState] = React.useState(''); // Renamed to avoid conflict
  const [displayedLectures, setDisplayedLectures] = React.useState<Lecture[]>([]);
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isFaqsDialogOpen, setIsFaqsDialogOpen] = React.useState(false);
  const [completedLectureKeys, setCompletedLectureKeys] = React.useState<Set<string>>(new Set());

  const generateLectureStorageKey = (cId: string, sName: string, tName: string, lId: string): string => {
    return `${cId}::${sName}::${tName}::${lId}`;
  };

  React.useEffect(() => {
    setIsMounted(true);
    if (typeof window !== 'undefined') {
      setCompletedLectureKeys(getCompletedLectureKeys());
    }
  }, []);

  React.useEffect(() => {
    if (isMounted && topicParam && subjectParam && courseId) {
      try {
        const decodedTopicName = decodeURIComponent(topicParam);
        const decodedSubjectName = decodeURIComponent(subjectParam);
        setTopicName(decodedTopicName);
        setSubjectNameState(decodedSubjectName); // Use renamed state setter
        setCompletedLectureKeys(getCompletedLectureKeys()); 

        let currentCourseMap: CourseContentMap | undefined;
        if (courseId === '1') currentCourseMap = scienceCourseContent;
        else if (courseId === '2') currentCourseMap = commerceCourseContent;
        else if (courseId === '3') currentCourseMap = aarambhCourseContent; 
        else if (courseId === '4') currentCourseMap = aarambh9CourseContent; 

        if (currentCourseMap) {
          const subjectData = currentCourseMap[decodedSubjectName];
          if (typeof subjectData === 'string') {
            setStatusMessage(subjectData); 
            setDisplayedLectures([]);
          } else if (Array.isArray(subjectData)) { 
            const currentTopic = subjectData.find((t: Topic) => t.name === decodedTopicName);
            if (currentTopic && currentTopic.lectures && currentTopic.lectures.length > 0) {
              let filteredLectures: Lecture[] = [];
              if (mode === 'notes') {
                filteredLectures = currentTopic.lectures.filter(
                  lec => lec.notesLink && lec.notesLink.trim() !== '' && lec.notesLink.trim() !== '#' &&
                         (lec.notesTitle?.trim() || lec.title?.trim())
                );
              } else if (mode === 'video') {
                filteredLectures = currentTopic.lectures.filter(
                  lec => lec.videoEmbedUrl && lec.videoEmbedUrl.trim() !== ''
                );
              } else {
                // Fallback or default behavior if mode is neither 'notes' nor 'video'
                filteredLectures = currentTopic.lectures;
              }
              
              setDisplayedLectures(filteredLectures);
              if (filteredLectures.length === 0) {
                 setStatusMessage(`No ${mode} available for ${decodedTopicName}.`);
              } else {
                setStatusMessage(null);
              }

            } else if (currentTopic) {
              setStatusMessage(`Lectures for ${decodedTopicName} are not yet available.`);
              setDisplayedLectures([]);
            } else {
              setStatusMessage(`Topic "${decodedTopicName}" not found in ${decodedSubjectName}.`);
              setDisplayedLectures([]);
            }
          } else {
             setStatusMessage(`Content structure for ${decodedSubjectName} is not recognized.`);
             setDisplayedLectures([]);
          }
        } else {
          setStatusMessage(`Course data not found for course ID: ${courseId}.`);
          setDisplayedLectures([]);
        }
      } catch (e) {
        console.error("Failed to decode params or load lectures:", e);
        setTopicName("Invalid Topic");
        setStatusMessage("Could not load lectures due to a decoding error.");
        setDisplayedLectures([]);
      }
    } else if (isMounted) {
      setTopicName('Unknown Topic');
      setStatusMessage('No topic or subject specified in URL.');
      setDisplayedLectures([]);
    }
  }, [isMounted, topicParam, subjectParam, courseId, mode]);


  React.useEffect(() => {
    if (isMounted && topicName && topicName !== 'Unknown Topic' && topicName !== 'Invalid Topic') {
      const modeText = mode === 'notes' ? 'Notes' : 'Videos';
      document.title = `${topicName} - ${modeText} | E-Leak`;
    } else if (isMounted && topicName) {
      document.title = `${topicName} | E-Leak`;
    } else if (isMounted) {
      document.title = 'Lectures | E-Leak';
    }
  }, [isMounted, topicName, mode]);

  const handleLectureClick = (lecture: Lecture) => {
    if (isMounted && courseId && subjectNameState && topicName) {
      markLectureAsCompleted(courseId, subjectNameState, topicName, lecture.id);
      setCompletedLectureKeys(prev => new Set(prev).add(generateLectureStorageKey(courseId, subjectNameState, topicName, lecture.id)));
    }
  };

  const renderLectureCard = (lecture: Lecture, index: number) => {
    const isCompleted = completedLectureKeys.has(generateLectureStorageKey(courseId, subjectNameState, topicName, lecture.id));
    const cardClasses = `bg-card text-card-foreground p-6 sm:px-8 sm:py-6 rounded-xl shadow-xl w-full max-w-md
                       transform opacity-0 animate-fadeInUp-custom
                       transition-all duration-200 ease-in-out hover:scale-105 hover:bg-card/90
                       ${isCompleted ? 'opacity-60 border-l-4 border-green-500' : ''}`;

    let displayTitle = lecture.title;
    if (mode === 'notes' && lecture.notesTitle && lecture.notesTitle.trim() !== '') {
      displayTitle = lecture.notesTitle;
    }

    const cardContent = (
      <div
        className={cardClasses}
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {isCompleted && <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />}
            <span className="text-xl sm:text-2xl font-semibold">{displayTitle}</span>
          </div>
           {(mode === 'notes' && lecture.notesLink && lecture.notesLink.trim() !== '' && lecture.notesLink.trim() !== '#') || 
            (mode === 'video' && lecture.videoEmbedUrl && lecture.videoEmbedUrl.trim() !== '') ? (
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
          ) : null}
        </div>
        <p className="text-sm text-muted-foreground mt-2 capitalize">
          {mode === 'notes' ? <FileText className="inline h-4 w-4 mr-1" /> : <Video className="inline h-4 w-4 mr-1" />}
          {displayTitle} - {mode}
        </p>
      </div>
    );

    const commonClickHandler = () => handleLectureClick(lecture);

    if (mode === 'notes' && lecture.notesLink && lecture.notesLink.trim() !== '' && lecture.notesLink.trim() !== '#') {
      return (
        <a
          key={lecture.id + '-notes'}
          href={lecture.notesLink}
          rel="noopener noreferrer"
          className="w-full max-w-md block mb-6 cursor-pointer"
          onClick={commonClickHandler}
        >
          {cardContent}
        </a>
      );
    }

    if (mode === 'video' && lecture.videoEmbedUrl && lecture.videoEmbedUrl.trim() !== '') {
      if (lecture.videoEmbedType === 'hls') {
        let externalPlayerUrl = `https://e-leak-strm.web.app/?url=${encodeURIComponent(lecture.videoEmbedUrl)}`;
        if (lecture.notesLink && lecture.notesLink.trim() !== '' && lecture.notesLink.trim() !== '#') {
          externalPlayerUrl += `&notesUrl=${encodeURIComponent(lecture.notesLink)}`;
          if (lecture.notesTitle && lecture.notesTitle.trim() !== '') {
            externalPlayerUrl += `&notesTitle=${encodeURIComponent(lecture.notesTitle)}`;
          }
        }
        return (
          <a
            key={lecture.id + '-video-hls'}
            href={externalPlayerUrl}
            className="w-full max-w-md block mb-6 cursor-pointer"
            rel="noopener noreferrer"
            onClick={commonClickHandler}
          >
            {cardContent}
          </a>
        );
      } else { // YouTube or generic iframe, navigate internally
        return (
          <Link
            key={lecture.id + '-video-iframe'}
            href={`/courses/${courseId}/content/${mode}/${subjectParam}/${topicParam}/lectures/${encodeURIComponent(lecture.id)}/play`}
            className="w-full max-w-md block mb-6 cursor-pointer"
            onClick={commonClickHandler}
          >
            {cardContent}
          </Link>
        );
      }
    }
    // If lecture is filtered out by the logic in useEffect, it shouldn't reach here often.
    // This acts as a fallback if a lecture somehow passes filtering but isn't displayable.
    return (
       <div
        key={lecture.id + '-nodisplay'}
        className="w-full max-w-md block mb-6 cursor-default"
      >
        {cardContent} {/* Show the card, but it won't be interactive */}
      </div>
    );
  };

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading...</p>
      </div>
    );
  }

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
            (topicName === 'Unknown Topic' || topicName === 'Invalid Topic' || statusMessage.includes('Could not load') || statusMessage.includes('not found') || statusMessage.includes('not recognized') || statusMessage.includes('No lectures available') || statusMessage.includes(`No ${mode} available`)) ? (
                 <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">{statusMessage}</p>
            ) : (
                 <p className="text-xl text-muted-foreground">{statusMessage}</p>
            )
          ) : displayedLectures.length > 0 ? (
            displayedLectures.map((lecture, index) => renderLectureCard(lecture, index))
          ) : (
             <p className="text-xl text-muted-foreground">Loading {mode} or no {mode} available for this topic.</p>
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
