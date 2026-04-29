"use client";

import { useEffect, useRef } from "react";

interface MouseParallaxProps {
  children: React.ReactNode;
  factor?: number;
  className?: string;
}

export default function MouseParallax({
  children,
  factor = 0.05,
  className = "",
}: MouseParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on devices with a mouse
    if (!window.matchMedia("(any-hover: hover)").matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;

      // Calculate distance from center of the screen
      const x = (e.clientX - window.innerWidth / 2) * factor;
      const y = (e.clientY - window.innerHeight / 2) * factor;

      // Apply the translation directly to the DOM element using the GPU
      ref.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [factor]);

  return (
    <div
      ref={ref}
      className={`transition-transform duration-75 ease-out will-change-transform ${className}`}
    >
      {children}
    </div>
  );
}
