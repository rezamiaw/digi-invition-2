"use client";

import React from "react";
import Image from "next/image";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

interface BrideGroomPageProps {
  isVisible: boolean;
}

export const BrideGroomPage: React.FC<BrideGroomPageProps> = ({
  isVisible,
}) => {
  if (!isVisible) return null;

  return (
    <div
      id="bride-groom-page"
      className="min-h-screen bg-[#F2E8C5] flex items-center justify-center p-8 animate-fadeIn relative -mt-8 z-[20]"
    >
      <div
        className="max-w-2xl mx-auto text-center text-white"
        style={{ fontFamily: "var(--font-inter), sans-serif" }}
      >
        {/* Bride Section */}
        <div className="mb-8">
          {/* Basmallah Image */}
          <AnimatedElement animationType="scale" delay={200}>
            <div className="flex justify-center mb-4">
              <Image
                src="/bride-groom/arab2.png"
                alt="Bismillah"
                width={300}
                height={40}
                className="object-contain"
              />
            </div>
          </AnimatedElement>

          {/* Greeting Text */}
          <AnimatedElement animationType="slide" delay={250}>
            <p
              className="text-center text-base md:text-lg mb-4"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "#504B38",
              }}
            >
              Assalamu&apos;alaikum Wr. Wb.
            </p>
          </AnimatedElement>

          {/* Opening Statement */}
          <AnimatedElement animationType="slide" delay={300}>
            <p
              className="text-[#504B38] text-base md:text-base leading-relaxed mb-12 max-w-2xl mx-6 sm:mx-10 md:mx-auto px-0"
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                color: "#504B38",
              }}
            >
              Dengan rahmat dan ridho Allah SWT kami bermaksud menyelenggarakan
              pernikahan Putra & Putri kami yang bernama :
            </p>
          </AnimatedElement>

          {/* Bride Photo */}
          <AnimatedElement animationType="scale" delay={400}>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <div className="w-full h-full bg-[#9A7F3B] flex items-center justify-center">
                  {/* Placeholder untuk foto bride */}
                  <span className="text-[#FFFFFF] text-sm">Bride Photo</span>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Bride Info */}
          <AnimatedElement animationType="slide" delay={500}>
            <div className="text-center">
              <h2
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#504B38",
                }}
              >
                Cinta Hana
              </h2>
              <p
                className="mb-2 italic"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#504B38",
                }}
              >
                Putri dari :
              </p>
              <p
                className="text-base font-bold"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#504B38",
                }}
              >
                Bapak Sunarto
                <br />
                Ibu Rara
              </p>
            </div>
          </AnimatedElement>
        </div>

        {/* Groom Section */}
        <div className="mb-8">
          {/* Groom Photo */}
          <AnimatedElement animationType="scale" delay={600}>
            <div className="flex justify-center mb-6">
              <div className="w-32 h-32 rounded-full overflow-hidden">
                <div className="w-full h-full bg-[#9A7F3B] flex items-center justify-center">
                  {/* Placeholder untuk foto groom */}
                  <span className="text-[#FFFFFF] text-sm">Groom Photo</span>
                </div>
              </div>
            </div>
          </AnimatedElement>

          {/* Groom Info */}
          <AnimatedElement animationType="slide" delay={700}>
            <div className="text-center">
              <h2
                className="text-2xl font-bold mb-2"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#504B38",
                }}
              >
                Rangga Fariz
              </h2>
              <p
                className="mb-2 italic"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#504B38",
                }}
              >
                Putra dari :
              </p>
              <p
                className="text-base font-bold"
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  color: "#504B38",
                }}
              >
                Bapak Denny
                <br />
                Ibu Luna
              </p>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};
