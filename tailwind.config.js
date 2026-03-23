/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#101941",
        foreground: "#E2E8F0",
        primary: {
          DEFAULT: "#3B82F6",
          foreground: "#FFFFFF",
        },
        muted: {
          DEFAULT: "#1E2A5E",
          foreground: "#94A3B8",
        },
        card: {
          DEFAULT: "#162055",
          foreground: "#E2E8F0",
        },
        border: "#2A3A7E",
        accent: {
          DEFAULT: "#60A5FA",
          foreground: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ['"Exo 2"', "sans-serif"],
      },
      borderRadius: {
        lg: "0.75rem",
        md: "0.5rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};