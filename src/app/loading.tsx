'use client';

import React from 'react';
import Image from 'next/image';

export default function Loading() {
  return (
    <div
      role="status"
      aria-busy="true"
      className="fixed inset-0 z-[9999] bg-[#FEF9E1] flex items-center justify-center"
    >
      <div className="flex flex-col items-center gap-5 animate-fadeIn">
        <div className="w-24 h-24 bg-white rounded-full shadow-lg flex items-center justify-center">
          <Image src="/giftbox.svg" alt="Loading" width={48} height={48} className="drop-shadow-md" />
        </div>

        <h2
          className="text-[#A31D1D] text-3xl tracking-wide"
          style={{ fontFamily: 'Kunstler, serif' }}
        >
          T & D
        </h2>

        <div className="w-44 h-1.5 bg-[#E5D0AC] rounded-full overflow-hidden">
          <div className="h-full w-1/3 bg-[#A31D1D] animate-[loadingBar_1.1s_ease-in-out_infinite]"></div>
        </div>
      </div>
    </div>
  );
}


