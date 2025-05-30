
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

// Updated questions based on the provided image
const predefinedQAs: QnA[] = [
  {
    id: 'access-payment',
    question: "Access or Payment Related Issue",
    answer: "For access or payment issues, please ensure you are logged in with the correct account. If you're still facing problems, double-check your payment method details or try a different method. For persistent issues, contact us via Telegram with your registered email and a screenshot of the error.",
  },
  {
    id: 'existing-subscription',
    question: "Need Help with Existing Subscription",
    answer: "If you need help with an existing subscription, such as upgrading, downgrading, or understanding its features, please visit your account dashboard or contact us via Telegram with your subscription details.",
  },
  {
    id: 'store-related',
    question: "E-Leak Store Related",
    answer: "For any E-Leak Store related queries, like merchandise, books, or other physical products, please check the store's FAQ section or contact our store support team directly through the contact information provided on the store page.",
  },
  {
    id: 'make-request',
    question: "I want to make a request (e.g. Batch Change, Number Change, Chat Unblock, etc.)",
    answer: "To make a request like a batch change, phone number update, or chat unblocking, please send a detailed email to support@e-leak.com or contact us on Telegram with your user ID and the specific request. We'll process it as soon as possible.",
  },
  {
    id: 'new-purchase',
    question: "Help with new purchase",
    answer: "If you need help making a new purchase, ensure you've selected the correct course or item. If you encounter issues during checkout, try clearing your browser cache or using a different browser. Our Telegram support can also guide you through the process.",
  },
  {
    id: 'technical-issues',
    question: "Technical Issues",
    answer: (
      <>
        <p className="mb-2">For technical issues like video playback problems, notes not loading, or website errors, please try these steps first:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ensure you have a stable internet connection.</li>
          <li>Clear your browser's cache and cookies.</li>
          <li>Try using a different web browser or device.</li>
          <li>Check our Telegram channel for any announcements about ongoing site-wide issues.</li>
        </ul>
        <p className="mt-2">If the problem persists, please report it on our Telegram channel with specific details (e.g., course name, lecture ID, browser version, screenshot of error).</p>
      </>
    ),
  },
  {
    id: 'test-series',
    question: "Test Series Related Issues",
    answer: "For issues related to test series, such as accessing tests, viewing results, or discrepancies in questions/answers, please contact our dedicated test series support team via the 'Help' section within the test series portal or reach out on Telegram.",
  },
  {
    id: 'batch-queries',
    question: "Batch Related Queries",
    answer: "If you have queries about your current batch, schedule, or content, please check the batch announcements section first. For specific questions, you can ask your batch coordinator or contact support via Telegram.",
  },
  {
    id: 'find-content',
    question: "I can't find specific notes or videos for a topic.",
    answer: (
      <>
        <p className="mb-2">If you're having trouble finding content:</p>
        <ol className="list-decimal pl-5 space-y-1">
          <li>Ensure you've selected the correct course and subject on the 'Enroll' page.</li>
          <li>Toggle between 'Notes' and 'Video' modes to see the respective content.</li>
          <li>Some topics might have lectures listed under them; click on the topic to see individual lectures.</li>
          <li>Content is regularly updated. If something is missing, it might be added soon. Check our Telegram channel for announcements!</li>
        </ol>
      </>
    ),
  },
  {
    id: 'contact-support',
    question: "How can I contact support directly?",
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
                variant="outline" // Changed to outline for lighter appearance
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
