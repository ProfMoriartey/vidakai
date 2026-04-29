"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function RotatingText() {
  const phrases = [
    "Web Engineering.",
    "Cloud Architecture.",
    "Interactive Design.",
    "Digital Strategy."
  ]
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [phrases.length])

  return (
    // 1. Height is 2.4em on mobile (2 lines) and 1.2em on desktop (1 line). 
    // 2. Width is full on mobile to allow wrapping, and 14em on desktop.
    <span className="relative inline-flex flex-col overflow-hidden h-[2.4em] md:h-[1.2em] w-full md:w-[14em] align-bottom text-gray-500">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          // 3. Removed strict whitespace-nowrap. Text wraps on mobile, stays single-line on desktop (md:whitespace-nowrap).
          // 4. Added leading-[1.2em] to ensure line-height math perfectly matches the container height.
          className="absolute left-0 top-0 w-full whitespace-normal md:whitespace-nowrap leading-[1.2em]"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}