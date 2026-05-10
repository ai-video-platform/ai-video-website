import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f0f7ff",
          100: "#e0efff",
          200: "#b8dbff",
          500: "#0071e3",
          600: "#0066cc",
          700: "#004999",
        },
        surface: {
          white: "#ffffff",
          50: "#fafafa",
          100: "#f5f5f7",
          200: "#e8e8ed",
          300: "#d2d2d7",
        },
        text: {
          primary: "#1d1d1f",
          secondary: "#6e6e73",
          tertiary: "#86868b",
        },
      },
      letterSpacing: {
        "apple-tight": "-0.03em",
        "apple-tighter": "-0.04em",
      },
    },
  },
  plugins: [],
}
export default config
