import { theme } from "@adv-re/theme";
import { ThemeParser } from "../src/plugins/theme/theme-parser";

describe.skip("ThemeParser", () => {
  let parser: ThemeParser;

  beforeEach(() => {
    parser = new ThemeParser();
  });

  describe("parse", () => {
    it("should parse hex colors into rgb variables with alpha channel", () => {
      const result = parser.parse(theme);

      expect(result.colors).toEqual({
        main: "rgb(var(--colors-main) / <alpha-value>)",
        support: "rgb(var(--colors-support) / <alpha-value>)",
      });
    });

    it("should handle numeric values", () => {
      const result = parser.parse(theme);

      expect(result.spacing).toEqual({
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
      });
    });

    it("should parse fontSize objects with their properties", () => {
      const result = parser.parse(theme);

      expect(result.fontSize).toEqual({
        "display-1": [
          "var(--font-size-display--1-font-size)",
          {
            fontWeight: "var(--font-size-display--1-font-weight)",
            letterSpacing: "var(--font-size-display--1-letter-spacing)",
            lineHeight: "var(--font-size-display--1-line-height)",
          },
        ],
        "display-1-expanded": [
          "var(--font-size-display--1-expanded-font-size)",
          {
            fontWeight: "var(--font-size-display--1-expanded-font-weight)",
            letterSpacing:
              "var(--font-size-display--1-expanded-letter-spacing)",
            lineHeight: "var(--font-size-display--1-expanded-line-height)",
          },
        ],
      });
    });

    it("should handle deeply nested objects", () => {
      const result = parser.parse(theme);

      expect(result.colors.blue.light).toEqual({
        DEFAULT: "rgb(var(--colors-blue-light) / <alpha-value>)",
        hover: "rgb(var(--colors-blue-light-hover) / <alpha-value>)",
      });
    });

    it("should ignore DEFAULT key in path construction", () => {
      const result = parser.parse(theme);

      expect(result.borderRadius).toEqual({
        DEFAULT: "var(--border-radius)",
        lg: "var(--border-radius-lg)",
      });
    });

    it("should convert camelCase to kebab-case in paths", () => {
      const result = parser.parse(theme);

      expect(result.borderWidth).toEqual({
        "thin-border": "var(--border-width-thin-border)",
        "thick-border": "var(--border-width-thick-border)",
      });
    });
  });
});
