
// src/app/sitemap.xml/route.ts

export const dynamic = 'force-dynamic'; // Ensures the sitemap is generated on each request

export function GET() {
  const BASE_URL = "https://e-leak.vercel.app"; // Your production domain
  const lastmod = new Date().toISOString(); // Current date and time

  // For diagnostics, generate a sitemap with only the homepage
  const urls = [
    { loc: `${BASE_URL}/`, priority: 1.0 },
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
        // Using a common and generally safe Cache-Control header for sitemaps
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate',
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error('Sitemap: Critical error during new Response() construction:', error);
    // Fallback response in case of an unexpected error during Response creation
    return new Response('Error generating sitemap. Please check server logs.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
