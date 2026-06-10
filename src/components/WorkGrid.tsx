"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import RevealText from "./RevealText";

export default function WorkGrid() {
  const featuredProjects = projects
    .filter((project) => project.display)
    .slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8" id="work">
      <RevealText>
        <h2 className="mb-12 text-3xl font-bold tracking-tighter md:text-5xl">
          Selected Work
        </h2>
      </RevealText>

      <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <Link href={`/work/${project.id}`} key={project.id} className="block">
            <motion.div
              className="group relative flex h-[400px] flex-col justify-end overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 p-8"
              initial="initial"
              whileHover="hover"
            >
              <div
                className={`absolute inset-0 z-0 ${project.color} opacity-100 transition-opacity duration-500 ease-out md:opacity-0 md:group-hover:opacity-100`}
              />

              <div className="relative z-10 translate-y-0 transition-transform duration-500 ease-out md:translate-y-4 md:group-hover:translate-y-0">
                <div className="mb-4 flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-white transition-colors duration-300 md:text-black md:group-hover:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 block max-w-sm text-sm text-white/90 transition-colors duration-300 md:hidden md:text-gray-600 md:group-hover:block">
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
          className="inline-flex items-center justify-center rounded-full border border-gray-200 px-8 py-4 text-sm font-bold tracking-tight transition-all duration-300 hover:border-black hover:bg-black hover:text-white"
        >
          View Full Archive
        </Link>
      </div>
    </section>
  );
}
