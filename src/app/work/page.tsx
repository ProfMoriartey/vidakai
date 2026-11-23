import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "~/data/projects";
import WorkCard from "~/components/WorkCard";

export const metadata: Metadata = {
  title: "Work",
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
          Work
        </h1>

        <p className="mt-6 max-w-[62ch] text-lg text-fg-2">
          Live sites for real businesses and organisations, plus demos and tools.
        </p>

        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <li key={p.id}>
              <WorkCard project={p} headingLevel="h2" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
