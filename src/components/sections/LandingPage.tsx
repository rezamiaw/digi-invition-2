"use client";

import React from "react";
import Image from "next/image";
import { Alex_Brush } from "next/font/google";

interface LandingPageProps {
  onOpenInvitation: () => void;
}

const alexBrush = Alex_Brush({
  subsets: ["latin"],
  weight: ["400"],
});

export const LandingPage: React.FC<LandingPageProps> = ({
  onOpenInvitation,
}) => {
  return (
    <div className="bg-white min-h-screen overflow-x-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/texture.png"
          alt="Background Texture"
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Top Decorative Overlay */}
      <div className="absolute inset-x-0 top-0 h-[190px] z-10 pointer-events-none scale-x-110 opacity-50">
        <Image
          src="/reactangle-min.png"
          alt="Top Decorative Leaves"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Top Flowers with animations */}
      <div className="absolute inset-x-0 top-0 h-[190px] z-[11] pointer-events-none">
        <Image
          src="/bunga/bunga-aksesoris-3.png"
          alt="Top Flower 1"
          width={40}
          height={40}
          className="absolute left-4 top-8 animate-bounce"
          style={{ animationDelay: "0.1s", animationDuration: "4.5s" }}
        />
        <Image
          src="/bunga/bunga-aksesoris-1.png"
          alt="Top Flower 2"
          width={35}
          height={35}
          className="absolute right-6 top-12 animate-pulse"
          style={{ animationDelay: "0.8s", animationDuration: "3.2s" }}
        />
        <Image
          src="/bunga/bunga-aksesoris-2.png"
          alt="Top Flower 3"
          width={32}
          height={32}
          className="absolute left-[30%] top-6 animate-bounce"
          style={{ animationDelay: "1.2s", animationDuration: "5.1s" }}
        />
        <Image
          src="/bunga/bunga-aksesoris.png"
          alt="Top Flower 4"
          width={28}
          height={28}
          className="absolute right-[25%] top-8 animate-pulse"
          style={{ animationDelay: "0.4s", animationDuration: "2.8s" }}
        />
      </div>

      {/* Bottom Decorative Overlay (show bottom part only) */}
      <div className="absolute inset-x-0 bottom-0 h-[190px] z-[5] pointer-events-none scale-x-110 opacity-50">
        <Image
          src="/reactangle-min.png"
          alt="Bottom Decorative Leaves"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* Flower Accessories near bottom overlay */}
      <div className="absolute inset-x-0 bottom-0 z-[8] pointer-events-none">
        <div className="relative w-full h-[190px]">
          {/* Left cluster */}
          <Image
            src="/bunga/bunga-aksesoris-1.png"
            alt="Flower acc 1"
            width={60}
            height={60}
            className="absolute left-6 bottom-16 animate-bounce"
            style={{ animationDelay: "0.2s", animationDuration: "4.2s" }}
          />
          <Image
            src="/bunga/bunga-aksesoris-2.png"
            alt="Flower acc 2"
            width={50}
            height={50}
            className="absolute left-16 bottom-10 animate-pulse"
            style={{ animationDelay: "0.8s", animationDuration: "3.8s" }}
          />
          <Image
            src="/bunga/bunga-aksesoris-3.png"
            alt="Flower acc 3"
            width={48}
            height={48}
            className="absolute left-8 bottom-6 animate-bounce"
            style={{ animationDelay: "1.2s", animationDuration: "5.1s" }}
          />

          {/* Center sprinkle */}
          <Image
            src="/bunga/bunga-aksesoris.png"
            alt="Flower acc center"
            width={44}
            height={44}
            className="absolute left-1/2 -translate-x-1/2 bottom-12 animate-pulse"
            style={{ animationDelay: "0.5s", animationDuration: "2.5s" }}
          />
          <Image
            src="/bunga/bunga-aksesoris-1.png"
            alt="Flower acc 5"
            width={36}
            height={36}
            className="absolute left-[45%] bottom-8 rotate-6 animate-bounce"
            style={{ animationDelay: "1.5s", animationDuration: "3.2s" }}
          />
          <Image
            src="/bunga/bunga-aksesoris-2.png"
            alt="Flower acc 6"
            width={36}
            height={36}
            className="absolute left-[55%] bottom-6 -rotate-6 animate-pulse"
            style={{ animationDelay: "0.9s", animationDuration: "4.5s" }}
          />

          {/* Right cluster */}
          <Image
            src="/bunga/bunga-aksesoris-7.png"
            alt="Flower acc 7"
            width={56}
            height={56}
            className="absolute right-14 bottom-14 animate-bounce"
            style={{ animationDelay: "0.3s", animationDuration: "5.8s" }}
          />
          <Image
            src="/bunga/bunga-aksesoris-8.png"
            alt="Flower acc 8"
            width={46}
            height={46}
            className="absolute right-8 bottom-8 animate-pulse"
            style={{ animationDelay: "1.1s", animationDuration: "3.6s" }}
          />
          <Image
            src="/bunga/bunga-aksesoris.png"
            alt="Flower acc 9"
            width={38}
            height={38}
            className="absolute right-[22%] bottom-10 animate-bounce"
            style={{ animationDelay: "0.7s", animationDuration: "2.8s" }}
          />
        </div>
      </div>

      {/* Bunga Putih - Left Bottom */}
      <div className="absolute left-6 bottom-10 z-[7] pointer-events-none opacity-80">
        <Image
          src="/bunga_putih.png"
          alt="Bunga Putih"
          width={90}
          height={90}
          className="animate-pulse"
          style={{ animationDelay: "0.4s", animationDuration: "6.2s" }}
        />
      </div>

      {/* Bunga Kuning - Right Bottom */}
      <div className="absolute right-6 bottom-10 z-[7] pointer-events-none opacity-80">
        <Image
          src="/bunga_kuning.png"
          alt="Bunga Kuning"
          width={80}
          height={80}
          className="animate-bounce"
          style={{ animationDelay: "0.6s", animationDuration: "4.8s" }}
        />
      </div>

      {/* Floating Flowers in middle area */}
      <div className="absolute inset-0 z-[15] pointer-events-none">
        <Image
          src="/bunga/bunga-aksesoris-5.png"
          alt="Floating Flower 1"
          width={45}
          height={45}
          className="absolute left-[15%] top-[35%] opacity-70 animate-pulse"
          style={{ animationDelay: "0.3s", animationDuration: "6.5s" }}
        />
        <Image
          src="/bunga/bunga-aksesoris-3.png"
          alt="Floating Flower 2"
          width={38}
          height={38}
          className="absolute right-[18%] top-[40%] opacity-75 animate-bounce"
          style={{ animationDelay: "1.1s", animationDuration: "4.2s" }}
        />
        <Image
          src="/bunga/bunga-aksesoris-7.png"
          alt="Floating Flower 3"
          width={42}
          height={42}
          className="absolute left-[20%] bottom-[35%] opacity-65 animate-pulse"
          style={{ animationDelay: "0.7s", animationDuration: "5.8s" }}
        />
        <Image
          src="/bunga/bunga-aksesoris-8.png"
          alt="Floating Flower 4"
          width={35}
          height={35}
          className="absolute right-[22%] bottom-[30%] opacity-70 animate-bounce"
          style={{ animationDelay: "1.4s", animationDuration: "3.1s" }}
        />
      </div>

      {/* C&R Text */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div className="text-center flex flex-col items-center justify-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal text-[#504B38] tracking-wide mb-14 sm:mb-6 md:mb-8 lg:mb-15">
            THE WEDDING OF
          </h2>
          <h1 className="text-7xl sm:text-7xl md:text-7xl lg:text-7xl xl:text-7xl font-bold text-[#504B38] flex items-center justify-center">
            <span
              className={`${alexBrush.className} relative -top-12 sm:-top-2 md:-top-4 lg:-top-8 xl:-top-12`}
            >
              C
            </span>
            <span
              className={`${alexBrush.className} mx-1 ml-0 sm:ml-3 md:ml-4 lg:ml-2`}
            >
              &
            </span>
            <span
              className={`${alexBrush.className} relative top-8 sm:top-8 md:top-10 lg:top-12 xl:top-16`}
            >
              R
            </span>
          </h1>

          {/* Button Open Invitation - Positioned below C&R */}
          <div className="mt-8 sm:mt-10 md:mt-12 lg:mt-16">
            <button
              onClick={() => {
                onOpenInvitation();
                // Dispatch custom event to start music playback
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("play-music"));
                }
              }}
              className="px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl border-2 border-[#504B38] text-[#504B38] text-sm sm:text-base md:text-lg font-semibold hover:bg-[#504B38] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2 sm:gap-3"
            >
              <svg
                className="w-5 h-5 sm:w-6 sm:h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="text-xs sm:text-sm md:text-base">
                Open Invitation
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
