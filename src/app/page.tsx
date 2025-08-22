"use client";

import React from "react";
import {
  LandingPage,
  BrideGroomPage,
  GalleryPrayerPage,
  OurGalleryPage,
  SaveDatePage,
  RSVPPage,
  UcapanDoaPage,
  WeddingGiftPage,
  SimpleMusicPlayer,
  ToastContainer,
} from "@/components";
import { useInvitation } from "@/hooks/useInvitation";

export default function Home() {
  const {
    isInvitationOpen,
    isBrideGroomPageOpen,
    isGalleryPrayerPageOpen,
    isOurGalleryPageOpen,
    isSaveDatePageOpen,
    isRSVPPageOpen,
    isUcapanDoaPageOpen,
    isWeddingGiftPageOpen,
    openInvitation,
  } = useInvitation();

  return (
    <div className="overflow-x-hidden">
      <LandingPage onOpenInvitation={openInvitation} />
      <BrideGroomPage isVisible={isBrideGroomPageOpen} />
      <GalleryPrayerPage isVisible={isGalleryPrayerPageOpen} />
      <SaveDatePage isVisible={isSaveDatePageOpen} />
      <OurGalleryPage isVisible={isOurGalleryPageOpen} />
      <RSVPPage isVisible={isRSVPPageOpen} />
      <UcapanDoaPage isVisible={isUcapanDoaPageOpen} />
      <WeddingGiftPage isVisible={isWeddingGiftPageOpen} />

      {/* Floating Music Player */}
      <SimpleMusicPlayer
        isVisible={
          isBrideGroomPageOpen ||
          isGalleryPrayerPageOpen ||
          isOurGalleryPageOpen ||
          isSaveDatePageOpen ||
          isRSVPPageOpen ||
          isUcapanDoaPageOpen ||
          isWeddingGiftPageOpen
        }
      />
      <ToastContainer />
    </div>
  );
}
