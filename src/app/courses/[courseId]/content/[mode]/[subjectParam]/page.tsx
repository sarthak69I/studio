
'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Head from 'next/head';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, ChevronRight } from 'lucide-react';

const subjectContentMap: { [key: string]: string | string[] } = {
  'Physics': 'Units and Measurement',
  'Chemistry': 'Some Basic Concepts of Chemistry',
  'Biology': 'The Living World',
  'Mathematics': ['Sets', 'Complex Numbers', 'Relation & Functions'],
  'Business Studies': ['Business, Trade & Commerce', 'Forms of Business Organisations'],
  'Accountancy': ['Basic Concepts of Accounts', 'Introduction To accounting'],
  'Economics': 'Economics Content Coming Soon', // Placeholder
  'Social Science': 'Social Science Content Coming Soon', // Placeholder
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
        setDisplayedContent(fallbackName);
      }
    }
  }, [subjectParam]);

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading...</p>
      </div>
    );
  }

  const pageTitle = subjectName ? `${subjectName} - ${mode === 'notes' ? 'Notes' : 'Videos'}` : 'Subject Content';

  return (
    <>
      <Head>
        <title>{pageTitle} | E-Leak</title>
      </Head>
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
              displayedContent.map((item, index) => (
                <div 
                  key={index}
                  className="bg-card text-card-foreground p-6 sm:px-8 sm:py-6 rounded-xl shadow-xl w-full max-w-md cursor-pointer 
                             transform opacity-0 animate-fadeInUp-custom mb-6
                             transition-all duration-200 ease-in-out hover:scale-105 hover:bg-card/90"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xl sm:text-2xl font-semibold">{item}</span>
                    <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 capitalize">
                    {mode} for {subjectName}
                  </p>
                </div>
              ))
            ) : (
              <div 
                className="bg-card text-card-foreground p-6 sm:px-8 sm:py-6 rounded-xl shadow-xl w-full max-w-md cursor-pointer 
                           transform opacity-0 animate-fadeInUp-custom
                           transition-all duration-200 ease-in-out hover:scale-105 hover:bg-card/90"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-semibold">{displayedContent}</span>
                  <ChevronRight className="h-6 w-6 sm:h-7 sm:w-7 text-muted-foreground" />
                </div>
                <p className="text-sm text-muted-foreground mt-2 capitalize">
                  {mode} for {subjectName} 
                </p>
              </div>
            )
          ) : (
            <p className="text-xl text-muted-foreground">Subject content not found.</p>
          )}
        </main>

        <footer className="text-center text-sm text-muted-foreground mt-auto py-4">
          <p>© E-Leak All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
