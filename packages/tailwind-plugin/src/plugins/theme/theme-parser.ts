import type { Theme } from "@adv-re/theme";

import {
  toCSSPropertyPath,
  toCSSVariable,
  toKebabCase,
} from "../../utilities/string";
import { isHex } from "../../utilities/validation";

export class ThemeParser {
  private parseValue(key: string, value: string | number, path: string[] = []) {
    const rootPath = path[0] || "";
    const variable = toCSSVariable(key);

    if (rootPath === "screens") {
      return value;
    }

    if (typeof value === "number") {
      return variable;
    }

    if (isHex(value)) {
      return `rgb(${variable} / <alpha-value>)`;
    }

    return variable;
  }

  private parseFontSizeValue(key: string) {
    return [
      toCSSVariable(`${key}-font-size`),
      {
        lineHeight: toCSSVariable(`${key}-line-height`),
        letterSpacing: toCSSVariable(`${key}-letter-spacing`),
        fontWeight: toCSSVariable(`${key}-font-weight`),
      },
    ];
  }

  private traverse(node: object, path: string[] = []) {
    const result: Record<string, unknown> = {};

    Object.entries(node).forEach(([keyParam, value]) => {
      const [parentKey] = [...path].reverse();
      const key = path.length > 0 ? toKebabCase(keyParam) : keyParam;
      const parsedKey = toCSSPropertyPath(key, path);

      if (parentKey === "fontSize") {
        result[key] = this.parseFontSizeValue(parsedKey);
        return;
      }

      if (typeof value === "string" || typeof value === "number") {
        result[key] = this.parseValue(parsedKey, value, path);
        return;
      }

      result[key] = this.traverse(value as object, [...path, keyParam]);
    });

    return result;
  }

  parse(theme: Theme) {
    const current = this.traverse(theme);

    return {
      ...current,
      colors: {
        ...(current.colors as object),
        inherit: "inherit",
        current: "currentColor",
        transparent: "transparent",
      },
      transitionDuration: {
        DEFAULT: "250ms",
        0: "0s",
        50: "50ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        250: "250ms",
        300: "300ms",
        350: "350ms",
        400: "400ms",
        450: "450ms",
        500: "500ms",
        550: "550ms",
        600: "500ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
      },
      transitionDelay: {
        0: "0ms",
        50: "50ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        250: "250ms",
        300: "300ms",
        350: "350ms",
        400: "400ms",
        450: "450ms",
        500: "500ms",
        600: "600ms",
        700: "700ms",
        800: "800ms",
        900: "900ms",
        1000: "1000ms",
        1500: "1500ms",
        2000: "2000ms",
        2500: "2500ms",
      },
      extend: {
        transitionTimingFunction: {
          DEFAULT: "cubic-bezier(0.2, 0, 0, 1)",
          linear: "cubic-bezier(0, 0, 1, 1)",
          standard: "cubic-bezier(0.2, 0, 0, 1)",
          accelerate: "cubic-bezier(0.3, 0, 0.8, 1.15)",
          decelerate: "cubic-bezier(0.05, 0.7, 0.1, 1)",
          "standard-back": "cubic-bezier(0.3, -0.05, 0.7, -0.5)",
          "accelerate-back": "cubic-bezier(0.45,1.45, 0.8, 1)",
          "decelerate-back": "cubic-bezier(0.42, 0, 0.58, 1)",
        },
      },
    };
  }
}
