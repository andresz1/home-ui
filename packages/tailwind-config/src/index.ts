import type { ThemePluginOptions } from "./plugins";
import { themePlugin, utilitiesPlugin, sizingPlugin } from "./plugins";

export type PluginOptions = ThemePluginOptions;

const plugin = ({ htmlFontSize, themes }: PluginOptions) => {
  return [
    themePlugin({ htmlFontSize, themes }),
    sizingPlugin({}),
    utilitiesPlugin({}),
  ];
};

export * from "./plugins";

export default plugin;
