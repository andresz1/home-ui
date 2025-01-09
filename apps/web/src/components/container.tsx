import { Slot } from "@adv-re/ui/slot";
import { cx } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";

export interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

export const Container = ({
  className,
  asChild,
  ...others
}: ContainerProps) => {
  const Component = asChild ? Slot : "div";

  return (
    <Component
      className={cx(className, "m-auto max-w-[90rem] px-lg")}
      {...others}
    />
  );
};
