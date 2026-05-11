import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
    "./styles/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          0: "var(--bg-0)",
          1: "var(--bg-1)",
          2: "var(--bg-2)",
          3: "var(--bg-3)",
        },
        line: {
          1: "var(--line-1)",
          2: "var(--line-2)",
          3: "var(--line-3)",
        },
        fg: {
          1: "var(--fg-1)",
          2: "var(--fg-2)",
          3: "var(--fg-3)",
          4: "var(--fg-4)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          soft: "var(--accent-soft)",
          line: "var(--accent-line)",
          fg: "var(--accent-fg)",
        },
        warn: "var(--warn)",
        danger: "var(--danger)",
        surface: {
          page: "var(--color-bg-page)",
          card: "var(--color-bg-card)",
          elevated: "var(--color-bg-elevated)",
          popover: "var(--color-bg-popover)",
        },
        text: {
          primary: "var(--color-text-primary)",
          secondary: "var(--color-text-secondary)",
          muted: "var(--color-text-muted)",
          subtle: "var(--color-text-subtle)",
        },
        brand: {
          DEFAULT: "var(--color-brand)",
          soft: "var(--color-brand-soft)",
          border: "var(--color-brand-border)",
          foreground: "var(--color-brand-foreground)",
        },
      },
      borderRadius: {
        pp1: "var(--r-1)",
        pp2: "var(--r-2)",
        pp3: "var(--r-3)",
        pp4: "var(--r-4)",
        pill: "var(--r-pill)",
      },
      spacing: {
        pp1: "var(--s-1)",
        pp2: "var(--s-2)",
        pp3: "var(--s-3)",
        pp4: "var(--s-4)",
        pp5: "var(--s-5)",
        pp6: "var(--s-6)",
        pp7: "var(--s-7)",
        pp8: "var(--s-8)",
        pp9: "var(--s-9)",
        pp10: "var(--s-10)",
      },
      maxWidth: {
        container: "var(--container)",
      },
    },
  },
};

export default config;
