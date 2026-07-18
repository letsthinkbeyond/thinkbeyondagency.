"use client";

import { motion } from "framer-motion";
import { testimonials } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Testimonials() {
  return (
    <section className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-container">
        <SectionTitle label="beyond words" title="Reviews" />

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-2">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 40, rotate: t.rot * 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: t.rot }}
              whileHover={{ rotate: 0, y: -6 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="border border-ink/10 bg-paper p-8 shadow-[8px_10px_0px_0px_rgba(17,17,17,0.12)] dark:border-ink-dark/10 dark:bg-[#151513]"
            >
              <p className="font-display text-xl leading-snug md:text-2xl">"{t.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 font-mono text-sm text-accent">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="font-mono text-xs text-secondary">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
