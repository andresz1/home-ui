import plugin from "tailwindcss/plugin";
import { SizingVariablesExtractor } from "./sizing-variables-extractor";
import { SizingParser } from "./sizing-parser";

const sizes = [
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 80,
  96, 112, 128, 144, 160, 176, 192, 208, 224, 240, 256, 288, 320, 384, 400, 416,
  432, 448, 464, 480, 512, 544, 576, 608, 640, 672, 704, 736, 768, 800, 832,
  864,
];

export const sizingPlugin = plugin.withOptions(
  () =>
    ({ addBase }) => {
      const parser = new SizingVariablesExtractor();

      addBase({
        ":root": parser.extract(sizes),
      });
    },
  () => {
    const parser = new SizingParser();
    const values = parser.parse(sizes);

    return {
      theme: {
        extend: {
          ...values,
        },
      },
    };
  }
);
