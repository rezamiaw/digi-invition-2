"use client";

import React from "react";

interface MusicIconProps {
  isPlaying: boolean;
  className?: string;
}

export const MusicIcon: React.FC<MusicIconProps> = ({
  isPlaying,
  className = "",
}) => {
  if (isPlaying) {
    // Pause Icon
    return (
      <svg
        className={className}
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="6" y="4" width="4" height="16" rx="1" fill="currentColor" />
        <rect x="14" y="4" width="4" height="16" rx="1" fill="currentColor" />
      </svg>
    );
  }

  // Play Icon
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 5.14v13.72a.5.5 0 00.74.44l11.54-6.86a.5.5 0 000-.88L8.74 4.7A.5.5 0 008 5.14z"
        fill="currentColor"
      />
    </svg>
  );
};
