"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const letters = ["T", "B", "A"];

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 18 + 6;
        if (next >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setDone(true);
            document.body.style.overflow = "";
          }, 350);
          return 100;
        }
        return next;
      });
    }, 160);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-paper dark:bg-paper-dark"
        >
          <motion.div
            exit={{ y: -40, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="flex gap-2 font-display text-[13vw] leading-none tracking-tight md:text-[9vw]"
          >
            {letters.map((l, i) => (
              <motion.span
                key={l}
                initial={{ y: 80, opacity: 0, rotate: 8 }}
                animate={{ y: 0, opacity: 1, rotate: 0 }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                {l}
              </motion.span>
            ))}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-accent"
            >
              .
            </motion.span>
          </motion.div>

          <div className="mt-10 h-[2px] w-48 overflow-hidden bg-ink/10 dark:bg-ink-dark/15 md:w-64">
            <motion.div
              className="h-full bg-accent"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
          <p className="mt-4 font-mono text-xs tracking-widest text-secondary">
            {Math.floor(progress)}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
