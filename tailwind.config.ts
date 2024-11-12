import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          DEFAULT: "var(--base)",
          tint: "var(--base-tint)",
          shade: "var(--base-shade)",
          opp: "var(--base-opp)",
        },
        accent: "var(--accent)",
        secondary: {
          DEFAULT: "var(--secondary)",
          rgba: "var(--secondary-rgba",
        },
        stroke: {
          controls: {
            DEFAULT: "var(--stroke-controls)",
            neutral: "var(--stroke-controls-neutral",
          },
          elements: "var(--stroke-elements)",
        },
        t: {
          bright: "var(--t-bright)",
          medium: "var(--t-medium)",
          muted: "var(--t-muted)",
          accent: "var(--t-accent)",
          secondary: "var(--t-secondary)",
          disabled: "var(--t-disabled)",
          placeholder: "var(--t-placeholder)",
          opp: {
            bright: "var(--t-opp-bright)",
            medium: "var(--t-opp-medium)",
            muted: "var(--t-opp-muted)",
          },
        },
        gradient: {
          one: "var(--gradient-one)",
          two: "var(--gradient-two)",
          three: "var(--gradient-three)",
        },
      },
      borderRadius: {
        xl: "var(--_radius-xl)",
        lg: "var(--_radius-l)",
        md: "var(--_radius-m)",
        sm: "var(--_radius-s)",
      },
      fontFamily: {
        "Bai-Jamjuree": ["Bai Jamjuree", "sans-serif"],
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
