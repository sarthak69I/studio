
'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';
import { getParamAsString } from '@/lib/utils';
import { courseLiveDetails } from '@/lib/live-class-data';
import { Badge } from '@/components/ui/badge';

interface CountdownState {
  hours: string;
  minutes: string;
  seconds: string;
}

interface ClassStatusState {
  status: 'upcoming' | 'live' | 'completed';
  badgeText: string;
  buttonText: string;
  buttonDisabled: boolean;
  cardBorderClass: string;
}

interface LiveClassCardProps {
  cardId: string;
  classTimeLabel: string;
  subject: string;
  liveStreamUrl?: string;
  getTimeframes: (now: Date) => { start: Date, end: Date };
}

const LiveClassCard: React.FC<LiveClassCardProps> = ({
  cardId,
  classTimeLabel,
  subject,
  liveStreamUrl,
  getTimeframes
}) => {
  const [countdown, setCountdown] = React.useState<CountdownState>({ hours: '00', minutes: '00', seconds: '00' });
  const [classStatus, setClassStatus] = React.useState<ClassStatusState>({
    status: 'upcoming',
    badgeText: 'Upcoming',
    buttonText: 'JOIN NOW',
    buttonDisabled: true,
    cardBorderClass: 'border-accent',
  });
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleJoinClick = React.useCallback(() => {
    if (classStatus.status === 'live' && liveStreamUrl) {
      const urlToOpen = liveStreamUrl.includes('.m3u8')
        ? `https://e-leak-strm.web.app/?url=${encodeURIComponent(liveStreamUrl)}`
        : liveStreamUrl;
      window.open(urlToOpen, '_blank', 'noopener,noreferrer');
    }
  }, [classStatus.status, liveStreamUrl]);

  React.useEffect(() => {
    if (!isMounted) return;
    
    const updateClassState = () => {
      const now = new Date();
      const { start, end } = getTimeframes(now);
      
      const timeUntilStart = start.getTime() - now.getTime();
      
      if (now < start) { // Upcoming class
         const h = Math.floor(timeUntilStart / (1000 * 60 * 60));
         const m = Math.floor((timeUntilStart % (1000 * 60 * 60)) / (1000 * 60));
         const s = Math.floor((timeUntilStart % (1000 * 60)) / 1000);
         setCountdown({
           hours: String(h).padStart(2, '0'),
           minutes: String(m).padStart(2, '0'),
           seconds: String(s).padStart(2, '0'),
         });

         const isStartingSoon = timeUntilStart <= 60 * 60 * 1000;
         setClassStatus({
           status: 'upcoming',
           badgeText: isStartingSoon ? 'Starting Soon' : 'Upcoming',
           buttonText: isStartingSoon ? 'JOIN NOW' : 'Starts Soon',
           buttonDisabled: !isStartingSoon || !liveStreamUrl,
           cardBorderClass: isStartingSoon ? 'border-green-500 animate-pulse' : 'border-accent',
         });
      } else if (now >= start && now < end) { // Class is live
         setCountdown({ hours: '00', minutes: '00', seconds: '00' });
         setClassStatus({
             status: 'live',
             badgeText: 'Live Now',
             buttonText: 'JOIN LIVE NOW',
             buttonDisabled: !liveStreamUrl,
             cardBorderClass: 'border-destructive animate-pulse',
         });
      }
      else { // Class time has passed
        setCountdown({ hours: '00', minutes: '00', seconds: '00' });
        setClassStatus({
          status: 'completed',
          badgeText: 'Completed',
          buttonText: 'Class Ended',
          buttonDisabled: true,
          cardBorderClass: 'border-muted-foreground/50',
        });
      }
    };

    updateClassState();
    const intervalId = setInterval(updateClassState, 1000);

    return () => clearInterval(intervalId);
  }, [isMounted, getTimeframes, liveStreamUrl]);


  if (!isMounted) {
    return <div className="bg-card rounded-2xl p-6 shadow-lg relative overflow-hidden min-h-[200px] flex items-center justify-center"><p>Loading class info...</p></div>;
  }
  
  const buttonContent = (
      <Button
        onClick={handleJoinClick}
        disabled={classStatus.buttonDisabled || !liveStreamUrl}
        className={`w-full max-w-xs mx-auto py-3 text-base font-semibold rounded-full transition-all duration-300 ease-in-out
                    ${classStatus.buttonDisabled ? 'bg-muted text-muted-foreground cursor-not-allowed' : 
                      (classStatus.status === 'live' ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5') }`}
      >
        <span>{classStatus.buttonText}</span>
      </Button>
  );


  return (
    <div
      id={cardId}
      className={`bg-card text-card-foreground rounded-2xl p-6 shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 border-l-[5px] ${classStatus.cardBorderClass}`}
    >
      <div className="absolute top-4 right-4">
        {classStatus.status === 'live' && <Badge variant="destructive" className="animate-pulse">LIVE</Badge>}
        {classStatus.status === 'upcoming' && <Badge variant={classStatus.badgeText === 'Starting Soon' ? 'default': 'secondary'}>{classStatus.badgeText}</Badge>}
        {classStatus.status === 'completed' && <Badge variant="outline">{classStatus.badgeText}</Badge>}
      </div>

      <div className="text-lg font-semibold mb-2">{classTimeLabel}</div>
      <h2 className="text-2xl font-bold text-primary mb-4">{subject}</h2>

      {!liveStreamUrl ? (
        <div className="text-center text-muted-foreground py-8">
          <p className="text-lg">No live class or recording scheduled for this subject today.</p>
        </div>
      ) : (classStatus.status === 'live' || classStatus.badgeText === 'Starting Soon') ? (
        <div className="flex flex-col items-center justify-center py-8 min-h-[150px]">
           {buttonContent}
           <p className="text-sm text-muted-foreground mt-3">Click to start viewing</p>
        </div>
      ) : ( // Upcoming or Completed
        <>
          <div className="flex justify-between mb-6">
            <div className="text-center bg-muted/30 p-3 rounded-lg min-w-[70px] sm:min-w-[80px] flex-1 mx-1">
              <div className="text-2xl font-bold text-primary">{countdown.hours}</div>
              <div className="text-xs uppercase text-muted-foreground opacity-70">Hours</div>
            </div>
            <div className="text-center bg-muted/30 p-3 rounded-lg min-w-[70px] sm:min-w-[80px] flex-1 mx-1">
              <div className="text-2xl font-bold text-primary">{countdown.minutes}</div>
              <div className="text-xs uppercase text-muted-foreground opacity-70">Minutes</div>
            </div>
            <div className="text-center bg-muted/30 p-3 rounded-lg min-w-[70px] sm:min-w-[80px] flex-1 mx-1">
              <div className="text-2xl font-bold text-primary">{countdown.seconds}</div>
              <div className="text-xs uppercase text-muted-foreground opacity-70">Seconds</div>
            </div>
          </div>
          {buttonContent}
        </>
      )}
    </div>
  );
};

export default function CourseLivePage() {
  const router = useRouter();
  const params = useParams();
  const courseId = getParamAsString(params.courseId);
  const [isMounted, setIsMounted] = React.useState(false);
  
  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const courseDetails = courseLiveDetails[courseId] || null;

  React.useEffect(() => {
    if(isMounted && courseDetails) {
      document.title = `${courseDetails.pageTitle} Live | E-Leak Courses Hub`;
    }
  }, [isMounted, courseDetails]);
  
  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading Page...</p>
      </div>
    );
  }

  if (!courseDetails) {
    return (
        <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
            <h1 className="text-2xl font-bold text-destructive">Course Not Found</h1>
            <p className="text-muted-foreground mt-2">Live class details for this course could not be found.</p>
            <Button onClick={() => router.back()} className="mt-6">Go Back</Button>
        </div>
    );
  }
  
  const class1Props = {
    cardId: "class1",
    classTimeLabel: courseDetails.classTimeLabel || "N/A",
    subject: courseDetails.class1Subject,
    liveStreamUrl: courseDetails.class1LiveStreamUrl,
    getTimeframes: courseDetails.class1Times,
  };

  const class2Props = {
    cardId: "class2",
    classTimeLabel: courseDetails.classTimeLabel2 || "N/A",
    subject: courseDetails.class2Subject,
    liveStreamUrl: courseDetails.class2LiveStreamUrl,
    getTimeframes: courseDetails.class2Times,
  };
  
  const showClass1 = courseDetails.class1Visible !== false && !!courseDetails.class1LiveStreamUrl;
  const showClass2 = courseDetails.class2Visible !== false && !!courseDetails.class2LiveStreamUrl;

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground p-4 md:p-6">
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

      <main className="flex-grow container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold uppercase tracking-wider logo-gradient-text animate-gradient mb-2">
            {courseDetails.pageTitle}
          </h1>
          <p className="text-muted-foreground opacity-80 text-lg">Interactive learning sessions</p>
        </header>

        {showClass1 || showClass2 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {showClass1 && <LiveClassCard {...class1Props} />}
            {showClass2 && <LiveClassCard {...class2Props} />}
          </div>
        ) : (
          <div className="text-center text-xl text-muted-foreground mt-10">
            <p>No live classes are currently scheduled for this course.</p>
          </div>
        )}
      </main>
    </div>
  );
}
