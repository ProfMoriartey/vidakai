import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "~/data/projects";

export const metadata: Metadata = {
  title: "All projects",
  description: "Websites and web apps designed and built by Vidakai Studio.",
  alternates: { canonical: "/work" },
};

export default function WorkArchive() {
  return (
    <div className="mx-auto max-w-[1200px] px-4 pt-16 sm:px-6 lg:px-8">
      <div className="border-s border-line ps-5 pt-14 pb-24 sm:ps-8 md:pt-20 lg:ps-12">
        <Link href="/#work" className="text-sm text-fg-3 hover:text-fg">
          <span aria-hidden="true" className="inline-block rtl:rotate-180">←</span> Back to home
        </Link>
        <h1 className="font-display-wide mt-8 text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.02] tracking-[-0.02em]">
          All projects
        </h1>

        <ul className="mt-14 border-t border-line">
          {projects.map((p) => (
            <li key={p.id}>
              <Link
                href={`/work/${p.id}`}
                className="group grid gap-3 border-b border-line py-6 transition-colors hover:bg-ink-raised md:grid-cols-12 md:items-center md:gap-6 md:px-4"
              >
                <span className="md:col-span-4">
                  <span className="block text-sm text-fg-3">{p.sector}</span>
                  <span className="mt-1 block text-xl font-medium md:text-2xl">{p.title}</span>
                </span>
                <span className="text-[15px] text-fg-2 md:col-span-5">{p.summary}</span>
                <span className="flex flex-wrap gap-2 md:col-span-3 md:justify-end">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="border border-line px-2 py-0.5 text-[13px] text-fg-3">
                      {t}
                    </span>
                  ))}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
