"use client";

import { motion } from "framer-motion";
import RevealText from "./RevealText";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  label: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionTitle({ label, title, align = "left", className }: SectionTitleProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-4 inline-block font-mono text-xs uppercase tracking-[0.2em] text-accent"
      >
        // {label}
      </motion.span>
      <h2 className="font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
        <RevealText text={title} as="span" />
      </h2>
      <motion.svg
        width="140"
        height="12"
        viewBox="0 0 140 12"
        className={cn("mt-4", align === "center" ? "mx-auto" : "")}
      >
        <motion.path
          d="M2 8 Q 35 2, 70 7 T 138 5"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
        />
      </motion.svg>
    </div>
  );
}
