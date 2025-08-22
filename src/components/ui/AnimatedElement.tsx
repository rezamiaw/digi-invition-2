'use client';

import React from 'react';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface AnimatedElementProps {
  children: React.ReactNode;
  animationType?: 'slide' | 'scale' | 'bounce' | 'float';
  delay?: number;
  className?: string;
}

export const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  animationType = 'slide',
  delay = 0,
  className = ''
}) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px'
  });

  const getAnimationClass = () => {
    switch (animationType) {
      case 'scale':
        return 'animate-on-scroll-scale';
      case 'bounce':
        return 'animate-on-scroll-bounce';
      case 'float':
        return 'animate-on-scroll-float';
      default:
        return 'animate-on-scroll';
    }
  };

  const visibilityClass = isIntersecting ? 'animate-visible' : '';
  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <div
      ref={ref}
      className={`${getAnimationClass()} ${visibilityClass} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};

