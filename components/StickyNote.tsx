"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface StickyNoteProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
}

export default function StickyNote({ children, className, rotate = -6, delay = 0 }: StickyNoteProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, scale: 1, rotate }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ ["--rot" as any]: `${rotate}deg` }}
      className={cn(
        "animate-float relative bg-[#FFF6D6] px-5 py-4 font-hand text-xl leading-snug text-ink shadow-[4px_6px_0px_0px_rgba(17,17,17,0.6)]",
        className
      )}
    >
      <span className="absolute -top-3 left-1/2 h-5 w-14 -translate-x-1/2 rotate-[-3deg] bg-ink/10 backdrop-blur-sm" />
      {children}
    </motion.div>
  );
}
