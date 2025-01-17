import { NextResponse } from 'next/server';
import { getAccessToken, SPOTIFY_API_URL } from '@/app/utils/spotify';

export async function GET() {
  try {
    const token = await getAccessToken();
    
    const response = await fetch(`${SPOTIFY_API_URL}/me/player/recently-played?limit=1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: 'no-store', // Disable caching at fetch level
    });

    if (!response.ok) {
      throw new Error('Failed to fetch recently played track');
    }

    const data = await response.json();
    // console.log('API Response:', data.items[0]);
    
    
    // Set no-cache headers in the response
    const headers = {
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    };

    return NextResponse.json(data, { headers });
  } catch (error) {
    console.error('Error fetching recently played:', error);
    return NextResponse.json({ error: 'Failed to fetch track' }, { status: 500 });
  }
}

// Mark the route as dynamic
export const dynamic = 'force-dynamic';
// Disable Next.js cache
export const revalidate = 0;