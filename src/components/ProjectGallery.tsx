"use client";

import { useState } from "react";
import Image from "next/image";

type View = "desktop" | "mobile";

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
  const images = view === "desktop" ? desktopImages : mobileImages;
  const current = images[Math.min(index, images.length - 1)];

  if (!current) {
    return <div className="sheet-frame flex min-h-80 items-center justify-center bg-ink-raised text-fg-3">No screenshots yet</div>;
  }

  const go = (d: number) => setIndex((i) => (i + d + images.length) % images.length);
  const tab = (v: View) =>
    `min-h-10 px-4 text-sm transition-colors ${view === v ? "bg-fg text-ink" : "text-fg-2 hover:text-fg"}`;

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div role="group" aria-label="Screenshot size" className="flex border border-line-strong p-0.5">
          {(["desktop", "mobile"] as const).map((v) => (
            <button
              key={v}
              type="button"
              aria-pressed={view === v}
              className={tab(v)}
              onClick={() => {
                setView(v);
                setIndex(0);
              }}
            >
              {v === "desktop" ? "Desktop" : "Mobile"}
            </button>
          ))}
        </div>
        <p className="text-sm text-fg-3 tabular-nums" aria-live="polite">
          {Math.min(index, images.length - 1) + 1} / {images.length}
        </p>
      </div>

      <div className="sheet-frame relative flex items-center justify-center bg-ink-raised p-4 md:p-8">
        <div className={`relative w-full ${view === "desktop" ? "aspect-[34/18]" : "mx-auto aspect-[12/25] max-w-xs"}`}>
          <Image
            key={current}
            src={current}
            alt={`${title}, ${view} screenshot ${index + 1} of ${images.length}`}
            fill
            sizes={view === "desktop" ? "(max-width: 1024px) 100vw, 640px" : "320px"}
            className="border border-line object-cover object-top"
            priority={index === 0 && view === "desktop"}
          />
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
