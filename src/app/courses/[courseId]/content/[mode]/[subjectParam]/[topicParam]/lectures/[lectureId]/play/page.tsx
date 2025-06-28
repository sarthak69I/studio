// src/app/courses/[courseId]/content/[mode]/[subjectParam]/[topicParam]/lectures/[lectureId]/play/page.tsx

// This page is no longer used for displaying a timer. 
// The timer logic has been moved directly to the lecture list page.
// This file can be deleted or kept as a placeholder. I will redirect to the parent lectures list.

import { redirect } from 'next/navigation';

export default function LecturePlayPage({ params }: { params: { courseId: string; mode: string; subjectParam: string, topicParam: string } }) {
  const { courseId, mode, subjectParam, topicParam } = params;
  
  if (courseId && mode && subjectParam && topicParam) {
    redirect(`/courses/${courseId}/content/${mode}/${subjectParam}/${topicParam}/lectures`);
  } else {
    // Fallback if params are somehow missing
    redirect('/');
  }
  
  return null; // This component will not render anything
}
