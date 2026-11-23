/**
 * One section of the drawing set. The continuous start-side line links every
 * sheet, and each sheet starts with a redline dot on it.
 */
export default function Sheet({
  id,
  title,
  intro,
  children,
}: {
  id: string;
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
        </div>
      </div>
    </section>
  );
}
