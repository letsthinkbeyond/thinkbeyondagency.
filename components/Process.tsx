"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { process } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-container">
        <SectionTitle label="how we think beyond" title="Our Process" />

        <div ref={ref} className="relative mt-20 pl-10 md:pl-16">
          <div className="absolute left-0 top-0 h-full w-[2px] bg-ink/10 dark:bg-ink-dark/10 md:left-2" />
          <motion.div
            style={{ height }}
            className="absolute left-0 top-0 w-[2px] bg-accent md:left-2"
          />

          <div className="flex flex-col gap-16">
            {process.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30% 0px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <span className="absolute -left-10 top-1 h-4 w-4 -translate-x-1/2 rounded-full border-2 border-accent bg-paper dark:bg-paper-dark md:-left-16" />
                <span className="font-mono text-xs uppercase tracking-widest text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-2 font-display text-3xl md:text-4xl">{step.title}</h3>
                <p className="mt-3 max-w-lg text-secondary">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
