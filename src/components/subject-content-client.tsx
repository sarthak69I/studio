
'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight, Bot, Download } from 'lucide-react';
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  aarambh9CourseContent,
  type CourseContentMap,
  type Topic,
  scienceDppContent,
  commerceDppContent,
  aarambhDppContent,
  aarambh9DppContent,
  type DppItem
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

export default function SubjectContentClient() {
  const router = useRouter();
  const params = useParams();

  const courseId = getParamAsString(params.courseId);
  const mode = getParamAsString(params.mode);
  const subjectParam = getParamAsString(params.subjectParam);

  const [subjectName, setSubjectName] = React.useState('');
  const [displayedTopics, setDisplayedTopics] = React.useState<Topic[] | string | null>(null);
  const [displayedDpps, setDisplayedDpps] = React.useState<DppItem[]>([]);
  const [isFaqsDialogOpen, setIsFaqsDialogOpen] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (isMounted && subjectParam && courseId) {
      try {
        const decodedSubjectName = decodeURIComponent(subjectParam);
        setSubjectName(decodedSubjectName);

        if (mode === 'dpp') {
          let currentDppContent: DppItem[] = [];
          if (courseId === '1') currentDppContent = scienceDppContent;
          else if (courseId === '2') currentDppContent = commerceDppContent;
          else if (courseId === '3') currentDppContent = aarambhDppContent;
          else if (courseId === '4') currentDppContent = aarambh9DppContent;
          
          const subjectDpps = currentDppContent.filter(dpp => dpp.subject === decodedSubjectName);
          setDisplayedDpps(subjectDpps);
          setDisplayedTopics(null); // Clear topic display

        } else { // Handle video and notes mode
          let currentCourseMap: CourseContentMap | undefined;
          if (courseId === '1') currentCourseMap = scienceCourseContent;
          else if (courseId === '2') currentCourseMap = commerceCourseContent;
          else if (courseId === '3') currentCourseMap = aarambhCourseContent;
          else if (courseId === '4') currentCourseMap = aarambh9CourseContent;

          const content = currentCourseMap ? currentCourseMap[decodedSubjectName] : undefined;
          if (content) {
            setDisplayedTopics(content);
          } else {
            setDisplayedTopics(`Content for ${decodedSubjectName} Coming Soon`);
          }
          setDisplayedDpps([]); // Clear DPP display
        }

      } catch (e) {
        console.error("Failed to decode subject param or load content:", e);
        const fallbackName = "Invalid Subject";
        setSubjectName(fallbackName);
        setDisplayedTopics(`Content for '${subjectParam}' could not be loaded due to a decoding error.`);
      }
    } else if (isMounted) {
      setSubjectName('Unknown Subject');
      setDisplayedTopics('No subject specified in URL or course ID missing.');
    }
  }, [isMounted, subjectParam, courseId, mode]);

  const renderDppCard = (dpp: DppItem, index: number) => {
    return (
      <a
        key={dpp.title + index}
        href={dpp.download_url}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full max-w-md block mb-6 cursor-pointer"
      >
        <div
          className="bg-card text-card-foreground p-6 sm:px-8 sm:py-6 rounded-xl shadow-xl w-full max-w-md
                     transform opacity-0 animate-fadeInUp-custom
                     transition-all duration-200 ease-in-out hover:scale-105 hover:bg-card/90"
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div className="flex items-center justify-between">
            <span className="text-xl sm:text-2xl font-semibold">{dpp.title}</span>
            <Download className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="text-sm text-muted-foreground mt-2 capitalize">
            DPP for {dpp.subject}
          </p>
        </div>
      </a>
    );
  };

  const renderTopicCard = (topic: Topic, index: number) => {
    const cardContent = (
      <div
        className="bg-card text-card-foreground p-6 sm:px-8 sm:py-6 rounded-xl shadow-xl w-full max-w-md
                   transform opacity-0 animate-fadeInUp-custom
                   transition-all duration-200 ease-in-out hover:scale-105 hover:bg-card/90"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-semibold">{topic.name}</span>
          {(topic.lectures && topic.lectures.length > 0) || (mode === 'notes' && topic.topicNotesLink && topic.topicNotesLink !== '#') || (mode === 'video' && topic.topicVideoLink && topic.topicVideoLink !== '#') || (mode === 'dpp' && topic.topicDppLink && topic.topicDppLink !== '#') ? (
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
          ) : null}
        </div>
        <p className="text-sm text-muted-foreground mt-2 capitalize">
          {mode} for {subjectName}
        </p>
      </div>
    );

    const hasLectures = topic.lectures && topic.lectures.length > 0;

    let directLink: string | undefined;
    if (mode === 'notes') directLink = topic.topicNotesLink;
    else if (mode === 'video') directLink = topic.topicVideoLink;
    else if (mode === 'dpp') directLink = topic.topicDppLink;
    

    if (directLink && directLink.trim() !== '' && directLink.trim() !== '#') {
      return (
        <a
          key={topic.name + index}
          href={directLink}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md block mb-6 cursor-pointer"
        >
          {cardContent}
        </a>
      );
    }
    
    if (hasLectures) {
      return (
        <Link
          key={topic.name + index}
          href={`/courses/${courseId}/content/${mode}/${encodeURIComponent(subjectName)}/${encodeURIComponent(topic.name)}/lectures`}
          className="w-full max-w-md block mb-6 cursor-pointer"
        >
          {cardContent}
        </Link>
      );
    }

    return (
      <div
        key={topic.name + index}
        className="w-full max-w-md block mb-6 cursor-default"
      >
        {cardContent}
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
          {subjectName && subjectName !== 'Unknown Subject' && subjectName !== 'Invalid Subject' && (
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              {subjectName} <span className="capitalize">{mode}</span>
            </h1>
          )}

          {isMounted && mode === 'dpp' ? (
            displayedDpps.length > 0 ? (
              displayedDpps.map((dpp, index) => renderDppCard(dpp, index))
            ) : (
              <p className="text-xl text-muted-foreground">No DPPs available for {subjectName} yet. Content coming soon!</p>
            )
          ) : isMounted && mode !== 'dpp' ? (
             <>
              {typeof displayedTopics === 'string' && (
                <p
                  className={`text-xl p-4 rounded-md ${
                    displayedTopics.includes('could not be loaded') || displayedTopics.includes('No subject specified') || displayedTopics.includes('unrecognized format')
                      ? 'text-destructive-foreground bg-destructive'
                      : 'text-muted-foreground'
                  }`}
                >
                  {displayedTopics}
                </p>
              )}

              {Array.isArray(displayedTopics) &&
                (displayedTopics.length > 0 ? (
                  displayedTopics.map((topic, index) => renderTopicCard(topic, index))
                ) : (
                  <p className="text-xl text-muted-foreground">No topics available for {subjectName} yet. Content coming soon!</p>
                ))}
            </>
          ) : (
            <p className="text-xl text-muted-foreground">Loading content...</p>
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
