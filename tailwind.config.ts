import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#2b211b",
        slate: "#6f6156",
        mist: "#e6d7c7",
        sea: "#7a5d4a",
        teal: "#b86f4d",
        mint: "#c79b62",
        sand: "#f6efe7",
      },
      boxShadow: {
        soft: "0 24px 70px rgba(43, 33, 27, 0.10)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      backgroundImage: {
        "hero-grid":
          "radial-gradient(circle at top left, rgba(199,155,98,0.18), transparent 30%), radial-gradient(circle at top right, rgba(184,111,77,0.16), transparent 32%), linear-gradient(135deg, #fcf7f1 0%, #f6efe7 100%)",
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
