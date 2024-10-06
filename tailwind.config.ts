import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

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
        'thunder': '#20161f',
        'twine': '#c59f60',
        'creole': '#110802',
        'cinder': '#110c12',
        'accent': '#10576d',
        'secondary': '#263e3f',
        'primary-content': '#110802',
      },
    },
  },
  plugins: [],
};
export default config;
