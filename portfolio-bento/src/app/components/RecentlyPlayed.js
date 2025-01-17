import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

export function RecentlyPlayed() {
  const [track, setTrack] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTrack = async () => {
      try {
        const response = await fetch(`/api/spotify/recently-played?t=${Date.now()}`, {
            cache: 'no-store',
            headers: {
              'Pragma': 'no-cache',
              'Cache-Control': 'no-cache'
            }
          });
        if (!response.ok) throw new Error('Failed to fetch track');

        const data = await response.json();

        if (data.items && data.items[0] && (!track || data.items[0].played_at !== track.played_at)) {
          setTrack(data.items[0]);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrack();
    const interval = setInterval(fetchTrack, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-24 w-full max-w-md bg-[#121212] rounded-xl">
        <Loader2 className="w-6 h-6 animate-spin text-white" />
      </div>
    );
  }

  if (error || !track) {
    return null;
  }

  const handleClick = () => {
    if (track.track.external_urls?.spotify) {
      window.open(track.track.external_urls.spotify, '_blank');
    }
  };

  return (
    <div 
      onClick={handleClick}
      className="relative flex items-center gap-4 bg-transparent p-4 rounded-xl w-full h-full max-w-md cursor-pointer hover:bg-[#282828] transition-colors duration-200"
    >
      <img 
        src={`${track.track.album.images[2]?.url}?t=${Date.now()}`}
        alt={track.track.album.name}
        className="w-18 h-18 rounded-md"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm text-gray-400 opacity-50">Last played</p>
        <p className="text-white font-medium truncate">
          {track.track.name}
        </p>
        <p className="text-gray-400 text-sm truncate">
          {track.track.artists.map(artist => artist.name.toUpperCase()).join(', ')}
        </p>
      </div>
      <div className="ml-auto absolute top-0 right-0">
        <img 
          src="./spotify.png" 
          alt="Spotify"
          className="w-8 h-8"
        />
      </div>
    </div>
  );
}