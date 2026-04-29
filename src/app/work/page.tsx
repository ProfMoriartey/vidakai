"use client"

import Link from "next/link"
import { projects } from "../../data/projects"
import { useCursor } from "../../context/CursorContext"
import RevealText from "../../components/RevealText"

export default function WorkArchive() {
  const { setCursorType, setCursorText } = useCursor()

  return (
    <main className="min-h-screen pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32 text-black">
      <div className="mb-24">
        <Link 
          href="/#work" 
          className="inline-block mb-8 text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-black transition-colors"
        >
          Back to Home
        </Link>
        
        <RevealText>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6">
            Project Archive.
          </h1>
        </RevealText>
      </div>

      <div className="flex flex-col border-t border-gray-200">
     
        <div className="hidden md:grid grid-cols-12 gap-4 py-4 text-xs font-bold uppercase tracking-widest text-gray-400 border-b border-gray-200">
          <div className="col-span-4">Project</div>
          <div className="col-span-5">Tech Stack</div>
          <div className="col-span-3 text-right">Link</div>
        </div>

 
        {projects.map((project) => (
          <Link 
            href={`/work/${project.id}`} 
            key={project.id}
            className="group grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-gray-200 hover:bg-gray-50 transition-colors px-4 -mx-4 md:px-0 md:mx-0 items-center"
            onMouseEnter={() => {
              setCursorType("project")
              setCursorText("View")
            }}
            onMouseLeave={() => {
              setCursorType("default")
              setCursorText("")
            }}
          >
            <div className="col-span-4">
              <h3 className="text-2xl font-bold group-hover:translate-x-2 transition-transform duration-300">
                {project.title}
              </h3>
            </div>

            <div className="col-span-5 flex flex-wrap gap-2 mt-4 md:mt-0">
              {project.tags.map((tag) => (
                <span key={tag} className="text-xs font-medium px-2 py-1 bg-gray-100 rounded text-gray-600">
                  {tag}
                </span>
              ))}
            </div>

            <div className="col-span-3 md:text-right mt-4 md:mt-0 opacity-50 group-hover:opacity-100 transition-opacity">
              <span className="inline-block -rotate-45 group-hover:rotate-0 transition-transform duration-300 text-xl">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  )
}