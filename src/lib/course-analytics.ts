
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  aarambh9CourseContent,
  type CourseContentMap,
  type Topic,
} from '@/lib/course-data';

// A single function to calculate the total number of lectures.
export function getTotalLectureCount(): number {
  let total = 0;

  const courses: CourseContentMap[] = [
    scienceCourseContent,
    commerceCourseContent,
    aarambhCourseContent,
    aarambh9CourseContent,
  ];

  for (const course of courses) {
    for (const subjectName in course) {
      const subjectContent = course[subjectName];
      if (Array.isArray(subjectContent)) {
        for (const topic of subjectContent as Topic[]) {
          if (topic.lectures && Array.isArray(topic.lectures)) {
            // Only count lectures that have a video URL, as those are the only 'watchable' ones.
            total += topic.lectures.filter(lec => lec.videoEmbedUrl).length;
          }
        }
      }
    }
  }

  return total;
}
