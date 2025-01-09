import { HTMLAttributes } from "react";
import { cn } from "@adv-re/ui/core";

export type InlineCodeProps = HTMLAttributes<HTMLHeadingElement>;

export const InlineCode = ({ className, ...others }: InlineCodeProps) => {
  return (
    <code
      className={cn(
        className,
        "bg-support/dim-5 pe-sm ps-sm text-body-2 text-support"
      )}
      {...others}
    />
  );
};
