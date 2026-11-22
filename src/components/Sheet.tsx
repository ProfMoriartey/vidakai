import { site } from "~/data/site";

/**
 * One section of the drawing set. The continuous start-side line links every
 * sheet; the title block sits at the end corner, never above the heading.
 */
export default function Sheet({
  id,
  number,
  title,
  intro,
  children,
}: {
  id: string;
  number: string;
  title: string;
  intro?: React.ReactNode;
  children: React.ReactNode;
}) {
  const headingId = `${id}-title`;
  return (
    <section id={id} aria-labelledby={headingId} className="relative">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative border-s border-line py-16 ps-5 sm:ps-8 md:py-24 lg:ps-12">
          {/* sheet start tick on the continuous line */}
          <span aria-hidden="true" className="absolute -start-[5px] top-16 size-[9px] rounded-full bg-redline md:top-24" />
          <div className="mb-10 max-w-3xl md:mb-14">
            <h2 id={headingId} className="font-display-wide text-[clamp(1.875rem,3.5vw,3rem)] leading-[1.08] tracking-[-0.015em]">
              {title}
            </h2>
            {intro && <div className="mt-4 max-w-[62ch] text-lg text-fg-2">{intro}</div>}
          </div>
          {children}
          <TitleBlock number={number} title={title} />
        </div>
      </div>
    </section>
  );
}

export function TitleBlock({ number, title }: { number: string; title: string }) {
  return (
    <dl className="mt-12 ms-auto grid w-full max-w-sm grid-cols-[auto_1fr] border border-line text-[13px] leading-snug text-fg-3 sm:w-auto">
      <dt className="border-e border-line px-3 py-2">Sheet</dt>
      <dd className="px-3 py-2 tabular-nums text-fg-2">
        {number} · {title}
      </dd>
      <dt className="border-e border-t border-line px-3 py-2">Drawn and built by</dt>
      <dd className="border-t border-line px-3 py-2 text-fg-2">{site.owner}</dd>
    </dl>
  );
}
