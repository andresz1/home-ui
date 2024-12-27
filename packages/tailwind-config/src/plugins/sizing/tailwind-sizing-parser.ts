import { toCSSVariable } from "../../utilities/string";

export class TailwindSizingParser {
  parse(sizes: number[]) {
    return sizes.reduce<Record<string, string>>((acc, size) => {
      acc[`sz-${size}`] = toCSSVariable(`sz-${size}`);
      return acc;
    }, {});
  }
}
