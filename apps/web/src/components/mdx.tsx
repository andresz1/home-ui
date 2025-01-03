import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import React, { ComponentPropsWithoutRef } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { highlight } from "sugar-high";
import { CodeEditor } from "./code-editor";
import { Button } from "@adv-re/ui/button";

interface CodeProps extends ComponentPropsWithoutRef<"code"> {}

const Code = ({ children, className, ...props }: CodeProps) => {
  if (!className) {
    return (
      <code
        className="font-mono text-muted-foreground"
        dangerouslySetInnerHTML={{ __html: children as string }}
        {...props}
      />
    );
  }

  const html = highlight(children as string);

  return (
    <code
      className={className}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  );
};

const components = { code: Code, CodeEditor, Button };

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
