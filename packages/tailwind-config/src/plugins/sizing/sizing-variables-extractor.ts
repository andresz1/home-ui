import { pxToRem } from "../../utilities/string";

export class SizingVariablesExtractor {
  htmlFontSize: number;

  constructor({ htmlFontSize = 16 }: { htmlFontSize?: number } = {}) {
    this.htmlFontSize = htmlFontSize;
  }

  extract(sizes: number[]) {
    return sizes.reduce<Record<string, string>>((acc, value) => {
      acc[`--sz-${value}`] = pxToRem(value, this.htmlFontSize);
      return acc;
    }, {});
  }
}
