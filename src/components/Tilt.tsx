"use client";

import { useEffect, useRef } from "react";

/** Sets --tilt-x / --tilt-y from the pointer. Only on hover devices without reduced motion. */
export default function Tilt({ className, children }: { className?: string; children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!matchMedia("(hover: hover) and (prefers-reduced-motion: no-preference)").matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = e.clientX / innerWidth - 0.5;
        const y = e.clientY / innerHeight - 0.5;
        el.style.setProperty("--tilt-x", `${(-y * 8).toFixed(2)}deg`);
        el.style.setProperty("--tilt-y", `${(x * 10).toFixed(2)}deg`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
