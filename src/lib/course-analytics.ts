
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  aarambh9CourseContent,
  type CourseContentMap,
  type Topic,
  type Lecture,
} from '@/lib/course-data';

const courseDisplayNames: Record<string, string> = {
  '1': "Science Batch (Class 11)",
  '2': "Commerce Batch (Class 11)",
  '3': "Aarambh Batch (Class 10)",
  '4': "Aarambh Batch (Class 9)",
};


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

export function getLectureDetailsFromKey(key: string): { lecture: Lecture, topic: Topic, subjectName: string, courseId: string } | null {
  if (!key) return null;
  const parts = key.split('::');
  if (parts.length !== 4) return null;

  const [courseId, subjectName, topicName, lectureId] = parts;

  let courseMap: CourseContentMap | undefined;
  switch (courseId) {
    case '1': courseMap = scienceCourseContent; break;
    case '2': courseMap = commerceCourseContent; break;
    case '3': courseMap = aarambhCourseContent; break;
    case '4': courseMap = aarambh9CourseContent; break;
    default: return null;
  }

  const subjectData = courseMap[decodeURIComponent(subjectName)];
  if (!subjectData || typeof subjectData === 'string') return null;
  
  const topic = (subjectData as Topic[]).find(t => t.name === decodeURIComponent(topicName));
  if (!topic || !topic.lectures) return null;

  const lecture = topic.lectures.find(l => l.id === decodeURIComponent(lectureId));
  if (!lecture) return null;

  return { lecture, topic, subjectName: decodeURIComponent(subjectName), courseId };
}


export function getCourseNameById(courseId: string): string {
    return courseDisplayNames[courseId] || `Course ${courseId}`;
}
