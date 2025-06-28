
import type { UserData } from '@/context/AuthContext';
import type { UserProgress } from '@/lib/progress-manager';
import { Award, Footprints, PartyPopper, BrainCircuit, ShieldCheck, UserCheck } from 'lucide-react';

export interface Achievement {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  points: number;
  isUnlocked: (userData: UserData, progress: UserProgress) => boolean;
}

export const ALL_ACHIEVEMENTS: Achievement[] = [
  {
    id: 'welcome',
    name: 'Welcome Aboard!',
    description: 'Create an account and start your learning journey.',
    icon: PartyPopper,
    points: 10,
    isUnlocked: (userData) => !!userData,
  },
  {
    id: 'profile_pro',
    name: 'Profile Pro',
    description: 'Personalize your profile with a custom picture.',
    icon: UserCheck,
    points: 25,
    isUnlocked: (userData) => !!userData.photoURL,
  },
  {
    id: 'first_steps',
    name: 'First Steps',
    description: 'Enroll in your very first course.',
    icon: Footprints,
    points: 10,
    isUnlocked: (userData, progress) => progress.enrolledCourseIds.length >= 1,
  },
  {
    id: 'learning_spree',
    name: 'Learning Spree',
    description: 'Complete 10 lectures.',
    icon: BrainCircuit,
    points: 50,
    isUnlocked: (userData, progress) => progress.completedLectures.length >= 10,
  },
  {
    id: 'course_conqueror',
    name: 'Course Conqueror',
    description: 'Enroll in 3 different courses.',
    icon: ShieldCheck,
    points: 75,
    isUnlocked: (userData, progress) => progress.enrolledCourseIds.length >= 3,
  },
  {
    id: 'dedicated_learner',
    name: 'Dedicated Learner',
    description: 'Complete 25 lectures.',
    icon: Award,
    points: 150,
    isUnlocked: (userData, progress) => progress.completedLectures.length >= 25,
  },
];

export const getUnlockedAchievements = (userData: UserData, progress: UserProgress): Achievement[] => {
  return ALL_ACHIEVEMENTS.filter(achievement => achievement.isUnlocked(userData, progress));
};

export const calculateScore = (unlockedAchievements: Achievement[]): number => {
    if (!unlockedAchievements) return 0;
    return unlockedAchievements.reduce((total, achievement) => total + achievement.points, 0);
};
