"use client";

import { motion } from "framer-motion";
import SectionTitle from "./SectionTitle";
import PaperCard from "./PaperCard";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-container">
        <SectionTitle label="who we are" title="Who We Are" />

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-12">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-2xl leading-snug md:col-span-7 md:text-4xl"
          >
            Think Beyond Agency is a creative marketing and branding agency helping
            businesses grow through <span className="text-accent">strategy</span>,{" "}
            <span className="text-accent">storytelling</span>, content creation,
            performance marketing, branding and social media.
          </motion.p>

          <div className="relative md:col-span-5">
            <div className="relative mx-auto h-72 w-full max-w-xs">
              <PaperCard rotate={-6} delay={0.1} className="absolute left-0 top-0 w-64">
                <p className="font-mono text-xs uppercase tracking-widest text-secondary">Approach</p>
                <p className="mt-3 font-display text-xl">Strategy before aesthetics.</p>
              </PaperCard>
              <PaperCard rotate={4} delay={0.25} className="absolute left-10 top-20 w-64">
                <p className="font-mono text-xs uppercase tracking-widest text-secondary">Output</p>
                <p className="mt-3 font-display text-xl">Content people stop for.</p>
              </PaperCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
