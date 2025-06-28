// src/lib/progress-manager.ts

import { db, auth } from './firebase';
import { doc, getDoc, setDoc, onSnapshot, serverTimestamp, Timestamp } from 'firebase/firestore';
import type { User } from 'firebase/auth';

const LEADERBOARD_EPOCH_DURATION_MS = 4 * 24 * 60 * 60 * 1000; // 4 days

export interface RecentlyViewedEntry {
    key: string;
    timestamp: Timestamp;
}

export interface UserProgress {
    enrolledCourseIds: string[];
    recentlyViewed: RecentlyViewedEntry[];
    score: {
        points: number; // Total points for the current epoch
        epoch: number; // The current leaderboard epoch identifier
        pointsPerLecture: { [lectureKey: string]: number }; // Points earned for each lecture in this epoch
    };
}

export const generateLectureStorageKey = (courseId: string, subjectName: string, topicName: string, lectureId: string): string => {
  // Use a consistent encoding to prevent issues with special characters in names
  return `${encodeURIComponent(courseId)}::${encodeURIComponent(subjectName)}::${encodeURIComponent(topicName)}::${encodeURIComponent(lectureId)}`;
};

const getInitialProgress = (): UserProgress => ({
    enrolledCourseIds: [],
    recentlyViewed: [],
    score: {
        points: 0,
        epoch: 0,
        pointsPerLecture: {},
    },
});

export const awardPointForWatchTime = async (lectureKey: string): Promise<{ success: boolean; message: string; }> => {
    const user = auth.currentUser;
    if (!user) {
        return { success: false, message: "User not authenticated." };
    }
    if (!lectureKey) {
        return { success: false, message: "Invalid lecture key provided." };
    }

    const progressDocRef = doc(db, 'userProgress', user.uid);
    try {
        const docSnap = await getDoc(progressDocRef);
        let currentProgress = docSnap.exists() ? (docSnap.data() as UserProgress) : getInitialProgress();

        // Ensure score object and its properties exist
        if (!currentProgress.score) {
            currentProgress.score = { points: 0, epoch: 0, pointsPerLecture: {} };
        }
        if (!currentProgress.score.pointsPerLecture) {
            currentProgress.score.pointsPerLecture = {};
        }

        const currentEpoch = Math.floor(Date.now() / LEADERBOARD_EPOCH_DURATION_MS);

        // Reset score if epoch has changed
        if (currentProgress.score.epoch < currentEpoch) {
            currentProgress.score.epoch = currentEpoch;
            currentProgress.score.points = 0;
            currentProgress.score.pointsPerLecture = {};
        }

        const pointsForThisLecture = currentProgress.score.pointsPerLecture[lectureKey] || 0;

        if (pointsForThisLecture >= 45) {
            return { success: false, message: "Maximum points reached for this lecture in this cycle." };
        }

        // Award point
        currentProgress.score.points = (currentProgress.score.points || 0) + 1;
        currentProgress.score.pointsPerLecture[lectureKey] = pointsForThisLecture + 1;

        await setDoc(progressDocRef, { score: currentProgress.score }, { merge: true });

        return { success: true, message: "Point awarded." };

    } catch (error) {
        console.error("Error awarding point:", error);
        return { success: false, message: "An error occurred while awarding the point." };
    }
};

export const addLectureToRecentlyViewed = async (lectureKey: string): Promise<void> => {
    const user = auth.currentUser;
    if (!user || !lectureKey) return;

    const progressDocRef = doc(db, 'userProgress', user.uid);
    try {
        const docSnap = await getDoc(progressDocRef);
        let currentProgress = docSnap.exists() ? (docSnap.data() as UserProgress) : getInitialProgress();

        let recentlyViewed = currentProgress.recentlyViewed || [];
        recentlyViewed = recentlyViewed.filter(item => item.key !== lectureKey);
        recentlyViewed.unshift({ key: lectureKey, timestamp: Timestamp.now() });
        const trimmedRecentlyViewed = recentlyViewed.slice(0, 15);

        await setDoc(progressDocRef, {
            recentlyViewed: trimmedRecentlyViewed
        }, { merge: true });
    } catch (error) {
        console.error("Error updating recently viewed:", error);
    }
};


export const markCourseAsEnrolled = async (courseId: string): Promise<void> => {
    const user = auth.currentUser;
    if (user && courseId) {
        const progressDocRef = doc(db, 'userProgress', user.uid);
        const docSnap = await getDoc(progressDocRef);
        const currentEnrolled = docSnap.exists() ? (docSnap.data().enrolledCourseIds || []) : [];
        if (!currentEnrolled.includes(courseId)) {
            await setDoc(progressDocRef, {
                enrolledCourseIds: [...currentEnrolled, courseId]
            }, { merge: true });
        }
    }
}


export const listenToProgress = (userId: string, callback: (progress: UserProgress) => void): (() => void) => {
    const userProgressRef = doc(db, 'userProgress', userId);
    const unsubscribe = onSnapshot(userProgressRef, (docSnap) => {
        if (docSnap.exists()) {
            const data = docSnap.data();
            const progressData: UserProgress = {
                 enrolledCourseIds: data.enrolledCourseIds || [],
                 recentlyViewed: data.recentlyViewed || [],
                 score: {
                     points: data.score?.points || 0,
                     epoch: data.score?.epoch || 0,
                     pointsPerLecture: data.score?.pointsPerLecture || {},
                 },
            };
            callback(progressData);
        } else {
            callback(getInitialProgress());
        }
    }, (error) => {
        console.error("Error listening to progress updates:", error);
        callback(getInitialProgress());
    });

    return unsubscribe;
};

// Syncing logic is no longer relevant as we are not using local storage for completion.
// The server is the source of truth.
export const syncProgressOnLogin = async (user: User): Promise<void> => {
    if (!user) return;
    // This function can be used for other on-login tasks in the future if needed.
    console.log(`User ${user.uid} logged in. Progress is managed via Firestore.`);
};

// This function is no longer the primary way to check completion but can be useful for UI.
export const isLectureStarted = (progress: UserProgress | null, lectureKey: string): boolean => {
    if (!progress || !progress.score || !progress.score.pointsPerLecture) return false;
    return (progress.score.pointsPerLecture[lectureKey] || 0) > 0;
};
