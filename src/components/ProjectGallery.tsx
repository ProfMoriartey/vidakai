"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectGalleryProps {
  desktopImages: string[]
  mobileImages: string[]
}

export default function ProjectGallery({ desktopImages, mobileImages }: ProjectGalleryProps) {
  const [view, setView] = useState<"desktop" | "mobile">("desktop")
  const [currentIndex, setCurrentIndex] = useState(0)

  const activeImages = view === "desktop" ? desktopImages : mobileImages

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % activeImages.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + activeImages.length) % activeImages.length)
  }

  return (
    <div className="w-full flex flex-col gap-6">
      {/* Top Bar: Toggle & Indicators */}
      <div className="flex items-center justify-between">
        <div className="flex gap-2 bg-gray-100 p-1 rounded-full">
          <button
            onClick={() => setView("desktop")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              view === "desktop" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
            }`}
          >
            Desktop
          </button>
          <button
            onClick={() => setView("mobile")}
            className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 ${
              view === "mobile" ? "bg-white text-black shadow-sm" : "text-gray-500 hover:text-black"
            }`}
          >
            Mobile
          </button>
        </div>

        {/* Minimalist Slide Counter */}
        <div className="text-sm font-medium text-gray-400 tabular-nums">
          {currentIndex + 1} / {activeImages.length}
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative w-full bg-gray-50 rounded-2xl border border-gray-100 overflow-hidden flex items-center justify-center min-h-[400px] md:min-h-[600px] p-4 md:p-8">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${view}-${currentIndex}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className={`relative w-full h-full flex items-center justify-center ${
              view === "desktop" ? "aspect-video" : "aspect-9/16 max-w-sm mx-auto"
            }`}
          >
            {/* Replace this div with a Next.js <Image /> component later */}
            <div className="w-full h-full bg-gray-200 rounded-xl flex flex-col items-center justify-center text-gray-500 shadow-sm border border-gray-100/50">
              <span className="font-bold text-lg mb-2">{view === "desktop" ? "Desktop" : "Mobile"} View</span>
              <span className="text-sm">Image {currentIndex + 1}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Arrows */}
        <div className="absolute inset-x-4 flex justify-between pointer-events-none">
          <button 
            onClick={prevImage}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-gray-100 pointer-events-auto hover:scale-105 hover:bg-white transition-all text-black"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={nextImage}
            className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm border border-gray-100 pointer-events-auto hover:scale-105 hover:bg-white transition-all text-black"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </div>
  )
}