"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/lib/data";
import SectionTitle from "./SectionTitle";

export default function Portfolio() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const distance = track.scrollWidth - window.innerWidth;
      if (distance <= 0) return;

      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative overflow-hidden px-6 py-32 md:px-12">
      <div className="mx-auto mb-14 max-w-container">
        <SectionTitle label="tba's work" title="Top 10 Works" />
      </div>

      <div ref={trackRef} className="flex w-max gap-8 pl-6 md:pl-12">
        {portfolio.map((project, i) => (
          <div
            key={project.title}
            data-cursor-hover
            className="group relative h-[60vh] w-[74vw] shrink-0 overflow-hidden rounded-2xl border border-ink/10 sm:w-[46vw] lg:w-[32vw]"
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} transition-transform duration-700 ease-premium group-hover:scale-110`}
            />
            <div className="absolute inset-0 bg-black/10 transition-colors duration-500 group-hover:bg-black/25" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <span className="font-mono text-xs uppercase tracking-widest opacity-80">
                {String(i + 1).padStart(2, "0")} — {project.category}
              </span>
              <h3 className="mt-2 font-display text-3xl">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
