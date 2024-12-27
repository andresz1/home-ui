import plugin from "tailwindcss/plugin";

const utilitiesPlugin = plugin.withOptions(() => ({ addUtilities }) => {
  addUtilities({
    ".u-current-font-size": {
      width: "1em",
      height: "1em",
    },
    ".u-no-scrollbar": {
      scrollbarWidth: "none",
      "&::-webkit-scrollbar": { display: "none" },
    },
  });
});

export default utilitiesPlugin;
