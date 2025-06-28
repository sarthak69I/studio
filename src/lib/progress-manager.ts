
// src/lib/progress-manager.ts
'use client';

import { db, auth } from './firebase';
import { doc, getDoc, setDoc, onSnapshot, serverTimestamp, updateDoc, arrayUnion, arrayRemove, Timestamp } from 'firebase/firestore';
import type { User } from 'firebase/auth';

const COMPLETED_LECTURES_KEY = 'eleakCompletedLectures_v2';

export interface RecentlyViewedEntry {
    key: string;
    timestamp: Timestamp;
}

export interface UserProgress {
    completedLectures: string[];
    lastWatchedLectureKey: string | null;
    enrolledCourseIds: string[];
    recentlyViewed: RecentlyViewedEntry[];
    score?: {
        points: number;
        epoch: number;
    };
}


const generateLectureStorageKey = (courseId: string, subjectName: string, topicName: string, lectureId: string): string => {
  return `${courseId}::${subjectName}::${topicName}::${lectureId}`;
};

// --- LocalStorage Functions ---
const getLocalCompletedKeys = (): Set<string> => {
  if (typeof window === 'undefined') return new Set();
  try {
    const completedLecturesRaw = localStorage.getItem(COMPLETED_LECTURES_KEY);
    return completedLecturesRaw ? new Set(JSON.parse(completedLecturesRaw)) : new Set();
  } catch (error) {
    console.error("Error retrieving local completed keys:", error);
    return new Set();
  }
};

const setLocalCompletedKeys = (keys: Set<string>): void => {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(COMPLETED_LECTURES_KEY, JSON.stringify(Array.from(keys)));
  } catch (error) {
    console.error("Error setting local completed keys:", error);
  }
};


// --- Firestore Functions ---
const getFirestoreProgress = async (userId: string): Promise<UserProgress> => {
  try {
    const userProgressRef = doc(db, 'userProgress', userId);
    const docSnap = await getDoc(userProgressRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        completedLectures: data.completedLectures || [],
        lastWatchedLectureKey: data.lastWatchedLectureKey || null,
        enrolledCourseIds: data.enrolledCourseIds || [],
        recentlyViewed: data.recentlyViewed || [],
        score: data.score || { points: 0, epoch: 0 },
      };
    }
    return { completedLectures: [], lastWatchedLectureKey: null, enrolledCourseIds: [], recentlyViewed: [], score: { points: 0, epoch: 0 } };
  } catch (error) {
    console.error("Error fetching progress from Firestore:", error);
    return { completedLectures: [], lastWatchedLectureKey: null, enrolledCourseIds: [], recentlyViewed: [], score: { points: 0, epoch: 0 } };
  }
};

const saveProgressToFirestore = async (userId: string, data: Partial<UserProgress>): Promise<void> => {
    if (!userId) return;
    try {
        const userProgressRef = doc(db, 'userProgress', userId);
        const dataToSave: any = {
            ...data,
            lastUpdated: serverTimestamp()
        };
        await setDoc(userProgressRef, dataToSave, { merge: true });
    } catch (error) {
        console.error("Error saving progress to Firestore:", error);
    }
};

// --- Combined Public Functions ---
export const markLectureAsCompleted = async (courseId: string, subjectName: string, topicName: string, lectureId: string): Promise<void> => {
  const key = generateLectureStorageKey(courseId, subjectName, topicName, lectureId);
  
  const localKeys = getLocalCompletedKeys();
  localKeys.add(key);
  setLocalCompletedKeys(localKeys);

  const user = auth.currentUser;
  if (user) {
    const progressDocRef = doc(db, 'userProgress', user.uid);
    try {
        const docSnap = await getDoc(progressDocRef);
        let currentProgress: UserProgress = {
            completedLectures: [],
            lastWatchedLectureKey: null,
            enrolledCourseIds: [],
            recentlyViewed: [],
            score: { points: 0, epoch: 0 },
        };

        if (docSnap.exists()) {
            currentProgress = docSnap.data() as UserProgress;
        }

        // --- Recently Viewed Logic ---
        const newRecentlyViewed = (currentProgress.recentlyViewed || []).filter(item => item.key !== key);
        newRecentlyViewed.unshift({ key, timestamp: Timestamp.now() });
        const trimmedRecentlyViewed = newRecentlyViewed.slice(0, 15);

        // --- Completed Lectures Logic ---
        const updatedCompletedLectures = new Set(currentProgress.completedLectures);
        updatedCompletedLectures.add(key);

        // --- Leaderboard Scoring Logic ---
        const FOUR_DAYS_IN_MS = 4 * 24 * 60 * 60 * 1000;
        const currentEpoch = Math.floor(Date.now() / FOUR_DAYS_IN_MS);
        const userEpoch = currentProgress.score?.epoch ?? 0;
        let newScorePoints = currentProgress.score?.points ?? 0;

        if (currentEpoch > userEpoch) {
            newScorePoints = 1; // First lecture of a new epoch
        } else {
            newScorePoints += 1; // Increment score for this epoch
        }
        
        // --- Save to Firestore ---
        await setDoc(progressDocRef, {
            lastWatchedLectureKey: key,
            recentlyViewed: trimmedRecentlyViewed,
            completedLectures: Array.from(updatedCompletedLectures),
            score: { points: newScorePoints, epoch: currentEpoch },
        }, { merge: true });

    } catch (error) {
        console.error("Error updating user progress:", error);
    }
  }
};


export const markCourseAsEnrolled = async (courseId: string): Promise<void> => {
    const user = auth.currentUser;
    if (user) {
        const progressDocRef = doc(db, 'userProgress', user.uid);
        await setDoc(progressDocRef, {
            enrolledCourseIds: arrayUnion(courseId)
        }, { merge: true });
    }
}

export const isLectureCompleted = (courseId: string, subjectName: string, topicName: string, lectureId: string): boolean => {
  const key = generateLectureStorageKey(courseId, subjectName, topicName, lectureId);
  const localKeys = getLocalCompletedKeys();
  return localKeys.has(key);
};

export const getCompletedLectureKeys = (): Set<string> => {
    return getLocalCompletedKeys();
}

export const syncProgressOnLogin = async (user: User): Promise<void> => {
    if (!user) return;
    
    const localKeys = getLocalCompletedKeys();
    const remoteProgress = await getFirestoreProgress(user.uid);
    
    const mergedKeys = new Set([...localKeys, ...remoteProgress.completedLectures]);
    
    setLocalCompletedKeys(mergedKeys);
    
    if (mergedKeys.size > remoteProgress.completedLectures.length) {
        await saveProgressToFirestore(user.uid, { completedLectures: Array.from(mergedKeys) });
    }
};

export const listenToProgress = (userId: string, callback: (progress: UserProgress) => void): (() => void) => {
    const userProgressRef = doc(db, 'userProgress', userId);
    const unsubscribe = onSnapshot(userProgressRef, (docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            const progressData: UserProgress = {
                 completedLectures: data.completedLectures || [],
                 lastWatchedLectureKey: data.lastWatchedLectureKey || null,
                 enrolledCourseIds: data.enrolledCourseIds || [],
                 recentlyViewed: data.recentlyViewed || [],
                 score: data.score || { points: 0, epoch: 0 },
            };
            setLocalCompletedKeys(new Set(progressData.completedLectures));
            callback(progressData);
        } else {
            const localKeys = getLocalCompletedKeys();
            if (localKeys.size > 0) {
              saveProgressToFirestore(userId, { completedLectures: Array.from(localKeys) });
            }
            callback({ completedLectures: Array.from(localKeys), lastWatchedLectureKey: null, enrolledCourseIds: [], recentlyViewed: [], score: { points: 0, epoch: 0 } });
        }
    }, (error) => {
        console.error("Error listening to progress updates:", error);
        callback({ completedLectures: [], lastWatchedLectureKey: null, enrolledCourseIds: [], recentlyViewed: [], score: { points: 0, epoch: 0 } });
    });

    return unsubscribe;
};
