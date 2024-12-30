import { theme } from "@adv-re/theme";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./.storybook/**/*.{js,ts,jsx,tsx,mdx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*/dist/**/*.{js,mjs}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    ...require("@adv-re/tailwind-plugin")({
      htmlFontSize: 16,
      themes: { default: theme },
    }),
  ],
};
