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
        xl: "var(--radius-xl)",
        lg: "var(--radius-l)",
        md: "var(--radius-m)",
        sm: "var(--radius-s)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
