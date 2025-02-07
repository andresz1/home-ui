import { theme } from "@adv-re/theme";
import plugins from "@adv-re/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./../../packages/ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ...plugins({
      htmlFontSize: 16,
      themes: { default: theme },
    }),
  ],
};

export default config;
