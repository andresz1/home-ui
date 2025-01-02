import path from "node:path";
import postcss from "postcss";
import type { Config } from "tailwindcss";
import tailwindcss from "tailwindcss";
import { theme } from "@adv-re/theme";
import { sizingPlugin, themePlugin, utilitiesPlugin } from "../src";

const html = String.raw;

const run = (
  config: Partial<Config>,
  css = "@tailwind utilities",
  plugin: typeof tailwindcss = tailwindcss
) => {
  const { currentTestName } = expect.getState();

  const current = {
    corePlugins: {
      preflight: false,
    },
    ...config,
  };

  return postcss(plugin(current as Config)).process(css, {
    from: `${path.resolve(__filename)}?test=${currentTestName}`,
  });
};

describe("plugins", () => {
  describe("theme", () => {
    it("should add css variables", async () => {
      const config = {
        plugins: [
          themePlugin({ htmlFontSize: 16, themes: { default: theme } }),
        ],
      };

      const { css } = await run(config, "@tailwind base");

      const rootMatch = /:root\s*{[^}]+}/.exec(css);
      const root = rootMatch ? rootMatch[0] : "";

      expect(root).toMatchInlineSnapshot(`
        ":root {
            --border-radius-none: 0px;
            --border-radius-sm: 0.25rem;
            --border-radius-md: 0.5rem;
            --border-radius-lg: 1rem;
            --border-radius-xl: 1.5rem;
            --border-radius-full: 9999px;
            --border-width-none: 0px;
            --border-width-sm: 1px;
            --border-width-md: 2px;
            --box-shadow-sm: 0 1px 2px 0 rgba(108 129 157 / 0.50);
            --box-shadow: 0 4px 8px 0 rgba(108 129 157 / 0.50);
            --box-shadow-md: 0 6px 12px 0 rgba(108 129 157 / 0.50);
            --box-shadow-lg: 0 8px 16px 0 rgba(108 129 157 / 0.50);
            --box-shadow-xl: 0 12px 24px 0 rgba(108 129 157 / 0.50);
            --box-shadow-none: none;
            --colors-basic: 9 65 113;
            --colors-on-basic: 255 255 255;
            --colors-basic-hovered: 12 82 145;
            --colors-basic-container: 230 242 253;
            --colors-on-basic-container: 21 34 51;
            --colors-basic-container-hovered: 244 249 254;
            --colors-accent: 133 38 217;
            --colors-on-accent: 255 255 255;
            --colors-accent-hovered: 159 71 235;
            --colors-accent-container: 233 214 250;
            --colors-on-accent-container: 54 37 85;
            --colors-accent-container-hovered: 245 237 253;
            --colors-accent-variant: 80 23 130;
            --colors-on-accent-variant: 255 255 255;
            --colors-accent-variant-hovered: 107 31 173;
            --colors-main: 236 90 19;
            --colors-on-main: 255 255 255;
            --colors-main-hovered: 240 123 66;
            --colors-main-container: 255 233 222;
            --colors-on-main-container: 137 56 15;
            --colors-main-container-hovered: 255 242 235;
            --colors-main-variant: 184 74 20;
            --colors-on-main-variant: 255 255 255;
            --colors-main-variant-hovered: 236 90 19;
            --colors-support: 9 65 113;
            --colors-on-support: 255 255 255;
            --colors-support-hovered: 12 82 145;
            --colors-support-container: 230 242 253;
            --colors-on-support-container: 21 34 51;
            --colors-support-container-hovered: 244 249 254;
            --colors-support-variant: 12 82 145;
            --colors-on-support-variant: 255 255 255;
            --colors-support-variant-hovered: 15 105 185;
            --colors-success: 29 99 64;
            --colors-on-success: 255 255 255;
            --colors-success-hovered: 39 132 86;
            --colors-success-container: 224 242 233;
            --colors-on-success-container: 29 99 64;
            --colors-success-container-hovered: 245 251 248;
            --colors-alert: 255 170 0;
            --colors-on-alert: 32 39 48;
            --colors-alert-hovered: 255 187 51;
            --colors-alert-container: 255 238 204;
            --colors-on-alert-container: 102 68 0;
            --colors-alert-container-hovered: 255 246 229;
            --colors-error: 173 41 31;
            --colors-on-error: 255 255 255;
            --colors-error-hovered: 217 52 38;
            --colors-error-container: 247 215 212;
            --colors-on-error-container: 130 32 23;
            --colors-error-container-hovered: 251 236 235;
            --colors-info: 12 82 145;
            --colors-on-info: 255 255 255;
            --colors-info-hovered: 15 105 185;
            --colors-info-container: 194 224 250;
            --colors-on-info-container: 12 82 145;
            --colors-info-container-hovered: 230 242 253;
            --colors-neutral: 58 71 87;
            --colors-on-neutral: 255 255 255;
            --colors-neutral-hovered: 79 96 118;
            --colors-neutral-container: 240 242 245;
            --colors-on-neutral-container: 58 71 87;
            --colors-neutral-container-hovered: 246 248 249;
            --colors-background: 255 255 255;
            --colors-on-background: 21 34 51;
            --colors-background-variant: 244 249 254;
            --colors-on-background-variant: 21 34 51;
            --colors-surface: 255 255 255;
            --colors-on-surface: 21 34 51;
            --colors-surface-hovered: 246 248 249;
            --colors-surface-inverse: 43 52 65;
            --colors-on-surface-inverse: 255 255 255;
            --colors-surface-inverse-hovered: 58 71 87;
            --colors-outline: 172 184 199;
            --colors-outline-high: 32 39 48;
            --colors-overlay: 32 39 48;
            --colors-on-overlay: 255 255 255;
            --font-family-sans: "Nunito Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            --font-family-mono: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
            --font-size-display-1-font-size: 2.5rem;
            --font-size-display-1-line-height: 3.5rem;
            --font-size-display-1-font-weight: 700;
            --font-size-display-1-expanded-font-size: 3rem;
            --font-size-display-1-expanded-line-height: 4rem;
            --font-size-display-1-expanded-font-weight: 700;
            --font-size-display-2-font-size: 2rem;
            --font-size-display-2-line-height: 2.75rem;
            --font-size-display-2-font-weight: 700;
            --font-size-display-2-expanded-font-size: 2.5rem;
            --font-size-display-2-expanded-line-height: 3.5rem;
            --font-size-display-2-expanded-font-weight: 700;
            --font-size-display-3-font-size: 1.5rem;
            --font-size-display-3-line-height: 2rem;
            --font-size-display-3-font-weight: 700;
            --font-size-display-3-expanded-font-size: 2rem;
            --font-size-display-3-expanded-line-height: 2.75rem;
            --font-size-display-3-expanded-font-weight: 700;
            --font-size-headline-1-font-size: 1.25rem;
            --font-size-headline-1-line-height: 1.75rem;
            --font-size-headline-1-font-weight: 700;
            --font-size-headline-1-expanded-font-size: 1.5rem;
            --font-size-headline-1-expanded-line-height: 2rem;
            --font-size-headline-1-expanded-font-weight: 700;
            --font-size-headline-2-font-size: 1.125rem;
            --font-size-headline-2-line-height: 1.5rem;
            --font-size-headline-2-font-weight: 700;
            --font-size-headline-2-expanded-font-size: 1.25rem;
            --font-size-headline-2-expanded-line-height: 1.75rem;
            --font-size-headline-2-expanded-font-weight: 700;
            --font-size-subhead-font-size: 1rem;
            --font-size-subhead-line-height: 1.5rem;
            --font-size-subhead-font-weight: 700;
            --font-size-subhead-expanded-font-size: 1rem;
            --font-size-subhead-expanded-line-height: 1.5rem;
            --font-size-subhead-expanded-font-weight: 700;
            --font-size-body-1-font-size: 1rem;
            --font-size-body-1-line-height: 1.5rem;
            --font-size-body-2-font-size: 0.875rem;
            --font-size-body-2-line-height: 1.25rem;
            --font-size-caption-font-size: 0.75rem;
            --font-size-caption-line-height: 1rem;
            --font-size-small-font-size: 0.625rem;
            --font-size-small-line-height: 0.875rem;
            --font-size-body-1-link-font-size: 1rem;
            --font-size-body-1-link-line-height: 1.5rem;
            --font-size-body-2-link-font-size: 0.875rem;
            --font-size-body-2-link-line-height: 1.125rem;
            --font-size-caption-link-font-size: 0.75rem;
            --font-size-caption-link-line-height: 1rem;
            --font-size-callout-font-size: 1rem;
            --font-size-callout-line-height: 1.5rem;
            --font-weight-regular: 400;
            --font-weight-medium: 500;
            --font-weight-semi-bold: 600;
            --font-weight-bold: 700;
            --opacity--0: 0;
            --opacity-none: 1;
            --opacity-dim-1: 0.72;
            --opacity-dim-2: 0.56;
            --opacity-dim-3: 0.40;
            --opacity-dim-4: 0.16;
            --opacity-dim-5: 0.08;
            --screens-sm: 640px;
            --screens-md: 768px;
            --screens-lg: 1024px;
            --screens-xl: 1280px;
            --spacing-auto: auto;
            --spacing-none: 0px;
            --spacing-sm: 0.25rem;
            --spacing-md: 0.5rem;
            --spacing-lg: 1rem;
            --spacing-xl: 1.5rem;
            --spacing--2xl: 2rem;
            --spacing--3xl: 2.5rem;
            --z-index-hide: -1;
            --z-index-base: 0;
            --z-index-raised: 1;
            --z-index-dropdown: 1000;
            --z-index-sticky: 1100;
            --z-index-overlay: 1300;
            --z-index-modal: 1400;
            --z-index-popover: 1500;
            --z-index-skip-link: 1600;
            --z-index-toast: 1700;
            --z-index-tooltip: 1800
        }"
      `);
    });

    it("should parse hex colors into rgb variables with alpha channel", async () => {
      const config = {
        plugins: [
          themePlugin({ htmlFontSize: 16, themes: { default: theme } }),
        ],
        content: [
          {
            raw: html`<div class="bg-basic" />`,
          },
        ],
      };

      const { css } = await run(config, "@tailwind utilities");

      expect(css).toMatchInlineSnapshot(`
        ".bg-basic {
            --tw-bg-opacity: 1;
            background-color: rgb(var(--colors-basic) / var(--tw-bg-opacity, 1))
        }"
      `);
    });

    it("should parse font size objects with their properties", async () => {
      const config = {
        plugins: [
          themePlugin({ htmlFontSize: 16, themes: { default: theme } }),
        ],
        content: [
          {
            raw: html`<div class="text-display-1" />`,
          },
        ],
      };

      const { css } = await run(config, "@tailwind utilities");

      expect(css).toMatchInlineSnapshot(`
        ".text-display-1 {
            font-size: var(--font-size-display--1-font-size);
            line-height: var(--font-size-display--1-line-height);
            letter-spacing: var(--font-size-display--1-letter-spacing);
            font-weight: var(--font-size-display--1-font-weight)
        }"
      `);
    });
  });

  describe("sizing", () => {
    it("should add css variables", async () => {
      const config = {
        plugins: [sizingPlugin({})],
      };

      const { css } = await run(config, "@tailwind base");

      const rootMatch = /:root\s*{[^}]+}/.exec(css);
      const root = rootMatch ? rootMatch[0] : "";

      expect(root).toMatchInlineSnapshot(`
        ":root {
            --sz-0: 0rem;
            --sz-1: 0.0625rem;
            --sz-2: 0.125rem;
            --sz-4: 0.25rem;
            --sz-6: 0.375rem;
            --sz-8: 0.5rem;
            --sz-10: 0.625rem;
            --sz-12: 0.75rem;
            --sz-14: 0.875rem;
            --sz-16: 1rem;
            --sz-20: 1.25rem;
            --sz-24: 1.5rem;
            --sz-28: 1.75rem;
            --sz-32: 2rem;
            --sz-36: 2.25rem;
            --sz-40: 2.5rem;
            --sz-44: 2.75rem;
            --sz-48: 3rem;
            --sz-56: 3.5rem;
            --sz-64: 4rem;
            --sz-80: 5rem;
            --sz-96: 6rem;
            --sz-112: 7rem;
            --sz-128: 8rem;
            --sz-144: 9rem;
            --sz-160: 10rem;
            --sz-176: 11rem;
            --sz-192: 12rem;
            --sz-208: 13rem;
            --sz-224: 14rem;
            --sz-240: 15rem;
            --sz-256: 16rem;
            --sz-288: 18rem;
            --sz-320: 20rem;
            --sz-384: 24rem;
            --sz-400: 25rem;
            --sz-416: 26rem;
            --sz-432: 27rem;
            --sz-448: 28rem;
            --sz-464: 29rem;
            --sz-480: 30rem;
            --sz-512: 32rem;
            --sz-544: 34rem;
            --sz-576: 36rem;
            --sz-608: 38rem;
            --sz-640: 40rem;
            --sz-672: 42rem;
            --sz-704: 44rem;
            --sz-736: 46rem;
            --sz-768: 48rem;
            --sz-800: 50rem;
            --sz-832: 52rem;
            --sz-864: 54rem
        }"
      `);
    });

    it("should add classes", async () => {
      const config = {
        plugins: [sizingPlugin({})],
        content: [
          {
            raw: html`<div class="w-sz-6" />`,
          },
        ],
      };

      const { css } = await run(config, "@tailwind utilities");

      expect(css).toMatchInlineSnapshot(`
        ".w-sz-6 {
            width: var(--sz-6)
        }"
      `);
    });
  });

  describe("utilities", () => {
    it("should add current font size class", async () => {
      const config = {
        plugins: [utilitiesPlugin({})],
        content: [
          {
            raw: html`<div class="u-current-font-size" />`,
          },
        ],
      };

      const { css } = await run(config, "@tailwind utilities");

      expect(css).toMatchInlineSnapshot(`
        ".u-current-font-size {
            width: 1em;
            height: 1em
        }"
      `);
    });

    it("should add no scrollbar class", async () => {
      const config = {
        plugins: [utilitiesPlugin({})],
        content: [
          {
            raw: html`<div class="u-no-scrollbar" />`,
          },
        ],
      };

      const { css } = await run(config, "@tailwind utilities");

      expect(css).toMatchInlineSnapshot(`
        ".u-no-scrollbar {
            scrollbar-width: none;
        }
        .u-no-scrollbar::-webkit-scrollbar {
            display: none;
        }"
      `);
    });
  });
});
