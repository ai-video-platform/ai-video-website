import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366f1",
        "primary-dark": "#4f46e5",
        accent: "#a78bfa",
        dark: "#0f0f23",
        "dark-card": "#1a1a2e",
      },
    },
  },
  plugins: [],
}
export default config
