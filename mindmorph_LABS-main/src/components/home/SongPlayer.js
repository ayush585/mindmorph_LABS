import React, { useRef, useState, useEffect } from 'react';
import styles from './SongPlayer.module.css';

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
    <div className={styles.songPlayer}>
      <div className={styles.headerBar}>
        <h1 className={styles.headerText}>PLAY THIS MUSIC TO FLOW WITH THE VIBE!!</h1>
      </div>
      <div className={styles.playerContainer}>
        {error && <div className={styles.errorMessage}>{error}</div>}
        <audio 
          ref={audioRef} 
          onTimeUpdate={updateProgress}
          className={styles.audioElement}
          preload="metadata"
        >
          <source src="/audio/Can You Hear The Music [4JZ-o3iAJv4].mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <div className={styles.controls}>
          <button className={styles.playButton} onClick={togglePlayPause}>
            {isPlaying ? (
              <svg viewBox="0 0 24 24" className={styles.pauseIcon}>
                <rect x="6" y="4" width="4" height="16"/>
                <rect x="14" y="4" width="4" height="16"/>
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className={styles.playIcon}>
                <path d="M8 5v14l11-7z"/>
              </svg>
            )}
          </button>
          <div className={styles.progressBar}>
            <div 
              className={styles.progressIndicator} 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongPlayer;
