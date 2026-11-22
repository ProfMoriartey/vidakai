import Image from "next/image";
import Tilt from "./Tilt";

/**
 * Exploded axonometric of a website: frame, layout grid, content, live screenshot.
 * Pure CSS 3D. Turns slowly on desktop, folds as it scrolls away, still on phones
 * and under reduced motion.
 */
export default function ExplodedView({ image, label }: { image: string; label: string }) {
  const callouts = [
    { text: `Live site: ${label}`, top: "8%" },
    { text: "Your content", top: "30%" },
    { text: "Layout grid", top: "52%" },
    { text: "Frame", top: "74%" },
  ];

  return (
    <figure className="relative mx-auto mt-10 aspect-[4/3] w-full max-w-[520px] md:mt-0 md:aspect-[4/5]" aria-label={`Exploded drawing of a website, with ${label} on top`}>
      <Tilt className="explode absolute inset-0 flex items-center justify-center">
        <div className="explode-turn">
          <div className="explode-stage h-[140px] w-[210px] sm:h-[180px] sm:w-[270px] lg:h-[200px] lg:w-[300px]">
            {/* Frame */}
            <div className="explode-layer border border-line-strong bg-ink-raised" style={{ "--z": "0px" } as React.CSSProperties}>
              <div className="flex h-5 items-center gap-1.5 border-b border-line px-2">
                <span className="size-1.5 rounded-full bg-fg-3/60" />
                <span className="size-1.5 rounded-full bg-fg-3/60" />
                <span className="size-1.5 rounded-full bg-fg-3/60" />
              </div>
            </div>
            {/* Layout grid */}
            <div className="explode-layer" style={{ "--z": "70px" } as React.CSSProperties}>
              <svg viewBox="0 0 330 220" className="size-full" preserveAspectRatio="none" aria-hidden="true">
                {Array.from({ length: 13 }, (_, i) => (
                  <line key={i} x1={12 + i * 25.5} y1="10" x2={12 + i * 25.5} y2="210" stroke="currentColor" strokeWidth="0.75" className="text-line-strong" />
                ))}
                <rect x="0.5" y="0.5" width="329" height="219" fill="none" stroke="currentColor" className="text-line-strong" />
              </svg>
            </div>
            {/* Content blocks */}
            <div className="explode-layer" style={{ "--z": "140px" } as React.CSSProperties}>
              <svg viewBox="0 0 330 220" className="size-full" preserveAspectRatio="none" aria-hidden="true">
                <g fill="none" stroke="currentColor" strokeWidth="1" className="text-fg-2">
                  <rect x="24" y="34" width="140" height="14" pathLength="1" className="draw-in" />
                  <rect x="24" y="56" width="110" height="8" pathLength="1" className="draw-in" />
                  <rect x="24" y="74" width="60" height="16" pathLength="1" className="draw-in" />
                  <rect x="190" y="30" width="116" height="80" pathLength="1" className="draw-in" />
                  <rect x="24" y="130" width="86" height="64" pathLength="1" className="draw-in" />
                  <rect x="122" y="130" width="86" height="64" pathLength="1" className="draw-in" />
                  <rect x="220" y="130" width="86" height="64" pathLength="1" className="draw-in" />
                </g>
                <rect x="24" y="74" width="60" height="16" className="fill-redline" opacity="0.9" />
              </svg>
            </div>
            {/* Live screenshot */}
            <div className="explode-layer overflow-hidden border border-line-strong bg-ink" style={{ "--z": "210px" } as React.CSSProperties}>
              <Image src={image} alt="" fill sizes="300px" className="object-cover object-top" />
            </div>
          </div>
        </div>
      </Tilt>
      <figcaption className="pointer-events-none absolute inset-y-[12%] end-0 hidden w-36 xl:block">
        {callouts.map((c) => (
          <span key={c.text} className="absolute end-0 flex items-center gap-2 text-[13px] text-fg-2" style={{ top: c.top }}>
            <span aria-hidden="true" className="h-px w-8 bg-redline" />
            {c.text}
          </span>
        ))}
      </figcaption>
    </figure>
  );
}
