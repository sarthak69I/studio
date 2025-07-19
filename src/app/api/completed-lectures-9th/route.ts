
import { NextResponse } from 'next/server';

// This tells Next.js to not cache this route, ensuring fresh data.
export const dynamic = 'force-dynamic';

export async function GET() {
  // This is the new API for Class 9 completed lectures.
  const externalApiUrl = 'https://automation9thphp.vercel.app/api/api.php?token=my_secret_key_123&view=completed';

  try {
    const response = await fetch(externalApiUrl, {
      // It's good practice to set a timeout for external API calls
      // Note: This requires a more advanced setup like AbortController,
      // but for simplicity, we'll rely on default fetch timeouts.
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
    console.error('Error in API proxy route (9th):', error);
    // If our proxy itself fails (e.g., network issue), return a 500 error
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
