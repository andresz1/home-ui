import { ComponentPropsWithoutRef } from "react";
import { highlight } from "sugar-high";

import { InlineCode } from "./inline-code";

interface CodeProps extends ComponentPropsWithoutRef<"code"> {}

export const Code = ({ children, className, ...props }: CodeProps) => {
  if (!className) {
    console.log(children);
    return (
      <InlineCode
        dangerouslySetInnerHTML={{
          __html: (children as string).replace(/^`|`$/g, ""),
        }}
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
