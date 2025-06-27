
// src/lib/progress-manager.ts
'use client';

import { db, auth } from './firebase';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore';
import type { User } from 'firebase/auth';

const COMPLETED_LECTURES_KEY = 'eleakCompletedLectures_v2'; // version bump for new structure

// Generates a unique key for storing lecture completion status
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

const getFirestoreCompletedKeys = async (userId: string): Promise<Set<string>> => {
  try {
    const userProgressRef = doc(db, 'userProgress', userId);
    const docSnap = await getDoc(userProgressRef);
    if (docSnap.exists()) {
      const data = docSnap.data();
      return new Set(data.completedLectures || []);
    }
    return new Set();
  } catch (error) {
    console.error("Error fetching progress from Firestore:", error);
    return new Set();
  }
};

const saveKeysToFirestore = async (userId: string, keys: Set<string>): Promise<void> => {
    if (!userId) return;
    try {
        const userProgressRef = doc(db, 'userProgress', userId);
        await setDoc(userProgressRef, { completedLectures: Array.from(keys) }, { merge: true });
    } catch (error) {
        console.error("Error saving progress to Firestore:", error);
    }
};

// --- Combined Public Functions ---

export const markLectureAsCompleted = async (courseId: string, subjectName: string, topicName: string, lectureId: string): Promise<void> => {
  const key = generateLectureStorageKey(courseId, subjectName, topicName, lectureId);
  
  const localKeys = getLocalCompletedKeys();
  if (localKeys.has(key)) return; // Already completed locally

  localKeys.add(key);
  setLocalCompletedKeys(localKeys);

  const user = auth.currentUser;
  if (user) {
    // No need to fetch, just add the new key to the existing set in firestore
    const remoteKeys = await getFirestoreCompletedKeys(user.uid);
    if (!remoteKeys.has(key)) {
      remoteKeys.add(key);
      await saveKeysToFirestore(user.uid, remoteKeys);
    }
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

// Function to sync local and remote progress on login
export const syncProgressOnLogin = async (user: User): Promise<void> => {
    if (!user) return;
    
    const localKeys = getLocalCompletedKeys();
    const remoteKeys = await getFirestoreCompletedKeys(user.uid);
    
    const mergedKeys = new Set([...localKeys, ...remoteKeys]);

    setLocalCompletedKeys(mergedKeys);
    
    // Only write to firestore if the merged set is larger than what's already there
    if (mergedKeys.size > remoteKeys.size) {
        await saveKeysToFirestore(user.uid, mergedKeys);
    }
};

// Function for the dashboard to get live updates on progress
export const listenToProgress = (userId: string, callback: (keys: Set<string>) => void): (() => void) => {
    const userProgressRef = doc(db, 'userProgress', userId);
    const unsubscribe = onSnapshot(userProgressRef, (docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            const keys = new Set<string>(data.completedLectures || []);
            setLocalCompletedKeys(keys); // Keep local storage in sync with firestore
            callback(keys);
        } else {
            // If no document, sync local keys up to firestore for the first time
            const localKeys = getLocalCompletedKeys();
            if (localKeys.size > 0) {
              saveKeysToFirestore(userId, localKeys);
            }
            callback(localKeys);
        }
    }, (error) => {
        console.error("Error listening to progress updates:", error);
        callback(new Set()); // On error, return empty set
    });

    return unsubscribe;
};
