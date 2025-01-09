import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from "react";

import { cva, VariantProps } from "../core";

const styles = cva(
  ["inline-block", "border-solid", "rounded-full", "border-md", "animate-spin"],
  {
    variants: {
      size: {
        current: ["u-current-font-size"],
        sm: ["w-sz-20", "h-sz-20"],
        md: ["w-sz-28", "h-sz-28"],
        full: ["w-full", "h-full"],
      },
      intent: {
        current: ["border-current"],
        main: ["border-main"],
        support: ["border-support"],
        accent: ["border-accent"],
        basic: ["border-basic"],
        success: ["border-success"],
        alert: ["border-alert"],
        error: ["border-error"],
        info: ["border-info"],
        neutral: ["border-neutral"],
      },
      isBackgroundVisible: {
        true: ["border-b-neutral-container", "border-l-neutral-container"],
        false: ["border-b-transparent", "border-l-transparent"],
      },
    },
    defaultVariants: {
      intent: "current",
      size: "current",
      isBackgroundVisible: false,
    },
  }
);

type SpinnerStylesProps = VariantProps<typeof styles>;

export interface SpinnerProps
  extends ComponentPropsWithoutRef<"div">,
    SpinnerStylesProps {
  /**
   * Use `label` prop for accessibility, it is important to add a fallback loading text. This text will be visible to screen readers.
   */
  label?: string;
}

export const Spinner = forwardRef<
  HTMLDivElement,
  PropsWithChildren<SpinnerProps>
>(
  (
    {
      className,
      size = "current",
      intent = "current",
      label,
      isBackgroundVisible,
      ...others
    },
    ref
  ) => {
    return (
      <div
        role="status"
        data-spark-component="spinner"
        ref={ref}
        className={styles({
          className,
          size,
          intent,
          isBackgroundVisible,
        })}
        {...others}
      >
        {label && <div className="sr-only">{label}</div>}
      </div>
    );
  }
);
