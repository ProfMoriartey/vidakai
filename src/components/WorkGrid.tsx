"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { projects } from "../data/projects"
import { useCursor } from "../context/CursorContext"

export default function WorkGrid() {
  const { setCursorType, setCursorText } = useCursor()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="work">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12">
        Selected Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link href={`/work/${project.id}`} key={project.id} className="block">
            <motion.div
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-8 h-[400px] flex flex-col justify-end"
              initial="initial"
              whileHover="hover"
              onMouseEnter={() => {
                setCursorType("project")
                setCursorText("View")
              }}
              onMouseLeave={() => {
                setCursorType("default")
                setCursorText("")
              }}
            >
              <motion.div
                className={`absolute inset-0 z-0 ${project.color} opacity-0`}
                variants={{
                  initial: { opacity: 0, scale: 0.95 },
                  hover: { opacity: 1, scale: 1 }
                }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              />

              <div className="relative z-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-white/90 rounded-full text-black">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-black group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                
                <motion.p 
                  className="text-gray-600 mt-2 text-sm max-w-sm group-hover:text-white/90 transition-colors duration-300"
                  variants={{
                    initial: { opacity: 0, height: 0 },
                    hover: { opacity: 1, height: "auto" }
                  }}
                >
                  {project.description}
                </motion.p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  )
}