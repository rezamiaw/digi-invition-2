"use client";

import React from "react";
import Image from "next/image";

interface AnimatedFlowerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  animationType?: "float" | "sway" | "gentle" | "bounce" | "rotate";
  delay?: number;
  duration?: number;
  style?: React.CSSProperties;
}

export const AnimatedFlower: React.FC<AnimatedFlowerProps> = ({
  src,
  alt,
  width,
  height,
  className = "",
  animationType = "float",
  delay = 0,
  duration = 3,
  style = {},
}) => {
  const getAnimationClass = () => {
    switch (animationType) {
      case "float":
        return "animate-flower-float";
      case "sway":
        return "animate-flower-sway";
      case "gentle":
        return "animate-flower-gentle";
      case "bounce":
        return "animate-flower-bounce";
      case "rotate":
        return "animate-flower-rotate";
      default:
        return "animate-flower-float";
    }
  };

  const animationStyle = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    ...style,
  };

  return (
    <div
      className={`${getAnimationClass()} ${className}`}
      style={animationStyle}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="object-contain"
      />
    </div>
  );
};
