"use client";

import React from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

interface AnimatedTextProps {
  children: React.ReactNode;
  animationType?:
    | "fadeIn"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "scale"
    | "bounce"
    | "typewriter";
  delay?: number;
  duration?: number;
  className?: string;
  style?: React.CSSProperties;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  children,
  animationType = "fadeIn",
  delay = 0,
  duration = 0.8,
  className = "",
  style = {},
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "0px",
  });

  const getAnimationClass = () => {
    switch (animationType) {
      case "fadeIn":
        return "animate-text-fadeIn";
      case "slideUp":
        return "animate-text-slideUp";
      case "slideDown":
        return "animate-text-slideDown";
      case "slideLeft":
        return "animate-text-slideLeft";
      case "slideRight":
        return "animate-text-slideRight";
      case "scale":
        return "animate-text-scale";
      case "bounce":
        return "animate-text-bounce";
      case "typewriter":
        return "animate-text-typewriter";
      default:
        return "animate-text-fadeIn";
    }
  };

  const visibilityClass = isIntersecting ? "animate-visible" : "";
  const animationStyle = {
    animationDelay: `${delay}s`,
    animationDuration: `${duration}s`,
    ...style,
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${visibilityClass} ${className}`}
      style={animationStyle}
    >
      {children}
    </div>
  );
};
