import path from "node:path";
import postcss from "postcss";
import type { Config } from "tailwindcss";
import tailwindcss from "tailwindcss";
import { theme } from "@adv-re/theme";
import { themePlugin } from "../src/plugins/theme";

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

      expect(css).toMatchSnapshot();
    });

    it("should parse hex colors into rgb variables with alpha channel", async () => {
      const config = {
        plugins: [
          themePlugin({ htmlFontSize: 16, themes: { default: theme } }),
        ],
        content: [
          {
            raw: html`<div class="bg-basic" /> `,
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
            raw: html`<div class="text-display-1" /> `,
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
});
