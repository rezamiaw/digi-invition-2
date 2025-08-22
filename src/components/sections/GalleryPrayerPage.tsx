"use client";

import React from "react";
import Image from "next/image";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

interface GalleryPrayerPageProps {
  isVisible: boolean;
}

export const GalleryPrayerPage: React.FC<GalleryPrayerPageProps> = ({
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div
      id="gallery-prayer-page"
      className="bg-white flex justify-center p-4 md:p-20 animate-fadeIn relative z-[20]"
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

      {/* Top Decorative Overlay (show top part only) */}
      <div className="absolute inset-x-0 top-0 h-[190px] z-[5] pointer-events-none scale-x-110 opacity-50">
        <Image
          src="/reactangle-min.png"
          alt="Top Decorative Leaves"
          fill
          className="object-cover object-top"
          priority
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 text-center">
        {/* Top Decorative Vector */}
        <AnimatedElement animationType="scale" delay={200}>
          <div className="flex justify-center mb-4">
            <Image
              src="/quote/Vector.png"
              alt="Top Decorative Vector"
              width={180}
              height={72}
              className="object-contain"
            />
          </div>
        </AnimatedElement>

        {/* Main Quote Text */}
        <AnimatedText
          animationType="fadeIn"
          delay={0.8}
          duration={1.5}
          className="mb-3"
        >
          <p
            className="text-lg md:text-base text-[#504B38] leading-relaxed"
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontWeight: 400,
            }}
          >
            Di antara tanda-tanda (kebesaran)-Nya ialah bahwa Dia menciptakan{" "}
            <AnimatedText
              animationType="bounce"
              delay={1.2}
              duration={0.8}
              className="inline-block"
            >
              <strong>pasangan-pasangan</strong>
            </AnimatedText>{" "}
            untukmu dari (jenis) dirimu sendiri agar kamu merasa tenteram
            kepadanya. Dia menjadikan di antaramu{" "}
            <AnimatedText
              animationType="bounce"
              delay={1.4}
              duration={0.8}
              className="inline-block"
            >
              <strong>rasa cinta dan kasih sayang</strong>
            </AnimatedText>
            . Sesungguhnya pada yang demikian itu benar- benar terdapat
            tanda-tanda (kebesaran Allah) bagi kaum yang berpikir.
          </p>
        </AnimatedText>

        {/* Reference Text */}
        <AnimatedText
          animationType="slideUp"
          delay={1.8}
          duration={1.0}
          className="mt-3"
        >
          <span
            className="text-[#504B38] font-bold"
            style={{ fontFamily: "var(--font-inter), sans-serif" }}
          >
            (QS AR-RUM : 21 )
          </span>
        </AnimatedText>

        {/* Bottom Decorative Vector */}
        <AnimatedElement animationType="scale" delay={2.2}>
          <div className="flex justify-center mt-4 mb-4">
            <Image
              src="/quote/Vector2.png"
              alt="Bottom Decorative Vector"
              width={250}
              height={37}
              className="object-contain"
            />
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};
