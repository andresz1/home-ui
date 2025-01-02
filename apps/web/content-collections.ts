import { defineCollection, defineConfig } from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import * as examples from "./content/examples";

const documents = defineCollection({
  name: "documents",
  directory: "content/documents",
  include: "**/*.mdx",
  schema: (z) => ({
    title: z.string(),
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
            properties: { class: "anchor" },
          },
        ],
      ],
    });
    const [category, slug] = document._meta.path.split("/");
    const map = examples as unknown as Record<string, string>;

    return {
      ...document,
      mdx,
      category,
      slug,
      examples: map[slug],
    };
  },
});

export default defineConfig({
  collections: [documents],
});
