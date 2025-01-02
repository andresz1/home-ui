"use client";

import { ComponentProps } from "react";
import { LiveProvider } from "react-live";
import { themes } from "prism-react-renderer";

import { LivePreview } from "./live-preview";
import { LiveEditor, LiveEditorProps } from "./live-editor";
import { Button } from "@adv-re/ui/button";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@adv-re/ui/tabs";

export interface CodeEditorProps
  extends ComponentProps<typeof LiveProvider>,
    Pick<LiveEditorProps, "size"> {}

export const CodeEditor = ({
  code: codeProp,
  size,
  scope,
  ...others
}: CodeEditorProps) => {
  const code = codeProp?.trim() || "";

  return (
    <LiveProvider
      theme={themes.vsDark}
      code={code}
      scope={{ Button, ...scope }}
      {...others}
    >
      <Tabs className="space-y-md" defaultValue="code">
        <TabsList>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="code" forceMount>
          <LiveEditor size={size} />
        </TabsContent>

        <TabsContent value="preview">
          <div className="border-sm rounded-md border-neutral">
            <LivePreview />
          </div>
        </TabsContent>
      </Tabs>
    </LiveProvider>
  );
};
