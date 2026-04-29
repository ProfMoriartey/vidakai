import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "../../../data/projects"
import ProjectGallery from "../../../components/ProjectGallery"

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  const { id } = await params
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white text-black pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pb-32">
      <Link 
        href="/#work" 
        className="inline-block mb-12 text-sm font-bold tracking-widest uppercase text-gray-400 hover:text-black transition-colors"
      >
        ← Back to Work
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Column: The Interactive Gallery */}
        <div className="lg:col-span-7 w-full">
          <ProjectGallery 
            desktopImages={project.desktopImages} 
            mobileImages={project.mobileImages} 
          />
        </div>

        {/* Right Column: Project Context (Sticky) */}
        <div className="lg:col-span-5 flex flex-col gap-10 lg:sticky lg:top-32">
          
          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">
              {project.title}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {project.content}
            </p>
          </div>

          {/* Tech Stack Segment */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-sm font-medium px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-black">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="pt-8 border-t border-gray-100">
            <h3 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
              Live Project
            </h3>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full text-sm font-bold tracking-tight hover:bg-gray-800 transition-colors w-full group"
            >
              Visit Website 
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>

        </div>
      </div>
    </main>
  )
}