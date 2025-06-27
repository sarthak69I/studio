
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

interface UserProgress {
    completedLectures: string[];
    lastWatchedLectureKey: string | null;
    enrolledCourseIds: string[];
    recentlyViewed: RecentlyViewedEntry[];
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
      };
    }
    return { completedLectures: [], lastWatchedLectureKey: null, enrolledCourseIds: [], recentlyViewed: [] };
  } catch (error) {
    console.error("Error fetching progress from Firestore:", error);
    return { completedLectures: [], lastWatchedLectureKey: null, enrolledCourseIds: [], recentlyViewed: [] };
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
        // Use merge:true to create or update the document
        await setDoc(userProgressRef, dataToSave, { merge: true });
    } catch (error) {
        console.error("Error saving progress to Firestore:", error);
    }
};


// --- Combined Public Functions ---
export const markLectureAsCompleted = async (courseId: string, subjectName: string, topicName: string, lectureId: string): Promise<void> => {
  const key = generateLectureStorageKey(courseId, subjectName, topicName, lectureId);
  
  const localKeys = getLocalCompletedKeys();
  if (!localKeys.has(key)) {
      localKeys.add(key);
      setLocalCompletedKeys(localKeys);
  }

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
        };

        if (docSnap.exists()) {
            currentProgress = docSnap.data() as UserProgress;
        }

        // Update recently viewed list
        const newRecentlyViewed = (currentProgress.recentlyViewed || [])
            .filter(item => item.key !== key); // Remove old entry for this lecture
        
        newRecentlyViewed.unshift({ key, timestamp: Timestamp.now() }); // Add new entry to the front

        // Trim the list to the last 15 items
        const trimmedRecentlyViewed = newRecentlyViewed.slice(0, 15);
        
        // Prepare data for saving
        const updatedProgressData: Partial<UserProgress> = {
            lastWatchedLectureKey: key,
            recentlyViewed: trimmedRecentlyViewed,
        };
        
        const updatedCompletedLectures = new Set(currentProgress.completedLectures);
        updatedCompletedLectures.add(key);

        await setDoc(progressDocRef, {
            ...updatedProgressData,
            completedLectures: Array.from(updatedCompletedLectures),
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
            };
            // Ensure local storage is always in sync with Firestore for a logged-in user.
            setLocalCompletedKeys(new Set(progressData.completedLectures));
            callback(progressData);
        } else {
            // If no remote progress, sync local progress up to Firestore.
            const localKeys = getLocalCompletedKeys();
            if (localKeys.size > 0) {
              saveProgressToFirestore(userId, { completedLectures: Array.from(localKeys) });
            }
            callback({ completedLectures: Array.from(localKeys), lastWatchedLectureKey: null, enrolledCourseIds: [], recentlyViewed: [] });
        }
    }, (error) => {
        console.error("Error listening to progress updates:", error);
        callback({ completedLectures: [], lastWatchedLectureKey: null, enrolledCourseIds: [], recentlyViewed: [] });
    });

    return unsubscribe;
};
