"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { usePathname } from "next/navigation";
import { useCursor } from "../context/CursorContext";

export default function CustomCursor() {
  const { cursorType, setCursorType, cursorText, setCursorText, cursorColor } =
    useCursor();

  const [isVisible, setIsVisible] = useState(false);
  const [isHoverDevice, setIsHoverDevice] = useState(false);
  const pathname = usePathname();

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 500, damping: 28 });
  const springY = useSpring(mouseY, { stiffness: 500, damping: 28 });

  useEffect(() => {
    setCursorType("default");
    setCursorText("");
  }, [pathname, setCursorType, setCursorText]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(any-hover: hover)");

    if (!mediaQuery.matches) {
      return;
    }

    setIsHoverDevice(true);

    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [mouseX, mouseY, isVisible]);

  if (!isHoverDevice || !isVisible) return null;

  const isLight = cursorColor === "light";

  const variants = {
    default: {
      height: 16,
      width: 16,
      x: "-50%",
      y: "-50%",
      backgroundColor: isLight ? "#fff" : "#000",
      border: "0px solid transparent",
    },
    inverse: {
      height: 16,
      width: 16,
      x: "-50%",
      y: "-50%",
      backgroundColor: isLight ? "#000" : "#fff",
      border: "0px solid transparent",
    },
    pointer: {
      height: 64,
      width: 64,
      x: "-50%",
      y: "-50%",
      backgroundColor: isLight ? "transparent" : "#fff",
      border: `1px solid ${isLight ? "#fff" : "#e5e7eb"}`,
      color: isLight ? "#fff" : "#000",
    },
    project: {
      height: 80,
      width: 80,
      x: "-50%",
      y: "-50%",
      backgroundColor: isLight ? "#fff" : "#000",
      border: "0px solid transparent",
      color: isLight ? "#000" : "#fff",
    },
  };

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-100 flex items-center justify-center rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm"
      style={{ x: springX, y: springY }}
      variants={variants}
      animate={cursorType}
      transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
    >
      {(cursorType === "project" || cursorType === "pointer") && (
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
        >
          {cursorText}
        </motion.span>
      )}
    </motion.div>
  );
}
