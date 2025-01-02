import { toCSSVariable } from "../../utilities/string";

export class SizingParser {
  parse(sizes: number[]) {
    const values = sizes.reduce<Record<string, string>>((acc, size) => {
      acc[`sz-${size}`] = toCSSVariable(`sz-${size}`);
      return acc;
    }, {});

    return {
      width: values,
      maxWidth: values,
      minWidth: values,
      height: values,
      maxHeight: values,
      minHeight: values,
      translate: values,
      size: values,
    };
  }
}
