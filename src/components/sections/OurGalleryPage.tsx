"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface OurGalleryPageProps {
  isVisible: boolean;
}

interface Photo {
  id: number;
  src: string;
  alt: string;
}

export const OurGalleryPage: React.FC<OurGalleryPageProps> = ({
  isVisible,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);
  const autoPlayRef = useRef<number | undefined>(undefined);

  // Sample photos - replace with your actual photos
  const photos: Photo[] = [
    { id: 1, src: "/foto1.jpg", alt: "Wedding Photo 1" },
    { id: 2, src: "/foto2.jpg", alt: "Wedding Photo 2" },
    { id: 3, src: "/foto3.jpg", alt: "Wedding Photo 3" },
    { id: 4, src: "/foto4.jpg", alt: "Wedding Photo 4" },
  ];

  useEffect(() => {
    if (isAutoPlaying && isVisible) {
      autoPlayRef.current = window.setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % photos.length);
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, isVisible, photos.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after 10 seconds
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  if (!isVisible) return null;

  return (
    <div
      id="our-gallery-page"
      className="bg-white flex justify-center p-4 md:p-20 animate-fadeIn relative overflow-hidden"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/texture.png"
          alt="Background Texture"
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Title Section - Top Left Corner */}
      <div className="absolute top-8 left-8 z-30">
        <h1
          className="text-4xl md:text-5xl font-serif text-black leading-tight"
          style={{ fontFamily: '"Times New Roman", Times, serif' }}
        >
          <div>O U R</div>
          <div>G A L L E R Y</div>
        </h1>
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full max-w-6xl">
        {/* Parallax Carousel */}
        <div className="relative h-[500px] md:h-[600px] mt-32 mb-12">
          {/* Carousel Container */}
          <div
            ref={carouselRef}
            className="relative w-full h-full flex items-center justify-center"
          >
            {photos.map((photo, index) => {
              const isActive = index === currentIndex;
              const isPrev =
                index === (currentIndex - 1 + photos.length) % photos.length;
              const isNext = index === (currentIndex + 1) % photos.length;

              let transform = "";
              let opacity = "";
              let zIndex = "";

              if (isActive) {
                transform = "translateX(0) scale(1)";
                opacity = "opacity-100";
                zIndex = "z-20";
              } else if (isPrev) {
                transform = "translateX(-60%) scale(0.8)";
                opacity = "opacity-70";
                zIndex = "z-10";
              } else if (isNext) {
                transform = "translateX(60%) scale(0.8)";
                opacity = "opacity-70";
                zIndex = "z-10";
              } else {
                transform = "translateX(0) scale(0.6)";
                opacity = "opacity-30";
                zIndex = "z-0";
              }

              return (
                <div
                  key={photo.id}
                  className={`absolute inset-0 transition-all duration-700 ease-out ${opacity} ${zIndex}`}
                  style={{
                    transform: transform,
                  }}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover rounded-2xl shadow-2xl border-4 border-white"
                      style={{
                        filter: isActive ? "none" : "brightness(0.8)",
                      }}
                    />
                    {/* Photo overlay with title */}
                    {isActive && (
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-2xl">
                        <h3 className="text-white text-xl md:text-2xl font-semibold text-center">
                          {photo.alt}
                        </h3>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous photo"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next photo"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Play/Pause Button */}
          {/* <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="absolute top-4 right-4 z-30 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
          >
            {isAutoPlaying ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            )}
          </button> */}
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mb-6">
          <div className="flex space-x-3">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-[#D4C4B0] scale-125"
                    : "bg-[#D4C4B0]/50 hover:bg-[#D4C4B0]/80"
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Bottom Decorative Vector */}
        <div className="flex justify-center mt-4 mb-4">
          <Image
            src="/quote/Vector2.png"
            alt="Bottom Decorative Vector"
            width={250}
            height={37}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
