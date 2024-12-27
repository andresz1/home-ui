import { TailwindThemeParser } from "../src/plugins/theme/tailwind-theme-parser";

describe("TailwindThemeParser", () => {
  let parser: TailwindThemeParser;

  beforeEach(() => {
    parser = new TailwindThemeParser();
  });

  describe("parse", () => {
    it("should parse hex colors into rgb variables with alpha channel", () => {
      const theme = {
        colors: {
          main: "#ff0000",
          support: "#00ff00",
        },
      };

      const result = parser.parse(theme);

      expect(result.colors).toEqual({
        main: "rgb(var(--colors-main) / <alpha-value>)",
        support: "rgb(var(--colors-support) / <alpha-value>)",
      });
    });

    it("should handle numeric values", () => {
      const theme = {
        spacing: {
          sm: 4,
          md: 8,
          lg: 16,
        },
      };

      const result = parser.parse(theme);

      expect(result.spacing).toEqual({
        sm: "var(--spacing-sm)",
        md: "var(--spacing-md)",
        lg: "var(--spacing-lg)",
      });
    });

    it("should parse fontSize objects with their properties", () => {
      const theme = {
        fontSize: {
          display1: {
            fontSize: "2.5rem",
            lineHeight: "3.5rem",
            fontWeight: "700",
          },
          display1Expanded: {
            fontSize: "3rem",
            lineHeight: "4rem",
            fontWeight: "700",
          },
        },
      };

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
      const theme = {
        colors: {
          blue: {
            light: {
              DEFAULT: "#e3f2fd",
              hover: "#bbdefb",
            },
          },
        },
      };

      const result = parser.parse(theme);

      expect(result.colors.blue.light).toEqual({
        DEFAULT: "rgb(var(--colors-blue-light) / <alpha-value>)",
        hover: "rgb(var(--colors-blue-light-hover) / <alpha-value>)",
      });
    });

    it("should ignore DEFAULT key in path construction", () => {
      const theme = {
        borderRadius: {
          DEFAULT: "4px",
          lg: "8px",
        },
      };

      const result = parser.parse(theme);

      expect(result.borderRadius).toEqual({
        DEFAULT: "var(--border-radius)",
        lg: "var(--border-radius-lg)",
      });
    });

    it("should convert camelCase to kebab-case in paths", () => {
      const theme = {
        borderWidth: {
          thinBorder: "1px",
          thickBorder: "2px",
        },
      };

      const result = parser.parse(theme);

      expect(result.borderWidth).toEqual({
        "thin-border": "var(--border-width-thin-border)",
        "thick-border": "var(--border-width-thick-border)",
      });
    });
  });
});
