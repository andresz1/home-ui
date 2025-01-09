import { theme, darkTheme } from "@adv-re/theme";
import plugins from "@adv-re/tailwind-plugin";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./../../packages/ui/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ...plugins({
      htmlFontSize: 16,
      themes: { default: theme, dark: darkTheme },
    }),
    typography,
  ],
};

export default config;
