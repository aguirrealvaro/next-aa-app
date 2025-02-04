import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xl: { max: "1440px" },
      lg: { max: "1280px" },
      md: { max: "992px" },
      sm: { max: "768px" },
      xs: { max: "480px" },
    },
    extend: {
      colors: {
        bg: {
          primary: "var(--bg-primary)",
          secondary: "var(--bg-secondary)",
        },
        border: {
          primary: "var(--border-primary)",
        },
        hover: {
          primary: "var(--hover-primary)",
        },
        text: {
          heading: "var(--text-heading)",
          primary: "var(--text-primary)",
          secondary: "var(--text-secondary)",
        },
        disabled: {
          primary: "var(--disabled-primary)",
          secondary: "var(--disabled-secondary)",
        },
      },
      fontFamily: {
        body: "var(--font-inter)",
      },
    },
  },
  plugins: [],
} satisfies Config;
