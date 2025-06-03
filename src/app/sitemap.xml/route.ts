
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  type CourseContentMap,
  type Topic,
  type Lecture,
} from '@/lib/course-data';

const BASE_URL_FROM_ENV = process.env.NEXT_PUBLIC_BASE_URL;
const DEFAULT_BASE_URL = "https://e-leak.vercel.app/";

function getEffectiveBaseUrl(): string {
  if (BASE_URL_FROM_ENV && BASE_URL_FROM_ENV.trim() !== "" && BASE_URL_FROM_ENV.trim().startsWith("http")) {
    return BASE_URL_FROM_ENV.trim();
  }
  return DEFAULT_BASE_URL;
}

function generateSiteMap(
  courseContents: { id: string; content: CourseContentMap; namePrefix: string }[],
  staticPages: string[]
): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  const baseUrl = getEffectiveBaseUrl();
  const safeBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;

  if (!safeBaseUrl || safeBaseUrl.trim() === "") {
    console.error("Sitemap: Critical error - safeBaseUrl is empty or invalid even after fallback. Sitemap will be incorrect.");
    // Potentially throw an error or return minimal valid XML to avoid full failure
  }

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

  // Temporarily comment out dynamic course page generation for diagnostics
  /*
  courseContents.forEach(course => {
    const courseId = String(course.id || '').trim(); // Ensure courseId is a string and trimmed
    if (!courseId) {
      console.warn(`Sitemap: Skipping course with empty or invalid ID.`);
      return;
    }

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
    
    const courseContentData = course.content;
    if (!courseContentData || typeof courseContentData !== 'object') {
        console.warn(`Sitemap: Skipping course ID ${courseId} due to missing or invalid content data.`);
        return;
    }

    Object.entries(courseContentData).forEach(([subjectKey, subjectData]) => {
      const subjectName = String(subjectKey || '').trim();
      if (!subjectName) {
          console.warn(`Sitemap: Skipping subject with empty name in course ID ${courseId}.`);
          return;
      }
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
            const topicName = String(topic?.name || '').trim();
            if (!topicName) {
                console.warn(`Sitemap: Skipping topic with empty name in subject "${subjectName}", course ID ${courseId}.`);
                return;
            }
            const topicParam = encodeURIComponent(topicName);
            
            if (topic.lectures && topic.lectures.length > 0) {
              xml += `
                <url>
                  <loc>${safeBaseUrl}/courses/${courseId}/content/${mode}/${subjectParam}/${topicParam}/lectures</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <priority>0.5</priority>
                </url>`;
            }

            if (mode === 'video' && topic.lectures) {
              topic.lectures.forEach((lecture: Lecture) => {
                const lectureId = String(lecture?.id || '').trim();
                if (lectureId && lecture.videoEmbedUrl) {
                  const lectureIdParam = encodeURIComponent(lectureId);
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
  */

  xml += '</urlset>';
  return xml;
}

export async function GET() {
  console.log(`Sitemap generation started. NEXT_PUBLIC_BASE_URL from env: ${process.env.NEXT_PUBLIC_BASE_URL}`);
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
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Sitemap: Error during GET handler:', error);
    return new Response('Error generating sitemap. Check server logs.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}

