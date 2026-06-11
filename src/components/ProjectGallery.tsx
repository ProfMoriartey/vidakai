"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface ProjectGalleryProps {
  desktopImages: string[];
  mobileImages: string[];
}

export default function ProjectGallery({
  desktopImages,
  mobileImages,
}: ProjectGalleryProps) {
  const [view, setView] = useState<"desktop" | "mobile">("desktop");
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeImages = view === "desktop" ? desktopImages : mobileImages;
  const currentImage = activeImages[currentIndex];

  const handleViewChange = (newView: "desktop" | "mobile") => {
    setView(newView);
    const targetImages = newView === "desktop" ? desktopImages : mobileImages;

    if (currentIndex >= targetImages.length) {
      setCurrentIndex(Math.max(0, targetImages.length - 1));
    }
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % activeImages.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + activeImages.length) % activeImages.length,
    );
  };

  if (!currentImage) {
    return (
      <div className="flex min-h-[400px] w-full items-center justify-center rounded-2xl border border-gray-100 bg-gray-50">
        <span className="font-medium text-gray-400">No images available</span>
      </div>
    );
  }

  return (
    <div className="flex w-full flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 rounded-full bg-gray-100 p-1">
          <button
            onClick={() => handleViewChange("desktop")}
            className={`rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 ${
              view === "desktop"
                ? "bg-white text-black shadow-sm"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Desktop
          </button>
          <button
            onClick={() => handleViewChange("mobile")}
            className={`rounded-full px-6 py-2 text-sm font-bold transition-all duration-300 ${
              view === "mobile"
                ? "bg-white text-black shadow-sm"
                : "text-gray-500 hover:text-black"
            }`}
          >
            Mobile
          </button>
        </div>

        <div className="text-sm font-medium text-gray-400 tabular-nums">
          {currentIndex + 1} / {activeImages.length}
        </div>
      </div>

      <div className="relative flex min-h-[400px] w-full items-center justify-center overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-4 md:min-h-[600px] md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${view}-${currentIndex}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className={`relative flex h-full w-full items-center justify-center ${
              view === "desktop"
                ? "aspect-34/18"
                : "mx-auto aspect-12/25 max-w-sm"
            }`}
          >
            <Image
              src={currentImage}
              alt={`Project ${view} view ${currentIndex + 1}`}
              fill
              className="rounded-xl border border-gray-100/50 object-cover shadow-sm"
              sizes={
                view === "desktop"
                  ? "(max-width: 768px) 100vw, 75vw"
                  : "(max-width: 768px) 100vw, 33vw"
              }
              priority={currentIndex === 0}
            />
          </motion.div>
        </AnimatePresence>

        <div className="pointer-events-none absolute inset-x-4 flex justify-between">
          <button
            onClick={prevImage}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 bg-white/90 text-black shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:bg-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={nextImage}
            className="pointer-events-auto flex h-12 w-12 items-center justify-center rounded-full border border-gray-100 bg-white/90 text-black shadow-sm backdrop-blur-sm transition-all hover:scale-105 hover:bg-white"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
