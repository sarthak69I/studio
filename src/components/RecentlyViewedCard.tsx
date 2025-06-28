
'use client';

import React, { useMemo } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { History } from 'lucide-react';
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
    // Filter for lectures viewed within the last hour
    const oneHourAgo = Date.now() - 1 * 60 * 60 * 1000;
    
    const processedLectures = recentlyViewed
      .filter(item => {
        // Defensive check: ensure item and timestamp are valid
        if (!item || !item.timestamp || typeof item.timestamp.toMillis !== 'function') {
          return false;
        }
        return item.timestamp.toMillis() > oneHourAgo;
      })
      .sort((a, b) => b.timestamp.toMillis() - a.timestamp.toMillis())
      .map(item => ({...getLectureDetailsFromKey(item.key), viewedAt: item.timestamp.toDate()}))
      .filter(details => details !== null && details.lecture && details.lecture.videoEmbedUrl);

    // Simplified unique filter logic
    const uniqueLectures = new Map();
    processedLectures.forEach(l => {
        if (l && !uniqueLectures.has(l.lecture.id)) {
            uniqueLectures.set(l.lecture.id, l);
        }
    });

    return Array.from(uniqueLectures.values()).slice(0, 5);

  }, [recentlyViewed]);

  if (recentLectures.length === 0) {
    return null; // Don't render the card if there are no recent lectures
  }

  const constructExternalUrl = (details: any) => {
    const { lecture } = details;
    let externalPlayerUrl = `https://e-leak-strm.web.app/?url=${encodeURIComponent(lecture.videoEmbedUrl || '')}`;
    externalPlayerUrl += `&videoTitle=${encodeURIComponent(lecture.title)}`;

    if (lecture.notesLink && lecture.notesLink.trim() !== '' && lecture.notesLink.trim() !== '#') {
      externalPlayerUrl += `&notesUrl=${encodeURIComponent(lecture.notesLink)}`;
      const baseNotesTitle = (lecture.notesTitle && lecture.notesTitle.trim()) ? lecture.notesTitle : lecture.title;
      const finalNotesTitle = `${baseNotesTitle} - Notes`;
      externalPlayerUrl += `&notesTitle=${encodeURIComponent(finalNotesTitle)}`;
    }
    return externalPlayerUrl;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-3 text-xl"><History className="text-primary"/>Recently Viewed</CardTitle>
        <CardDescription>Lectures you've watched in the last hour.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-3">
        {recentLectures.map((details, index) => {
          if (!details) return null;
          const externalUrl = constructExternalUrl(details);
          return (
            <a key={index} href={externalUrl} target="_blank" rel="noopener noreferrer" className="block">
              <div className="flex items-center justify-between p-3 rounded-lg hover:bg-muted transition-colors">
                  <div>
                      <p className="font-semibold">{details.lecture.title}</p>
                      <p className="text-xs text-muted-foreground">{details.subjectName} - {details.topic.name}</p>
                  </div>
                  <span className="text-xs text-muted-foreground shrink-0 ml-4 text-right">{formatDistanceToNow(details.viewedAt, { addSuffix: true })}</span>
              </div>
            </a>
          );
        })}
      </CardContent>
    </Card>
  );
};
