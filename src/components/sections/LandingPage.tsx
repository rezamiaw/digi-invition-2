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

      {/* Bottom Decorative Overlay */}
      <div className="absolute inset-x-0 bottom-0 h-[190px] z-5 pointer-events-none scale-x-110 opacity-50">
        <Image
          src="/reactangle-min.png"
          alt="Bottom Decorative Leaves"
          fill
          className="object-cover object-bottom"
          priority
        />
      </div>

      {/* C&R Text */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div className="text-center flex flex-col items-center justify-center">
          <h1 className="text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-bold text-[#504B38] drop-shadow-lg tracking-tight flex items-center justify-center">
            <span
              className={`${alexBrush.className} relative -top-2 sm:-top-2 md:-top-4`}
            >
              C
            </span>
            <span className={`${alexBrush.className} mx-1`}>&</span>
            <span
              className={`${alexBrush.className} relative top-10 sm:top-12 md:top-16 lg:top-20`}
            >
              R
            </span>
          </h1>

          {/* Button Open Invitation */}
          <div className="mt-8 md:mt-12">
            <button
              onClick={onOpenInvitation}
              className="px-8 py-4 rounded-2xl border-2 border-[#504B38] text-[#504B38] tracking-[0.5em] text-lg font-semibold hover:bg-[#504B38] hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              OPEN INVITATION
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
