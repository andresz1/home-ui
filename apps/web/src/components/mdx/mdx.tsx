import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";

import { CodeEditor } from "./code-editor";
import { Code } from "./code";
import { PropsTable } from "./props-table";

const components = {
  code: Code,
  CodeEditor,
  PropsTable,
};

export type MDXProps = MDXRemoteProps;

export const MDX = (props: MDXProps) => {
  return (
    <div className="prose prose-neutral dark:prose-invert min-w-full">
      <MDXRemote
        {...props}
        components={{ ...components, ...props.components }}
        options={{
          ...props.options,
          mdxOptions: {
            ...props.options?.mdxOptions,
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
          },
        }}
      />
    </div>
  );
};
