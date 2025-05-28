
import * as React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, ArrowRight, ListChecks } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
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
}

export function CourseCard({
  badgeText,
  title,
  subtitle,
  imageUrl,
  imageAlt,
  imageAiHint,
  highlightText,
  startDate,
  enrollLink,
  youtubeLink,
  timeTableImageUrl,
}: CourseCardProps) {
  const [isTimeTableDialogOpen, setIsTimeTableDialogOpen] = React.useState(false);

  return (
    <Card className="w-full max-w-sm overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] border border-border flex flex-col">
      <CardHeader className="p-5">
        {badgeText && (
          <Badge variant="destructive" className="text-xs font-bold mb-2 animate-bounce-custom self-start">
            {badgeText}
          </Badge>
        )}
        <CardTitle className="text-xl md:text-2xl font-bold text-foreground mb-1">{title}</CardTitle>
        <CardDescription className="text-sm md:text-base text-muted-foreground mb-0">{subtitle}</CardDescription>
      </CardHeader>

      <div className="mx-5 aspect-[16/9] relative overflow-hidden rounded-lg border border-input">
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-lg"
          data-ai-hint={imageAiHint}
        />
      </div>

      <div className="bg-muted text-foreground border-l-4 border-accent p-3 mx-5 my-4 rounded-md text-sm text-center">
        {highlightText}
      </div>

      <CardContent className="p-5 flex-grow">
        <div className="flex items-center gap-2 text-primary font-medium mb-4">
          <CalendarDays className="h-5 w-5" />
          <span>{startDate}</span>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 mt-auto">
          {timeTableImageUrl ? (
            <Dialog open={isTimeTableDialogOpen} onOpenChange={setIsTimeTableDialogOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" className="flex-1 font-semibold py-2.5 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md group">
                  <ListChecks className="mr-2 h-4 w-4" />
                  Time Table
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md md:max-w-lg lg:max-w-3xl xl:max-w-4xl p-0 rounded-xl">
                <DialogHeader className="p-4 border-b">
                  <DialogTitle className="text-xl">{title} - Time Table</DialogTitle>
                </DialogHeader>
                <div className="p-4 max-h-[75vh] overflow-y-auto">
                  <div className="relative w-full">
                    <Image
                      src={timeTableImageUrl}
                      alt={`${title} Time Table`}
                      width={1600} 
                      height={900} 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1000px"
                      className="rounded-md w-full h-auto object-contain"
                    />
                  </div>
                </div>
                <DialogFooter className="p-4 border-t sm:justify-start">
                  <DialogClose asChild>
                    <Button type="button" variant="outline">
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ) : (
            <Button variant="outline" asChild className="flex-1 font-semibold py-2.5 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md group">
              <Link href="#">
                <ListChecks className="mr-2 h-4 w-4" />
                Time Table
              </Link>
            </Button>
          )}
          <Button asChild className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md group">
            <Link href={enrollLink}>
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </CardContent>

      <CardFooter className="p-4 bg-muted/30 text-muted-foreground text-sm md:text-base text-center font-semibold flex items-center justify-center gap-1.5 border-t border-border">
        <Link href={youtubeLink} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline flex items-center gap-1.5">
          Subscribe on
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            className="h-4 md:h-5"
          />
        </Link>
      </CardFooter>
    </Card>
  );
}
