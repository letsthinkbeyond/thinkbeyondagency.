"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FiPhone, FiMessageCircle, FiInstagram, FiMail, FiArrowUpRight } from "react-icons/fi";
import RevealText from "./RevealText";
import MagneticButton from "./MagneticButton";

const channels = [
  { icon: FiPhone, label: "Phone", value: "+91 73833 62509", href: "tel:+917383362509" },
  { icon: FiMessageCircle, label: "WhatsApp", value: "+91 94095 97422", href: "https://wa.me/919409597422" },
  { icon: FiInstagram, label: "Instagram", value: "@thinkbeyondagency", href: "https://instagram.com" },
  { icon: FiMail, label: "Email", value: "hello@thinkbeyondagency.com", href: "mailto:hello@thinkbeyondagency.com" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative px-6 py-32 md:px-12">
      <div className="mx-auto max-w-container">
        <h2 className="font-display text-5xl leading-[1.02] tracking-tight md:text-7xl">
          <RevealText text="Let's Build Something" as="span" />
          <br />
          <RevealText text="Beyond." as="span" className="text-accent" delay={0.15} />
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-16 md:grid-cols-12">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6 md:col-span-7">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="border border-accent/30 bg-accent/5 p-8 font-display text-2xl"
              >
                Thanks — we'll be in touch within one business day.
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField label="Name" name="name" placeholder="Your full name" />
                  <FormField label="Email" name="email" type="email" placeholder="you@company.com" />
                </div>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <FormField label="Business" name="business" placeholder="Brand or company name" />
                  <FormField label="Budget" name="budget" placeholder="Monthly budget range" />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-xs uppercase tracking-widest text-secondary">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your brand and goals"
                    className="w-full resize-none border-b border-ink/20 bg-transparent py-3 font-sans outline-none transition-colors focus:border-accent dark:border-ink-dark/20"
                  />
                </div>
                <div className="mt-2">
                  <MagneticButton>
                    Submit <FiArrowUpRight />
                  </MagneticButton>
                </div>
              </>
            )}
          </form>

          <div className="flex flex-col gap-5 md:col-span-5">
            {channels.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="glass group flex items-center justify-between border border-ink/10 px-6 py-5 transition-transform duration-300 hover:-translate-y-1 dark:border-ink-dark/10"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                    <c.icon size={16} />
                  </span>
                  <div>
                    <p className="font-mono text-xs uppercase tracking-widest text-secondary">{c.label}</p>
                    <p className="font-medium">{c.value}</p>
                  </div>
                </div>
                <FiArrowUpRight className="opacity-40 transition-opacity group-hover:opacity-100" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-xs uppercase tracking-widest text-secondary">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full border-b border-ink/20 bg-transparent py-3 font-sans outline-none transition-colors focus:border-accent dark:border-ink-dark/20"
      />
    </div>
  );
}
