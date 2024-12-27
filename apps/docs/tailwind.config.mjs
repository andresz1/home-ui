import plugins from "@adv-re/tailwind-plugin";

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
  plugins: [...plugins],
};
