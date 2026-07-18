"use client";

import * as FiIcons from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import PaperCard from "./PaperCard";
import { services } from "@/lib/data";

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-container">
        <SectionTitle label="what we do" title="Expertise" />

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = (FiIcons as any)[s.icon] ?? FiIcons.FiCompass;
            return (
              <PaperCard
                key={s.title}
                rotate={i % 2 === 0 ? -1.5 : 1.5}
                delay={(i % 3) * 0.08}
                className="flex flex-col gap-4"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Icon size={20} />
                </div>
                <h3 className="font-display text-xl">{s.title}</h3>
                <p className="text-sm leading-relaxed text-secondary">{s.desc}</p>
              </PaperCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
