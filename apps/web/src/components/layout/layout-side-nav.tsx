import { cx } from "class-variance-authority";
import { Slot } from "@adv-re/ui/slot";

import { LayoutNavProps } from "./layout-nav";

export type LayoutSideNavProps = LayoutNavProps;

export const LayoutSideNav = ({
  className,
  children,
  ...others
}: LayoutSideNavProps) => {
  return (
    <Slot
      className={cx(
        "hidden md:block",
        "sticky top-[--sz-64]",
        "max-h-[calc(100vh-var(--sz-64))] shrink-0 basis-[--sz-256] py-sm",
        className
      )}
      {...others}
    >
      {children}
    </Slot>
  );
};
