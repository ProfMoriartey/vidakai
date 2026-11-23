import Image from "next/image";
import Tilt from "./Tilt";
import { steps } from "~/data/site";

/**
 * Exploded drawing of a website being made, one layer per process step:
 * Brief (notes and assets), Design (grid and wireframe), Build (filling in), Launch (live site).
 * Each label is pinned to its layer's outer corner and turned back to face the viewer,
 * so it stays on its layer through the tilt and the scroll fold.
 */
export default function ExplodedView({ image, label }: { image: string; label: string }) {
  const [brief, design, build, launch] = steps;

  return (
    <figure className="relative mx-auto mt-10 aspect-[4/3] w-full max-w-[520px] lg:mt-0 lg:aspect-[4/5]">
      <Tilt className="explode absolute inset-0 flex items-center justify-center pe-[28%] sm:pe-[24%] lg:pe-[30%] xl:pe-[24%]">
        <div className="explode-assemble">
          <div className="explode-stage h-[140px] w-[210px] sm:h-[180px] sm:w-[270px] lg:h-[160px] lg:w-[240px] xl:h-[200px] xl:w-[300px]">
            <Layer z={0} step={1} title={brief.title}>
              <div className="size-full border border-line-strong bg-ink-raised">
                <BriefDrawing />
              </div>
            </Layer>
            <Layer z={70} step={2} title={design.title}>
              <div className="size-full border border-line-strong bg-ink/70">
                <DesignDrawing />
              </div>
            </Layer>
            <Layer z={140} step={3} title={build.title}>
              <div className="size-full border border-line-strong bg-ink">
                <BuildDrawing />
              </div>
            </Layer>
            <Layer z={210} step={4} title={launch.title}>
              <div className="flex size-full flex-col overflow-hidden border border-line-strong bg-ink">
                <div className="flex h-3.5 shrink-0 items-center gap-1 border-b border-line bg-ink-raised px-1.5 sm:h-4">
                  <span className="size-1 rounded-full bg-fg-3/70" />
                  <span className="size-1 rounded-full bg-fg-3/70" />
                  <span className="size-1 rounded-full bg-fg-3/70" />
                  <span className="ms-1.5 h-1.5 w-1/3 rounded-full bg-line-strong" />
                </div>
                <div className="relative grow">
                  <Image src={image} alt="" fill sizes="300px" className="object-cover object-top" />
                </div>
              </div>
            </Layer>
          </div>
        </div>
      </Tilt>
      <figcaption className="sr-only">
        A website drawn as four layers, one for each step: brief, design, build and launch, with {label} as the live
        site on top.
      </figcaption>
    </figure>
  );
}

function Layer({
  z,
  step,
  title,
  children,
}: {
  z: number;
  step: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="explode-layer" style={{ "--z": `${z}px` } as React.CSSProperties}>
      {children}
      <span className="explode-pin" aria-hidden="true">
        <span className="absolute start-0 top-0 flex -translate-y-1/2 items-center gap-2 text-[12px] whitespace-nowrap sm:text-[13px]">
          <span className="h-px w-5 bg-line-strong sm:w-8" />
          <span className="text-redline tabular-nums">{step}</span>
          <span className="font-medium text-fg">{title}</span>
        </span>
      </span>
    </div>
  );
}

/** Notes, a logo, photos and a checklist: what arrives at the brief. */
function BriefDrawing() {
  return (
    <svg viewBox="0 0 300 200" className="size-full" preserveAspectRatio="none" aria-hidden="true">
      <g fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" className="text-fg-3">
        <circle cx="38" cy="38" r="16" />
        <path d="M30 42l6-9 6 9" />
        <path d="M70 30q8-4 16 0t16 0t16 0t16 0t16 0" />
        <path d="M70 44q8-4 16 0t16 0t16 0t16 0" />
        <path d="M70 58q8-4 16 0t16 0t16 0" />
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(${196 + (i % 2) * 48} ${22 + Math.floor(i / 2) * 44})`}>
            <rect x="0" y="0" width="40" height="34" />
            <path d="M4 28l10-12 8 8 6-5 8 9" />
          </g>
        ))}
        {[0, 1, 2].map((i) => (
          <g key={i} transform={`translate(22 ${104 + i * 26})`}>
            <rect x="0" y="0" width="12" height="12" />
            {i < 2 && <path d="M3 6l2.5 3 4-6" />}
            <path d={`M22 6h${[120, 96, 140][i]}`} />
          </g>
        ))}
      </g>
    </svg>
  );
}

/** Column grid and an outlined wireframe of the page. */
function DesignDrawing() {
  return (
    <svg viewBox="0 0 300 200" className="size-full" preserveAspectRatio="none" aria-hidden="true">
      <g stroke="currentColor" strokeWidth="0.75" className="text-line-strong">
        {Array.from({ length: 13 }, (_, i) => (
          <line key={i} x1={11 + i * 23.2} y1="8" x2={11 + i * 23.2} y2="192" />
        ))}
      </g>
      <g fill="none" stroke="currentColor" strokeWidth="1" className="text-fg-2">
        <Wireframe drawIn />
      </g>
    </svg>
  );
}

/** The same page, part filled in: the last card is still an outline. */
function BuildDrawing() {
  return (
    <svg viewBox="0 0 300 200" className="size-full" preserveAspectRatio="none" aria-hidden="true">
      <rect x="22" y="31" width="127" height="13" className="fill-fg/85" />
      <rect x="22" y="51" width="100" height="7" className="fill-fg-3" />
      <rect x="22" y="67" width="55" height="15" className="fill-redline" />
      <rect x="173" y="27" width="105" height="73" className="fill-ink-sheet" />
      <path d="M181 92l26-30 18 18 14-11 31 23" fill="none" stroke="currentColor" strokeWidth="1.25" className="text-fg-3" />
      {[22, 111].map((x) => (
        <g key={x}>
          <rect x={x} y="118" width="78" height="58" className="fill-ink-sheet" />
          <rect x={x + 8} y="152" width="50" height="5" className="fill-fg-3" />
          <rect x={x + 8} y="162" width="36" height="5" className="fill-fg-3/60" />
        </g>
      ))}
      <rect x="200" y="118" width="78" height="58" fill="none" stroke="currentColor" strokeDasharray="4 3" className="text-fg-3" />
    </svg>
  );
}

function Wireframe({ drawIn = false }: { drawIn?: boolean }) {
  const cls = drawIn ? "draw-in" : undefined;
  const boxes = [
    [22, 31, 127, 13],
    [22, 51, 100, 7],
    [22, 67, 55, 15],
    [173, 27, 105, 73],
    [22, 118, 78, 58],
    [111, 118, 78, 58],
    [200, 118, 78, 58],
  ] as const;
  return (
    <>
      {boxes.map(([x, y, w, h]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width={w} height={h} pathLength="1" className={cls} />
      ))}
    </>
  );
}
