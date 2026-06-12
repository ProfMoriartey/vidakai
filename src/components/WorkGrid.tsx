"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "../data/projects";
import RevealText from "./RevealText";

const RandomTags = ({ tags }: { tags: string[] }) => {
  const [displayTags, setDisplayTags] = useState<string[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const shuffled = [...tags].sort(() => 0.5 - Math.random());
    setDisplayTags(shuffled.slice(0, 3));
    setIsMounted(true);
  }, [tags]);

  const tagsToShow = isMounted ? displayTags : tags.slice(0, 3);

  return (
    <div className="mb-4 flex flex-wrap gap-2">
      {tagsToShow.map((tag) => (
        <span
          key={tag}
          className="rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-black shadow-sm"
        >
          {tag}
        </span>
      ))}
    </div>
  );
};

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
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-gray-50 shadow-sm transition-shadow hover:shadow-md"
              initial="initial"
              whileHover="hover"
            >
              <div
                className={`absolute inset-0 z-0 ${project.color} opacity-100 transition-opacity duration-500 ease-out md:opacity-0 md:group-hover:opacity-100`}
              />

              <div className="relative z-10 aspect-video w-full overflow-hidden bg-gray-200">
                {project.desktopImages?.[0] && (
                  <Image
                    src={project.desktopImages[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                )}
              </div>

              <div className="relative z-10 flex flex-col p-6 md:p-8">
                <RandomTags tags={project.tags} />

                <h3 className="text-2xl font-bold text-white transition-colors duration-300 md:text-black md:group-hover:text-white">
                  {project.title}
                </h3>

                <p className="mt-2 text-sm text-white/90 transition-colors duration-300 md:text-gray-600 md:group-hover:text-white/90">
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
