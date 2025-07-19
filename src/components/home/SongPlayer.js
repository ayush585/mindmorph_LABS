import React, { useRef, useState, useEffect } from 'react';

const SongPlayer = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    const audio = audioRef.current;
    
    const handleError = (e) => {
      console.error('Audio error:', e);
      setError('Error loading audio');
      setIsPlaying(false);
    };

    if (audio) {
      audio.addEventListener('error', handleError);
    }

    return () => {
      if (audio) {
        audio.removeEventListener('error', handleError);
        audio.pause();
      }
    };
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const updateProgress = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration)) {
      const { currentTime, duration } = audioRef.current;
      const progressPercent = (currentTime / duration) * 100;
      requestAnimationFrame(() => {
        setProgress(progressPercent);
      });
    }
  };

  return (
    <div className="bg-gradient-to-r from-yellow-100 to-yellow-200 p-5 rounded-xl w-full max-w-2xl mx-auto shadow-lg">
      <div className="bg-gray-800 p-4 rounded-lg mb-5 shadow-md">
        <h1 className="text-white text-center font-bold text-xl text-shadow">PLAY THIS MUSIC TO FLOW WITH THE VIBE!!</h1>
      </div>
      <div className="bg-white p-5 rounded-lg shadow-sm">
        {error && <div className="text-red-500 text-center mb-2 text-sm">{error}</div>}
        }
        <audio 
          ref={audioRef} 
          onTimeUpdate={updateProgress}
          className="hidden"
          preload="metadata"
        >
          <source src="/audio/Can You Hear The Music [4JZ-o3iAJv4].mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className="flex items-center gap-4">
          <button 
            className="bg-transparent border-none cursor-pointer w-10 h-10 p-2 rounded-full hover:bg-red-50 transition-colors" 
            onClick={togglePlayPause}
          >
            {isPlaying ? (
              <svg viewBox="0 0 24 24" className="w-full h-full fill-red-500">
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="w-full h-full fill-red-500">
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          <div className="flex-grow h-2 bg-red-200 rounded overflow-hidden">
            <div 
              className="h-full bg-red-500 rounded transition-all duration-100" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
