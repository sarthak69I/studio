
'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight } from 'lucide-react';
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  type CourseContentMap,
  type Lecture,
  type Topic,
} from '@/lib/course-data';
import { getParamAsString } from '@/lib/utils';

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
        else if (courseId === '3') currentCourseMap = aarambhCourseContent;

        if (currentCourseMap) {
          const subjectData = currentCourseMap[decodedSubjectName];
          if (typeof subjectData === 'string') { 
            setStatusMessage(subjectData); // e.g., "Coming Soon"
            setLectures([]);
          } else if (Array.isArray(subjectData)) { 
            const currentTopic = subjectData.find((t: Topic) => t.name === decodedTopicName);
            if (currentTopic && currentTopic.lectures && currentTopic.lectures.length > 0) {
              setLectures(currentTopic.lectures);
              setStatusMessage(null);
            } else if (currentTopic) { // Topic exists but has no lectures array or it's empty
              setStatusMessage(`Lectures for ${decodedTopicName} are not yet available.`);
              setLectures([]);
            } else { // Topic not found
              setStatusMessage(`Topic "${decodedTopicName}" not found in ${decodedSubjectName}.`);
              setLectures([]);
            }
          } else { // Should not happen with current data structure
             setStatusMessage(`Content structure for ${decodedSubjectName} is not recognized.`);
             setLectures([]);
          }
        } else { // Course map not found
          setStatusMessage(`Course data not found for course ID: ${courseId}.`);
          setLectures([]);
        }
      } catch (e) {
        console.error("Failed to decode params or load lectures:", e);
        setTopicName("Invalid Topic"); // Fallback name for display
        setStatusMessage("Could not load lectures due to a decoding error.");
        setLectures([]);
      }
    } else if (isMounted) { // topicParam, subjectParam or courseId is missing
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
    const lectureLink = mode === 'notes' ? lecture.notesLink : lecture.videoLink;

    const cardContent = (
      <div 
        className="bg-card text-card-foreground p-6 sm:px-8 sm:py-6 rounded-xl shadow-xl w-full max-w-md 
                   transform opacity-0 animate-fadeInUp-custom 
                   transition-all duration-200 ease-in-out hover:scale-105 hover:bg-card/90"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-semibold">{lecture.title}</span>
          {lectureLink && lectureLink !== '#' ? <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" /> : null}
        </div>
        <p className="text-sm text-muted-foreground mt-2 capitalize">
          {mode} for {topicName} ({subjectName})
        </p>
      </div>
    );

    if (lectureLink && lectureLink !== '#') {
      return (
        <a 
          key={lecture.id} 
          href={lectureLink} 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full max-w-md block mb-6 cursor-pointer"
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
            topicName === 'Unknown Topic' || topicName === 'Invalid Topic' || statusMessage.includes('Could not load') || statusMessage.includes('not found') ? (
                 <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">{statusMessage}</p>
            ) : (
                 <p className="text-xl text-muted-foreground">{statusMessage}</p>
            )
          ) : lectures.length > 0 ? (
            lectures.map((lecture, index) => renderLectureCard(lecture, index))
          ) : (
            // This case handles when lectures array is empty but there's no specific error status message yet (e.g. initial load)
            // or when statusMessage was null but lectures ended up empty (e.g. topic found, but lectures array was empty/undefined in data)
            <p className="text-xl text-muted-foreground">Loading lectures or no lectures available for this topic.</p>
          )}
        </main>

        <footer className="text-center text-sm text-muted-foreground mt-auto py-4">
          <p>© E-Leak All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
