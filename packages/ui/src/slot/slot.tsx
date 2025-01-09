import { Slot as SlotPrimitive } from "@radix-ui/react-slot";
import React, { forwardRef, PropsWithChildren, ReactNode } from "react";

export { Slottable } from "@radix-ui/react-slot";

export type SlotProps = PropsWithChildren<React.HTMLAttributes<HTMLElement>>;

export const Slot = forwardRef<HTMLElement, SlotProps>((props, ref) => {
  return <SlotPrimitive ref={ref} {...props} />;
});

export const renderSlot = (
  asChild: boolean | undefined,
  children: ReactNode,
  callback: (children: ReactNode) => ReactNode
) => {
  if (!asChild) {
    return callback(children);
  }

  if (React.isValidElement(children)) {
    const props = (children.props as { children?: ReactNode }) || {};
    return React.cloneElement(children, undefined, callback(props.children));
  }

  return null;
};
