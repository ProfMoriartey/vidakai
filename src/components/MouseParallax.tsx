"use client"

import { useEffect } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

interface MouseParallaxProps {
  children: React.ReactNode
  factor?: number // Higher number = more movement
  className?: string
}

export default function MouseParallax({ children, factor = 0.05, className = "" }: MouseParallaxProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springX = useSpring(x, { stiffness: 100, damping: 30 })
  const springY = useSpring(y, { stiffness: 100, damping: 30 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate mouse position relative to the center of the screen
      const centerX = window.innerWidth / 2
      const centerY = window.innerHeight / 2
      
      const moveX = (e.clientX - centerX) * factor
      const moveY = (e.clientY - centerY) * factor
      
      x.set(moveX)
      y.set(moveY)
    }

    // Only apply on devices with hover capabilities
    if (window.matchMedia("(any-hover: hover)").matches) {
      window.addEventListener("mousemove", handleMouseMove)
    }

    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [x, y, factor])

  return (
    <motion.div style={{ x: springX, y: springY }} className={className}>
      {children}
    </motion.div>
  )
}