import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0f172a",
        slate: "#52607a",
        mist: "#e8f2f2",
        sea: "#0d5f73",
        teal: "#10727d",
        mint: "#27b37e",
        sand: "#f7fbfb",
      },
      boxShadow: {
        soft: "0 20px 60px rgba(15, 23, 42, 0.08)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(39,179,126,0.12), transparent 28%), radial-gradient(circle at top right, rgba(13,95,115,0.14), transparent 30%), linear-gradient(135deg, #ffffff 0%, #f7fbfb 100%)",
      },
      fontFamily: {
        sans: ["Manrope", "Avenir Next", "Segoe UI", "sans-serif"],
        serif: ["Iowan Old Style", "Palatino Linotype", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
