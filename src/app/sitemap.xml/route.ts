
import {
  scienceCourseContent,
  commerceCourseContent,
  aarambhCourseContent,
  type CourseContentMap,
  type Topic,
  type Lecture,
} from '@/lib/course-data';

// IMPORTANT: Replace "https://your-domain.com" with your actual domain
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://your-domain.com";

function generateSiteMap(
  courseContents: { id: string; content: CourseContentMap; namePrefix: string }[],
  staticPages: string[]
): string {
  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  // Add static pages
  staticPages.forEach(page => {
    xml += `
      <url>
        <loc>${BASE_URL}${page}</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>${page === '/' ? '1.0' : '0.8'}</priority>
      </url>`;
  });

  // Add dynamic course pages
  courseContents.forEach(course => {
    const courseId = course.id;

    // Enroll page
    xml += `
      <url>
        <loc>${BASE_URL}/courses/${courseId}/enroll</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.7</priority>
      </url>`;

    // Live page
    xml += `
      <url>
        <loc>${BASE_URL}/courses/${courseId}/live</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.7</priority>
      </url>`;
    
    // Content pages (subjects, topics, lectures)
    Object.entries(course.content).forEach(([subjectName, subjectData]) => {
      const subjectParam = encodeURIComponent(subjectName);
      const modes = ['video', 'notes'];

      modes.forEach(mode => {
        // Subject page
        xml += `
          <url>
            <loc>${BASE_URL}/courses/${courseId}/content/${mode}/${subjectParam}</loc>
            <lastmod>${new Date().toISOString()}</lastmod>
            <priority>0.6</priority>
          </url>`;

        if (typeof subjectData !== 'string' && Array.isArray(subjectData)) {
          subjectData.forEach((topic: Topic) => {
            const topicParam = encodeURIComponent(topic.name);
            
            // Topic lectures list page
            if (topic.lectures && topic.lectures.length > 0) {
              xml += `
                <url>
                  <loc>${BASE_URL}/courses/${courseId}/content/${mode}/${subjectParam}/${topicParam}/lectures</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <priority>0.5</priority>
                </url>`;
            }

            // Lecture play pages (only for video mode as per current generateStaticParams)
            if (mode === 'video' && topic.lectures) {
              topic.lectures.forEach((lecture: Lecture) => {
                if (lecture.videoEmbedUrl) {
                  const lectureIdParam = encodeURIComponent(lecture.id);
                  xml += `
                    <url>
                      <loc>${BASE_URL}/courses/${courseId}/content/video/${subjectParam}/${topicParam}/lectures/${lectureIdParam}/play</loc>
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
  const courses = [
    { id: '1', content: scienceCourseContent, namePrefix: 'science' },
    { id: '2', content: commerceCourseContent, namePrefix: 'commerce' },
    { id: '3', content: aarambhCourseContent, namePrefix: 'aarambh' },
  ];

  const staticPages = [
    '/',
    '/help-center',
    '/admin-tool', // Assuming admin tool is fine to be in sitemap, if not, remove
  ];

  const body = generateSiteMap(courses, staticPages);

  return new Response(body, {
    status: 200,
    headers: {
      'Cache-control': 'public, s-maxage=86400, stale-while-revalidate',
      'content-type': 'application/xml',
    },
  });
}
