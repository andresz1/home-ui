import {
  Progress as ProgressPrimitive,
  ProgressProps as ProgressPrimitiveProps,
} from "@radix-ui/react-progress";
import { cx } from "class-variance-authority";
import {
  ComponentRef,
  forwardRef,
  PropsWithChildren,
  useMemo,
  useState,
} from "react";

import { ProgressBar } from "./progress-bar";
import { ProgressContext, ProgressContextValue } from "./progress-context";

export interface ProgressProps
  extends ProgressPrimitiveProps,
    Pick<ProgressContextValue, "intent"> {
  shape?: "square" | "rounded";
  isIndeterminate?: boolean;
}

export const Progress = forwardRef<
  ComponentRef<typeof ProgressPrimitive>,
  PropsWithChildren<ProgressProps>
>(
  (
    {
      className,
      value: valueProp,
      max = 100,
      shape = "square",
      intent = "basic",
      isIndeterminate = false,
      children = <ProgressBar />,
      ...others
    },
    ref
  ) => {
    const [labelId, setLabelId] = useState<string>();

    const value = useMemo(() => {
      return {
        value: valueProp ?? 0,
        max,
        intent,
        shape,
        isIndeterminate,
        onLabelId: setLabelId,
      };
    }, [max, valueProp, intent, shape, isIndeterminate, setLabelId]);

    return (
      <ProgressContext.Provider value={value}>
        <ProgressPrimitive
          ref={ref}
          className={cx("flex flex-col gap-sm", className)}
          value={valueProp}
          aria-labelledby={labelId}
          max={max}
          {...others}
        >
          {children}
        </ProgressPrimitive>
      </ProgressContext.Provider>
    );
  }
);

Progress.displayName = "Progress";
