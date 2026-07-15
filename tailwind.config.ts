import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF8",
        ink: "#111111",
        accent: "#FF4D30",
        secondary: "#6B7280",
        "paper-dark": "#0B0B0A",
        "ink-dark": "#FAFAF8",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1440px",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        grain: {
          "0%, 100%": { transform: "translate(0,0)" },
          "10%": { transform: "translate(-1%,-2%)" },
          "20%": { transform: "translate(-3%,1%)" },
          "30%": { transform: "translate(2%,-3%)" },
          "40%": { transform: "translate(-2%,4%)" },
          "50%": { transform: "translate(-4%,1%)" },
          "60%": { transform: "translate(3%,0%)" },
          "70%": { transform: "translate(0%,2%)" },
          "80%": { transform: "translate(1%,-1%)" },
          "90%": { transform: "translate(-2%,3%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(var(--rot,0deg))" },
          "50%": { transform: "translateY(-14px) rotate(var(--rot,0deg))" },
        },
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        marquee: "marquee 28s linear infinite",
        grain: "grain 1s steps(1) infinite",
        float: "float 6s ease-in-out infinite",
        "accordion-down": "accordion-down 0.3s ease-out",
        "accordion-up": "accordion-up 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
