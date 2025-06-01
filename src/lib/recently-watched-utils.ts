
// src/lib/recently-watched-utils.ts
'use client';

const RECENTLY_WATCHED_KEY = 'eLeakRecentlyWatched';
const MAX_RECENTLY_WATCHED_ITEMS = 5;

export interface RecentlyWatchedLecture {
  courseId: string;
  courseName?: string; // Optional, for easier display
  subjectParam: string; // Encoded
  subjectName: string; // Decoded
  topicParam: string; // Encoded
  topicName: string; // Decoded
  lectureId: string; // Encoded
  lectureTitle: string;
  watchedAt: number; // Timestamp
  videoEmbedUrl?: string; // To ensure it's a video lecture
}

export function getRecentlyWatched(): RecentlyWatchedLecture[] {
  if (typeof window === 'undefined') {
    return [];
  }
  try {
    const itemsJson = localStorage.getItem(RECENTLY_WATCHED_KEY);
    if (itemsJson) {
      const items = JSON.parse(itemsJson) as RecentlyWatchedLecture[];
      // Sort by watchedAt descending (most recent first)
      return items.sort((a, b) => b.watchedAt - a.watchedAt);
    }
  } catch (error) {
    console.error("Error retrieving recently watched items from localStorage:", error);
  }
  return [];
}

export function addRecentlyWatched(lecture: Omit<RecentlyWatchedLecture, 'watchedAt'>): void {
  if (typeof window === 'undefined') {
    return;
  }
  try {
    let items = getRecentlyWatched();
    
    const newLectureWithTimestamp: RecentlyWatchedLecture = {
      ...lecture,
      watchedAt: Date.now(),
    };

    // Remove if already exists to update its position and timestamp
    items = items.filter(item => !(
        item.courseId === newLectureWithTimestamp.courseId &&
        item.lectureId === newLectureWithTimestamp.lectureId
    ));

    // Add to the beginning of the array
    items.unshift(newLectureWithTimestamp);

    // Keep only the most recent items
    items = items.slice(0, MAX_RECENTLY_WATCHED_ITEMS);

    localStorage.setItem(RECENTLY_WATCHED_KEY, JSON.stringify(items));
  } catch (error) {
    console.error("Error saving recently watched item to localStorage:", error);
  }
}

export function clearRecentlyWatched(): void {
    if (typeof window === 'undefined') {
        return;
    }
    try {
        localStorage.removeItem(RECENTLY_WATCHED_KEY);
    } catch (error) {
        console.error("Error clearing recently watched items from localStorage:", error);
    }
}
