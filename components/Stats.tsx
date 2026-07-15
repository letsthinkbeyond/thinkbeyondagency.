"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useCounter } from "@/hooks/useCounter";
import { stats } from "@/lib/data";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  const count = useCounter(value, inView);

  return (
    <span ref={ref} className="font-display text-6xl tracking-tight md:text-8xl">
      {count}
      <span className="text-accent">{suffix}</span>
    </span>
  );
}

export default function Stats() {
  return (
    <section className="bg-ink px-6 py-28 text-paper dark:bg-black md:px-12">
      <div className="mx-auto grid max-w-container grid-cols-2 gap-10 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start"
          >
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className="mt-2 font-mono text-xs uppercase tracking-widest text-paper/50">
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
