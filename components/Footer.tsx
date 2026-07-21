"use client";

import { motion } from "framer-motion";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-ink/10 px-6 pt-20 pb-8 md:px-12 dark:border-ink-dark/10">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-20% 0px" }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="flex select-none justify-center"
      >
        <Logo size="footer" className="object-center" />
      </motion.div>

      <div className="mx-auto mt-10 flex max-w-container flex-col items-center justify-between gap-6 border-t border-ink/10 pt-8 md:flex-row dark:border-ink-dark/10">
        <p className="font-mono text-xs text-secondary">
          © {new Date().getFullYear()} Think Beyond Agency. All rights reserved.
        </p>
        <p className="font-mono text-xs text-secondary">Made with obsession, in India.</p>
      </div>
    </footer>
  );
}
