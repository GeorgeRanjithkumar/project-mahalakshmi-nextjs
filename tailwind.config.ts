import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        royal: {
          50: "#eef2ff",
          100: "#e0e7ff",
          200: "#c7d2fe",
          300: "#a5b4fc",
          400: "#818cf8",
          500: "#6366f1",
          600: "#4f46e5",
          700: "#4338ca",
          800: "#1e1b4b",
          900: "#15123a",
          950: "#0b0a1f",
        },
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(rgba(99,102,241,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.06) 1px, transparent 1px)",
        "gold-shimmer":
          "linear-gradient(135deg, #fbbf24 0%, #f59e0b 45%, #fde68a 60%, #f59e0b 100%)",
        "royal-radial":
          "radial-gradient(circle at 30% 20%, rgba(99,102,241,0.35), transparent 60%), radial-gradient(circle at 80% 80%, rgba(79,70,229,0.25), transparent 55%)",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(15, 23, 42, 0.12)",
        "glow-gold": "0 0 40px rgba(245, 158, 11, 0.35)",
        "glow-royal": "0 0 50px rgba(79, 70, 229, 0.35)",
      },
      animation: {
        "pulse-cta": "pulse-cta 2.4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        "pulse-cta": {
          "0%, 100%": {
            boxShadow: "0 0 0 0 rgba(245, 158, 11, 0.55)",
          },
          "50%": {
            boxShadow: "0 0 0 10px rgba(245, 158, 11, 0)",
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "200% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
