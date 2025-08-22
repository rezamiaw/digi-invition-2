"use client";

import { useState, useCallback } from "react";

export const useInvitation = () => {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);
  const [isBrideGroomPageOpen, setIsBrideGroomPageOpen] = useState(false);
  const [isGalleryPrayerPageOpen, setIsGalleryPrayerPageOpen] = useState(false);
  const [isOurGalleryPageOpen, setIsOurGalleryPageOpen] = useState(false);
  const [isSaveDatePageOpen, setIsSaveDatePageOpen] = useState(false);
  const [isRSVPPageOpen, setIsRSVPPageOpen] = useState(false);
  const [isUcapanDoaPageOpen, setIsUcapanDoaPageOpen] = useState(false);
  const [isWeddingGiftPageOpen, setIsWeddingGiftPageOpen] = useState(false);

  const openInvitation = useCallback(() => {
    setIsInvitationOpen(true);
    setIsBrideGroomPageOpen(true);
    setIsGalleryPrayerPageOpen(true);
    setIsOurGalleryPageOpen(true);
    setIsSaveDatePageOpen(true);
    setIsRSVPPageOpen(true);
    setIsUcapanDoaPageOpen(true);
    setIsWeddingGiftPageOpen(true);
    // Delay scroll untuk memastikan konten sudah di-render
    setTimeout(() => {
      const nextSection = document.getElementById("bride-groom-page");
      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }, []);

  const openBrideGroomPage = useCallback(() => {
    setIsBrideGroomPageOpen(true);
    // Delay scroll untuk memastikan konten sudah di-render
    setTimeout(() => {
      const nextSection = document.getElementById("bride-groom-page");
      if (nextSection) {
        nextSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 100);
  }, []);

  return {
    isInvitationOpen,
    isBrideGroomPageOpen,
    isGalleryPrayerPageOpen,
    isOurGalleryPageOpen,
    isSaveDatePageOpen,
    isRSVPPageOpen,
    isUcapanDoaPageOpen,
    isWeddingGiftPageOpen,
    openInvitation,
    openBrideGroomPage,
  };
};
