
// src/lib/progress-manager.ts
'use client';

import { db, auth } from './firebase';
import { doc, getDoc, setDoc, onSnapshot, serverTimestamp } from 'firebase/firestore';
import type { User } from 'firebase/auth';

const COMPLETED_LECTURES_KEY = 'eleakCompletedLectures_v2';

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
const getFirestoreProgress = async (userId: string): Promise<{ keys: Set<string>, lastWatchedKey: string | null }> => {
  try {
    const userProgressRef = doc(db, 'userProgress', userId);
    const docSnap = await getDoc(userProgressRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return {
        keys: new Set(data.completedLectures || []),
        lastWatchedKey: data.lastWatchedLectureKey || null,
      };
    }
    return { keys: new Set(), lastWatchedKey: null };
  } catch (error) {
    console.error("Error fetching progress from Firestore:", error);
    return { keys: new Set(), lastWatchedKey: null };
  }
};

const saveProgressToFirestore = async (userId: string, data: { completedLectures: string[], lastWatchedLectureKey?: string }): Promise<void> => {
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
    const remoteProgress = await getFirestoreProgress(user.uid);
    remoteProgress.keys.add(key);
    await saveProgressToFirestore(user.uid, {
        completedLectures: Array.from(remoteProgress.keys),
        lastWatchedLectureKey: key
    });
  }
};

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
    
    const mergedKeys = new Set([...localKeys, ...remoteProgress.keys]);

    setLocalCompletedKeys(mergedKeys);
    
    if (mergedKeys.size > remoteProgress.keys.size) {
        await saveProgressToFirestore(user.uid, { completedLectures: Array.from(mergedKeys) });
    }
};

export const listenToProgress = (userId: string, callback: (progress: { keys: Set<string>, lastWatchedKey: string | null }) => void): (() => void) => {
    const userProgressRef = doc(db, 'userProgress', userId);
    const unsubscribe = onSnapshot(userProgressRef, (docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            const keys = new Set<string>(data.completedLectures || []);
            const lastWatchedKey = data.lastWatchedLectureKey || null;
            setLocalCompletedKeys(keys); // Keep local storage in sync with firestore
            callback({ keys, lastWatchedKey });
        } else {
            const localKeys = getLocalCompletedKeys();
            if (localKeys.size > 0) {
              saveProgressToFirestore(userId, { completedLectures: Array.from(localKeys) });
            }
            callback({ keys: localKeys, lastWatchedKey: null });
        }
    }, (error) => {
        console.error("Error listening to progress updates:", error);
        callback({ keys: new Set(), lastWatchedKey: null });
    });

    return unsubscribe;
};
