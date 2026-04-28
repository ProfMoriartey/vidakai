"use client"

import { useCursor } from "../context/CursorContext"

const technologies = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
  "Three.js",
  "Vercel Postgres",
  "Drizzle ORM",
  "Clerk",
  "Uploadthing"
]

export default function Marquee() {
  const { setCursorType, setCursorText } = useCursor()

  const handleMouseEnter = () => {
    setCursorType("project")
    setCursorText("Tech")
  }

  const handleMouseLeave = () => {
    setCursorType("default")
    setCursorText("")
  }

  return (
    <section 
      className="py-12 bg-black text-white overflow-hidden relative cursor-none"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="flex w-[200%] animate-marquee">
        {/* Render the list twice for a seamless loop */}
        {[...technologies, ...technologies].map((tech, index) => (
          <div 
            key={index} 
            className="w-1/2 shrink-0 flex items-center justify-center sm:w-1/4 md:w-1/6 lg:w-[11.11%]"
          >
            <span className="text-xl md:text-3xl font-medium tracking-tighter whitespace-nowrap opacity-80 hover:opacity-100 transition-opacity duration-300">
              {tech}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}