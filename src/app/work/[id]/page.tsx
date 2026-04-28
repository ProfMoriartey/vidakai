import { notFound } from "next/navigation"
import Link from "next/link"
import { projects } from "~/data/projects"
import ProjectGallery from "~/components/ProjectGallery"

export default async function ProjectPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // Await the params object
  const { id } = await params
  
  const project = projects.find((p) => p.id === id)

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white text-black pt-32 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto pb-32">
      <Link 
        href="/#work" 
        className="inline-block mb-12 text-sm font-medium text-gray-500 hover:text-black transition-colors"
      >
        Back to Home
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8">
            {project.title}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            {project.content}
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col gap-8">
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span key={tag} className="text-sm font-medium px-4 py-2 bg-gray-50 border border-gray-100 rounded-full text-black">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Live Link</h3>
            <a 
              href={project.link}
              target="_blank"
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full text-sm font-bold tracking-tight hover:bg-gray-800 transition-colors w-full"
            >
              Visit Website
            </a>
          </div>
        </div>
      </div>

      <ProjectGallery 
        desktopImages={project.desktopImages} 
        mobileImages={project.mobileImages} 
      />
    </main>
  )
}