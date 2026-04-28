"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface ProjectGalleryProps {
  desktopImages: string[]
  mobileImages: string[]
}

export default function ProjectGallery({ desktopImages, mobileImages }: ProjectGalleryProps) {
  const [view, setView] = useState<"desktop" | "mobile">("desktop")

  const images = view === "desktop" ? desktopImages : mobileImages

  return (
    <div className="mt-16">
      <div className="flex justify-center gap-4 mb-8">
        <button
          onClick={() => setView("desktop")}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${
            view === "desktop" ? "bg-black text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          Desktop
        </button>
        <button
          onClick={() => setView("mobile")}
          className={`px-6 py-2 rounded-full text-sm font-bold transition-colors ${
            view === "mobile" ? "bg-black text-white" : "bg-gray-100 text-gray-500 hover:bg-gray-200"
          }`}
        >
          Mobile
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={view}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className={`grid gap-8 ${
            view === "desktop" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-3"
          }`}
        >
          {images.map((src, index) => (
            <div 
              key={`${view}-${index}`} 
              className={`bg-gray-100 rounded-2xl overflow-hidden ${
                view === "desktop" ? "aspect-video" : "aspect-9/16"
              }`}
            >
              {/* Replace the div below with a Next.js Image component when you have real links */}
              <div className="w-full h-full flex items-center justify-center text-gray-400 font-medium">
                {view === "desktop" ? "Desktop Image" : "Mobile Image"} {index + 1}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  )
}