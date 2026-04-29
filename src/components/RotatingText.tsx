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
    <span className="relative inline-flex flex-col overflow-hidden h-[1.2em] w-[400px] align-bottom text-gray-500">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
          className="absolute left-0 top-0 whitespace-nowrap"
        >
          {phrases[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}