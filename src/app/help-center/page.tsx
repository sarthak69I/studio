
'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ArrowLeft, Home as HomeIcon, AlertCircle, CheckCircle, ExternalLink } from 'lucide-react';

interface HelpIssue {
  id: string;
  title: string;
  description: string;
  solutionSteps: { title: string; detail: string }[];
}

const helpIssues: HelpIssue[] = [
  {
    id: 'video-playback',
    title: 'Video Playback Problems',
    description: 'Video is not playing, buffering excessively, or showing an error.',
    solutionSteps: [
      { title: 'Check Internet Connection', detail: 'Ensure you have a stable internet connection. Try testing with another website or app.' },
      { title: 'Refresh Page', detail: 'A simple refresh (Ctrl+R or Cmd+R) can often resolve temporary glitches.' },
      { title: 'Try a Different Browser/Device', detail: 'This helps determine if the issue is specific to your current setup.' },
      { title: 'Clear Browser Cache & Cookies', detail: "Outdated cache can sometimes interfere. (Search 'how to clear cache [your browser name]')" },
      { title: 'Video Source Issue', detail: 'If the problem persists across multiple checks, the video source itself might be temporarily down. Please check back later or contact us via Telegram for updates.' },
    ],
  },
  {
    id: 'notes-loading',
    title: 'Notes Not Loading or Displaying Incorrectly',
    description: 'PDF notes are not opening, showing errors, or displaying garbled text.',
    solutionSteps: [
      { title: 'PDF Viewer', detail: 'Ensure your browser has a built-in PDF viewer enabled, or you have a PDF reader application installed (like Adobe Acrobat Reader).' },
      { title: 'Download and Open', detail: 'Try downloading the PDF file and opening it directly with a dedicated PDF reader application.' },
      { title: 'Corrupted File/Link', detail: 'If the issue continues, the file might be corrupted or the link broken. Please report this on our Telegram channel.' },
    ],
  },
  {
    id: 'live-class-access',
    title: 'Live Class Access or Timer Issues',
    description: 'Cannot join live class, countdown timer seems stuck, or class status is incorrect.',
    solutionSteps: [
      { title: 'Correct Time Zone', detail: "Ensure your device's clock and time zone are set correctly and synchronized automatically." },
      { title: 'Page Refresh', detail: 'Refresh the live class page to get the latest status and resync the timer.' },
      { title: 'Telegram Updates', detail: 'Check our Telegram channel for any announcements regarding live class schedule changes or technical difficulties.' },
    ],
  },
  {
    id: 'theme-switching',
    title: 'Switching Light/Dark Mode',
    description: "How to change the website's appearance between light and dark themes.",
    solutionSteps: [
      { title: 'Access Menu', detail: "You can toggle the theme by clicking the Menu icon (three lines) in the top-right corner of the homepage." },
      { title: 'Toggle Option', detail: "In the menu that slides out, you'll find an option like 'Enable Light Mode' or 'Enable Dark Mode' with a Sun/Moon icon." },
    ],
  },
];

export default function HelpCenterPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
    document.title = 'Help Center | E-Leak';
  }, []);

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading Help Center...</p>
      </div>
    );
  }

  return (
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

      <main className="flex-grow flex flex-col items-center pt-8 md:pt-12 w-full">
        <div className="w-full max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-center text-primary mb-10">
            Help Center & Troubleshooting
          </h1>

          <Accordion type="single" collapsible className="w-full space-y-4">
            {helpIssues.map((issue, index) => (
              <AccordionItem
                value={issue.id}
                key={issue.id}
                className="bg-card border border-border rounded-xl shadow-lg overflow-hidden 
                           transform opacity-0 animate-fadeInUp-custom"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-lg font-semibold hover:bg-muted/50 px-6 py-4 text-left">
                  {issue.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 py-4 space-y-4 bg-background/50">
                  <p className="text-muted-foreground text-sm">{issue.description}</p>
                  <div className="space-y-3">
                    {issue.solutionSteps.map((step, stepIndex) => (
                      <div key={stepIndex} className="p-3 bg-muted/30 rounded-md border border-border/50">
                        <h4 className="font-semibold text-foreground">{step.title}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{step.detail}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex flex-col sm:flex-row gap-3 pt-4 border-t border-border">
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => window.open('https://t.me/DatabaseCourseNT', '_blank')}
                    >
                      <AlertCircle className="mr-2 h-4 w-4" /> I still need help (Telegram)
                      <ExternalLink className="ml-2 h-3 w-3 opacity-70"/>
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <CheckCircle className="mr-2 h-4 w-4" /> Issue resolved!
                    </Button>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>

      <footer className="text-center text-sm text-muted-foreground mt-12 py-4">
        <p>© E-Leak All rights reserved.</p>
      </footer>
    </div>
  );
}
