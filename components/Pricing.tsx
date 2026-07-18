"use client";

import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import { pricing } from "@/lib/data";
import SectionTitle from "./SectionTitle";
import MagneticButton from "./MagneticButton";
import { cn } from "@/lib/utils";

export default function Pricing() {
  return (
    <section id="pricing" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-container">
        <SectionTitle label="Let's think beyond" title="Plans Built To Scale" align="center" />

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {pricing.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className={cn(
                "relative flex flex-col border p-9",
                plan.highlighted
                  ? "z-10 scale-100 border-accent bg-ink text-paper shadow-[0_30px_60px_-15px_rgba(255,77,48,0.35)] md:scale-105"
                  : "border-ink/10 bg-paper dark:border-ink-dark/10 dark:bg-[#151513]"
              )}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 font-mono text-[10px] uppercase tracking-widest text-paper">
                  Most Popular
                </span>
              )}
              <h3 className="font-display text-2xl">{plan.name}</h3>
              <p className={cn("mt-1 text-sm", plan.highlighted ? "text-paper/60" : "text-secondary")}>
                {plan.tagline}
              </p>
              <p className="mt-6 font-display text-4xl">{plan.price}</p>
              <p className={cn("font-mono text-xs uppercase tracking-widest", plan.highlighted ? "text-paper/50" : "text-secondary")}>
                per month
              </p>

              <ul className="mt-8 flex flex-1 flex-col gap-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <FiCheck className={cn("mt-0.5 shrink-0", plan.highlighted ? "text-accent" : "text-accent")} />
                    <span className={plan.highlighted ? "text-paper/85" : ""}>{f}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-9">
                <MagneticButton
                  href="#contact"
                  className={cn(
                    "w-full justify-center",
                    plan.highlighted && "!bg-accent !text-paper"
                  )}
                  variant={plan.highlighted ? "solid" : "outline"}
                >
                  Get This Plan
                </MagneticButton>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
