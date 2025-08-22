"use client";

import React from "react";
import Image from "next/image";
import { AnimatedButterfly } from "../ui/AnimatedButterfly";
import { AnimatedText } from "@/components/ui/AnimatedText";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

interface SaveDatePageProps {
  isVisible: boolean;
}

export const SaveDatePage: React.FC<SaveDatePageProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div
      id="save-date-page"
      className="min-h-screen bg-[#F2E8C5] p-8 animate-fadeIn relative flex flex-col items-center justify-center z-[20]"
    >
      {/* Cloud + Butterfly decoration - right middle */}
      <div className="pointer-events-none absolute -right-40 top-90 -translate-y-1/2 z-0 opacity-100 -rotate-5 animate-right animate-bounce-after">
        <div className="relative w-[260px] h-[140px]">
          <Image src="/awan.png" alt="Awan" fill className="object-contain" />
          <AnimatedButterfly
            size={88}
            className="absolute left-1 -top-2 -rotate-10"
            delay={0.5}
          />
        </div>
      </div>

      {/* Cloud decoration - left middle */}
      <div className="pointer-events-none absolute -left-24 top-1/2 translate-y-2 z-0 opacity-90 animate-left animate-bounce-after">
        <Image
          src="/awan.png"
          alt="Awan"
          width={190}
          height={140}
          className="object-contain scale-x-[-1]"
        />
        <AnimatedButterfly
          size={88}
          className="absolute right-1 -top-8 scale-x-[-1]"
          delay={1}
        />
      </div>

      <div className="w-full h-full flex items-center justify-center">
        <AnimatedText animationType="scale" delay={0.3} duration={1.2}>
          <h1
            className="text-3xl md:text-4xl tracking-wide"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
              color: "#504B38",
              fontWeight: 300,
            }}
          >
            Save Date
          </h1>
        </AnimatedText>
      </div>

      <AnimatedElement animationType="scale" delay={0.6}>
        <div className="flex justify-center mt-4">
          <Image
            src="/quote/Vector2.png"
            alt="Bottom Decorative Vector"
            width={250}
            height={37}
            className="object-contain"
          />
        </div>
      </AnimatedElement>

      {/* Details Section */}
      <div
        className="mt-6 text-center px-6"
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          color: "#504B38",
        }}
      >
        {/* Date */}
        <AnimatedText
          animationType="slideUp"
          delay={0.9}
          duration={1.0}
          className="mb-2"
        >
          <div className="text-lg md:text-xl">Sabtu,</div>
        </AnimatedText>
        <AnimatedText
          animationType="slideUp"
          delay={1.0}
          duration={1.0}
          className="mb-6"
        >
          <div className="text-lg md:text-xl">15 November 2025</div>
        </AnimatedText>

        {/* Reception Time */}
        <AnimatedText
          animationType="slideLeft"
          delay={1.2}
          duration={1.0}
          className="mb-2"
        >
          <div className="italic text-lg md:text-xl">Resepsi</div>
        </AnimatedText>
        <AnimatedText
          animationType="slideLeft"
          delay={1.3}
          duration={1.0}
          className="mb-1"
        >
          <div className="text-lg md:text-xl font-extrabold">13.00 - 17.00</div>
        </AnimatedText>
        <AnimatedText
          animationType="slideLeft"
          delay={1.4}
          duration={1.0}
          className="mb-8"
        >
          <div className="text-xs md:text-sm opacity-80">
            ( di buka dengan tampilan adat sunda )
          </div>
        </AnimatedText>

        {/* Location */}
        <AnimatedText
          animationType="slideRight"
          delay={1.5}
          duration={1.0}
          className="mb-2"
        >
          <div className="text-lg md:text-xl">Berlokasi di :</div>
        </AnimatedText>
        <AnimatedText
          animationType="slideRight"
          delay={1.6}
          duration={1.0}
          className="mb-2"
        >
          <div className="text-lg md:text-xl font-extrabold">The Park View</div>
        </AnimatedText>
        <AnimatedText
          animationType="slideRight"
          delay={1.7}
          duration={1.0}
          className="mb-6"
        >
          <div className="text-sm md:text-base leading-relaxed">
            Kb. Lega, Kec. Bojongloa Kidul,
            <br />
            Kota Bandung, Jawa Barat
          </div>
        </AnimatedText>

        {/* Button */}
        <AnimatedElement animationType="bounce" delay={1.8}>
          <div className="flex justify-center mb-10">
            <a
              href="https://www.google.com/maps/place/The+Parkview/@-6.9499443,107.5957855,1126m/data=!3m2!1e3!4b1!4m6!3m5!1s0x2e68e9e606eb9949:0x22a24f8ed88e0096!8m2!3d-6.9499496!4d107.5983604!16s%2Fg%2F11ss7kx405?entry=ttu&g_ep=EgoyMDI1MDgxOS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl border border-[#504B38] text-[#504B38] tracking-[0.3em] text-base hover:bg-[#504B38] hover:text-white transition-colors cursor-pointer"
            >
              LIHAT LOKASI
            </a>
          </div>
        </AnimatedElement>

        {/* Countdown Row */}
        <AnimatedText
          animationType="fadeIn"
          delay={2.1}
          duration={1.5}
          className="mt-2"
        >
          <div className="grid grid-cols-4 gap-6 max-w-xs mx-auto">
            {[
              { label: "HARI" },
              { label: "JAM" },
              { label: "MENIT" },
              { label: "DETIK" },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <AnimatedText
                  animationType="bounce"
                  delay={2.3 + idx * 0.1}
                  duration={0.8}
                  className="text-3xl md:text-4xl"
                >
                  <div>0</div>
                </AnimatedText>
                <AnimatedText
                  animationType="fadeIn"
                  delay={2.4 + idx * 0.1}
                  duration={0.6}
                  className="text-[10px] mt-2 tracking-widest opacity-80"
                >
                  <div>{item.label}</div>
                </AnimatedText>
              </div>
            ))}
          </div>
        </AnimatedText>
      </div>
    </div>
  );
};
