"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
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
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });
  const [appReady, setAppReady] = useState(false);
  const [forceReveal, setForceReveal] = useState(false);

  useEffect(() => {
    const handleReady = () => setAppReady(true);

    window.addEventListener("app-loaded", handleReady);

    const readyFallback = setTimeout(() => setAppReady(true), 3200);
    const revealFallback = setTimeout(() => setForceReveal(true), 4500);

    return () => {
      window.removeEventListener("app-loaded", handleReady);
      clearTimeout(readyFallback);
      clearTimeout(revealFallback);
    };
  }, []);

  const visible = forceReveal || (appReady && isInView);
  const pieces = by === "word" ? text.split(" ") : text.split("");
  const Tag = as as React.ElementType;

  return (
    <Tag ref={ref} className={cn("inline-block", className)}>
      {pieces.map((piece, i) => (
        <span key={`${piece}-${i}`} className="inline-block overflow-hidden align-top">
          <motion.span
            className="inline-block"
            initial={false}
            animate={visible ? { y: "0%", rotate: 0, opacity: 1 } : { y: "110%", rotate: 4, opacity: 0 }}
            transition={{
              duration: 0.55,
              ease: [0.16, 1, 0.3, 1],
              delay: visible ? delay + i * (by === "word" ? 0.04 : 0.015) : 0,
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
