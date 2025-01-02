import { theme } from "@adv-re/theme";
import plugins from "@adv-re/tailwind-plugin";

/** @type {import('tailwindcss').Config} */
const config = {
  plugins: [
    ...plugins({
      htmlFontSize: 16,
      themes: { default: theme },
    }),
  ],
};

export default config;
