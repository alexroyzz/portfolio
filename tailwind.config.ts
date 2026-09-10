import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#08080a",
        surface: "#0f0f12",
        raised: "#16161a",
        tx: "#f5f5f7",
        tx2: "rgba(245,245,247,.66)",
        tx3: "rgba(245,245,247,.44)",
        line: "rgba(255,255,255,.09)",
        line2: "rgba(255,255,255,.17)",
        accent: "#6ea8ff",
        mint: "#72bc8f",
        warm: "#e0a970",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        body: ["var(--font-body)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      maxWidth: { shell: "1180px" },
      transitionTimingFunction: { smooth: "cubic-bezier(.22,1,.36,1)" },
    },
  },
  plugins: [],
}

export default config
