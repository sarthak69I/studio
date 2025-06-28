// src/app/courses/[courseId]/content/[mode]/[subjectParam]/[topicParam]/lectures/[lectureId]/play/page.tsx

// This is now a fully dynamic Server Component that renders the client-side player.
import LecturePlayerClient from '@/components/lecture-player-client';

export default function LecturePlayPage() {
  // The LecturePlayerClient component will handle fetching params and rendering the player and timer.
  return <LecturePlayerClient />;
}
