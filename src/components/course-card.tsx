
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, MessageSquare } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface LiveSlot {
  targetHour: number;
  targetMinute: number;
  durationMinutes: number;
}
interface CourseCardProps {
  id: string;
  badgeText?: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  imageAlt: string;
  imageAiHint?: string;
  highlightText: string;
  startDate: string;
  enrollLink: string;
  youtubeLink: string;
  timeTableImageUrl?: string;
  liveSlots?: LiveSlot[];
}

export function CourseCard({
  badgeText,
  title,
  subtitle,
  imageUrl,
  imageAlt,
  imageAiHint,
  startDate,
  enrollLink,
  youtubeLink,
  timeTableImageUrl,
}: CourseCardProps) {
  const [isTimeTableDialogOpen, setIsTimeTableDialogOpen] = React.useState(false);

  return (
    <div className="relative font-sans">
      <Card className="w-full max-w-sm overflow-hidden rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 border border-border/50 bg-card">
        <CardHeader className="p-0">
          <div className="relative aspect-[16/9] w-full">
            <Image
              src={imageUrl}
              alt={imageAlt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-t-2xl"
              data-ai-hint={imageAiHint}
            />
            {/* ONLINE Badge on the image */}
            <div className="absolute top-3 left-3 z-10">
              <Badge className="bg-blue-600 text-white border-blue-700 shadow-lg">
                ONLINE
              </Badge>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-4 space-y-3">
          {/* Title and Badges */}
          <div className="flex items-start justify-between">
            <div>
              <CardTitle className="text-lg font-bold text-foreground">{title}</CardTitle>
              <p className="text-md text-muted-foreground">{subtitle}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              {badgeText && <Badge variant="secondary" className="bg-yellow-400/20 text-yellow-600 border-yellow-400/30">{badgeText}</Badge>}
              <Badge variant="outline">Hinglish</Badge>
              <Link href={youtubeLink} target="_blank" rel="noopener noreferrer" aria-label="Community Chat">
                 <MessageSquare className="h-6 w-6 text-muted-foreground hover:text-primary" />
              </Link>
            </div>
          </div>
          
          {/* Date info */}
          <div className="text-sm text-muted-foreground space-y-2 border-t border-border pt-3">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              <span>{startDate}. Ends on 31 Mar, 2026</span>
            </div>
          </div>

          {/* Price changed to Free */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-2xl font-bold text-green-500">Free</p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 grid grid-cols-2 gap-3 bg-slate-50 dark:bg-card/50 border-t">
            {timeTableImageUrl ? (
                <Dialog open={isTimeTableDialogOpen} onOpenChange={setIsTimeTableDialogOpen}>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="w-full font-bold">
                            Time Table
                        </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-4xl p-0 rounded-xl">
                        <DialogHeader className="p-4 border-b">
                          <DialogTitle className="text-xl">{title} - Time Table</DialogTitle>
                        </DialogHeader>
                        <div className="p-4 max-h-[80vh] overflow-y-auto"> 
                          <div className="relative w-full aspect-video rounded-md overflow-hidden"> 
                            {timeTableImageUrl.startsWith('https://drive.google.com/file/d/') ? (
                              <iframe
                                src={timeTableImageUrl}
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allowFullScreen
                                title={`${title} Time Table Preview`}
                                className="absolute top-0 left-0 w-full h-full"
                              ></iframe>
                            ) : (
                              <Image
                                src={timeTableImageUrl}
                                alt={`${title} Time Table`}
                                fill 
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                                className="object-contain" 
                              />
                            )}
                          </div>
                        </div>
                        <DialogFooter className="p-4 border-t sm:justify-start">
                          <DialogClose asChild>
                            <Button type="button" variant="outline">Close</Button>
                          </DialogClose>
                        </DialogFooter>
                    </DialogContent>
                </Dialog>
            ) : (
              <Button variant="outline" className="w-full font-bold" disabled>Time Table</Button>
            )}

            <Button asChild className="w-full font-bold bg-indigo-600 hover:bg-indigo-700 text-white">
                <Link href={enrollLink}>Enroll Now</Link>
            </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
