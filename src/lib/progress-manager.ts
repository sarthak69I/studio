
// src/lib/progress-manager.ts
'use client';

const COMPLETED_LECTURES_KEY = 'eleakCompletedLectures_v1';

// Generates a unique key for storing lecture completion status
const generateLectureStorageKey = (courseId: string, subjectName: string, topicName: string, lectureId: string): string => {
  // Using a simple concatenation with a clear separator.
  // Ensure names/IDs don't contain this separator or handle encoding if necessary.
  return `${courseId}::${subjectName}::${topicName}::${lectureId}`;
};

export const markLectureAsCompleted = (courseId: string, subjectName: string, topicName: string, lectureId: string): void => {
  if (typeof window === 'undefined') return;
  try {
    const key = generateLectureStorageKey(courseId, subjectName, topicName, lectureId);
    const completedLecturesRaw = localStorage.getItem(COMPLETED_LECTURES_KEY);
    let completedLectures: Set<string>;

    if (completedLecturesRaw) {
      completedLectures = new Set(JSON.parse(completedLecturesRaw));
    } else {
      completedLectures = new Set();
    }

    completedLectures.add(key);
    localStorage.setItem(COMPLETED_LECTURES_KEY, JSON.stringify(Array.from(completedLectures)));
  } catch (error) {
    console.error("Error marking lecture as completed in localStorage:", error);
  }
};

export const isLectureCompleted = (courseId: string, subjectName: string, topicName: string, lectureId: string): boolean => {
  if (typeof window === 'undefined') return false;
  try {
    const key = generateLectureStorageKey(courseId, subjectName, topicName, lectureId);
    const completedLecturesRaw = localStorage.getItem(COMPLETED_LECTURES_KEY);

    if (completedLecturesRaw) {
      const completedLectures: Set<string> = new Set(JSON.parse(completedLecturesRaw));
      return completedLectures.has(key);
    }
    return false;
  } catch (error) {
    console.error("Error checking lecture completion status from localStorage:", error);
    return false;
  }
};

export const getCompletedLectureKeys = (): Set<string> => {
  if (typeof window === 'undefined') return new Set();
  try {
    const completedLecturesRaw = localStorage.getItem(COMPLETED_LECTURES_KEY);
    if (completedLecturesRaw) {
      return new Set(JSON.parse(completedLecturesRaw));
    }
    return new Set();
  } catch (error) {
    console.error("Error retrieving completed lecture keys from localStorage:", error);
    return new Set();
  }
};
