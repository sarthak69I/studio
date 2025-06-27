'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, Maximize, Bot } from 'lucide-react';
// CustomHlsPlayer is no longer used here directly for 'hls' type
// import CustomHlsPlayer from '@/components/custom-hls-player';
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  aarambh9CourseContent, // Added for consistency
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
import { markLectureAsCompleted } from '@/lib/progress-manager';


export default function LecturePlayerClient() {
  const router = useRouter();
  const params = useParams();

  const courseId = getParamAsString(params.courseId);
  const mode = getParamAsString(params.mode); // Should be 'video' for this player
  const subjectParam = getParamAsString(params.subjectParam);
  const topicParam = getParamAsString(params.topicParam);
  const lectureId = getParamAsString(params.lectureId);

  const [lecture, setLecture] = React.useState<Lecture | null>(null);
  const [nextLecture, setNextLecture] = React.useState<Lecture | null>(null);
  const [statusMessage, setStatusMessage] = React.useState<string | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  const [isFaqsDialogOpen, setIsFaqsDialogOpen] = React.useState(false);
  const [courseName, setCourseName] = React.useState<string>('');


  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (isMounted && courseId && subjectParam && topicParam && lectureId && mode === 'video') {
      try {
        const decodedSubjectName = decodeURIComponent(subjectParam);
        const decodedTopicName = decodeURIComponent(topicParam);
        const decodedLectureId = decodeURIComponent(lectureId);

        let currentCourseMap: CourseContentMap | undefined;
        let currentCourseName = '';
        if (courseId === '1') {
          currentCourseMap = scienceCourseContent;
          currentCourseName = 'PRARAMBH CLASS 11th Science Batch';
        } else if (courseId === '2') {
          currentCourseMap = commerceCourseContent;
          currentCourseName = 'CLASS 11th Commerce Batch';
        } else if (courseId === '3') {
          currentCourseMap = aarambhCourseContent;
          currentCourseName = 'Class 10th Aarambh Foundation Batch';
        } else if (courseId === '4') { // Added Class 9 Aarambh
          currentCourseMap = aarambh9CourseContent;
          currentCourseName = 'Class 9th Aarambh Foundation Batch';
        }
        setCourseName(currentCourseName);


        if (currentCourseMap) {
          const subjectData = currentCourseMap[decodedSubjectName];
          if (typeof subjectData === 'string') {
            setStatusMessage(`Subject data for "${decodedSubjectName}" is unavailable.`);
          } else if (Array.isArray(subjectData)) {
            const currentTopic = subjectData.find((t: Topic) => t.name === decodedTopicName);
            if (currentTopic && currentTopic.lectures) {
              const currentLectureIndex = currentTopic.lectures.findIndex(l => l.id === decodedLectureId);
              if (currentLectureIndex !== -1) {
                const currentLecture = currentTopic.lectures[currentLectureIndex];
                if (currentLecture.videoEmbedUrl) {
                  setLecture(currentLecture);
                  setStatusMessage(null);
                  markLectureAsCompleted(courseId, decodedSubjectName, decodedTopicName, decodedLectureId);

                  // Find next lecture
                  if (currentLectureIndex + 1 < currentTopic.lectures.length) {
                    const nextLec = currentTopic.lectures[currentLectureIndex + 1];
                    if(nextLec.videoEmbedUrl) setNextLecture(nextLec);
                    else setNextLecture(null);
                  } else {
                    setNextLecture(null); // No more lectures in this topic
                  }
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
      if (mode !== 'video') {
        setStatusMessage('This player is for video content only.');
      } else {
        setStatusMessage('Required information to load video is missing from URL.');
      }
    }
  }, [isMounted, courseId, subjectParam, topicParam, lectureId, mode]);

  React.useEffect(() => {
    if (isMounted && lecture) {
      document.title = `Playing: ${lecture.title} | E-Leak`;
    } else if (isMounted && statusMessage) {
       document.title = `Video Player | E-Leak`;
    }
  }, [isMounted, lecture, statusMessage]);

  const handlePlaybackEnded = () => {
    if (nextLecture && nextLecture.videoEmbedUrl && lecture?.videoEmbedType !== 'hls') {
      const nextLecturePath = `/courses/${courseId}/content/video/${subjectParam}/${topicParam}/lectures/${encodeURIComponent(nextLecture.id)}/play`;
      router.push(nextLecturePath);
    } else {
      // console.log("Playback ended. No next video lecture or next is HLS (handled by iframe) or no video URL.");
    }
  };

  const renderPlayer = () => {
    if (!lecture || !lecture.videoEmbedUrl) {
        return <p className="text-center text-muted-foreground">Video content is currently unavailable for this lecture.</p>;
    }

    const playerContainerClasses = "aspect-video w-full rounded-xl overflow-hidden shadow-2xl bg-black border border-border";

    if (lecture.videoEmbedType === 'hls') {
      let newPlayerUrl = `https://e-leak-strm.web.app/?url=${encodeURIComponent(lecture.videoEmbedUrl)}`;
      
      // Pass the video title to the player
      newPlayerUrl += `&videoTitle=${encodeURIComponent(lecture.title)}`;

      if (lecture.notesLink && lecture.notesLink.trim() !== '' && lecture.notesLink.trim() !== '#') {
        newPlayerUrl += `&notesUrl=${encodeURIComponent(lecture.notesLink)}`;
        // Use lecture.notesTitle if available, otherwise fallback to lecture.title, then append " - Notes"
        const baseNotesTitle = (lecture.notesTitle && lecture.notesTitle.trim()) ? lecture.notesTitle : lecture.title;
        const finalNotesTitle = `${baseNotesTitle} - Notes`;
        newPlayerUrl += `&notesTitle=${encodeURIComponent(finalNotesTitle)}`;
      }
      return (
        <div className={playerContainerClasses}>
          <iframe
            src={newPlayerUrl}
            title={lecture.title}
            width="100%"
            height="100%"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="border-0"
          ></iframe>
        </div>
      );
    }

    if (lecture.videoEmbedType === 'youtube' || lecture.videoEmbedType === 'iframe') {
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
            // onEnded is not a standard iframe attribute. Autoplay next for YouTube/generic iframes is complex.
            // For simplicity, manual navigation or reliance on YouTube's own "up next" is assumed.
          ></iframe>
        </div>
      );
    }
    return <p className="text-center text-muted-foreground">Unsupported video type: {lecture.videoEmbedType}.</p>;
  };


  return (
    <>
    <div className="flex flex-col min-h-screen bg-background text-foreground px-2 py-4 sm:px-4 md:p-6">
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
          <div className="w-full max-w-2xl">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              {lecture.title}
            </h1>
            {renderPlayer()}
            {lecture.videoEmbedType !== 'hls' && lecture.videoEmbedUrl && (
              <div className="mt-3 text-center text-sm text-muted-foreground p-2 bg-card/50 rounded-md max-w-md mx-auto">
                <Maximize className="inline h-4 w-4 mr-1" />
                For the best viewing experience, try double-clicking the video or using the player's full-screen button.
              </div>
            )}
            <p className="text-muted-foreground text-center mt-4 text-sm px-2">
              Playing: {lecture.title} from {decodeURIComponent(topicParam || '')} - {decodeURIComponent(subjectParam || '')}
            </p>
             {nextLecture && nextLecture.videoEmbedUrl && (
              <p className="text-primary text-center mt-2 text-xs">
                Up next: {nextLecture.title}
                {lecture.videoEmbedType !== 'hls' ? ' (Autoplay might depend on video source)' : ''}
              </p>
            )}
          </div>
        ) : statusMessage ? (
          <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md text-center">{statusMessage}</p>
        ) : (
          <p className="text-xl text-muted-foreground text-center">Loading video information...</p>
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
