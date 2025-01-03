import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from "react";

import { cva } from "../core";
import { ProgressIndicator } from "./progress-indicator";

const styles = cva(
  [
    "relative",
    "h-sz-4 w-full",
    "transform-gpu overflow-hidden",
    "bg-on-background/dim-4",
  ],
  {
    variants: {
      shape: {
        square: [],
        rounded: ["rounded-sm"],
      },
    },
  }
);
import { useProgress } from "./progress-context";

export type ProgressBarProps = ComponentPropsWithoutRef<"div">;

export const ProgressBar = forwardRef<
  HTMLDivElement,
  PropsWithChildren<ProgressBarProps>
>(({ className, children = <ProgressIndicator />, ...others }, ref) => {
  const { shape } = useProgress();

  return (
    <div className={styles({ className, shape })} ref={ref} {...others}>
      {children}
    </div>
  );
});

ProgressBar.displayName = "Progress.Bar";
