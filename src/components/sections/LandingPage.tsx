"use client";

import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { EnvelopeIcon } from "../ui/EnvelopeIcon";
import { Alex_Brush } from "next/font/google";
import { AnimatedButterfly } from "../ui/AnimatedButterfly";
import { AnimatedFlower } from "../ui/AnimatedFlower";
import { AnimatedText } from "../ui/AnimatedText";

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
    <div className="bg-white min-h-screen overflow-hidden relative">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/texture.png"
          alt="Background Texture"
          fill
          className="object-cover opacity-50"
        />
      </div>

      {/* Top Decorative Overlay (show top part only) */}
      <div className="absolute inset-x-0 top-0 h-[190px] z-10 pointer-events-none scale-x-110 opacity-50">
        <Image
          src="/reactangle-min.png"
          alt="Top Decorative Leaves"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Animated butterflies over top overlay (randomized layout) */}
      <div className="absolute inset-x-0 top-0 h-[190px] z-[12] pointer-events-none">
        {[
          {
            left: "8%",
            top: "18%",
            size: 62,
            delay: 0.1,
            rotate: "-rotate-6",
            duration: 3.6,
          },
          {
            left: "26%",
            top: "30%",
            size: 48,
            delay: 0.5,
            rotate: "rotate-3",
            duration: 4.2,
          },
          {
            left: "55%",
            top: "10%",
            size: 58,
            delay: 0.3,
            rotate: "-rotate-2",
            duration: 3.8,
          },
          {
            left: "72%",
            top: "26%",
            size: 44,
            delay: 0.8,
            rotate: "rotate-6",
            duration: 4.4,
          },
          {
            left: "88%",
            top: "14%",
            size: 52,
            delay: 0.2,
            rotate: "-rotate-3",
            duration: 3.5,
          },
        ].map((b, i) => (
          <AnimatedButterfly
            key={i}
            size={b.size}
            delay={b.delay}
            duration={b.duration}
            className={`absolute ${b.rotate}`}
            style={{ left: b.left, top: b.top } as React.CSSProperties}
          />
        ))}
      </div>

      {/* Top Flowers with animations */}
      <div className="absolute inset-x-0 top-0 h-[190px] z-[11] pointer-events-none">
        <AnimatedFlower
          src="/bunga/bunga-aksesoris-3.png"
          alt="Top Flower 1"
          width={40}
          height={40}
          animationType="gentle"
          delay={0.1}
          duration={4.5}
          className="absolute left-4 top-8"
        />
        <AnimatedFlower
          src="/bunga/bunga-aksesoris-1.png"
          alt="Top Flower 2"
          width={35}
          height={35}
          animationType="sway"
          delay={0.8}
          duration={3.2}
          className="absolute right-6 top-12"
        />
        <AnimatedFlower
          src="/bunga/bunga-aksesoris-2.png"
          alt="Top Flower 3"
          width={32}
          height={32}
          animationType="float"
          delay={1.2}
          duration={5.1}
          className="absolute left-[30%] top-6"
        />
        <AnimatedFlower
          src="/bunga/bunga-aksesoris.png"
          alt="Top Flower 4"
          width={28}
          height={28}
          animationType="bounce"
          delay={0.4}
          duration={2.8}
          className="absolute right-[25%] top-8"
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
          <AnimatedFlower
            src="/bunga/bunga-aksesoris-1.png"
            alt="Flower acc 1"
            width={60}
            height={60}
            animationType="float"
            delay={0.2}
            duration={4.2}
            className="absolute left-6 bottom-16"
          />
          <AnimatedFlower
            src="/bunga/bunga-aksesoris-2.png"
            alt="Flower acc 2"
            width={50}
            height={50}
            animationType="sway"
            delay={0.8}
            duration={3.8}
            className="absolute left-16 bottom-10"
          />
          <AnimatedFlower
            src="/bunga/bunga-aksesoris-3.png"
            alt="Flower acc 3"
            width={48}
            height={48}
            animationType="gentle"
            delay={1.2}
            duration={5.1}
            className="absolute left-8 bottom-6"
          />

          {/* Center sprinkle (use full-circle variants to avoid cropped look) */}
          <AnimatedFlower
            src="/bunga/bunga-aksesoris.png"
            alt="Flower acc center"
            width={44}
            height={44}
            animationType="bounce"
            delay={0.5}
            duration={2.5}
            className="absolute left-1/2 -translate-x-1/2 bottom-12"
          />
          <AnimatedFlower
            src="/bunga/bunga-aksesoris-1.png"
            alt="Flower acc 5"
            width={36}
            height={36}
            animationType="sway"
            delay={1.5}
            duration={3.2}
            className="absolute left-[45%] bottom-8 rotate-6"
          />
          <AnimatedFlower
            src="/bunga/bunga-aksesoris-2.png"
            alt="Flower acc 6"
            width={36}
            height={36}
            animationType="float"
            delay={0.9}
            duration={4.5}
            className="absolute left-[55%] bottom-6 -rotate-6"
          />

          {/* Right cluster */}
          <AnimatedFlower
            src="/bunga/bunga-aksesoris-7.png"
            alt="Flower acc 7"
            width={56}
            height={56}
            animationType="gentle"
            delay={0.3}
            duration={5.8}
            className="absolute right-14 bottom-14"
          />
          <AnimatedFlower
            src="/bunga/bunga-aksesoris-8.png"
            alt="Flower acc 8"
            width={46}
            height={46}
            animationType="sway"
            delay={1.1}
            duration={3.6}
            className="absolute right-8 bottom-8"
          />
          <AnimatedFlower
            src="/bunga/bunga-aksesoris.png"
            alt="Flower acc 9"
            width={38}
            height={38}
            animationType="bounce"
            delay={0.7}
            duration={2.8}
            className="absolute right-[22%] bottom-10"
          />
        </div>
      </div>

      {/* Bunga Putih - Left Bottom (under accessories) */}
      <div className="absolute left-6 bottom-10 z-[7] pointer-events-none opacity-80">
        <div className="relative">
          <AnimatedFlower
            src="/bunga_putih.png"
            alt="Bunga Putih"
            width={90}
            height={90}
            animationType="float"
            delay={0.4}
            duration={6.2}
          />
        </div>
      </div>

      {/* Bunga Kuning - Right Bottom (under accessories) */}
      <div className="absolute right-6 bottom-10 z-[7] pointer-events-none opacity-80">
        <div className="relative">
          <AnimatedFlower
            src="/bunga_kuning.png"
            alt="Bunga Kuning"
            width={80}
            height={80}
            animationType="sway"
            delay={0.6}
            duration={4.8}
          />
        </div>
      </div>

      {/* C&R Text with Button */}
      <div className="absolute inset-0 flex items-center justify-center z-20 px-4">
        <div className="text-center flex flex-col items-center justify-center w-full max-w-md md:max-w-none">
          <AnimatedText
            animationType="slideDown"
            delay={0.2}
            duration={1.2}
            className="mb-6 md:mb-10"
          >
            <h2
              className="text-3xl md:text-4xl font-normal text-[#504B38] tracking-wide"
              style={{ fontFamily: '"Times New Roman", Times, serif' }}
            >
              The Wedding Of
            </h2>
          </AnimatedText>

          <AnimatedText
            animationType="scale"
            delay={0.8}
            duration={1.5}
            className="mb-8 md:mb-12"
          >
            <h1
              className="text-7xl sm:text-8xl md:text-9xl lg:text-9xl font-bold text-[#504B38] drop-shadow-lg tracking-tight flex items-center justify-center"
              style={{ fontFamily: "Kunstler, serif" }}
            >
              <AnimatedText
                animationType="slideLeft"
                delay={1.2}
                duration={1.0}
                className={`${alexBrush.className} relative -top-3 sm:-top-3 md:-top-4`}
              >
                C
              </AnimatedText>
              <AnimatedText
                animationType="bounce"
                delay={1.4}
                duration={0.8}
                className="mx-1"
              >
                &
              </AnimatedText>
              <AnimatedText
                animationType="slideRight"
                delay={1.6}
                duration={1.0}
                className={`${alexBrush.className} relative top-10 sm:top-12 md:top-16 lg:top-20`}
              >
                R
              </AnimatedText>
            </h1>
          </AnimatedText>

          {/* Button Buka Undangan */}
          <AnimatedText
            animationType="slideUp"
            delay={2.0}
            duration={1.0}
            className="mt-6 md:mt-10"
          >
            <Button
              onClick={() => {
                // Trigger existing flow
                onOpenInvitation();
                // Dispatch a custom event to start music (counts as user gesture)
                if (typeof window !== "undefined") {
                  window.dispatchEvent(new Event("play-music"));
                }
              }}
              className="flex items-center gap-2 sm:gap-3 px-5 py-2 text-sm"
            >
              <EnvelopeIcon className="w-6 h-6" />
              <span className="text-sm sm:text-base tracking-wide">
                Open Invitation
              </span>
            </Button>
          </AnimatedText>
        </div>
      </div>

      {/* Floating Flowers in middle area */}
      <div className="absolute inset-0 z-[15] pointer-events-none">
        <AnimatedFlower
          src="/bunga/bunga-aksesoris-5.png"
          alt="Floating Flower 1"
          width={45}
          height={45}
          animationType="float"
          delay={0.3}
          duration={6.5}
          className="absolute left-[15%] top-[35%] opacity-70"
        />
        <AnimatedFlower
          src="/bunga/bunga-aksesoris-3.png"
          alt="Floating Flower 2"
          width={38}
          height={38}
          animationType="sway"
          delay={1.1}
          duration={4.2}
          className="absolute right-[18%] top-[40%] opacity-75"
        />
        <AnimatedFlower
          src="/bunga/bunga-aksesoris-7.png"
          alt="Floating Flower 3"
          width={42}
          height={42}
          animationType="gentle"
          delay={0.7}
          duration={5.8}
          className="absolute left-[20%] bottom-[35%] opacity-65"
        />
        <AnimatedFlower
          src="/bunga/bunga-aksesoris-8.png"
          alt="Floating Flower 4"
          width={35}
          height={35}
          animationType="bounce"
          delay={1.4}
          duration={3.1}
          className="absolute right-[22%] bottom-[30%] opacity-70"
        />
      </div>
    </div>
  );
};
