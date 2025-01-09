"use client";

import { ComponentProps } from "react";
import { LiveProvider } from "react-live";
import { themes } from "prism-react-renderer";
import { Button } from "@adv-re/ui/button";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@adv-re/ui/tabs";
import { Icon } from "@adv-re/ui/icon";
import { IconButton } from "@adv-re/ui/icon-button";
import * as icons from "react-icons/fi";

import { LivePreview } from "./live-preview";
import { LiveEditor, LiveEditorProps } from "./live-editor";
import { CodeCopyButton } from "./code-copy-button";

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
      scope={{ Button, Icon, IconButton, ...icons, ...scope }}
      {...others}
    >
      <Tabs className="space-y-md" defaultValue="code">
        <TabsList>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="preview">Preview</TabsTrigger>
        </TabsList>

        <TabsContent value="code" forceMount>
          <div className="relative">
            <div className="absolute top-md right-md">
              <CodeCopyButton code={code} />
            </div>

            <LiveEditor size={size} />
          </div>
        </TabsContent>

        <TabsContent value="preview">
          <div className="border-sm rounded-md border-neutral not-prose">
            <LivePreview />
          </div>
        </TabsContent>
      </Tabs>
    </LiveProvider>
  );
};
