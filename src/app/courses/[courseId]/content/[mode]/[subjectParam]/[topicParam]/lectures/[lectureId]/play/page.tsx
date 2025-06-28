// src/app/courses/[courseId]/content/[mode]/[subjectParam]/[topicParam]/lectures/[lectureId]/play/page.tsx

// This is now a fully dynamic Server Component that renders the client-side timer page.
import LecturePlayerClient from '@/components/lecture-player-client';

export default function LecturePlayPage() {
  // The LecturePlayerClient component will handle the timer logic and opening the external player.
  return <LecturePlayerClient />;
}
