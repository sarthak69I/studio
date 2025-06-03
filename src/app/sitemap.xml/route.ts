
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  type CourseContentMap,
  type Topic,
  type Lecture,
} from '@/lib/course-data';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://e-leak.vercel.app/";

function generateSiteMap(
  courseContents: { id: string; content: CourseContentMap; namePrefix: string }[],
  staticPages: string[]
): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  const safeBaseUrl = BASE_URL.endsWith('/') ? BASE_URL.slice(0, -1) : BASE_URL;

  // Add static pages
  staticPages.forEach(page => {
    const loc = page === '/' ? safeBaseUrl : `${safeBaseUrl}${page}`;
    xml += `
      <url>
        <loc>${loc}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${page === '/' ? '1.0' : '0.8'}</priority>
      </url>`;
  });

  // Add dynamic course pages
  courseContents.forEach(course => {
    const courseId = course.id;
    if (!courseId) return; // Skip if courseId is invalid

    // Enroll page
    xml += `
      <url>
        <loc>${safeBaseUrl}/courses/${courseId}/enroll</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.7</priority>
      </url>`;

    // Live page
    xml += `
      <url>
        <loc>${safeBaseUrl}/courses/${courseId}/live</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.7</priority>
      </url>`;
    
    // Content pages (subjects, topics, lectures)
    Object.entries(course.content).forEach(([subjectName, subjectData]) => {
      if (!subjectName) return; // Skip if subjectName is invalid
      const subjectParam = encodeURIComponent(subjectName);
      const modes = ['video', 'notes'];

      modes.forEach(mode => {
        // Subject page
        xml += `
          <url>
            <loc>${safeBaseUrl}/courses/${courseId}/content/${mode}/${subjectParam}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.6</priority>
          </url>`;

        if (typeof subjectData !== 'string' && Array.isArray(subjectData)) {
          subjectData.forEach((topic: Topic) => {
            if (!topic || !topic.name) return; // Skip if topic or topic.name is invalid
            const topicParam = encodeURIComponent(topic.name);
            
            // Topic lectures list page
            if (topic.lectures && topic.lectures.length > 0) {
              xml += `
                <url>
                  <loc>${safeBaseUrl}/courses/${courseId}/content/${mode}/${subjectParam}/${topicParam}/lectures</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <priority>0.5</priority>
                </url>`;
            }

            // Lecture play pages (only for video mode as per current generateStaticParams)
            if (mode === 'video' && topic.lectures) {
              topic.lectures.forEach((lecture: Lecture) => {
                if (lecture && lecture.id && lecture.videoEmbedUrl) { // Ensure lecture, id, and videoEmbedUrl are valid
                  const lectureIdParam = encodeURIComponent(lecture.id);
                  xml += `
                    <url>
                      <loc>${safeBaseUrl}/courses/${courseId}/content/video/${subjectParam}/${topicParam}/lectures/${lectureIdParam}/play</loc>
                      <lastmod>${new Date().toISOString()}</lastmod>
                      <priority>0.4</priority>
                    </url>`;
                }
              });
            }
          });
        }
      });
    });
  });

  xml += '</urlset>';
  return xml;
}

export async function GET() {
  try {
    const courses = [
      { id: '1', content: scienceCourseContent, namePrefix: 'science' },
      { id: '2', content: commerceCourseContent, namePrefix: 'commerce' },
      { id: '3', content: aarambhCourseContent, namePrefix: 'aarambh' },
    ];

    const staticPages = [
      '/',
      '/help-center',
      '/admin-tool',
    ];

    const body = generateSiteMap(courses, staticPages);

    return new Response(body, {
      status: 200,
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate', // Corrected casing
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new Response('Error generating sitemap. Check server logs.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
