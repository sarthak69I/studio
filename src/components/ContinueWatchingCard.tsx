
'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { listenToProgress } from '@/lib/progress-manager';
import { getLectureDetailsFromKey } from '@/lib/course-analytics';
import type { Lecture, Topic } from '@/lib/course-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play } from 'lucide-react';

export default function ContinueWatchingCard() {
  const { user } = useAuth();
  const [lastWatchedKey, setLastWatchedKey] = useState<string | null>(null);
  const [details, setDetails] = useState<{ lecture: Lecture, topic: Topic, subjectName: string, courseId: string } | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (user) {
      setIsLoading(true);
      const unsubscribe = listenToProgress(user.uid, (progress) => {
        setLastWatchedKey(progress.lastWatchedLectureKey);
        setIsLoading(false);
      });
      return () => unsubscribe();
    } else {
      setLastWatchedKey(null);
      setIsLoading(false);
    }
  }, [user]);

  useEffect(() => {
    if (lastWatchedKey) {
      setDetails(getLectureDetailsFromKey(lastWatchedKey));
    } else {
      setDetails(null);
    }
  }, [lastWatchedKey]);

  if (!user || isLoading || !details) {
    return null; // Don't render if not logged in, loading, or no history
  }

  const { lecture, topic, subjectName, courseId } = details;
  const lectureUrl = `/courses/${courseId}/content/video/${encodeURIComponent(subjectName)}/${encodeURIComponent(topic.name)}/lectures/${encodeURIComponent(lecture.id)}/play`;

  return (
    <section className="w-full bg-card text-card-foreground py-10 border-t border-border mt-16">
        <div className="container mx-auto flex flex-col items-center space-y-4 px-4">
            <Card className="bg-primary/5 border-primary/20 w-full max-w-md shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl">
                        <Play className="text-primary"/>
                        Continue Watching
                    </CardTitle>
                    <CardDescription>Pick up right where you left off.</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="font-semibold text-lg">{lecture.title}</p>
                    <p className="text-sm text-muted-foreground">{subjectName} - {topic.name}</p>
                </CardContent>
                <CardFooter>
                    <Button asChild className="w-full">
                        <Link href={lectureUrl}>
                            <Play className="mr-2"/>
                            Watch Now
                        </Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    </section>
  );
}
