import * as fs from "fs";
import * as path from "path";
import {
  defineCollection,
  defineConfig,
  Schema,
  ZodString,
  Context,
} from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Slugger from "github-slugger";
import { marked } from "marked";
import * as examples from "./content/examples";

type DocFrontmatter = {
  title: ZodString;
};

type DocgenNode = {
  tags: Record<string, any>;
  filePath: string;
  description: string;
  displayName: string;
  methods: Record<string, any>;
  props: Record<string, any>;
};

function readDocgenFileSync() {
  try {
    const pathname = "../../../../../packages/ui/dist/docgen.json";

    const data = fs.readFileSync(
      path.resolve(new URL(import.meta.url).pathname, pathname),
      "utf-8"
    );
    return JSON.parse(data) as DocgenNode[];
  } catch (err) {
    return [];
  }
}

const computeDocgen = (
  doc: Schema<"frontmatter", DocFrontmatter>,
  docgen: DocgenNode[]
) => {
  return docgen
    .filter((current) => {
      const [name] = doc._meta.path.split("/").reverse();
      return current.filePath === `src/${name}/index.tsx`;
    })
    .reduce((acc, current) => {
      return {
        ...acc,
        [current.displayName]: current,
      };
    }, {});
};

const computeHeadings = (doc: Schema<"frontmatter", DocFrontmatter>) => {
  const slugger = new Slugger();
  const markdownText = doc.content;
  const headings: Array<{
    level: number;
    text: string;
    id: string;
  }> = [];

  if (!markdownText) {
    return headings;
  }

  slugger.reset();
  const tokens = marked.lexer(markdownText);

  tokens.forEach((token) => {
    if (token.type === "heading") {
      headings.push({
        level: token.depth,
        text: token.text,
        id: slugger.slug(token.text),
      });
    }
  });

  return headings;
};

const computeMDX = (
  document: Schema<"frontmatter", DocFrontmatter>,
  context: Context<Schema<"frontmatter", DocFrontmatter>>
) => {
  return compileMDX(context, document, {
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
};

const computeExamples = (document: Schema<"frontmatter", DocFrontmatter>) => {
  const path = document._meta.path;
  const [slug] = path.split("/").reverse();
  return (examples as unknown as Record<string, string>)[slug];
};

const computeURL = (document: Schema<"frontmatter", DocFrontmatter>) => {
  return `/docs/${document._meta.path}`;
};

const computeSlugAsParams = (
  document: Schema<"frontmatter", DocFrontmatter>
) => {
  return document._meta.path.split("/");
};

const defineCollections = () => {
  const docgen = readDocgenFileSync();

  return {
    documents: defineCollection({
      name: "documents",
      directory: "content/documents",
      include: "**/*.mdx",
      schema: (z) => ({
        title: z.string(),
      }),
      transform: async (document, context) => {
        return {
          ...document,
          mdx: await computeMDX(document, context),
          url: computeURL(document),
          slugAsParams: computeSlugAsParams(document),
          headings: computeHeadings(document),
          examples: computeExamples(document),
          docgen: computeDocgen(document, docgen),
        };
      },
    }),
  };
};

const { documents } = defineCollections();

export default defineConfig({
  collections: [documents],
});
