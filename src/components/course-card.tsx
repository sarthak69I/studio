import Image from 'next/image';
import Link from 'next/link';
import { CalendarDays, ArrowRight } from 'lucide-react';
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
}: CourseCardProps) {
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

      <div className="bg-yellow-50 text-yellow-800 border-l-4 border-yellow-500 p-3 mx-5 my-4 rounded-md text-sm text-center">
        {highlightText}
      </div>

      <CardContent className="p-5 flex-grow">
        <div className="flex items-center gap-2 text-primary font-medium mb-4">
          <CalendarDays className="h-5 w-5" />
          <span>{startDate}</span>
        </div>
        <div className="flex gap-3 mt-auto">
          <Button asChild className="flex-1 bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-4 rounded-lg transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:shadow-md group">
            <Link href={enrollLink} target="_blank" rel="noopener noreferrer">
              Enroll Now
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </CardContent>

      <CardFooter className="p-4 bg-muted/30 text-muted-foreground text-sm md:text-base text-center font-semibold flex items-center justify-center gap-2 border-t border-border">
        <Link href={youtubeLink} target="_blank" rel="noopener noreferrer" className="text-red-600 hover:underline flex items-center gap-1.5">
          Subscribe on
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
            alt="YouTube"
            className="h-5 md:h-6"
          />
        </Link>
      </CardFooter>
    </Card>
  );
}
