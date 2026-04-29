"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => setIsLoading(false), 500)
          return 100
        }
        return prev + Math.floor(Math.random() * 15) + 5
      })
    }, 150)

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="fixed inset-0 z-999 flex flex-col items-center justify-center bg-black text-white cursor-none"
        >
          <div className="text-sm font-medium tracking-widest uppercase mb-4 opacity-70">
            Studio
          </div>
          
          <div className="text-7xl md:text-9xl font-bold tracking-tighter tabular-nums">
            {Math.min(progress, 100)}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}