
'use client';

import * as React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, Bot, MessageSquare, RefreshCw, AlertCircle, CheckCircle, X as CloseIcon } from 'lucide-react';

interface QnA {
  id: string;
  question: string;
  answer: string | React.ReactNode;
}

// Updated questions specific to this app's functionality
const predefinedQAs: QnA[] = [
  {
    id: 'join-live',
    question: "How do I join a live class?",
    answer: "From the homepage, click 'Enroll Now' on your desired course. On the next page, click the 'JOIN LIVE CLASS' button. If a class is currently live, the video player will appear. Otherwise, you'll see a countdown to the next session.",
  },
  {
    id: 'video-issues',
    question: "Video is buffering or not playing smoothly.",
    answer: "Please check your internet connection first. Try refreshing the page or using a different browser. Sometimes, very high demand can cause temporary slowdowns. You can also report persistent issues on our Telegram channel.",
  },
  {
    id: 'find-content',
    question: "I can't find specific notes or videos.",
    answer: (
      <>
        <p className="mb-2">If you're having trouble finding content:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Ensure you've selected the correct course and subject on the 'Enroll' page (after clicking 'Enroll Now' on the homepage).</li>
          <li>Toggle between 'Notes' and 'Video' modes on the enrollment page to see the respective content types.</li>
          <li>Navigate to the specific subject, then topic. Some topics have individual lectures listed; click on a lecture to find its notes or video player link.</li>
          <li>Content is regularly updated. If something is missing, it might be added soon. Check our Telegram channel for announcements!</li>
        </ol>
      </>
    ),
  },
  {
    id: 'timetable-access',
    question: "How do I view the class timetable?",
    answer: "On the homepage, each course card has a 'Time Table' button. Clicking it will open a dialog showing the schedule for that specific course.",
  },
  {
    id: 'content-free',
    question: "Is all the content on E-Leak free?",
    answer: "Yes, all lectures, notes, and live classes currently available on E-Leak are provided free of charge. Our goal is to make quality education accessible.",
  },
  {
    id: 'contact-support',
    question: "How can I contact support if my issue isn't listed here?",
    answer: (
      <>
        For further assistance or issues not covered, please join our Telegram channel:
        <a href="https://t.me/DatabaseCourseNT" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
          Telegram Support
        </a>.
      </>
    ),
  }
];

type BotStep = 'showingQuestions' | 'thinking' | 'showingAnswer';

export default function ELeakSupportPage() {
  const router = useRouter();
  const [isMounted, setIsMounted] = React.useState(false);
  const [step, setStep] = React.useState<BotStep>('showingQuestions');
  const [selectedQ, setSelectedQ] = React.useState<QnA | null>(null);
  const [displayedAnswer, setDisplayedAnswer] = React.useState<string | React.ReactNode>('');
  const [userName, setUserName] = React.useState<string>('there'); // Generic name

  React.useEffect(() => {
    setIsMounted(true);
    document.title = 'E-Leak 24/7 Support | E-Leak';
    // In a real app, user name might be fetched here
    // For now, using a generic greeting
  }, []);

  React.useEffect(() => {
    if (step === 'showingQuestions') {
      setSelectedQ(null);
      setDisplayedAnswer('');
    }
  }, [step]);

  const handleQuestionClick = (qna: QnA) => {
    setSelectedQ(qna);
    setStep('thinking');
    setDisplayedAnswer('');
    
    setTimeout(() => {
      setDisplayedAnswer(qna.answer);
      setStep('showingAnswer');
    }, 2000);
  };

  const handleFollowUp = (action: 'askAgain' | 'stillHelp' | 'resolved') => {
    if (action === 'askAgain') {
      setStep('showingQuestions');
    } else if (action === 'stillHelp') {
      const contactQ = predefinedQAs.find(q => q.id === 'contact-support');
      setDisplayedAnswer(
        <>
          <p className="mb-2">We're sorry to hear you're still having trouble!</p>
          {contactQ ? contactQ.answer : <p>Please reach out to us on Telegram.</p>}
        </>
      );
      setSelectedQ(null); 
      setStep('showingAnswer'); 
    } else if (action === 'resolved') {
      setDisplayedAnswer("Great! We're glad the issue is resolved. Feel free to ask another question if needed.");
      setSelectedQ(null);
      setStep('showingAnswer');
      setTimeout(() => { 
        setStep('showingQuestions');
      }, 3000);
    }
  };

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading Support...</p>
      </div>
    );
  }
  
  const renderContent = () => {
    switch (step) {
      case 'thinking':
        return (
          <div className="flex flex-col items-center justify-center p-8 min-h-[300px]">
            <Bot className="h-16 w-16 text-primary animate-bounce mb-6" />
            <p className="text-xl text-muted-foreground">E-Leak Bot is thinking...</p>
            {selectedQ && <p className="mt-3 text-md text-center text-foreground/80">Regarding: "{selectedQ.question}"</p>}
          </div>
        );
      case 'showingAnswer':
        return (
          <div className="space-y-4 p-2">
            {selectedQ && (
              <div className="mb-4 p-3 bg-primary/10 rounded-lg shadow text-sm">
                <p className="font-semibold text-foreground">You asked: "{selectedQ.question}"</p>
              </div>
            )}
            <div className="flex items-start gap-3">
              <Bot className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div className="bg-muted/70 text-foreground p-3 rounded-lg rounded-tl-none shadow-md max-w-xs sm:max-w-md break-words text-sm">
                {typeof displayedAnswer === 'string' ? <p>{displayedAnswer}</p> : displayedAnswer}
              </div>
            </div>
            <div className="mt-6 space-y-2">
              <Button onClick={() => handleFollowUp('askAgain')} variant="outline" className="w-full py-3 text-sm rounded-full bg-card hover:bg-muted/80">
                <RefreshCw className="mr-2 h-4 w-4" /> Ask another question
              </Button>
              <Button onClick={() => handleFollowUp('stillHelp')} variant="outline" className="w-full py-3 text-sm rounded-full bg-card hover:bg-muted/80">
                <AlertCircle className="mr-2 h-4 w-4" /> I still need help
              </Button>
              <Button onClick={() => handleFollowUp('resolved')} variant="default" className="w-full py-3 text-sm rounded-full">
                <CheckCircle className="mr-2 h-4 w-4" /> Issue resolved!
              </Button>
            </div>
          </div>
        );
      case 'showingQuestions':
      default:
        return (
          <div className="space-y-2 p-2">
            {predefinedQAs.map((qna) => (
              <Button
                key={qna.id}
                variant="outline" 
                className="w-full justify-start text-left h-auto py-3 px-4 text-sm rounded-full bg-card hover:bg-muted/80 shadow-sm whitespace-normal"
                onClick={() => handleQuestionClick(qna)}
              >
                <div className="flex items-center gap-2 w-full">
                   <MessageSquare className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                   <span className="flex-grow">{qna.question}</span>
                </div>
              </Button>
            ))}
          </div>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      {/* New Chat-style Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between p-4 bg-card shadow-md border-b border-border">
        <div className="flex items-center gap-3">
          <div className="bg-primary p-2 rounded-full">
             <Bot className="h-6 w-6 text-primary-foreground" />
          </div>
          <div>
            <h1 className="text-lg font-semibold text-foreground">E-Leak</h1>
            <p className="text-xs text-green-500">Online</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => router.back()} className="text-muted-foreground hover:text-foreground">
          <CloseIcon className="h-6 w-6" />
        </Button>
      </header>

      {/* Chat Content Area */}
      <main className="flex-grow flex flex-col p-4 space-y-4 overflow-y-auto">
        <div className="text-center text-xs text-muted-foreground my-2">Today</div>
        
        {/* Initial Bot Messages */}
        <div className="flex items-start gap-3">
            <Bot className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
            <div className="bg-muted/70 text-foreground p-3 rounded-lg rounded-tl-none shadow-md max-w-xs sm:max-w-md break-words text-sm">
                <p>Hey {userName}, Hope your studies are going well.</p>
            </div>
        </div>
        <div className="flex items-start gap-3">
            <Bot className="h-8 w-8 text-primary flex-shrink-0 mt-1 opacity-0" /> {/* Spacer to align second bubble */}
            <div className="bg-muted/70 text-foreground p-3 rounded-lg rounded-tl-none shadow-md max-w-xs sm:max-w-md break-words text-sm">
                <p>If you are facing an issue, please select from the below options.</p>
            </div>
        </div>

        {/* Dynamic Content: Questions or Answer */}
        <div className="mt-4">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}
