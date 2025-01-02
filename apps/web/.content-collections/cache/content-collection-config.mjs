var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// content-collections.ts
import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

// content/examples/index.ts
var examples_exports = {};
__export(examples_exports, {
  button: () => button_exports
});

// content/examples/button.ts
var button_exports = {};
__export(button_exports, {
  basic: () => basic,
  disabled: () => disabled,
  sizes: () => sizes
});
var basic = `
<Button>Basic</Button>
`;
var disabled = `
<Button disabled>Disabled</Button>
`;
var sizes = `
<div className="flex gap-lg">
  <Button size="sm">Button</Button>
  <Button size="md">Button</Button>
  <Button size="lg">Button</Button>
</div>
`;

// content-collections.ts
var documents = defineCollection({
  name: "documents",
  directory: "content/documents",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string()
  }),
  transform: async (document, context) => {
    const mdx = await compileMDX(context, document, {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: "prepend",
            test: ["h2", "h3", "h4", "h5", "h6"],
            properties: { class: "anchor" }
          }
        ]
      ]
    });
    const [category, slug] = document._meta.path.split("/");
    const map = examples_exports;
    return {
      ...document,
      mdx,
      category,
      slug,
      examples: map[slug]
    };
  }
});
var content_collections_default = defineConfig({
  collections: [documents]
});
export {
  content_collections_default as default
};
