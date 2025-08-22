"use client";

import React, { useState } from "react";
import { AnimatedElement } from "@/components/ui/AnimatedElement";

interface UcapanDoaPageProps {
  isVisible: boolean;
}

interface UcapanItem {
  id: number;
  nama: string;
  ucapan: string;
  tanggal: string;
}

export const UcapanDoaPage: React.FC<UcapanDoaPageProps> = ({ isVisible }) => {
  const [namaAnda, setNamaAnda] = useState("");
  const [ucapanDoa, setUcapanDoa] = useState("");

  // Mock data untuk contoh ucapan
  const [ucapanHistory, setUcapanHistory] = useState<UcapanItem[]>([
    {
      id: 1,
      nama: "Budi Santoso",
      ucapan:
        "Selamat atas pernikahan kalian! Semoga menjadi keluarga yang bahagia, harmonis, dan penuh berkah. Barakallahu lakuma wa baraka alaikuma wa jama&apos;a bainakuma fi khair.",
      tanggal: "2 jam yang lalu",
    },
    {
      id: 2,
      nama: "Sari Dewi",
      ucapan:
        "Tania & Doni, selamat menempuh hidup baru! Semoga pernikahan kalian dipenuhi cinta, kebahagiaan, dan rezeki yang melimpah. Selamat berbahagia! 💕",
      tanggal: "5 jam yang lalu",
    },
    {
      id: 3,
      nama: "Ahmad Wijaya",
      ucapan:
        "Congratulations! Wishing you both a lifetime of love and happiness. May your marriage be blessed with joy, prosperity, and endless love.",
      tanggal: "1 hari yang lalu",
    },
    {
      id: 4,
      nama: "Maya Putri",
      ucapan:
        "Selamat ya Tania dan Doni! Kalian couple yang sempurna. Semoga pernikahan ini menjadi awal dari kehidupan yang penuh kebahagiaan dan diberkahi Allah SWT.",
      tanggal: "1 hari yang lalu",
    },
    {
      id: 5,
      nama: "Roni Prasetyo",
      ucapan:
        "Happy wedding day! Semoga kalian berdua selalu kompak, saling melengkapi, dan menjadi pasangan yang langgeng sampai maut memisahkan. Aamiin.",
      tanggal: "2 hari yang lalu",
    },
  ]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Tambahkan ucapan baru ke history
    if (namaAnda.trim() && ucapanDoa.trim()) {
      const newUcapan: UcapanItem = {
        id: Date.now(),
        nama: namaAnda.trim(),
        ucapan: ucapanDoa.trim(),
        tanggal: "Baru saja",
      };

      setUcapanHistory([newUcapan, ...ucapanHistory]);
      setNamaAnda("");
      setUcapanDoa("");
    }
  };

  if (!isVisible) return null;

  return (
    <div
      id="ucapan-doa-page"
      className="min-h-screen bg-[#F2E8C5] flex items-center justify-center p-8 animate-fadeIn relative"
    >
      <div className="max-w-2xl w-full mx-auto text-center relative z-10 px-8">
        {/* Title */}
        <AnimatedElement animationType="slide" delay={200}>
          <h1
            className="text-4xl md:text-5xl text-[#504B38] mb-12"
            style={{
              fontFamily: '"Times New Roman", Times, serif',
              fontWeight: 600,
              letterSpacing: "0.05em",
            }}
          >
            UCAPAN & DOA
          </h1>
        </AnimatedElement>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-8 max-w-xl mx-auto">
          {/* Nama Anda Input */}
          <AnimatedElement animationType="slide" delay={400}>
            <div className="text-left">
              <label
                className="block text-[#504B38] text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--font-kumbh-sans), sans-serif" }}
              >
                Nama Anda
              </label>
              <input
                type="text"
                value={namaAnda}
                onChange={(e) => setNamaAnda(e.target.value)}
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

          {/* Berikan Ucapan & Doa Textarea */}
          <AnimatedElement animationType="slide" delay={600}>
            <div className="text-left">
              <label
                className="block text-[#504B38] text-lg font-semibold mb-3"
                style={{ fontFamily: "var(--font-kumbh-sans), sans-serif" }}
              >
                Berikan Ucapan & Doa
              </label>
              <textarea
                value={ucapanDoa}
                onChange={(e) => setUcapanDoa(e.target.value)}
                rows={6}
                className="w-full px-6 py-4 border-2 border-[#D2C7A5] rounded-[25px] bg-[#FFFFFF] text-[#8B4A47] placeholder-[#A0856B] focus:outline-none focus:border-[#504B38] transition-colors text-lg resize-none"
                style={{
                  fontFamily: "var(--font-kumbh-sans), sans-serif",
                  minHeight: "150px",
                }}
                placeholder=""
                required
              />
            </div>
          </AnimatedElement>

          {/* Send Button */}
          <AnimatedElement animationType="bounce" delay={800}>
            <div className="flex justify-center mt-10">
              <button
                type="submit"
                className="px-6 py-3 rounded-xl border border-[#504B38] text-[#504B38] tracking-[0.3em] text-base hover:bg-[#504B38] hover:text-white transition-colors"
                style={{
                  fontFamily:
                    "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                }}
              >
                SEND
              </button>
            </div>
          </AnimatedElement>
        </form>

        {/* History Ucapan & Doa */}
        <div className="mt-16 max-w-4xl mx-auto">
          <AnimatedElement animationType="slide" delay={1000}>
            <h2
              className="text-3xl md:text-4xl text-[#504B38] mb-8 text-center"
              style={{
                fontFamily: '"Times New Roman", Times, serif',
                fontWeight: 600,
                letterSpacing: "0.05em",
              }}
            >
              Ucapan & Doa dari Tamu
            </h2>
          </AnimatedElement>

          {/* Scrollable History Container */}
          <AnimatedElement animationType="scale" delay={1200}>
            <div
              className="bg-white/60 backdrop-blur-sm rounded-[25px] border border-[#504B38]/40 shadow-lg overflow-hidden relative mb-10"
              style={{ height: "400px" }}
            >
              {/* Scroll Area */}
              <div className="h-full overflow-y-auto custom-scrollbar p-6 space-y-4">
                {ucapanHistory.map((item) => (
                  <div
                    key={item.id}
                    className="bg-white/90 backdrop-blur-sm rounded-[15px] p-5 shadow-md border border-[#504B38]/20 transition-all duration-300 hover:shadow-lg hover:bg-white/95"
                  >
                    {/* Header with name and time */}
                    <div className="flex justify-between items-start mb-3">
                      <h3
                        className="text-base font-semibold text-[#504B38]"
                        style={{
                          fontFamily:
                            "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                        }}
                      >
                        {item.nama}
                      </h3>
                      <span
                        className="text-xs text-[#504B38]/60"
                        style={{
                          fontFamily:
                            "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                        }}
                      >
                        {item.tanggal}
                      </span>
                    </div>

                    {/* Ucapan content */}
                    <p
                      className="text-[#504B38] leading-relaxed text-sm"
                      style={{
                        fontFamily:
                          "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.ucapan}
                    </p>
                  </div>
                ))}

                {/* Empty state atau loading indicator */}
                {ucapanHistory.length === 0 && (
                  <div className="text-center py-12">
                    <p
                      className="text-[#504B38]/60 italic"
                      style={{
                        fontFamily:
                          "var(--font-inter), system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
                      }}
                    >
                      Belum ada ucapan dan doa. Jadilah yang pertama! 💝
                    </p>
                  </div>
                )}
              </div>
            </div>
          </AnimatedElement>
        </div>
      </div>
    </div>
  );
};
