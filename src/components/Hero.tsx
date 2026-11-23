import Link from "next/link";
import ExplodedView from "./ExplodedView";
import { projects } from "~/data/projects";
import { steps, timelines } from "~/data/site";

export default function Hero() {
  const lead = projects.find((p) => p.id === "menupedia") ?? projects[0]!;
  const template = timelines[0];

  return (
    <section
      aria-labelledby="hero-title"
      className="relative overflow-x-clip pt-16"
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="border-line grid items-center gap-10 border-s ps-5 pt-14 pb-12 sm:ps-8 md:pt-20 lg:grid-cols-12 lg:ps-12">
          <div className="lg:col-span-7">
            <h1
              id="hero-title"
              className="font-display-wide text-[clamp(2.375rem,5vw,4.25rem)] leading-[1.02] tracking-[-0.02em]"
            >
              Websites for your business, designed, built and launched
            </h1>
            <p className="text-fg-2 mt-6 max-w-[52ch] text-lg md:text-xl">
              For a wide range of businesses and organisations. Start from a
              ready-made template or get a site built from scratch, with design,
              build, hosting and launch handled in one place.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link href="/#contact" className="btn btn-primary">
                Start your website
              </Link>
              <Link href="/#work" className="btn btn-secondary">
                See the work
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <ExplodedView image={lead.desktopImages[0]!} label={lead.title} />
          </div>
        </div>

        {/* Dimension line: brief to launch */}
        <div className="border-line border-s ps-5 pb-6 sm:ps-8 lg:ps-12">
          <div className="relative pt-8">
            <p className="bg-ink text-redline absolute start-1/2 top-0 -translate-x-1/2 px-3 text-sm whitespace-nowrap rtl:translate-x-1/2">
              {template.label}: {template.value}
            </p>
            <div className="bg-line-strong relative h-px" aria-hidden="true">
              <span className="bg-redline absolute start-0 -top-2 h-4 w-px" />
              <span className="bg-redline absolute end-0 -top-2 h-4 w-px" />
            </div>
            <ol className="text-fg-3 mt-3 grid grid-cols-2 gap-y-2 text-sm sm:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className={i === 3 ? "sm:text-end" : ""}>
                  <span className="text-fg font-medium">{s.title}</span> ·{" "}
                  {s.duration}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
