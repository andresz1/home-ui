var __defProp = Object.defineProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// content-collections.ts
import * as fs from "fs";
import * as path from "path";
import {
  defineCollection,
  defineConfig
} from "@content-collections/core";
import { compileMDX } from "@content-collections/mdx";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import Slugger from "github-slugger";
import { marked } from "marked";

// content/examples/index.ts
var examples_exports = {};
__export(examples_exports, {
  button: () => button_exports,
  "icon-button": () => icon_button_exports
});

// content/examples/button.ts
var button_exports = {};
__export(button_exports, {
  basic: () => basic,
  disabled: () => disabled,
  intent: () => intent,
  link: () => link,
  loading: () => loading,
  loadingText: () => loadingText,
  shape: () => shape,
  size: () => size,
  toggle: () => toggle,
  variant: () => variant
});
var basic = `
<Button>Basic</Button>
`;
var variant = `
<div className="flex flex-wrap gap-md">
  <Button variant="solid">
    Solid
  </Button>
  <Button variant="outlined">
    Outlined
  </Button>
  <Button variant="ghost">
    Ghost
  </Button>
  <Button variant="contrast">
    Contrast
  </Button>
</div>
`;
var disabled = `
<Button disabled>Disabled</Button>
`;
var intent = `
<div className="inline-flex w-full flex-wrap gap-md">
  <Button intent="main">
    main button
  </Button>
  <Button intent="support">
    support button
  </Button>
  <Button intent="accent">
    accent button
  </Button>
  <Button intent="basic">
    basic button
  </Button>
  <Button intent="success">
    success button
  </Button>
  <Button intent="alert">
    alert button
  </Button>
  <Button intent="danger">
    danger button
  </Button>
  <Button intent="info">
    info button
  </Button>
  <Button intent="neutral">
    neutral button
  </Button>
  <Button intent="surface">
    surface button
  </Button>
</div>
`;
var loading = `
<Button isLoading>Button</Button>
`;
var loadingText = `
<Button loadingText="Loading" isLoading>Button</Button>
`;
var shape = `
<div className="flex gap-lg">
  <Button shape="rounded">Button</Button>
  <Button shape="square">Button</Button>
  <Button shape="pill">Button</Button>
</div>
`;
var size = `
() => {
  return (
    <div className="flex gap-lg">
      <Button size="sm">Button</Button>
      <Button size="md">Button</Button>
      <Button size="lg">Button</Button>
    </div>
  )
}
`;
var link = `
<Button asChild>
  <a href="/">
    Link
  </a>
</Button>
`;
var toggle = `
() => {
  const [pressed, setPressed] = React.useState(false);
  const toggle = () => setPressed(!pressed);

  return (
    <Button aria-pressed={pressed} onClick={toggle} design={pressed ? 'filled' : 'outlined'}>
      Toggle
      {pressed && (
        <Icon>
          <FiCheck />
        </Icon>
      )}
    </Button>
  )
}
`;

// content/examples/icon-button.ts
var icon_button_exports = {};
__export(icon_button_exports, {
  basic: () => basic2,
  disabled: () => disabled2,
  sizes: () => sizes
});
var basic2 = `
<Button>Basic</Button>
`;
var disabled2 = `
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
function readDocgenFileSync() {
  try {
    const pathname = "../../../../../packages/ui/dist/docgen.json";
    const data = fs.readFileSync(
      path.resolve(new URL(import.meta.url).pathname, pathname),
      "utf-8"
    );
    return JSON.parse(data);
  } catch (err) {
    return [];
  }
}
var computeDocgen = (doc, docgen) => {
  return docgen.filter((current) => {
    const [name] = doc._meta.path.split("/").reverse();
    return current.filePath === `src/${name}/index.tsx`;
  }).reduce((acc, current) => {
    return {
      ...acc,
      [current.displayName]: current
    };
  }, {});
};
var computeHeadings = (doc) => {
  const slugger = new Slugger();
  const markdownText = doc.content;
  const headings = [];
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
        id: slugger.slug(token.text)
      });
    }
  });
  return headings;
};
var computeMDX = (document, context) => {
  return compileMDX(context, document, {
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
};
var computeExamples = (document) => {
  const path2 = document._meta.path;
  const [slug] = path2.split("/").reverse();
  return examples_exports[slug];
};
var computeURL = (document) => {
  return `/docs/${document._meta.path}`;
};
var computeSlugAsParams = (document) => {
  return document._meta.path.split("/");
};
var defineCollections = () => {
  const docgen = readDocgenFileSync();
  return {
    documents: defineCollection({
      name: "documents",
      directory: "content/documents",
      include: "**/*.mdx",
      schema: (z) => ({
        title: z.string()
      }),
      transform: async (document, context) => {
        return {
          ...document,
          mdx: await computeMDX(document, context),
          url: computeURL(document),
          slugAsParams: computeSlugAsParams(document),
          headings: computeHeadings(document),
          examples: computeExamples(document),
          docgen: computeDocgen(document, docgen)
        };
      }
    })
  };
};
var { documents } = defineCollections();
var content_collections_default = defineConfig({
  collections: [documents]
});
export {
  content_collections_default as default
};
