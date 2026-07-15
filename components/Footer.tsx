"use client";

import { motion } from "framer-motion";
import { FiInstagram, FiLinkedin, FiTwitter } from "react-icons/fi";

const socials = [
  { icon: FiInstagram, href: "https://instagram.com" },
  { icon: FiLinkedin, href: "https://linkedin.com" },
  { icon: FiTwitter, href: "https://twitter.com" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 px-6 pt-20 pb-8 md:px-12 dark:border-ink-dark/10">
      <motion.h2
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="select-none text-center font-display leading-none tracking-tight text-[22vw] md:text-[16vw]"
      >
        TBA<span className="text-accent">.</span>
      </motion.h2>

      <div className="mx-auto mt-10 flex max-w-container flex-col items-center justify-between gap-6 border-t border-ink/10 pt-8 md:flex-row dark:border-ink-dark/10">
        <p className="font-mono text-xs text-secondary">
          © {new Date().getFullYear()} Think Beyond Agency. All rights reserved.
        </p>
        <div className="flex gap-5">
          {socials.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor-hover
              className="flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 transition-colors hover:border-accent hover:text-accent dark:border-ink-dark/15"
            >
              <s.icon size={15} />
            </a>
          ))}
        </div>
        <p className="font-mono text-xs text-secondary">Made with obsession, in India.</p>
      </div>
    </footer>
  );
}
