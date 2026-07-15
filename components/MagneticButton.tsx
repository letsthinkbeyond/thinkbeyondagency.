"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  variant?: "solid" | "outline";
}

export default function MagneticButton({
  children,
  className,
  onClick,
  href,
  variant = "solid",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPos({ x: x * 0.35, y: y * 0.35 });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base =
    variant === "solid"
      ? "bg-ink text-paper dark:bg-ink-dark dark:text-paper-dark"
      : "border border-ink dark:border-ink-dark text-ink dark:text-ink-dark";

  const Comp: any = href ? "a" : "button";

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: "spring", stiffness: 150, damping: 12, mass: 0.3 }}
      className="inline-block"
      data-cursor-hover
    >
      <Comp
        href={href}
        onClick={onClick}
        className={cn(
          "relative inline-flex items-center gap-2 overflow-hidden rounded-full px-8 py-4 font-sans text-sm font-medium transition-colors duration-300",
          base,
          className
        )}
      >
        {children}
      </Comp>
    </motion.div>
  );
}
