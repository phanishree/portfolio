import { NextResponse } from 'next/server';
import { getAccessToken, SPOTIFY_API_URL } from '@/app/utils/spotify';

export async function GET() {
  try {
    const token = await getAccessToken();
    
    const response = await fetch(`${SPOTIFY_API_URL}/me/player/recently-played?limit=1`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      next: { revalidate: 30 }, // Cache for 30 seconds
    });

    if (!response.ok) {
      throw new Error('Failed to fetch recently played track');
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching recently played:', error);
    return NextResponse.json({ error: 'Failed to fetch track' }, { status: 500 });
  }
}