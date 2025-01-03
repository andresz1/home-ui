import type { Theme } from "@adv-re/theme";

import {
  toCSSPropertyPath,
  toCSSVariable,
  toKebabCase,
} from "../../utilities/string";
import { isHex } from "../../utilities/validation";

export class ThemeParser {
  private parseValue(key: string, value: string | number) {
    const variable = toCSSVariable(key);

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
        result[key] = this.parseValue(parsedKey, value);
        return;
      }

      result[key] = this.traverse(value as object, [...path, keyParam]);
    });

    return result;
  }

  parse(theme: Theme) {
    return this.traverse(theme);
  }
}
