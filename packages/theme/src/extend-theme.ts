import deepmerge from "deepmerge";

import type { PartialTheme, Theme } from "./theme";
import { theme } from "./themes/default-theme";

export const extendTheme = (
  partial: PartialTheme,
  base: Theme = theme
): Theme => {
  return deepmerge<Theme, PartialTheme>(base, partial);
};
