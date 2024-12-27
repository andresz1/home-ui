import { CSSVariablesExtractor } from "../src/plugins/theme/css-variables-extractor";

describe("CSSVariablesExtractor", () => {
  it("should correctly extract CSS variables from a theme object with string and number values", () => {
    const theme = {
      primary: "#ff5733",
      spacing: {
        small: "0.5rem",
        medium: "1rem",
        large: "2rem",
      },
    };

    const extractor = new CSSVariablesExtractor({ htmlFontSize: 16 });
    const result = extractor.extract(theme);

    expect(result).toEqual({
      "--primary": "255 87 51", // Hex converted to RGB
      "--spacing-small": "0.5rem", // Rem as is
      "--spacing-medium": "1rem", // Rem as is
      "--spacing-large": "2rem", // Pixels converted to rem
    });
  });

  it("should handle nested theme objects", () => {
    const theme = {
      colors: {
        background: "#000000",
        text: "#ffffff",
      },
      typography: {
        fontSize: "1rem",
        lineHeight: 1.5,
      },
    };

    const extractor = new CSSVariablesExtractor({ htmlFontSize: 16 });
    const result = extractor.extract(theme);

    expect(result).toEqual({
      "--colors-background": "0 0 0", // Hex converted to RGB
      "--colors-text": "255 255 255", // Hex converted to RGB
      "--typography-font-size": "1rem", // Rem as is
      "--typography-line-height": "1.5", // Number converted to string
    });
  });

  it("should use the default htmlFontSize if not provided", () => {
    const theme = {
      base: "2rem", // Pixels
    };

    const extractor = new CSSVariablesExtractor();
    const result = extractor.extract(theme);

    expect(result).toEqual({
      "--base": "2rem", // Pixels converted to rem using default htmlFontSize of 16
    });
  });

  it("should return an empty object for an empty theme", () => {
    const theme = {};

    const extractor = new CSSVariablesExtractor({ htmlFontSize: 16 });
    const result = extractor.extract(theme);

    expect(result).toEqual({});
  });
});
