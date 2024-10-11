import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        caveat: ['var(--font-caveat)', 'cursive'],
        cinzel: ['var(--font-cinzel)', 'serif'],
        geistSans: ['var(--font-geist-sans)', 'sans-serif'],
        geistMono: ['var(--font-geist-mono)', 'monospace'],
      },
    },
  },
  variants: {
    extend: {
      breakInside: ['responsive']
    }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
};
export default config;
