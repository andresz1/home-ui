import plugins from "@adv-re/tailwind-plugin";
import { theme } from "@adv-re/theme";

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
