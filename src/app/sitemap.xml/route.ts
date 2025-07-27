
// src/app/sitemap.xml/route.ts
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  aarambh9CourseContent,
  type CourseContentMap,
  type Topic, 
  type Lecture 
} from '@/lib/course-data';
import { booksData } from '@/lib/books-data';

export const dynamic = 'force-dynamic'; // Ensures the sitemap is generated on each request

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://e-leak.vercel.app"; // Your production domain

interface SitemapUrl {
  loc: string;
  lastmod: string;
  priority: number;
}

export function GET() {
  const lastmod = new Date().toISOString();
  const urls: SitemapUrl[] = [];

  // 1. Static Pages
  urls.push({ loc: `${BASE_URL}/`, lastmod, priority: 1.0 });
  urls.push({ loc: `${BASE_URL}/generate-access`, lastmod, priority: 0.8 });
  urls.push({ loc: `${BASE_URL}/help-center`, lastmod, priority: 0.5 });
  urls.push({ loc: `${BASE_URL}/shortener`, lastmod, priority: 0.7 });
  urls.push({ loc: `${BASE_URL}/leaderboard`, lastmod, priority: 0.7 });
  urls.push({ loc: `${BASE_URL}/books`, lastmod, priority: 0.9 });
  urls.push({ loc: `${BASE_URL}/live`, lastmod, priority: 0.9 });
  urls.push({ loc: `${BASE_URL}/socials`, lastmod, priority: 0.6 });

  // Add book pages
  booksData.forEach(category => {
    category.books.forEach(book => {
      // Assuming no specific page per book, just the main books page.
    });
  });

  const courses = [
    { id: '1', content: scienceCourseContent, name: 'science' },
    { id: '2', content: commerceCourseContent, name: 'commerce' },
    { id: '3', content: aarambhCourseContent, name: 'aarambh-class-10' },
    { id: '4', content: aarambh9CourseContent, name: 'aarambh-class-9' },
  ];

  const modes: ('video' | 'notes' | 'dpp')[] = ['video', 'notes', 'dpp'];

  courses.forEach(course => {
    // 2. Course Enrollment Page
    urls.push({ loc: `${BASE_URL}/courses/${course.id}/enroll`, lastmod, priority: 0.9 });

    // 3. Course Live Page
    urls.push({ loc: `${BASE_URL}/courses/${course.id}/live`, lastmod, priority: 0.7 });

    const courseContentMap = course.content as CourseContentMap;

    Object.keys(courseContentMap).forEach(subjectName => {
      const subjectParam = encodeURIComponent(subjectName);
      const subjectData = courseContentMap[subjectName];

      modes.forEach(mode => {
        // 4. Subject Pages
        urls.push({ loc: `${BASE_URL}/courses/${course.id}/content/${mode}/${subjectParam}`, lastmod, priority: 0.8 });

        if (typeof subjectData !== 'string' && Array.isArray(subjectData)) { // subjectData is Topic[]
          subjectData.forEach((topic: Topic) => {
            if (topic.name) { // Ensure topic has a name
              const topicParam = encodeURIComponent(topic.name);

              // 5. Topic Lectures List Pages
              urls.push({ loc: `${BASE_URL}/courses/${course.id}/content/${mode}/${subjectParam}/${topicParam}/lectures`, lastmod, priority: 0.7 });
            }
          });
        }
      });
    });
  });

  // Construct XML
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  urls.forEach(url => {
    xml += `
    <url>
      <loc>${url.loc}</loc>
      <lastmod>${lastmod}</lastmod>
      <priority>${url.priority}</priority>
    </url>`;
  });
  xml += '</urlset>';

  try {
    return new Response(xml, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate', // Cache for 1 day
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Sitemap: Critical error during new Response() construction:', error);
    return new Response('Error generating sitemap. Please check server logs.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
