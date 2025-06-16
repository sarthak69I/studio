
'use client';

import * as React from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home as HomeIcon, Bot } from 'lucide-react';
import { getParamAsString } from '@/lib/utils';

interface LiveClassData {
  pageTitle: string;
  subtitle: string;
  class1Subject: string;
  class2Subject: string;
  class1LiveStreamUrl?: string;
  class2LiveStreamUrl?: string;
  class1Visible?: boolean;
  class2Visible?: boolean;
}

const newStreamPlayerBaseUrl = 'https://eleaklive.vercel.app/?liveurl=';

const courseLiveDetails: Record<string, LiveClassData> = {
  '1': { // Science
    pageTitle: "Class 11 Science Live Classes",
    subtitle: "Interactive learning sessions for Science students",
    class1Subject: "MATHS",
    class2Subject: "CHEMISTRY",
    class1LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://d1kw75zcv4u98c.cloudfront.net/out/v1/5df5be72d17649f79577314291c6d2fc/index_2.m3u8')}`,
    class2LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://d3rho91jos7925.cloudfront.net/out/v1/04e48ce150b5494fa5bca97d1bea5bb0/index_3.m3u8')}`,
    class1Visible: true,
    class2Visible: true,
  },
    '2': { // Commece
      pageTitle: "Class 11 Science Live Classes",
      subtitle: "Interactive learning sessions for Science students",
      class1Subject: "Business",
      class2Subject: "MATHS",
      class1LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://d3rho91jos7925.cloudfront.net/out/v1/04e48ce150b5494fa5bca97d1bea5bb0/index_3.m3u8')}`,
      class2LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://d3rho91jos7925.cloudfront.net/out/v1/04e48ce150b5494fa5bca97d1bea5bb0/index_3.m3u8')}`,
      class1Visible: false,
      class2Visible: false,
  },
  '3': { // Aarambh (Foundation Class 10)
    pageTitle: "Class 10 Aarambh Live Classes",
    subtitle: "Interactive learning sessions for Aarambh batch",
    class1Subject: "SST",
    class2Subject: "Mathematics",
    class1LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://d1kw75zcv4u98c.cloudfront.net/out/v1/c32c373c9874430cb6039408745a1a5e/index_1.m3u8')}`,
    class2LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://d1kw75zcv4u98c.cloudfront.net/out/v1/287810d967cc428e9bd992002e55b72c/index_1.m3u8')}`,
    class1Visible: true,
    class2Visible: true,
  },
  '4': { // Aarambh (Foundation Class 9)
    pageTitle: "Class 9 Aarambh Live Classes",
    subtitle: "Interactive learning sessions for Class 9 Aarambh batch",
    class1Subject: "Chemistry",
    class2Subject: "SST",
    class1LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://d3rho91jos7925.cloudfront.net/out/v1/04e48ce150b5494fa5bca97d1bea5bb0/index_4.m3u8')}`, 
    class2LiveStreamUrl: `${newStreamPlayerBaseUrl}${encodeURIComponent('https://d2ypa0i2sdc0h2.cloudfront.net/out/v1/953b87b302b04b50a75b8ed04c215cc4/index_4.m3u8')}`, 
    class1Visible: true,
    class2Visible: true,
  }
};

interface CountdownState {
  hours: string;
  minutes: string;
  seconds: string;
}

interface ClassStatusState {
  status: 'upcoming' | 'live' | 'completed' | 'recording_available';
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

const VACATION_START_MONTH = 5; // June (0-indexed for Date constructor)
const VACATION_START_DAY = 1;
const VACATION_DURATION_HOURS = 168;


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

    const calculateTimesAndVacation = () => {
      const now = new Date();
      const currentYear = now.getFullYear();
      const vacationStartDate = new Date(currentYear, VACATION_START_MONTH, VACATION_START_DAY, 0, 0, 0);
      const vacationEndDate = new Date(vacationStartDate.getTime() + VACATION_DURATION_HOURS * 60 * 60 * 1000);
      const isVacationPeriod = now >= vacationStartDate && now < vacationEndDate;

      let classStartTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), targetHour, targetMinute, 0);

      const endOfDayReferenceHour = 20;
      const endOfDayReferenceMinute = 10;
      const endOfDayReferenceDuration = 90;
      let lastClassEndTimeToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endOfDayReferenceHour, endOfDayReferenceMinute, 0);
      lastClassEndTimeToday.setMinutes(lastClassEndTimeToday.getMinutes() + endOfDayReferenceDuration);

      if (now > lastClassEndTimeToday && targetHour < now.getHours()) {
         classStartTime.setDate(classStartTime.getDate() + 1);
      }

      const classEndTime = new Date(classStartTime.getTime() + durationMinutes * 60000);
      return { now, classStartTime, classEndTime, isVacationPeriod };
    };

    const updateClassState = () => {
      const { now, classStartTime, classEndTime, isVacationPeriod } = calculateTimesAndVacation();
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
          buttonDisabled: true,
          cardBorderClass: 'border-accent',
          badgeClass: 'bg-accent/20 text-accent',
        });
      } else if (now >= classStartTime && now < classEndTime) {
        setCountdown({ hours: '00', minutes: '00', seconds: '00' });
        if (isVacationPeriod && liveStreamUrl) {
            setClassStatus({
                status: 'recording_available',
                badgeText: 'Recording Available',
                buttonText: 'Watch Recording',
                buttonDisabled: false,
                cardBorderClass: 'border-primary',
                badgeClass: 'bg-primary/20 text-primary',
            });
        } else if (!isVacationPeriod && liveStreamUrl) {
            setClassStatus({
                status: 'live',
                badgeText: 'Live Now',
                buttonText: 'JOIN NOW',
                buttonDisabled: false,
                cardBorderClass: 'border-destructive animate-live-pulse',
                badgeClass: 'bg-destructive/20 text-destructive',
            });
        } else {
            setClassStatus({
                status: 'completed',
                badgeText: 'No Session Scheduled',
                buttonText: 'Unavailable',
                buttonDisabled: true,
                cardBorderClass: 'border-muted-foreground/50',
                badgeClass: 'bg-muted/30 text-muted-foreground',
            });
        }
      } else {
        setCountdown({ hours: '00', minutes: '00', seconds: '00' });
        setClassStatus({
          status: 'completed',
          badgeText: isVacationPeriod && liveStreamUrl ? 'Recording Ended' : 'Completed',
          buttonText: 'Class Ended',
          buttonDisabled: true,
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
        <div className="text-center text-muted-foreground py-8">
          <p className="text-lg">No live class or recording scheduled for this subject today.</p>
        </div>
      ) : (classStatus.status === 'live' || classStatus.status === 'recording_available') ? (
        <>
          <div className="aspect-video w-full rounded-lg overflow-hidden shadow-lg border border-border bg-black my-4">
            <iframe
              src={liveStreamUrl}
              title={`${subject} ${classStatus.status === 'live' ? 'Live Stream' : 'Recording'}`}
              width="100%"
              height="100%"
              allowFullScreen
              allow="autoplay; encrypted-media; picture-in-picture; web-share"
              className="border-0"
            ></iframe>
          </div>
          <p className="text-xs text-muted-foreground text-center -mt-2 mb-4">
            {classStatus.status === 'live'
              ? "Double-click on video to Full Screen."
              : "Double-click on video to Full Screen"}
          </p>
        </>
      ) : (
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
              // Action handled by iframe loading based on status
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
  const [firstClassStatus, setFirstClassStatus] = React.useState<'upcoming' | 'live' | 'completed' | 'recording_available'>('upcoming');


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
    class1Visible: true,
    class2Visible: true,
  };

  React.useEffect(() => {
    if(isMounted) {
      document.title = `${courseDetails.pageTitle} | E-Leak`;
    }
  }, [isMounted, courseDetails.pageTitle]);

  React.useEffect(() => {
    if (!isMounted) return;

    const calculateFirstClassOriginalTimingStatus = () => {
        const now = new Date();
        const targetHour1 = 17;
        const targetMinute1 = 10;
        const durationMinutes1 = 90;

        let classStartTime1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), targetHour1, targetMinute1, 0);

        const endOfDayReferenceHour = 20;
        const endOfDayReferenceMinute = 10;
        const endOfDayReferenceDuration = 90;
        let lastClassEndTimeToday = new Date(now.getFullYear(), now.getMonth(), now.getDate(), endOfDayReferenceHour, endOfDayReferenceMinute, 0);
        lastClassEndTimeToday.setMinutes(lastClassEndTimeToday.getMinutes() + endOfDayReferenceDuration);

        if (now > lastClassEndTimeToday && targetHour1 < now.getHours()) {
            classStartTime1.setDate(classStartTime1.getDate() + 1);
        }
        const classEndTime1 = new Date(classStartTime1.getTime() + durationMinutes1 * 60000);

        if (now < classStartTime1) {
            setFirstClassStatus('upcoming');
        } else if (now >= classStartTime1 && now < classEndTime1) {
            setFirstClassStatus('live');
        } else {
            setFirstClassStatus('completed');
        }
    };

    calculateFirstClassOriginalTimingStatus();
    const intervalId = setInterval(calculateFirstClassOriginalTimingStatus, 60000);
    return () => clearInterval(intervalId);
  }, [isMounted]);


  if (!isMounted) {
    return (
      <div className="flex flex-col min-h-screen bg-background text-foreground justify-center items-center p-4 md:p-6">
        <p>Loading Page...</p>
      </div>
    );
  }

  const class1Props = {
    cardId: "class1",
    classTimeLabel: "5:10 PM - 6:40 PM",
    subject: courseDetails.class1Subject,
    targetHour: 17,
    targetMinute: 10,
    durationMinutes: 90,
    liveStreamUrl: courseDetails.class1LiveStreamUrl,
  };

  const class2Props = {
    cardId: "class2",
    classTimeLabel: "8:10 PM - 9:40 PM",
    subject: courseDetails.class2Subject,
    targetHour: 20,
    targetMinute: 10,
    durationMinutes: 90,
    liveStreamUrl: courseDetails.class2LiveStreamUrl,
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
          <p className="text-muted-foreground opacity-80 text-lg">{courseDetails.subtitle}</p>
        </header>

        {showClass1 || showClass2 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {firstClassStatus === 'completed' ? (
              <>
                {showClass2 && <LiveClassCard {...class2Props} />}
                {showClass1 && <LiveClassCard {...class1Props} />}
              </>
            ) : (
              <>
                {showClass1 && <LiveClassCard {...class1Props} />}
                {showClass2 && <LiveClassCard {...class2Props} />}
              </>
            )}
          </div>
        ) : (
          <div className="text-center text-xl text-muted-foreground mt-10">
            <p>No live classes are currently scheduled for this course.</p>
          </div>
        )}
      </main>

      <div className="mt-12 mb-6 text-center">
        <p className="text-muted-foreground mb-2">Need Support?</p>
        <Link href="/help-center">
          <Button variant="outline" size="lg" className="rounded-lg">
            <Bot className="mr-2 h-5 w-5" />
            E-Leak 24/7 Support
          </Button>
        </Link>
      </div>

      <footer className="text-center text-sm text-muted-foreground mt-12 py-4">
        <p>© E-Leak All rights reserved.</p>
      </footer>
    </div>
  );
}
    
