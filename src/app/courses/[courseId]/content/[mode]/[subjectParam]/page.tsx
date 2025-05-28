
'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight } from 'lucide-react';

const subjectContentMap: { [key: string]: string | string[] } = {
  'Physics': 'Units and Measurement',
  'Chemistry': ['Some Basic Concepts of Chemistry', 'Structure of Atom', 'Classification of Elements'], // Added more for Chemistry example
  'Biology': 'The Living World',
  'Mathematics': ['Sets', 'Complex Numbers', 'Relation & Functions'],
  'Business Studies': ['Business, Trade & Commerce', 'Forms of Business Organisations'],
  'Accountancy': ['Basic Concepts of Accounts', 'Introduction To accounting'],
  'Economics': 'Economics Content Coming Soon',
  'Social Science': 'Social Science Content Coming Soon',
  'Science': 'Science Content Coming Soon', // Placeholder for Aarambh
};

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
    if (subjectParam) {
      try {
        const decodedSubjectName = decodeURIComponent(subjectParam);
        setSubjectName(decodedSubjectName);
        const content = subjectContentMap[decodedSubjectName] || `Content for ${decodedSubjectName} Coming Soon`;
        setDisplayedContent(content);
      } catch (e) {
        console.error("Failed to decode subject param:", e);
        const fallbackName = "Invalid Subject";
        setSubjectName(fallbackName);
        setDisplayedContent(`Content for '${subjectParam}' could not be loaded due to a decoding error.`);
      }
    } else {
      setSubjectName('Unknown Subject');
      setDisplayedContent('No subject specified in URL.');
    }
  }, [subjectParam]);

  React.useEffect(() => {
    if (isMounted && subjectName) {
      const modeText = mode === 'notes' ? 'Notes' : 'Videos';
      let pageTitleSegment = subjectName;
      if (typeof displayedContent === 'string' && !displayedContent.includes('Coming Soon') && !displayedContent.includes('could not be loaded')) {
        pageTitleSegment = displayedContent;
      }
      document.title = `${pageTitleSegment} - ${modeText} | E-Leak`;
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

    if (item === 'Some Basic Concepts of Chemistry') {
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

    // For other items, or items that don't have a special link
    return (
      <div 
        key={index}
        className="w-full max-w-md block mb-6 cursor-default" // Make non-linked items also appear similar
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
          {displayedContent ? (
            Array.isArray(displayedContent) ? (
              displayedContent.map((item, index) => renderCard(item, index))
            ) : (
              typeof displayedContent === 'string' ? renderCard(displayedContent, 0) : null
            )
          ) : (
             subjectName === 'Unknown Subject' || (typeof displayedContent === 'string' && displayedContent.includes('could not be loaded')) ? (
              <p className="text-xl text-destructive-foreground bg-destructive p-4 rounded-md">{displayedContent}</p>
            ) : (
              <p className="text-xl text-muted-foreground">Subject content not found or coming soon.</p>
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
