'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MusicIcon } from './MusicIcon';

interface MusicPlayerProps {
  audioSrc?: string;
  className?: string;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  audioSrc = '/wedding-music.mp3', 
  className = '' 
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleCanPlay = () => {
      console.log('Audio can play');
      setIsLoaded(true);
    };
    
    const handleLoadedData = () => {
      console.log('Audio loaded');
      setIsLoaded(true);
    };
    
    const handleEnded = () => setIsPlaying(false);
    
    const handleError = (e: Event) => {
      console.error('Audio error:', e);
      setIsLoaded(false);
    };

    const handleLoadStart = () => {
      console.log('Audio loading started');
    };

    // Set audio source
    audio.src = audioSrc;
    
    audio.addEventListener('canplay', handleCanPlay);
    audio.addEventListener('loadeddata', handleLoadedData);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('loadstart', handleLoadStart);

    // Try to load the audio
    audio.load();

    return () => {
      audio.removeEventListener('canplay', handleCanPlay);
      audio.removeEventListener('loadeddata', handleLoadedData);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('loadstart', handleLoadStart);
    };
  }, [audioSrc]);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) {
      console.log('No audio element');
      return;
    }

    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
        console.log('Audio paused');
      } else {
        // For browsers that require user interaction
        const playPromise = audio.play();
        if (playPromise !== undefined) {
          await playPromise;
          setIsPlaying(true);
          console.log('Audio playing');
        }
      }
    } catch (error) {
      console.error('Audio playback failed:', error);
      // Try to force load if not loaded
      if (!isLoaded) {
        setIsLoaded(true);
      }
    }
  };

  return (
    <>
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        crossOrigin="anonymous"
      >
        <source src={audioSrc} type="audio/mpeg" />
        <source src={audioSrc} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Button */}
      <button
        onClick={togglePlay}
        className={`
          fixed bottom-6 right-6 z-50
          w-14 h-14 
          bg-[#A31D1D] hover:bg-[#8B1A1A] 
          text-white 
          rounded-full 
          shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-all duration-300
          transform hover:scale-110
          cursor-pointer
          ${isPlaying ? 'animate-pulse' : ''}
          ${className}
        `}
        title={isPlaying ? 'Pause Music' : 'Play Music'}
      >
        <MusicIcon 
          isPlaying={isPlaying} 
          className="w-6 h-6" 
        />
        
        {/* Debug info - temporary */}
        {!isLoaded && (
          <div className="absolute -top-8 left-0 bg-black text-white text-xs px-2 py-1 rounded whitespace-nowrap">
            Loading...
          </div>
        )}
      </button>
    </>
  );
};
