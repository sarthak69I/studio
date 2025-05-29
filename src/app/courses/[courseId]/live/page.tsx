
'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon } from 'lucide-react';
import { getParamAsString } from '@/lib/utils';

interface LiveClassData {
  pageTitle: string;
  subtitle: string;
  class1Subject: string;
  class2Subject: string;
  class1LiveStreamUrl?: string;
  class2LiveStreamUrl?: string;
}

const anym3u8PlayerBase = 'https://anym3u8player.com/tv/p.php?url=';

const courseLiveDetails: Record<string, LiveClassData> = {
  '1': { // Science
    pageTitle: "Class 11 Science Live Classes",
    subtitle: "Interactive learning sessions for Science students",
    class1Subject: "Physics",
    class2Subject: "Chemistry",
    class1LiveStreamUrl: `${anym3u8PlayerBase}${encodeURIComponent('https://d2xqn12y4qo6nr.cloudfront.net/out/v1/4dacc3cc62ed4047b817b91580e11584/index_4.m3u8')}`,
    class2LiveStreamUrl: undefined, 
  },
  '2': { // Commerce
    pageTitle: "Class 11 Commerce Live Classes",
    subtitle: "Interactive learning sessions for Commerce students",
    class1Subject: "Economics",
    class2Subject: "Business Studies",
    class1LiveStreamUrl: `${anym3u8PlayerBase}${encodeURIComponent('https://d1kw75zcv4u98c.cloudfront.net/out/v1/287810d967cc428e9bd992002e55b72c/index_5.m3u8')}`,
    class2LiveStreamUrl: `${anym3u8PlayerBase}${encodeURIComponent('https://d1kw75zcv4u98c.cloudfront.net/out/v1/1a2e0a5970d84f82a93bebb2ae35314c/index_4.m3u8')}`,
  },
  '3': { // Aarambh
    pageTitle: "Class 10 Aarambh Live Classes",
    subtitle: "Interactive learning sessions for Aarambh batch",
    class1Subject: "SST",
    class2Subject: "Science",
    class1LiveStreamUrl: `${anym3u8PlayerBase}${encodeURIComponent('https://d1kw75zcv4u98c.cloudfront.net/out/v1/1a2e0a5970d84f82a93bebb2ae35314c/index_4.m3u8')}`, 
    class2LiveStreamUrl: `${anym3u8PlayerBase}${encodeURIComponent('https://d1kw75zcv4u98c.cloudfront.net/out/v1/287810d967cc428e9bd992002e55b72c/index_5.m3u8')}`, 
  }
};

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
  badgeClass: string;
}

interface LiveClassCardProps {
  cardId: string;
  classTimeLabel: string;
  subject: string;
  targetHour: number;
  targetMinute: number;
  durationMinutes: number;
  liveStreamUrl?: string;
}

const LiveClassCard: React.FC<LiveClassCardProps> = ({
  cardId,
  classTimeLabel,
  subject,
  targetHour,
  targetMinute,
  durationMinutes,
  liveStreamUrl,
}) => {
  const [countdown, setCountdown] = React.useState<CountdownState>({ hours: '00', minutes: '00', seconds: '00' });
  const [classStatus, setClassStatus] = React.useState<ClassStatusState>({
    status: 'upcoming',
    badgeText: 'Upcoming',
    buttonText: 'JOIN NOW',
    buttonDisabled: true,
    cardBorderClass: 'border-accent', 
    badgeClass: 'bg-accent/20 text-accent',
  });
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  React.useEffect(() => {
    if (!isMounted) return;

    const calculateTimes = () => {
      const now = new Date();
      let classStartTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), targetHour, targetMinute, 0);
      
      const endOfDayReferenceHour = 20; 
      const endOfDayReferenceMinute = 10;
      const endOfDayReferenceDuration = 90; 

      let lastClassEndTimeToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endOfDayReferenceHour, endOfDayReferenceMinute, 0);
      lastClassEndTimeToday.setMinutes(lastClassEndTimeToday.getMinutes() + endOfDayReferenceDuration);
      
      if (now > lastClassEndTimeToday) {
         classStartTime.setDate(classStartTime.getDate() + 1);
      }

      const classEndTime = new Date(classStartTime.getTime() + durationMinutes * 60000);
      return { now, classStartTime, classEndTime };
    };

    const updateClassState = () => {
      const { now, classStartTime, classEndTime } = calculateTimes();
      const diff = classStartTime.getTime() - now.getTime();

      if (now < classStartTime) { 
        const h = Math.floor(diff / (1000 * 60 * 60));
        const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((diff % (1000 * 60)) / 1000);
        setCountdown({
          hours: String(h).padStart(2, '0'),
          minutes: String(m).padStart(2, '0'),
          seconds: String(s).padStart(2, '0'),
        });
        setClassStatus({
          status: 'upcoming',
          badgeText: 'Upcoming',
          buttonText: 'JOIN NOW',
          buttonDisabled: true, // Button is disabled for upcoming
          cardBorderClass: 'border-accent',
          badgeClass: 'bg-accent/20 text-accent',
        });
      } else if (now >= classStartTime && now < classEndTime) { 
        setCountdown({ hours: '00', minutes: '00', seconds: '00' });
        setClassStatus({
          status: 'live',
          badgeText: 'Live Now',
          buttonText: 'JOIN NOW',
          buttonDisabled: !liveStreamUrl, // Button disabled if no stream URL when live
          cardBorderClass: 'border-destructive animate-live-pulse',
          badgeClass: 'bg-destructive/20 text-destructive',
        });
      } else { 
        setCountdown({ hours: '00', minutes: '00', seconds: '00' });
        setClassStatus({
          status: 'completed',
          badgeText: 'Completed',
          buttonText: 'Class Ended',
          buttonDisabled: true, // Button disabled for completed
          cardBorderClass: 'border-green-500', 
          badgeClass: 'bg-green-500/20 text-green-500',
        });
      }
    };

    updateClassState(); 
    const intervalId = setInterval(updateClassState, 1000);

    return () => clearInterval(intervalId);
  }, [isMounted, targetHour, targetMinute, durationMinutes, liveStreamUrl]);

  if (!isMounted) {
    return <div className="bg-card rounded-2xl p-6 shadow-lg relative overflow-hidden min-h-[200px] flex items-center justify-center"><p>Loading class info...</p></div>;
  }

  return (
    <div
      id={cardId}
      className={`bg-card text-card-foreground rounded-2xl p-6 shadow-xl relative overflow-hidden transition-transform duration-300 ease-in-out hover:-translate-y-1 border-l-[5px] ${classStatus.cardBorderClass}`}
    >
      <span className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${classStatus.badgeClass}`}>
        {classStatus.badgeText}
      </span>
      <div className="text-lg font-semibold mb-2">{classTimeLabel}</div>
      <h2 className="text-2xl font-bold text-primary mb-4">{subject}</h2>
      
      {!liveStreamUrl ? (
        // Case 1: No live stream URL defined for this slot, regardless of class status
        <div className="text-center text-muted-foreground py-8">
          <p className="text-lg">Today is no live class for this subject.</p>
        </div>
      ) : classStatus.status === 'live' ? (
        // Case 2: Stream URL IS defined, and class is LIVE
        <>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border border-border bg-black my-4">
            <iframe
              src={liveStreamUrl}
              title={`${subject} Live Stream`}
              width="100%"
              height="100%"
              allowFullScreen
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              className="border-0"
            ></iframe>
          </div>
          <p className="text-xs text-muted-foreground text-center -mt-2 mb-4">
            Double-click on video to Full Screen
          </p>
        </>
      ) : (
        // Case 3: Stream URL IS defined, but class is UPCOMING or COMPLETED
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
          
          <Button
            className={`w-full py-3 text-base font-semibold rounded-full transition-all duration-300 ease-in-out 
                        ${classStatus.buttonDisabled ? 'bg-muted text-muted-foreground cursor-not-allowed' : 'bg-primary text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5'}`}
            disabled={classStatus.buttonDisabled}
            onClick={() => { 
              // Logic for button click if needed, though it's mostly disabled
              if (!classStatus.buttonDisabled && liveStreamUrl) { 
                console.log('Joining class for ' + subject);
              }
            }}
          >
            {classStatus.buttonText}
          </Button>
        </>
      )}
    </div>
  );
};

export default function LiveClassesPage() {
  const router = useRouter();
  const params = useParams();
  const courseId = getParamAsString(params.courseId);
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);
  
  const courseDetails = courseLiveDetails[courseId] || {
    pageTitle: "Live Classes",
    subtitle: "Interactive learning sessions",
    class1Subject: "Subject 1",
    class2Subject: "Subject 2",
    class1LiveStreamUrl: undefined,
    class2LiveStreamUrl: undefined,
  };

  React.useEffect(() => {
    if(isMounted) {
      document.title = `${courseDetails.pageTitle} | E-Leak`;
    }
  }, [isMounted, courseDetails.pageTitle]);

  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading Page...</p>
      </div>
    );
  }

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
          <p className="text-muted-foreground opacity-80 text-lg">{courseDetails.subtitle}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <LiveClassCard
            cardId="class1"
            classTimeLabel="5:10 PM - 6:40 PM"
            subject={courseDetails.class1Subject}
            targetHour={17} 
            targetMinute={10} 
            durationMinutes={90}
            liveStreamUrl={courseDetails.class1LiveStreamUrl}
          />
          <LiveClassCard
            cardId="class2"
            classTimeLabel="8:10 PM - 9:40 PM"
            subject={courseDetails.class2Subject}
            targetHour={20} 
            targetMinute={10} 
            durationMinutes={90}
            liveStreamUrl={courseDetails.class2LiveStreamUrl}
          />
        </div>
      </main>
      <footer className="text-center text-sm text-muted-foreground mt-12 py-4">
        <p>© E-Leak All rights reserved.</p>
      </footer>
    </div>
  );
}
