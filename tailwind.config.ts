import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#070b0c",
          900: "#0a1010",
          850: "#0d1515",
          800: "#111b1b",
        },
        mint: {
          50: "#eafff4",
          100: "#d5fce7",
          200: "#b0f5d3",
          300: "#9af0c5",
          400: "#7ce7b5",
          500: "#63dda4",
          900: "#123d2c",
        },
        gold: "#d9b75a",
      },
      boxShadow: {
        chat: "0 30px 100px rgba(0,0,0,.38)",
      },
      maxWidth: {
        content: "1160px",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(.16,1,.3,1)",
      },
    },
  },
  plugins: [],
};

export default config;
