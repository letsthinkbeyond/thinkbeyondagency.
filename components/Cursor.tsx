"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 26, stiffness: 320, mass: 0.4 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const ringSpringConfig = { damping: 22, stiffness: 160, mass: 0.6 };
  const ringX = useSpring(cursorX, ringSpringConfig);
  const ringY = useSpring(cursorY, ringSpringConfig);

  useEffect(() => {
    const isFine = window.matchMedia("(pointer: fine)").matches;
    if (!isFine) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const overHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      setIsHovering(!!target.closest("a, button, [data-cursor-hover]"));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", overHandler);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", overHandler);
    };
  }, [cursorX, cursorY, isVisible]);

  if (typeof window !== "undefined" && !window.matchMedia("(pointer: fine)").matches) {
    return null;
  }

  return (
    <div className={`pointer-events-none fixed inset-0 z-[100] hidden md:block transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <motion.div
        style={{ translateX: x, translateY: y }}
        className="fixed left-0 top-0 h-2 w-2 -ml-1 -mt-1 rounded-full bg-accent"
      />
      <motion.div
        style={{ translateX: ringX, translateY: ringY }}
        animate={{
          width: isHovering ? 64 : 32,
          height: isHovering ? 64 : 32,
          marginLeft: isHovering ? -32 : -16,
          marginTop: isHovering ? -32 : -16,
          backgroundColor: isHovering ? "rgba(255,77,48,0.08)" : "rgba(17,17,17,0)",
        }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="fixed left-0 top-0 rounded-full border border-ink dark:border-ink-dark"
      />
    </div>
  );
}
