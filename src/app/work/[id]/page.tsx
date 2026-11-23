import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "~/data/projects";
import ProjectGallery from "~/components/ProjectGallery";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const p = projects.find((x) => x.id === id);
  if (!p) return {};
  return {
    title: p.title,
    description: p.summary,
    alternates: { canonical: `/work/${p.id}` },
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) notFound();

  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-16 sm:px-6 lg:px-8">
      <div className="border-s border-line ps-5 pt-14 pb-24 sm:ps-8 md:pt-20 lg:ps-12">
        <nav aria-label="Back" className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-fg-3">
          <Link href="/work" className="inline-flex min-h-11 items-center gap-1.5 hover:text-fg">
            <span aria-hidden="true" className="inline-block rtl:rotate-180">←</span> All projects
          </Link>
          <Link href="/" className="inline-flex min-h-11 items-center hover:text-fg">
            Home
          </Link>
        </nav>

        <div className="mt-6 grid items-start gap-12 lg:grid-cols-12">
          <div className="min-w-0 lg:col-span-7">
            <ProjectGallery title={project.title} desktopImages={project.desktopImages} mobileImages={project.mobileImages} />
          </div>

          <div className="flex flex-col gap-10 lg:sticky lg:top-24 lg:col-span-5">
            <div>
              <p className="text-sm text-fg-3">{project.sector}</p>
              <h1 className="font-display-wide mt-2 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.04] tracking-[-0.02em]">
                {project.title}
              </h1>
              <div className="mt-6 space-y-4 text-lg text-fg-2">
                {project.content.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>
            </div>

            <div className="border-t border-line pt-6">
              <h2 className="text-sm text-fg-3">Built with</h2>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <li key={t} className="border border-line px-3 py-1 text-sm text-fg-2">
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit the live site
              <span className="sr-only"> (opens in a new tab)</span>
              <span aria-hidden="true" className="rtl:-scale-x-100">↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
