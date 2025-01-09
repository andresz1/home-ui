import { cn } from "@adv-re/ui/core";

import { TableOfContent, TableOfContentProps } from "../table-of-content";

export type DocsTableOfContentProps = TableOfContentProps;

export const DocsTableOfContent = ({
  className,
  ...others
}: DocsTableOfContentProps) => {
  return (
    <TableOfContent
      className={cn(className, [
        "hidden xl:block",
        "sticky top-[var(--header-height)]",
        "mt-2xl max-h-[calc(100vh-var(--header-height))] w-sz-256 min-w-sz-256 pt-3xl",
      ])}
      {...others}
    />
  );
};
