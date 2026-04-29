"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { projects } from "../data/projects"
import { useCursor } from "../context/CursorContext"
import RevealText from "./RevealText"

export default function WorkGrid() {
  const { setCursorType, setCursorText } = useCursor()

  const featuredProjects = projects.filter(project => project.display).slice(0, 3)

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" id="work">
      <RevealText>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12">
          Selected Work
        </h2>
      </RevealText>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {featuredProjects.map((project) => (
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
              <div 
                className={`absolute inset-0 z-0 ${project.color} opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 ease-out`} 
              />

              <div className="relative z-10 translate-y-0 md:translate-y-4 md:group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 bg-white/90 rounded-full text-black">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white md:text-black md:group-hover:text-white transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/90 md:text-gray-600 mt-2 text-sm max-w-sm block md:hidden md:group-hover:block transition-colors duration-300">
                  {project.description}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>

      <div className="flex justify-center">
        <Link 
          href="/work"
          className="inline-flex items-center justify-center px-8 py-4 border border-gray-200 rounded-full text-sm font-bold tracking-tight hover:border-black hover:bg-black hover:text-white transition-all duration-300"
        >
          View Full Archive
        </Link>
      </div>
    </section>
  )
}