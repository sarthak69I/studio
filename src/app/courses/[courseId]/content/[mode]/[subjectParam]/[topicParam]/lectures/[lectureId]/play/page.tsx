
// REMOVED: 'use client';

import * as React from 'react';
import LecturePlayerClient from '@/components/lecture-player-client';

// Imports needed for generateStaticParams
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  type Lecture,
  type Topic,
  // CourseContentMap is not directly used by generateStaticParams here, but Lecture and Topic are.
} from '@/lib/course-data';

export function generateStaticParams() {
  const paths: { courseId: string; mode: string; subjectParam: string; topicParam: string; lectureId: string }[] = [];
  const courses = [
    { id: '1', content: scienceCourseContent, name: 'science' },
    { id: '2', content: commerceCourseContent, name: 'commerce' },
    { id: '3', content: aarambhCourseContent, name: 'aarambh' },
  ];
  
  courses.forEach(course => {
    // Ensure course.content is treated as CourseContentMap for Object.entries
    const courseContentMap = course.content; 
    Object.entries(courseContentMap).forEach(([subjectName, subjectData]) => {
      if (typeof subjectData !== 'string' && Array.isArray(subjectData)) { 
        subjectData.forEach((topic: Topic) => {
          if (topic.lectures) {
            topic.lectures.forEach((lecture: Lecture) => {
              if (lecture.videoEmbedUrl) { // Only for video mode and if video exists
                paths.push({
                  courseId: course.id,
                  mode: 'video', 
                  subjectParam: encodeURIComponent(subjectName),
                  topicParam: encodeURIComponent(topic.name),
                  lectureId: encodeURIComponent(lecture.id),
                });
              }
            });
          }
        });
      }
    });
  });
  return paths;
}

// This is now a Server Component
export default function LecturePlayPage() {
  // The LecturePlayerClient component will handle fetching params and rendering the player
  return <LecturePlayerClient />;
}
