
// src/app/sitemap.xml/route.ts

export function GET() {
  const BASE_URL = "https://e-leak.vercel.app"; // Ensure this is your correct production domain

  const lastmod = new Date().toISOString();

  const urls = [
    { loc: `${BASE_URL}/`, priority: 1.0 },
    { loc: `${BASE_URL}/help-center`, priority: 0.8 },
    { loc: `${BASE_URL}/courses/1/enroll`, priority: 0.9 },
    { loc: `${BASE_URL}/courses/2/enroll`, priority: 0.9 },
    { loc: `${BASE_URL}/courses/3/enroll`, priority: 0.9 },
    { loc: `${BASE_URL}/admin-tool`, priority: 0.1 }, // Keeping admin tool with low priority
  ];

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
        'Cache-Control': 'public, max-age=0, s-maxage=86400, must-revalidate',
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Sitemap: Critical error during new Response() construction:', error);
    return new Response('Error generating sitemap. Check server logs.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
