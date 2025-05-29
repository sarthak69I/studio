
'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight, Bot } from 'lucide-react';
import { 
  scienceCourseContent, 
  commerceCourseContent, 
  aarambhCourseContent,
  type CourseContentMap,
  type Topic
} from '@/lib/course-data';
import { getParamAsString } from '@/lib/utils';
// Removed FAQ Dialog imports as it's no longer directly handled here

export default function SubjectContentPage() {
  const router = useRouter();
  const params = useParams();

  const courseId = getParamAsString(params.courseId);
  const mode = getParamAsString(params.mode);
  const subjectParam = getParamAsString(params.subjectParam);
  
  const [subjectName, setSubjectName] = React.useState('');
  const [displayedTopics, setDisplayedTopics] = React.useState<Topic[] | string | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);
  // Removed isFaqsDialogOpen state

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (isMounted && subjectParam && courseId) {
      try {
        const decodedSubjectName = decodeURIComponent(subjectParam);
        setSubjectName(decodedSubjectName);

        let currentCourseMap: CourseContentMap | undefined;
        if (courseId === '1') { // Science Batch
          currentCourseMap = scienceCourseContent;
        } else if (courseId === '2') { // Commerce Batch
          currentCourseMap = commerceCourseContent;
        } else if (courseId === '3') { // Aarambh Batch
          currentCourseMap = aarambhCourseContent;
        }
        
        const content = currentCourseMap ? currentCourseMap[decodedSubjectName] : undefined;
        
        if (content) {
          setDisplayedTopics(content as Topic[] | string); 
        } else {
           setDisplayedTopics(`Content for ${decodedSubjectName} Coming Soon`);
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
  }, [isMounted, subjectParam, courseId]); 

  React.useEffect(() => {
    if (isMounted && subjectName) {
      const modeText = mode === 'notes' ? 'Notes' : 'Videos';
      let pageTitleSegment = subjectName;
      
      if (Array.isArray(displayedTopics) && displayedTopics.length > 0 && typeof displayedTopics[0] !== 'string' && displayedTopics[0].name) {
        // If there are multiple topics, the main title is the subject name
      } else if (typeof displayedTopics === 'string' && !displayedTopics.includes('Coming Soon') && !displayedTopics.includes('could not be loaded')) {
        pageTitleSegment = displayedTopics;
      }
      document.title = `${pageTitleSegment} - ${subjectName} ${modeText} | E-Leak`;
    } else if (isMounted) {
      document.title = 'Subject Content | E-Leak';
    }
  }, [isMounted, subjectName, mode, displayedTopics]);


  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading...</p>
      </div>
    );
  }

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
                    {typeof displayedTopics === 'string' ? displayedTopics : 'Content could not be loaded.'}
                  </p>
                ) : (
                  <p className="text-xl text-muted-foreground">Loading content or content not found.</p>
                );
            }

            if (typeof displayedTopics === 'string') {
                return (displayedTopics.includes('Coming Soon') || displayedTopics.includes('could not be loaded') || displayedTopics.includes('No subject specified')) ? (
                    (subjectName === 'Unknown Subject' || displayedTopics.includes('could not be loaded') || displayedTopics.includes('No subject specified')) ? (
                        <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">{displayedTopics}</p>
                    ) : (
                        <p className="text-xl text-muted-foreground">{displayedTopics}</p>
                    )
                  ) : (
                    renderTopicCard({ name: displayedTopics } as Topic, 0) 
                  );
            }
            
            if (Array.isArray(displayedTopics)) {
              return displayedTopics.map((topic, index) => renderTopicCard(topic, index));
            }

            return <p className="text-xl text-muted-foreground">Content format not recognized.</p>;
          })()}
        </main>

        <div className="mt-12 mb-6 text-center">
          <p className="text-muted-foreground mb-2">Having Trouble?</p>
          <Link href="/help-center" passHref>
            <Button variant="outline" size="lg" className="rounded-lg">
              <Bot className="mr-2 h-5 w-5" />
              E-Leak 24/7 Support
            </Button>
          </Link>
        </div>

        <footer className="text-center text-sm text-muted-foreground mt-auto py-4">
          <p>© E-Leak All rights reserved.</p>
        </footer>
      </div>
      {/* Removed FAQ Dialog component from here */}
    </>
  );
}
