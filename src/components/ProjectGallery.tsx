"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

type View = "desktop" | "mobile";

// Frame shapes per view. The mobile frame is capped at this width.
const RATIO: Record<View, number> = { desktop: 18 / 34, mobile: 25 / 12 };
const MOBILE_MAX = 320;
const SIZES: Record<View, string> = { desktop: "(max-width: 1024px) 100vw, 640px", mobile: "320px" };

export default function ProjectGallery({
  title,
  desktopImages,
  mobileImages,
}: {
  title: string;
  desktopImages: string[];
  mobileImages: string[];
}) {
  const [view, setView] = useState<View>("desktop");
  const [index, setIndex] = useState(0);
  // The image being replaced, kept on screen while it fades out.
  const [leaving, setLeaving] = useState<{ src: string; view: View } | null>(null);
  // Starts as the first image so the page's main image is never hidden behind a fade.
  const [loaded, setLoaded] = useState<string | null>(desktopImages[0] ?? null);
  // True only while the frame resizes after a view switch, so window resizes don't lag.
  const [morphing, setMorphing] = useState(false);
  const [stageWidth, setStageWidth] = useState<number | null>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = stageRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => entry && setStageWidth(entry.contentRect.width));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const images = view === "desktop" ? desktopImages : mobileImages;
  const shown = Math.min(index, images.length - 1);
  const current = images[shown];

  if (!current) {
    return <div className="sheet-frame flex min-h-80 items-center justify-center bg-ink-raised text-fg-3">No screenshots yet</div>;
  }

  const show = (nextView: View, nextIndex: number) => {
    const list = nextView === "desktop" ? desktopImages : mobileImages;
    const next = list[Math.min(nextIndex, list.length - 1)];
    if (!next || next === current) return;
    setLeaving({ src: current, view });
    if (nextView !== view) setMorphing(true);
    setView(nextView);
    setIndex(nextIndex);
  };

  const go = (d: number) => show(view, (shown + d + images.length) % images.length);

  const frameWidth = stageWidth === null ? null : view === "desktop" ? stageWidth : Math.min(MOBILE_MAX, stageWidth);
  const frameStyle = frameWidth === null ? undefined : { width: frameWidth, height: frameWidth * RATIO[view] };

  const tab = (v: View) =>
    `min-h-10 px-4 text-sm transition-colors ${view === v ? "bg-fg text-ink" : "text-fg-2 hover:text-fg"}`;

  return (
    <div className="flex min-w-0 flex-col gap-4">
      <div className="flex items-center justify-between">
        <div role="group" aria-label="Screenshot size" className="flex border border-line-strong p-0.5">
          {(["desktop", "mobile"] as const).map((v) => (
            <button key={v} type="button" aria-pressed={view === v} className={tab(v)} onClick={() => show(v, shown)}>
              {v === "desktop" ? "Desktop" : "Mobile"}
            </button>
          ))}
        </div>
        <p className="text-sm text-fg-3 tabular-nums" aria-live="polite">
          {shown + 1} / {images.length}
        </p>
      </div>

      <div className="sheet-frame relative flex items-center justify-center bg-ink-raised p-4 md:p-8">
        <div ref={stageRef} className="flex w-full min-w-0 justify-center">
          <div
            style={frameStyle}
            onTransitionEnd={(e) => e.target === e.currentTarget && setMorphing(false)}
            className={`relative overflow-hidden border border-line bg-ink ${
              morphing ? "transition-[width,height] duration-500 ease-out-expo" : ""
            } ${frameStyle ? "" : view === "desktop" ? "aspect-[34/18] w-full" : "aspect-[12/25] w-full max-w-xs"}`}
          >
            {leaving && leaving.src !== current && (
              <Image
                key={`leaving-${leaving.src}`}
                src={leaving.src}
                alt=""
                aria-hidden="true"
                fill
                sizes={SIZES[leaving.view]}
                className="gallery-fade-out object-cover object-top"
                onAnimationEnd={() => setLeaving(null)}
              />
            )}
            <Image
              key={current}
              src={current}
              alt={`${title}, ${view} screenshot ${shown + 1} of ${images.length}`}
              fill
              sizes={SIZES[view]}
              className={`object-cover object-top transition-opacity duration-300 ${loaded === current ? "opacity-100" : "opacity-0"}`}
              priority={shown === 0 && view === "desktop"}
              onLoad={() => setLoaded(current)}
            />
          </div>
        </div>
        {images.length > 1 && (
          <div className="pointer-events-none absolute inset-x-2 flex justify-between md:inset-x-3">
            {[-1, 1].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => go(d)}
                aria-label={d < 0 ? "Previous screenshot" : "Next screenshot"}
                className="pointer-events-auto flex size-11 items-center justify-center border border-line-strong bg-ink/90 text-fg transition-colors hover:border-fg-2"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="rtl:-scale-x-100">
                  <path d={d < 0 ? "M12.5 4.5L7 10l5.5 5.5" : "M7.5 4.5L13 10l-5.5 5.5"} />
                </svg>
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
