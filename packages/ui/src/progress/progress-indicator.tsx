import { ProgressIndicator as ProgressIndicatorPrimitive } from "@radix-ui/react-progress";
import {
  ComponentPropsWithoutRef,
  ComponentRef,
  forwardRef,
  PropsWithChildren,
} from "react";

import { cva, VariantProps } from "../core";
import { useProgress } from "./progress-context";

const styles = cva(["h-full w-full", "transition-transform duration-400"], {
  variants: {
    intent: {
      basic: ["bg-basic"],
      main: ["bg-main"],
      support: ["bg-support"],
      accent: ["bg-accent"],
      success: ["bg-success"],
      alert: ["bg-alert"],
      danger: ["bg-error"],
      info: ["bg-info"],
      neutral: ["bg-neutral"],
    },
    shape: {
      square: [],
      rounded: ["rounded-sm"],
    },
    isIndeterminate: {
      true: [
        "absolute",
        "-translate-x-1/2",
        "animate-standalone-indeterminate-bar",
      ],
      false: [],
    },
  },
});

export type ProgressIndicatorStylesProps = VariantProps<typeof styles>;

export type ProgressIndicatorProps = ComponentPropsWithoutRef<"div">;

export const ProgressIndicator = forwardRef<
  ComponentRef<typeof ProgressIndicatorPrimitive>,
  PropsWithChildren<ProgressIndicatorProps>
>(({ className, style, ...others }, ref) => {
  const { value, max, intent, shape, isIndeterminate } = useProgress();
  const x = ((max - value) / max) * 100;

  return (
    <ProgressIndicatorPrimitive
      className={styles({
        className,
        intent,
        shape,
        isIndeterminate,
      })}
      style={{
        ...style,
        ...(!isIndeterminate && { transform: `translateX(-${x}%)` }),
      }}
      ref={ref}
      {...others}
    />
  );
});

ProgressIndicator.displayName = "Progress.Indicator";
