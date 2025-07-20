
import { NextResponse } from 'next/server';

// This tells Next.js to not cache this route, ensuring fresh data on every request.
export const dynamic = 'force-dynamic';

export async function GET() {
  const externalApiUrl = 'https://php-pearl.vercel.app/api/api?token=my_secret_key_123&view=completed';

  try {
    // Add { cache: 'no-store' } to the fetch call to be absolutely sure we are not caching.
    const response = await fetch(externalApiUrl, {
      cache: 'no-store',
    });

    if (!response.ok) {
      // If the external API returned an error, forward that status
      return new NextResponse(`Error from external API: ${response.statusText}`, {
        status: response.status,
      });
    }

    const data = await response.json();

    // Return the successful response from the external API to our client
    return NextResponse.json(data);

  } catch (error) {
    console.error('Error in API proxy route:', error);
    // If our proxy itself fails (e.g., network issue), return a 500 error
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
