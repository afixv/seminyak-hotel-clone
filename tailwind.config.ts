import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(0, 45, 82)",
        },
        secondary: {
          DEFAULT: "rgb(162, 105, 40)",
        },
        body: "rgb(51, 51, 51)",
      },
      fontFamily: {
        primary: ["var(--font-beausite)", "sans-serif"],
      },
      backgroundImage: {
        "gradient-top":
          "linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, transparent 100%)",
        "gradient-bottom":
          "linear-gradient(to top, rgba(0,0,0,0.8) 0%, transparent 100%)",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeOut: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        slideLeftRight: {
          "0%": { transform: "scale(1.2) translateX(0)" },
          "100%": { transform: "scale(1.2) translateX(-10%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
        fadeOut: "fadeOut 0.5s ease-out forwards",
        slideLeftRight: "slideLeftRight 20s ease-in-out infinite alternate",
      },
    },
  },
  plugins: [],
} satisfies Config;
