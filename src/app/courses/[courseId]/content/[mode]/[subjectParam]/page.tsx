
'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight, Bot } from 'lucide-react';
import { 
  scienceCourseContent, 
  commerceCourseContent, 
  aarambhCourseContent, // For Class 10
  aarambh9CourseContent, // For Class 9
  type CourseContentMap,
  type Topic
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


export default function SubjectContentPage() {
  const router = useRouter();
  const params = useParams();

  const courseId = getParamAsString(params.courseId);
  const mode = getParamAsString(params.mode);
  const subjectParam = getParamAsString(params.subjectParam);
  
  const [subjectName, setSubjectName] = React.useState('');
  const [displayedTopics, setDisplayedTopics] = React.useState<Topic[] | string | null>(null);
  const [isFaqsDialogOpen, setIsFaqsDialogOpen] = React.useState(false);


  React.useEffect(() => {
    if (subjectParam && courseId) {
      try {
        const decodedSubjectName = decodeURIComponent(subjectParam);
        setSubjectName(decodedSubjectName);

        let currentCourseMap: CourseContentMap | undefined;
        if (courseId === '1') { 
          currentCourseMap = scienceCourseContent;
        } else if (courseId === '2') { 
          currentCourseMap = commerceCourseContent;
        } else if (courseId === '3') { 
          currentCourseMap = aarambhCourseContent; // Class 10 Aarambh
        } else if (courseId === '4') {
          currentCourseMap = aarambh9CourseContent; // Class 9 Aarambh
        }
        
        const content = currentCourseMap ? currentCourseMap[decodedSubjectName] : undefined;
        
        if (content) {
          if (typeof content === 'string') { // e.g., "Coming Soon"
            setDisplayedTopics(content);
          } else if (Array.isArray(content)) { // Array of Topic objects
            setDisplayedTopics(content as Topic[]);
          } else {
            setDisplayedTopics(`Content for ${decodedSubjectName} is in an unrecognized format.`);
          }
        } else {
           setDisplayedTopics(`Content for ${decodedSubjectName} Coming Soon`);
        }

      } catch (e) {
        console.error("Failed to decode subject param or load content:", e);
        const fallbackName = "Invalid Subject";
        setSubjectName(fallbackName);
        setDisplayedTopics(`Content for '${subjectParam}' could not be loaded due to a decoding error.`);
      }
    } else { 
      setSubjectName('Unknown Subject');
      setDisplayedTopics('No subject specified in URL or course ID missing.');
    }
  }, [subjectParam, courseId]); 

  React.useEffect(() => {
    if (subjectName) {
      const modeText = mode === 'notes' ? 'Notes' : 'Videos';
      let pageTitleSegment = subjectName;
      
      if (Array.isArray(displayedTopics) && displayedTopics.length > 0 && typeof displayedTopics[0] !== 'string' && displayedTopics[0].name) {
        // Use subject name if multiple topics
      } else if (typeof displayedTopics === 'string' && !displayedTopics.includes('Coming Soon') && !displayedTopics.includes('could not be loaded') && !displayedTopics.includes('unrecognized format')) {
        pageTitleSegment = displayedTopics; // Use specific topic name if it's a single string topic
      }
      document.title = `${pageTitleSegment} - ${subjectName} ${modeText} | E-Leak`;
    } else {
      document.title = 'Subject Content | E-Leak';
    }
  }, [subjectName, mode, displayedTopics]);


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
          {(topic.lectures && topic.lectures.length > 0) || (mode === 'notes' && topic.topicNotesLink) || (mode === 'video' && topic.topicVideoLink) ? (
            <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
          ) : null}
        </div>
        <p className="text-sm text-muted-foreground mt-2 capitalize">
          {mode} for {subjectName}
        </p>
      </div>
    );

    const hasLectures = topic.lectures && topic.lectures.length > 0;

    if (hasLectures) {
      return (
        <Link 
          key={index} 
          href={`/courses/${courseId}/content/${mode}/${encodeURIComponent(subjectName)}/${encodeURIComponent(topic.name)}/lectures`}
          className="w-full max-w-md block mb-6 cursor-pointer"
        >
          {cardContent}
        </Link>
      );
    }
    
    const directLink = mode === 'notes' ? topic.topicNotesLink : topic.topicVideoLink;
    if (directLink && directLink !== '#') { 
        return (
            <a 
              key={index} 
              href={directLink} 
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
        key={index}
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
          {subjectName && subjectName !== 'Unknown Subject' && subjectName !== 'Invalid Subject' && (
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
              {subjectName} <span className="capitalize">{mode}</span>
            </h1>
          )}
          
          {(() => {
            if (!displayedTopics) {
                 return (subjectName === 'Unknown Subject' || (typeof displayedTopics === 'string' && displayedTopics && (displayedTopics.includes('could not be loaded') || displayedTopics.includes('No subject specified')))) ? (
                  <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">
                    {typeof displayedTopics === 'string' ? displayedTopics : 'Loading content or content not found.'}
                  </p>
                ) : (
                  <p className="text-xl text-muted-foreground">Loading content or content not found.</p>
                );
            }

            if (typeof displayedTopics === 'string') {
                 return (displayedTopics.includes('Coming Soon') || displayedTopics.includes('could not be loaded') || displayedTopics.includes('No subject specified') || displayedTopics.includes('unrecognized format')) ? (
                    (subjectName === 'Unknown Subject' || displayedTopics.includes('could not be loaded') || displayedTopics.includes('No subject specified') || displayedTopics.includes('unrecognized format')) ? (
                        <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">{displayedTopics}</p>
                    ) : (
                        <p className="text-xl text-muted-foreground">{displayedTopics}</p>
                    )
                  ) : (
                    renderTopicCard({ name: displayedTopics } as Topic, 0) 
                  );
            }
            
            if (Array.isArray(displayedTopics)) {
               if (displayedTopics.length === 0) {
                return <p className="text-xl text-muted-foreground">No topics available for {subjectName} yet. Content coming soon!</p>;
              }
              return displayedTopics.map((topic, index) => renderTopicCard(topic, index));
            }

            return <p className="text-xl text-muted-foreground">Content format not recognized.</p>;
          })()}
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

    