import { type PartialTheme, type Theme } from "@adv-re/theme";
import plugin from "tailwindcss/plugin";

import { ThemeParser } from "./theme-parser";
import { ThemeVariablesExtractor } from "./theme-variables-extractor";

export interface ThemePluginOptions {
  htmlFontSize?: number;
  themes: Record<string, PartialTheme> & { default: Theme };
}

export const themePlugin = plugin.withOptions<ThemePluginOptions>(
  (options) =>
    ({ addBase }) => {
      const { htmlFontSize, themes } = options;

      const parser = new ThemeVariablesExtractor({ htmlFontSize });
      const variables = parser.extract(themes.default);

      addBase({
        ":root": variables,
      });

      Object.entries(themes)
        .filter(([name]) => name !== "default")
        .forEach(([name, theme]) => {
          addBase({
            [`[data-theme="${name}"]`]: parser.extract(theme, variables),
          });
        });
    },
  (options) => {
    const { themes } = options;
    const parser = new ThemeParser();
    const theme = parser.parse(themes.default);

    return {
      theme,
    };
  }
);
