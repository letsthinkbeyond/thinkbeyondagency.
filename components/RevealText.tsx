"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface RevealTextProps {
  text: string;
  className?: string;
  by?: "word" | "char";
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export default function RevealText({
  text,
  className,
  by = "word",
  delay = 0,
  as = "span",
}: RevealTextProps) {
  const pieces = by === "word" ? text.split(" ") : text.split("");
  const Tag = as as any;

  return (
    <Tag className={cn("inline-block overflow-hidden", className)}>
      {pieces.map((piece, i) => (
        <span key={i} className="inline-block overflow-hidden align-top">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotate: 4 }}
            whileInView={{ y: "0%", rotate: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{
              duration: 0.75,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * (by === "word" ? 0.06 : 0.02),
            }}
          >
            {piece === " " ? "\u00A0" : piece}
            {by === "word" && i !== pieces.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
