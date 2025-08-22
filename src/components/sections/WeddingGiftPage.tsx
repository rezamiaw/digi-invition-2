"use client";

import React, { useState } from "react";
import Image from "next/image";
import { AnimatedElement } from "@/components/ui/AnimatedElement";
import { showToast } from "@/components";

interface WeddingGiftPageProps {
  isVisible: boolean;
}

export const WeddingGiftPage: React.FC<WeddingGiftPageProps> = ({
  isVisible,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  if (!isVisible) return null;

  return (
    <div
      id="wedding-gift-page"
      className="min-h-screen bg-white flex items-center justify-center p-8 animate-fadeIn relative -mt-8 z-[20]"
    >
      {/* Background Texture */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/texture.png"
          alt="Background Texture"
          fill
          className="object-cover opacity-50"
          priority
        />
      </div>

      <div className="max-w-2xl w-full mx-auto text-center relative z-10 px-8">
        {/* Wedding Gift Title */}
        <AnimatedElement animationType="slide" delay={200}>
          <h1
            className="text-4xl md:text-5xl text-[#504B38] mb-4"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            Wedding Gift
          </h1>
        </AnimatedElement>

        {/* Description Text */}
        <AnimatedElement animationType="slide" delay={400}>
          <p
            className="text-[#504B38] text-base md:text-base leading-relaxed mb-12 max-w-2xl mx-6 sm:mx-10 md:mx-auto px-0"
            style={{
              fontFamily:
                "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
              fontWeight: 400,
              lineHeight: "1.8",
              textAlign: "center",
            }}
          >
            Doa, restu dan kehadiran Bapak/Ibu/Saudara/i saat berarti bagi
            kebahagiaan kami. Namun jika ingin memberikan hadiah untuk kami,
            kami sediakan fitur di bawah ini :
          </p>
        </AnimatedElement>

        {/* Bottom Decorative Vector */}
        <div className="flex justify-center mb-10">
          <Image
            src="/quote/Vector2.png"
            alt="Bottom Decorative Vector"
            width={140}
            height={37}
            className="object-contain"
          />
        </div>

        {/* Gift Icon/Image Container - Clickable */}
        <AnimatedElement animationType="scale" delay={800}>
          <div className="flex justify-center mb-12">
            <button
              onClick={openModal}
              className="w-32 h-32 bg-white rounded-full flex items-center justify-center shadow-lg border-4 border-[#504B38]/20 hover:border-[#504B38]/40 transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              {/* Dompet Icon */}
              <div className="w-16 h-16 group-hover:scale-110 transition-transform duration-300">
                <Image
                  src="/dompet.png"
                  alt="Dompet"
                  width={64}
                  height={64}
                  className="object-contain drop-shadow-lg"
                />
              </div>
            </button>
          </div>
        </AnimatedElement>

        {/* Click Instruction */}
        <AnimatedElement animationType="bounce" delay={1000}>
          <div className="mt-8">
            <p
              className="text-[#504B38] text-lg font-semibold text-center"
              style={{
                fontFamily:
                  "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
              }}
            >
              Klik gift box di atas untuk melihat detail transfer 💝
            </p>
          </div>
        </AnimatedElement>
      </div>

      {/* Modal Overlay */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fadeIn">
          <div className="bg-white rounded-[25px] max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scaleIn">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white rounded-t-[25px] border-b border-[#504B38]/30 px-6 py-4 flex justify-between items-center">
              <h2
                className="text-2xl font-semibold text-[#504B38]"
                style={{ fontFamily: '"Times New Roman", Times, serif' }}
              >
                Wedding Gift 💝
              </h2>
              <button
                onClick={closeModal}
                className="w-8 h-8 rounded-full bg-[#504B38]/10 hover:bg-[#504B38]/20 flex items-center justify-center transition-colors duration-300"
              >
                <span className="text-[#504B38] text-xl">×</span>
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Bank Transfer Section */}
              <div>
                <h3
                  className="text-xl font-semibold text-[#504B38] mb-4"
                  style={{ fontFamily: '"Times New Roman", Times, serif' }}
                >
                  Transfer Bank
                </h3>

                <div className="space-y-4">
                  {/* Bank Account 1 */}
                  <div className="bg-[#F5E6D3]/50 rounded-[15px] p-4">
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <p
                          className="text-sm text-[#504B38]/70 mb-1"
                          style={{
                            fontFamily:
                              "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                          }}
                        >
                          Bank BCA
                        </p>
                        <p
                          className="text-lg font-semibold text-[#504B38]"
                          style={{
                            fontFamily:
                              "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                          }}
                        >
                          1234567890
                        </p>
                        <p
                          className="text-sm text-[#504B38]"
                          style={{
                            fontFamily:
                              "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                          }}
                        >
                          a.n. Tania Subyanto
                        </p>
                      </div>
                      <button
                        className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 border border-[#504B38] text-[#504B38] hover:bg-[#504B38] hover:text-white"
                        style={{
                          fontFamily:
                            "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                        }}
                        onClick={() => {
                          navigator.clipboard.writeText("1234567890");
                          showToast("Nomor rekening BCA disalin", "success");
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>

                  {/* Bank Account 2 */}
                  <div className="bg-[#F5E6D3]/50 rounded-[15px] p-4">
                    <div className="flex justify-between items-center">
                      <div className="text-left">
                        <p
                          className="text-sm text-[#504B38]/70 mb-1"
                          style={{
                            fontFamily:
                              "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                          }}
                        >
                          Bank Mandiri
                        </p>
                        <p
                          className="text-lg font-semibold text-[#504B38]"
                          style={{
                            fontFamily:
                              "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                          }}
                        >
                          0987654321
                        </p>
                        <p
                          className="text-sm text-[#504B38]"
                          style={{
                            fontFamily:
                              "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                          }}
                        >
                          a.n. Doni Supratman
                        </p>
                      </div>
                      <button
                        className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-300 border border-[#504B38] text-[#504B38] hover:bg-[#504B38] hover:text-white"
                        style={{
                          fontFamily:
                            "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                        }}
                        onClick={() => {
                          navigator.clipboard.writeText("0987654321");
                          showToast(
                            "Nomor rekening Mandiri disalin",
                            "success"
                          );
                        }}
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Thank You Message */}
              <div className="text-center pt-4 border-t border-[#504B38]/30">
                <p
                  className="text-[#504B38] text-base font-medium italic"
                  style={{
                    fontFamily:
                      "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                  }}
                >
                  Terima kasih atas perhatian dan kebaikan Anda 💝
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
