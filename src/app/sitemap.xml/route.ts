
// src/app/sitemap.xml/route.ts

// No external imports needed for this basic version.

export function GET() {
  const baseUrl = "https://e-leak.vercel.app"; // Hardcoded base URL

  let xml = '<?xml version="1.0" encoding="UTF-8"?>';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';

  // Add only the homepage for this test
  xml += `
    <url>
      <loc>${baseUrl}/</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>1.0</priority>
    </url>`;
  
  // For testing, let's add one more static page if it helps GSC.
  xml += `
    <url>
      <loc>${baseUrl}/help-center</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
      <priority>0.8</priority>
    </url>`;

  xml += '</urlset>';

  try {
    return new Response(xml, {
      status: 200,
      headers: {
        'Cache-Control': 'public, max-age=0, s-maxage=86400, must-revalidate', // Be more aggressive with caching for testing
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    // This console.error will appear in your Vercel function logs if `new Response` fails.
    console.error('Sitemap: Critical error during new Response() construction:', error);
    return new Response('Error generating sitemap. Check server logs.', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
      },
    });
  }
}
