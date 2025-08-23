import type { Config } from "tailwindcss";
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slowbounce: {
          '0%, 100%': { transform: 'translateY(-5%)', animationTimingFunction: 'cubic-bezier(0.8,0,1,1)' },
          '50%': { transform: 'translateY(0)', animationTimingFunction: 'cubic-bezier(0,0,0.2,1)' },
        },
      },
      animation: {
        slowbounce: 'slowbounce 1.5s infinite',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          light: "#F3F4F6",
          medium: "#16171b",
          dark: "#000000",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
