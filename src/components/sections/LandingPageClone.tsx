"use client";

import React from "react";
import Image from "next/image";

interface LandingPageCloneProps {
  onOpenInvitation: () => void;
}

export const LandingPageClone: React.FC<LandingPageCloneProps> = ({
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
    </div>
  );
};
