"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useCursor } from "../context/CursorContext"

export default function CustomCursor() {
  const { cursorType, cursorText } = useCursor()
  const [isVisible, setIsVisible] = useState(false)
  
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 })
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 })

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX)
      mouseY.set(e.clientY)
      if (!isVisible) setIsVisible(true)
    }
    
    window.addEventListener("mousemove", moveCursor)
    return () => window.removeEventListener("mousemove", moveCursor)
  }, [mouseX, mouseY, isVisible])

  if (!isVisible) return null

  const variants = {
    default: { 
      height: 16, 
      width: 16, 
      x: "-50%", 
      y: "-50%", 
      backgroundColor: "#000",
      border: "0px solid transparent"
    },
    pointer: { 
      height: 40, 
      width: 40, 
      x: "-50%", 
      y: "-50%", 
      backgroundColor: "#fff", 
      border: "1px solid #e5e7eb",
      color: "#000"
    },
    project: { 
      height: 80, 
      width: 80, 
      x: "-50%", 
      y: "-50%", 
      backgroundColor: "#000", 
      border: "0px solid transparent",
      color: "#fff" 
    }
  }

  return (
    <motion.div
      className="fixed top-0 left-0 z-100 pointer-events-none rounded-full flex items-center justify-center text-[10px] uppercase tracking-widest font-bold shadow-sm"
      style={{ x: springX, y: springY }}
      variants={variants}
      animate={cursorType}
      transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
    >
      {(cursorType === "project" || cursorType === "pointer") && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  )
}