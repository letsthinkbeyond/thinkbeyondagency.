"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
  rotate?: number;
  delay?: number;
}

export default function PaperCard({ children, className, rotate = -1.5, delay = 0 }: PaperCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotate: rotate * 2 }}
      whileInView={{ opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-10% 0px" }}
      whileHover={{
        y: -10,
        rotate: 0,
        boxShadow: "10px 14px 0px 0px rgba(17,17,17,0.9)",
        transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
      }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      style={{ transformPerspective: 800 }}
      className={cn(
        "torn-edge border border-ink/15 bg-paper p-8 shadow-[6px_8px_0px_0px_rgba(17,17,17,0.7)] dark:border-ink-dark/15 dark:bg-[#151513]",
        className
      )}
      data-cursor-hover
    >
      {children}
    </motion.div>
  );
}
