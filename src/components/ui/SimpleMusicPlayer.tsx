"use client";

import React, { useState, useRef, useEffect } from "react";
import { MusicIcon } from "./MusicIcon";

interface SimpleMusicPlayerProps {
  audioSrc?: string;
  className?: string;
  isVisible?: boolean; // allow hiding on landing page
}

export const SimpleMusicPlayer: React.FC<SimpleMusicPlayerProps> = ({
  audioSrc = "/wedding-music.mp3",
  className = "",
  isVisible = true,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
          alert("Audio tidak dapat diputar. Silakan coba lagi.");
        });
    }
  };

  // Listen for global play request (e.g., after clicking "Buka Undangan")
  useEffect(() => {
    const handlePlayRequest = async () => {
      const audio = audioRef.current;
      if (!audio) return;
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Autoplay failed:", error);
      }
    };

    window.addEventListener("play-music", handlePlayRequest);
    return () => {
      window.removeEventListener("play-music", handlePlayRequest);
    };
  }, []);

  return (
    <>
      {/* Audio Element */}
      <audio
        ref={audioRef}
        loop
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        onError={(e) => console.error("Audio error:", e)}
      >
        <source src={audioSrc} type="audio/mpeg" />
        <source src={audioSrc} type="audio/mp3" />
        <source src={audioSrc} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Music Button */}
      {isVisible && (
        <button
          onClick={togglePlay}
          className={`
          fixed bottom-6 right-6 z-50
          w-14 h-14 
          bg-[#504B38] hover:bg-[#3D3A2B] 
          text-white 
          rounded-full 
          shadow-lg hover:shadow-xl
          flex items-center justify-center
          transition-all duration-300
          transform hover:scale-110
          cursor-pointer
          ${isPlaying ? "animate-pulse" : ""}
          ${className}
        `}
          title={isPlaying ? "Pause Music" : "Play Music"}
        >
          <MusicIcon isPlaying={isPlaying} className="w-6 h-6" />
        </button>
      )}
    </>
  );
};
