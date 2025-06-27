
'use client';

import React, { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { History } from 'lucide-react';
import Link from 'next/link';
import { formatDistanceToNow } from 'date-fns';
import { getLectureDetailsFromKey } from '@/lib/course-analytics';
import type { RecentlyViewedEntry } from '@/lib/progress-manager';

interface RecentlyViewedCardProps {
  recentlyViewed: RecentlyViewedEntry[];
}

export default function RecentlyViewedCard({ recentlyViewed }: RecentlyViewedCardProps) {

  const recentLectures = useMemo(() => {
    if (!Array.isArray(recentlyViewed) || recentlyViewed.length === 0) {
      return [];
    }
    const oneHourAgo = Date.now() - 60 * 60 * 1000;
    
    return recentlyViewed
      .filter(item => {
        // Defensive check: ensure item and timestamp are valid
        if (!item || !item.timestamp || typeof item.timestamp.toMillis !== 'function') {
          return false;
        }
        return item.timestamp.toMillis() > oneHourAgo;
      })
      .sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis())
      .map(item => ({...getLectureDetailsFromKey(item.key), viewedAt: item.timestamp.toDate()}))
      .filter(details => details !== null && details.lecture)
      .filter((value, index, self) => 
         self.findIndex(v => v?.lecture.id === value?.lecture.id) === index
      )
      .slice(0, 5);
  }, [recentlyViewed]);

  if (recentLectures.length === 0) {
    return null; // Don't render the card if there are no recent lectures
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl"><History className="text-primary"/>Recently Viewed</CardTitle>
        <CardDescription>Lectures you've watched in the last hour.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentLectures.map((details, index) => details && (
          <Link key={index} href={`/courses/${details.courseId}/content/video/${encodeURIComponent(details.subjectName)}/${encodeURIComponent(details.topic.name)}/lectures/${encodeURIComponent(details.lecture.id)}/play`}>
             <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                <div>
                    <p className="font-semibold">{details.lecture.title}</p>
                    <p className="text-xs text-muted-foreground">{details.subjectName} - {details.topic.name}</p>
                </div>
                <span className="text-xs text-muted-foreground shrink-0 ml-4 text-right">{formatDistanceToNow(details.viewedAt, { addSuffix: true })}</span>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
};
