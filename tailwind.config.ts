import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          bg: "#040816",
          "bg-deep": "#071225",
          surface: "#0F1D35",
          "surface-light": "#132845",
          "surface-elevated": "#183354",
          accent: "#2EE6A6",
          "accent-hover": "#28CC94",
          "accent-cool": "#38BDF8",
          text: "#F8FAFC",
          muted: "#A7B4C7",
          danger: "#EF4444",
          warning: "#F59E0B",
          border: "rgba(120,160,210,0.16)",
          "border-strong": "rgba(120,160,210,0.28)",
        },
      },
      fontFamily: {
        heading: ["var(--font-sora)", "system-ui", "sans-serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
      },
      borderRadius: {
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
      },
      boxShadow: {
        "card": "0 2px 16px rgba(0,0,0,0.25), 0 0 0 1px rgba(120,160,210,0.08)",
        "card-hover": "0 8px 32px rgba(0,0,0,0.35), 0 0 0 1px rgba(46,230,166,0.15)",
        "glow": "0 0 60px rgba(46,230,166,0.12)",
        "glow-strong": "0 0 80px rgba(46,230,166,0.2)",
        "screenshot": "0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(120,160,210,0.1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
