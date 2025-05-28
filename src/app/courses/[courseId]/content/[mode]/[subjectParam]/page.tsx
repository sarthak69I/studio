
'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight } from 'lucide-react';
import { 
  scienceCourseTopics, 
  commerceCourseTopics, 
  aarambhCourseTopics,
  type CourseTopicsMap 
} from '@/lib/course-data';


export default function SubjectContentPage() {
  const router = useRouter();
  const params = useParams();

  const courseId = typeof params.courseId === 'string' ? params.courseId : '';
  const mode = typeof params.mode === 'string' ? params.mode : '';
  const subjectParam = typeof params.subjectParam === 'string' ? params.subjectParam : '';
  
  const [subjectName, setSubjectName] = React.useState('');
  const [displayedContent, setDisplayedContent] = React.useState<string | string[] | null>(null);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (isMounted && subjectParam && courseId) {
      try {
        const decodedSubjectName = decodeURIComponent(subjectParam);
        setSubjectName(decodedSubjectName);

        let currentCourseMap: CourseTopicsMap = {};
        if (courseId === '1') { // Science Batch
          currentCourseMap = scienceCourseTopics;
        } else if (courseId === '2') { // Commerce Batch
          currentCourseMap = commerceCourseTopics;
        } else if (courseId === '3') { // Aarambh Batch
          currentCourseMap = aarambhCourseTopics;
        }
        
        const content = currentCourseMap[decodedSubjectName] || `Content for ${decodedSubjectName} Coming Soon`;
        setDisplayedContent(content);

      } catch (e) {
        console.error("Failed to decode subject param or load content:", e);
        const fallbackName = "Invalid Subject";
        setSubjectName(fallbackName);
        setDisplayedContent(`Content for '${subjectParam}' could not be loaded due to a decoding error.`);
      }
    } else if (isMounted) { 
      setSubjectName('Unknown Subject');
      setDisplayedContent('No subject specified in URL or course ID missing.');
    }
  }, [isMounted, subjectParam, courseId]);

  React.useEffect(() => {
    if (isMounted && subjectName) {
      const modeText = mode === 'notes' ? 'Notes' : 'Videos';
      let pageTitleSegment = subjectName;
      // Determine a more specific title if single topic is displayed
      if (typeof displayedContent === 'string' && !displayedContent.includes('Coming Soon') && !displayedContent.includes('could not be loaded')) {
         if (Array.isArray(displayedContent) && displayedContent.length === 1) {
            pageTitleSegment = displayedContent[0];
         } else if (typeof displayedContent === 'string') {
            pageTitleSegment = displayedContent;
         }
      }
      document.title = `${pageTitleSegment} - ${subjectName} ${modeText} | E-Leak`;
    } else if (isMounted) {
      document.title = 'Subject Content | E-Leak';
    }
  }, [isMounted, subjectName, mode, displayedContent]);


  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading...</p>
      </div>
    );
  }

  const renderCard = (item: string, index: number) => {
    const cardContent = (
      <div 
        className="bg-card text-card-foreground p-6 sm:px-8 sm:py-6 rounded-xl shadow-xl w-full max-w-md 
                   transform opacity-0 animate-fadeInUp-custom
                   transition-all duration-200 ease-in-out hover:scale-105 hover:bg-card/90"
        style={{ animationDelay: `${index * 0.1}s` }}
      >
        <div className="flex items-center justify-between">
          <span className="text-xl sm:text-2xl font-semibold">{item}</span>
          <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
        </div>
        <p className="text-sm text-muted-foreground mt-2 capitalize">
          {mode} for {subjectName}
        </p>
      </div>
    );

    // Link specific topics to their lecture pages
    if (subjectName === 'Chemistry' && item === 'Some Basic Concepts of Chemistry') {
      return (
        <Link 
          key={index} 
          href={`/courses/${courseId}/content/${mode}/${encodeURIComponent(subjectName)}/${encodeURIComponent(item)}/lectures`}
          className="w-full max-w-md block mb-6 cursor-pointer"
        >
          {cardContent}
        </Link>
      );
    }
    // Add more conditions here if other topics need specific links

    return (
      <div 
        key={index}
        className="w-full max-w-md block mb-6 cursor-default" // Default is non-clickable
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
          
          {displayedContent ? (
            Array.isArray(displayedContent) ? (
              displayedContent.map((item, index) => renderCard(item, index))
            ) : (
              (typeof displayedContent === 'string' && (displayedContent.includes('Coming Soon') || displayedContent.includes('could not be loaded') || displayedContent.includes('No subject specified'))) ? (
                (subjectName === 'Unknown Subject' || displayedContent.includes('could not be loaded') || displayedContent.includes('No subject specified')) ? (
                    <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">{displayedContent}</p>
                ) : (
                    <p className="text-xl text-muted-foreground">{displayedContent}</p>
                )
              ) : (
                typeof displayedContent === 'string' ? renderCard(displayedContent, 0) : null
              )
            )
          ) : (
             (subjectName === 'Unknown Subject' || (typeof displayedContent === 'string' && displayedContent && (displayedContent.includes('could not be loaded') || displayedContent.includes('No subject specified')))) ? (
              <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">
                {displayedContent || 'Content could not be loaded.'}
              </p>
            ) : (
              <p className="text-xl text-muted-foreground">Loading content or content not found.</p>
            )
          )}
        </main>

        <footer className="text-center text-sm text-muted-foreground mt-auto py-4">
          <p>© E-Leak All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
