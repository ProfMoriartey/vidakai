"use client";

import Link from "next/link";
import { projects } from "../../data/projects";
import RevealText from "../../components/RevealText";

export default function WorkArchive() {
  return (
    <main className="mx-auto min-h-screen max-w-7xl px-4 pt-32 pb-32 text-black sm:px-6 lg:px-8">
      <div className="mb-24">
        <Link
          href="/#work"
          className="mb-8 inline-block text-sm font-bold tracking-widest text-gray-400 uppercase transition-colors hover:text-black"
        >
          Back to Home
        </Link>

        <RevealText>
          <h1 className="mb-6 text-5xl font-bold tracking-tighter md:text-8xl">
            Project Archive.
          </h1>
        </RevealText>
      </div>

      <div className="flex flex-col border-t border-gray-200">
        <div className="hidden grid-cols-12 gap-4 border-b border-gray-200 py-4 text-xs font-bold tracking-widest text-gray-400 uppercase md:grid">
          <div className="col-span-4">Project</div>
          <div className="col-span-5">Tech Stack</div>
          <div className="col-span-3 text-right">Link</div>
        </div>

        {projects.map((project) => (
          <Link
            href={`/work/${project.id}`}
            key={project.id}
            className="group -mx-4 grid grid-cols-1 items-center gap-4 border-b border-gray-200 px-4 py-8 transition-colors hover:bg-gray-50 md:mx-0 md:grid-cols-12 md:px-0"
          >
            <div className="col-span-4">
              <h3 className="text-2xl font-bold transition-transform duration-300 group-hover:translate-x-2">
                {project.title}
              </h3>
            </div>

            <div className="col-span-5 mt-4 flex flex-wrap gap-2 md:mt-0">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-gray-100 px-2 py-1 text-xs font-medium text-gray-600"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="col-span-3 mt-4 opacity-50 transition-opacity group-hover:opacity-100 md:mt-0 md:text-right">
              <span className="inline-block -rotate-45 text-xl transition-transform duration-300 group-hover:rotate-0">
                →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
