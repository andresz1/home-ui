import {
  toCSSPropertyPath,
  toCSSVariableName,
  normalizeRem,
  hexToRgb,
} from "../../utilities/string";
import { isHex, isRem } from "../../utilities/validation";

export class CSSVariablesExtractor {
  htmlFontSize: number;

  constructor({ htmlFontSize = 16 }: { htmlFontSize?: number } = {}) {
    this.htmlFontSize = htmlFontSize;
  }

  private parseValue(value: string | number) {
    if (typeof value === "number") {
      return value.toString();
    }

    if (isHex(value)) {
      const { red, green, blue } = hexToRgb(value);
      return `${red} ${green} ${blue}`;
    }

    if (isRem(value)) {
      return normalizeRem(value, this.htmlFontSize);
    }

    return value;
  }

  private traverse(theme: object, path: string[] = []) {
    let variables: Record<string, string> = {};

    Object.entries(theme).forEach(([keyParam, value]) => {
      if (typeof value === "string" || typeof value === "number") {
        const propertyPath = toCSSPropertyPath(keyParam, path);
        const name = toCSSVariableName(propertyPath);

        variables[name] = this.parseValue(value);
        return;
      }

      variables = {
        ...variables,
        ...this.traverse(value as object, [...path, keyParam]),
      };
    });

    return variables;
  }

  extract(theme: object) {
    return this.traverse(theme);
  }
}
