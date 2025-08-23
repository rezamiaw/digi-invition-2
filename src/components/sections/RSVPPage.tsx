"use client";

import React, { useState } from "react";
import { showToast } from "@/components";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import Image from "next/image";

interface RSVPPageProps {
  isVisible: boolean;
}

export const RSVPPage: React.FC<RSVPPageProps> = ({ isVisible }) => {
  const [nama, setNama] = useState("");
  const [jumlahTamu, setJumlahTamu] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({ nama, jumlahTamu, konfirmasi });
    showToast("RSVP berhasil dikirim. Terima kasih!", "success");
  };

  if (!isVisible) return null;

  return (
    <div
      id="rsvp-page"
      className="min-h-s bg-[#F2E8C5] flex items-center justify-center p-8 animate-fadeIn relative"
    >
      <div className="max-w-2xl w-full mx-auto text-center relative z-10 px-8">
        {/* RSVP Title */}
        <AnimatedElement animationType="slide" delay={200}>
          <h1
            className="text-5xl md:text-6xl text-[#504B38] mb-4"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
              fontWeight: 400,
            }}
          >
            RSVP
          </h1>
        </AnimatedElement>
        {/* Bottom Decorative Vector */}
        <div className="flex justify-center mb-4">
          <Image
            src="/quote/Vector2.png"
            alt="Bottom Decorative Vector"
            width={140}
            height={37}
            className="object-contain"
          />
        </div>

        {/* Description Text */}
        <AnimatedElement animationType="slide" delay={400}>
          <p
            className="text-[#504B38] text-base md:text-lg leading-relaxed mb-12 max-w-7xl mx-1 sm:mx-8 md:mx-auto px-0"
            style={{
              fontFamily:
                "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
              fontWeight: 400,
              lineHeight: "1.8",
            }}
          >
            Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila
            Bapak/Ibu/Saudara/i berkenan hadir pada acara bahagia kami untuk
            tentunya memberikan doa restu kepada kedua mempelai. Atas kehadiran
            serta doa restu, kami ucapkan terima kasih yang seterdalam.
          </p>
        </AnimatedElement>

        {/* RSVP Form */}
        <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto">
          {/* Nama Input */}
          <AnimatedElement animationType="slide" delay={600}>
            <div className="text-left">
              <label
                className="block text-[#504B38] text-lg font-semibold mb-3"
                style={{
                  fontFamily:
                    "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                }}
              >
                Nama
              </label>
              <input
                type="text"
                value={nama}
                onChange={(e) => setNama(e.target.value)}
                className="w-full px-6 border-2 border-[#D2C7A5] rounded-[25px] bg-[#FFFFFF] text-[#8B4A47] placeholder-[#A0856B] focus:outline-none focus:border-[#504B38] transition-colors text-lg"
                style={{
                  fontFamily:
                    "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                  height: "50px",
                }}
                placeholder="Masukkan nama Anda"
                required
              />
            </div>
          </AnimatedElement>

          {/* Jumlah Tamu Input */}
          <AnimatedElement animationType="slide" delay={800}>
            <div className="text-left">
              <label
                className="block text-[#504B38] text-lg font-semibold mb-3"
                style={{
                  fontFamily:
                    "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                }}
              >
                Jumlah Tamu (orang)
              </label>
              <input
                type="number"
                value={jumlahTamu}
                onChange={(e) => setJumlahTamu(e.target.value)}
                className="w-full px-6 border-2 border-[#D2C7A5] rounded-[25px] bg-[#FFFFFF] text-[#8B4A47] placeholder-[#A0856B] focus:outline-none focus:border-[#504B38] transition-colors text-lg"
                style={{
                  fontFamily:
                    "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                  height: "50px",
                }}
                placeholder="Jumlah tamu"
                min="1"
                required
              />
            </div>
          </AnimatedElement>

          {/* Konfirmasi Kehadiran */}
          <AnimatedElement animationType="slide" delay={1000}>
            <div className="text-left">
              <label
                className="block text-[#504B38] text-lg font-semibold mb-4"
                style={{ fontFamily: "var(--font-kumbh-sans), sans-serif" }}
              >
                Konfirmasi kehadiran
              </label>
              <div className="space-y-5">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="konfirmasi"
                    value="hadir"
                    checked={konfirmasi === "hadir"}
                    onChange={(e) => setKonfirmasi(e.target.value)}
                    className="appearance-none w-6 h-6 sm:w-5 sm:h-5 rounded-full border-2 border-[#504B38]/60 bg-white checked:bg-[#504B38] checked:border-[#504B38] focus:outline-none focus:ring-2 focus:ring-[#504B38] transition-colors shrink-0"
                  />
                  <span
                    className="text-[#504B38] text-base sm:text-lg leading-snug"
                    style={{
                      fontFamily:
                        "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                    }}
                  >
                    Hadir
                  </span>
                </label>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="konfirmasi"
                    value="tidak-hadir"
                    checked={konfirmasi === "tidak-hadir"}
                    onChange={(e) => setKonfirmasi(e.target.value)}
                    className="appearance-none w-6 h-6 sm:w-5 sm:h-5 rounded-full border-2 border-[#504B38]/60 bg-white checked:bg-[#504B38] checked:border-[#504B38] focus:outline-none focus:ring-2 focus:ring-[#504B38] transition-colors shrink-0"
                  />
                  <span
                    className="text-[#504B38] text-base sm:text-lg leading-snug"
                    style={{
                      fontFamily:
                        "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                    }}
                  >
                    Mohon maaf, saya tidak bisa hadir
                  </span>
                </label>
              </div>
            </div>
          </AnimatedElement>

          {/* Submit Button */}
          <AnimatedElement animationType="bounce" delay={1200}>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl border border-[#504B38] text-[#504B38] tracking-[0.3em] text-base hover:bg-[#504B38] hover:text-white transition-colors"
                style={{
                  fontFamily:
                    "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                }}
              >
                SUBMIT
              </button>
            </div>
          </AnimatedElement>
        </form>
      </div>
    </div>
  );
};
