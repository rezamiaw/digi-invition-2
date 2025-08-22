'use client';

import React from 'react';

interface AnimatedButterflyProps {
  size?: number;
  className?: string;
  delay?: number;
  duration?: number; // seconds
  style?: React.CSSProperties;
}

export const AnimatedButterfly: React.FC<AnimatedButterflyProps> = ({ 
  size = 88, 
  className = "",
  delay = 0,
  duration,
  style,
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`drop-shadow-lg animate-butterfly-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
        ...(duration ? { animationDuration: `${duration}s` } : {}),
        ...style,
      }}
    >
      {/* Left Wing */}
      <g className="origin-center">
        <path
          d="M50 50 Q30 30 20 50 Q30 70 50 50"
          fill="#FFB6C1"
          stroke="#FF69B4"
          strokeWidth="1"
          className="animate-butterfly-left"
        />
        <path
          d="M50 50 Q35 25 15 45 Q25 65 50 50"
          fill="#FFC0CB"
          stroke="#FF69B4"
          strokeWidth="0.5"
          className="animate-butterfly-left"
        />
        <path
          d="M50 50 Q40 20 10 40 Q20 60 50 50"
          fill="#FFE4E1"
          stroke="#FF69B4"
          strokeWidth="0.3"
          className="animate-butterfly-left"
        />
      </g>

      {/* Right Wing */}
      <g className="origin-center">
        <path
          d="M50 50 Q70 30 80 50 Q70 70 50 50"
          fill="#FFB6C1"
          stroke="#FF69B4"
          strokeWidth="1"
          className="animate-butterfly-right"
        />
        <path
          d="M50 50 Q65 25 85 45 Q75 65 50 50"
          fill="#FFC0CB"
          stroke="#FF69B4"
          strokeWidth="0.5"
          className="animate-butterfly-right"
        />
        <path
          d="M50 50 Q60 20 90 40 Q80 60 50 50"
          fill="#FFE4E1"
          stroke="#FF69B4"
          strokeWidth="0.3"
          className="animate-butterfly-right"
        />
      </g>

      {/* Body */}
      <path
        d="M50 45 L50 55"
        stroke="#8B4513"
        strokeWidth="2"
        strokeLinecap="round"
        className="animate-butterfly-body"
      />

      {/* Antennae */}
      <path
        d="M48 45 Q45 40 42 38"
        stroke="#8B4513"
        strokeWidth="1"
        fill="none"
        className="animate-butterfly-antenna"
      />
      <path
        d="M52 45 Q55 40 58 38"
        stroke="#8B4513"
        strokeWidth="1"
        fill="none"
        className="animate-butterfly-antenna"
      />

      {/* Wing Dots */}
      <circle
        cx="35"
        cy="45"
        r="1.5"
        fill="#FF69B4"
        className="animate-butterfly-dots"
      />
      <circle
        cx="65"
        cy="45"
        r="1.5"
        fill="#FF69B4"
        className="animate-butterfly-dots"
      />
      <circle
        cx="35"
        cy="55"
        r="1"
        fill="#FF69B4"
        className="animate-butterfly-dots"
      />
      <circle
        cx="65"
        cy="55"
        r="1"
        fill="#FF69B4"
        className="animate-butterfly-dots"
      />
    </svg>
  );
};
