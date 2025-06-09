
// src/lib/aarambh9-data.ts
import type { CourseContentMap, Lecture } from './course-utils';
import { slugify } from './course-utils';

const aarambh9BasePath = '/assets/courses/aarambh9';

const generateLectures = (topicName: string, count: number, subjectSlug: string, topicSlugOverride?: string): Lecture[] => {
  const lectures: Lecture[] = [];
  const actualTopicSlug = topicSlugOverride || slugify(topicName);
  for (let i = 1; i <= count; i++) {
    lectures.push({
      id: `L${i}`,
      title: `${topicName} L${i}`,
      notesLink: `${aarambh9BasePath}/${subjectSlug}/${actualTopicSlug}/notes/L${i}.pdf`,
      videoEmbedType: 'youtube',
      videoEmbedUrl: '#',
    });
  }
  return lectures;
};

export const aarambh9CourseContent: CourseContentMap = {
  'Science': [
    {
      name: 'Motion',
      lectures: generateLectures('Motion', 6, 'science')
    },
    {
      name: 'Matter in our Surroundings',
      lectures: generateLectures('Matter in our Surroundings', 5, 'science', slugify('Matter in our Surroundings'))
    },
    {
      name: 'The Fundamental Unit of Life',
      lectures: generateLectures('The Fundamental Unit of Life', 5, 'science', slugify('The Fundamental Unit of Life'))
    }
  ],
  'Social Science': [
    {
      name: 'The French Revolution',
      lectures: generateLectures('The French Revolution', 8, 'social-science', slugify('The French Revolution'))
    },
    {
      name: 'India - Size and Location',
      lectures: generateLectures('India - Size and Location', 4, 'social-science', slugify('India - Size and Location'))
    },
    {
      name: 'The Story of Village Palampur',
      lectures: generateLectures('The Story of Village Palampur', 4, 'social-science', slugify('The Story of Village Palampur'))
    }
  ],
  'Mathematics': [
    {
      name: 'Number System',
      lectures: generateLectures('Number System', 8, 'mathematics')
    },
    {
      name: 'Polynomials',
      lectures: generateLectures('Polynomials', 9, 'mathematics')
    },
    {
      name: 'Coordinate Geometry',
      lectures: generateLectures('Coordinate Geometry', 4, 'mathematics', slugify('Coordinate Geometry'))
    }
  ],
};
