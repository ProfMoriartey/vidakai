"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useCursor } from "../context/CursorContext"

export default function MagneticElement({
  children,
  className = "",
  cursorText = "Click"
}: {
  children: React.ReactNode
  className?: string
  cursorText?: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { setCursorType, setCursorText } = useCursor()
  
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 })
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return
    const { clientX, clientY } = e
    const { height, width, left, top } = ref.current.getBoundingClientRect()
    const middleX = clientX - (left + width / 2)
    const middleY = clientY - (top + height / 2)
    
    x.set(middleX * 0.3)
    y.set(middleY * 0.3)
  }

  const handleMouseEnter = () => {
    setCursorType("pointer")
    setCursorText(cursorText)
  }

  const handleMouseLeave = () => {
    setCursorType("default")
    setCursorText("")
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`relative inline-flex items-center justify-center cursor-none ${className}`}
    >
      {children}
    </motion.div>
  )
}