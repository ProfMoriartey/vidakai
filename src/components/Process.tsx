import Sheet from "./Sheet";
import { included, steps, timelines } from "~/data/site";

/** The four steps. Rendered inside the Getting started sheet, so step titles are h4. */
export function Process() {
  return (
    <section id="process" aria-labelledby="process-title" className="scroll-mt-24">
      <h3 id="process-title" className="font-display-wide text-[clamp(1.5rem,2.5vw,2rem)] leading-tight">
        How it works
      </h3>
      <p className="mt-3 mb-8 max-w-[62ch] text-fg-2">Four steps, with one point of contact from brief to launch.</p>
      <ol className="grid gap-px border border-line bg-line md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="bg-ink p-6">
            <div className="flex items-baseline justify-between gap-4">
              <h4 className="font-display-wide text-xl">
                <span className="me-2 text-base text-redline tabular-nums">{i + 1}</span>
                {s.title}
              </h4>
              <span className="text-[13px] text-fg-3">{s.duration}</span>
            </div>
            <p className="mt-4 text-[15px] text-fg-2">{s.body}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 text-[15px] text-fg-3">Custom builds take longer; the plan is agreed in the brief.</p>
    </section>
  );
}

export function Included() {
  return (
    <Sheet id="included" title="What’s included">
      <div className="grid gap-12 md:grid-cols-12">
        <ul className="divide-y divide-line border-y border-line md:col-span-7">
          {included.map((item) => (
            <li key={item} className="flex gap-4 py-4">
              <svg width="18" height="18" viewBox="0 0 18 18" className="mt-1 shrink-0 text-redline" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                <path d="M3 9.5l4 4 8-9" />
              </svg>
              <span className="text-fg-2">{item}</span>
            </li>
          ))}
        </ul>
        <dl className="md:col-span-5">
          {timelines.map((t) => (
            <div key={t.label} className="border-b border-line py-4 first:border-t">
              <dt className="text-sm text-fg-3">{t.label}</dt>
              <dd className="font-display-wide mt-1 text-2xl">{t.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </Sheet>
  );
}
