import { DOMAttributes, forwardRef, useMemo } from "react";

import { cn, cva, tw, VariantProps } from "../core";
import { renderSlot, Slot } from "../slot";
import { Spinner } from "../spinner";

const styles = cva(
  [
    "u-shadow-border-transition",
    "box-border inline-flex items-center justify-center gap-md whitespace-nowrap",
    "px-lg",
    "text-body-1 font-bold",
    "focus-visible:outline-none focus-visible:u-ring [&:not(:focus-visible)]:ring-inset",
  ],
  {
    variants: {
      variant: {
        solid: [],
        outlined: ["bg-transparent", "border-sm", "border-current"],
        ghost: [],
        contrast: ["bg-surface"],
      },
      intent: {
        main: [],
        support: [],
        accent: [],
        basic: [],
        success: [],
        alert: [],
        danger: [],
        info: [],
        neutral: [],
        surface: [],
      },
      size: {
        sm: ["min-w-sz-32", "h-sz-32"],
        md: ["min-w-sz-44", "h-sz-44"],
        lg: ["min-w-sz-56", "h-sz-56"],
      },
      shape: {
        rounded: ["rounded-lg"],
        square: ["rounded-none"],
        pill: ["rounded-full"],
      },
      disabled: {
        true: ["cursor-not-allowed", "opacity-dim-3"],
        false: [],
      },
    },
    compoundVariants: [
      {
        intent: "main",
        variant: "solid",
        class: tw([
          "bg-main",
          "text-on-main",
          "hover:bg-main-hovered",
          "enabled:active:bg-main-hovered",
          "focus-visible:bg-main-hovered",
        ]),
      },
      {
        intent: "support",
        variant: "solid",
        class: tw([
          "bg-support",
          "text-on-support",
          "hover:bg-support-hovered",
          "enabled:active:bg-support-hovered",
          "focus-visible:bg-support-hovered",
        ]),
      },
      {
        intent: "accent",
        variant: "solid",
        class: tw([
          "bg-accent",
          "text-on-accent",
          "hover:bg-accent-hovered",
          "enabled:active:bg-accent-hovered",
          "focus-visible:bg-accent-hovered",
        ]),
      },
      {
        intent: "basic",
        variant: "solid",
        class: tw([
          "bg-basic",
          "text-on-basic",
          "hover:bg-basic-hovered",
          "enabled:active:bg-basic-hovered",
          "focus-visible:bg-basic-hovered",
        ]),
      },
      {
        intent: "success",
        variant: "solid",
        class: tw([
          "bg-success",
          "text-on-success",
          "hover:bg-success-hovered",
          "enabled:active:bg-success-hovered",
          "focus-visible:bg-success-hovered",
        ]),
      },
      {
        intent: "alert",
        variant: "solid",
        class: tw([
          "bg-alert",
          "text-on-alert",
          "hover:bg-alert-hovered",
          "enabled:active:bg-alert-hovered",
          "focus-visible:bg-alert-hovered",
        ]),
      },
      {
        intent: "danger",
        variant: "solid",
        class: tw([
          "text-on-error bg-error",
          "hover:bg-error-hovered enabled:active:bg-error-hovered",
          "focus-visible:bg-error-hovered",
        ]),
      },
      {
        intent: "info",
        variant: "solid",
        class: tw([
          "text-on-error bg-info",
          "hover:bg-info-hovered enabled:active:bg-info-hovered",
          "focus-visible:bg-info-hovered",
        ]),
      },
      {
        intent: "neutral",
        variant: "solid",
        class: tw([
          "bg-neutral",
          "text-on-neutral",
          "hover:bg-neutral-hovered",
          "enabled:active:bg-neutral-hovered",
          "focus-visible:bg-neutral-hovered",
        ]),
      },
      {
        intent: "surface",
        variant: "solid",
        class: tw([
          "bg-surface",
          "text-on-surface",
          "hover:bg-surface-hovered",
          "enabled:active:bg-surface-hovered",
          "focus-visible:bg-surface-hovered",
        ]),
      },
      {
        intent: "main",
        variant: "ghost",
        class: tw([
          "text-main",
          "hover:bg-main/dim-5",
          "enabled:active:bg-main/dim-5",
          "focus-visible:bg-main/dim-5",
        ]),
      },
      {
        intent: "support",
        variant: "ghost",
        class: tw([
          "text-support",
          "hover:bg-support/dim-5",
          "enabled:active:bg-support/dim-5",
          "focus-visible:bg-support/dim-5",
        ]),
      },
      {
        intent: "accent",
        variant: "ghost",
        class: tw([
          "text-accent",
          "hover:bg-accent/dim-5",
          "enabled:active:bg-accent/dim-5",
          "focus-visible:bg-accent/dim-5",
        ]),
      },
      {
        intent: "basic",
        variant: "ghost",
        class: tw([
          "text-basic",
          "hover:bg-basic/dim-5",
          "enabled:active:bg-basic/dim-5",
          "focus-visible:bg-basic/dim-5",
        ]),
      },
      {
        intent: "success",
        variant: "ghost",
        class: tw([
          "text-success",
          "hover:bg-success/dim-5",
          "enabled:active:bg-success/dim-5",
          "focus-visible:bg-success/dim-5",
        ]),
      },
      {
        intent: "alert",
        variant: "ghost",
        class: tw([
          "text-alert",
          "hover:bg-alert/dim-5",
          "enabled:active:bg-alert/dim-5",
          "focus-visible:bg-alert/dim-5",
        ]),
      },
      {
        intent: "danger",
        variant: "ghost",
        class: tw([
          "text-error",
          "hover:bg-error/dim-5",
          "enabled:active:bg-error/dim-5",
          "focus-visible:bg-error/dim-5",
        ]),
      },
      {
        intent: "info",
        variant: "ghost",
        class: tw([
          "text-info",
          "hover:bg-info/dim-5",
          "enabled:active:bg-info/dim-5",
          "focus-visible:bg-info/dim-5",
        ]),
      },
      {
        intent: "neutral",
        variant: "ghost",
        class: tw([
          "text-neutral",
          "hover:bg-neutral/dim-5",
          "enabled:active:bg-neutral/dim-5",
          "focus-visible:bg-neutral/dim-5",
        ]),
      },
      {
        intent: "surface",
        variant: "ghost",
        class: tw([
          "text-surface",
          "hover:bg-surface/dim-5",
          "enabled:active:bg-surface/dim-5",
          "focus-visible:bg-surface/dim-5",
        ]),
      },
      {
        intent: "main",
        variant: "contrast",
        class: tw([
          "text-main",
          "hover:bg-main-container-hovered",
          "enabled:active:bg-main-container-hovered",
          "focus-visible:bg-main-container-hovered",
        ]),
      },
      {
        intent: "support",
        variant: "contrast",
        class: tw([
          "text-support",
          "hover:bg-support-container-hovered",
          "enabled:active:bg-support-container-hovered",
          "focus-visible:bg-support-container-hovered",
        ]),
      },
      {
        intent: "accent",
        variant: "contrast",
        class: tw([
          "text-accent",
          "hover:bg-accent-container-hovered",
          "enabled:active:bg-accent-container-hovered",
          "focus-visible:bg-accent-container-hovered",
        ]),
      },
      {
        intent: "basic",
        variant: "contrast",
        class: tw([
          "text-basic",
          "hover:bg-basic-container-hovered",
          "enabled:active:bg-basic-container-hovered",
          "focus-visible:bg-basic-container-hovered",
        ]),
      },
      {
        intent: "success",
        variant: "contrast",
        class: tw([
          "text-success",
          "hover:bg-success-container-hovered",
          "enabled:active:bg-success-container-hovered",
          "focus-visible:bg-success-container-hovered",
        ]),
      },
      {
        intent: "alert",
        variant: "contrast",
        class: tw([
          "text-alert",
          "hover:bg-alert-container-hovered",
          "enabled:active:bg-alert-container-hovered",
          "focus-visible:bg-alert-container-hovered",
        ]),
      },
      {
        intent: "danger",
        variant: "contrast",
        class: tw([
          "text-error",
          "hover:bg-error-container-hovered",
          "enabled:active:bg-error-container-hovered",
          "focus-visible:bg-error-container-hovered",
        ]),
      },
      {
        intent: "info",
        variant: "contrast",
        class: tw([
          "text-info",
          "hover:bg-info-container-hovered",
          "enabled:active:bg-info-container-hovered",
          "focus-visible:bg-info-container-hovered",
        ]),
      },
      {
        intent: "neutral",
        variant: "contrast",
        class: tw([
          "text-neutral",
          "hover:bg-neutral-container-hovered",
          "enabled:active:bg-neutral-container-hovered",
          "focus-visible:bg-neutral-container-hovered",
        ]),
      },
      {
        intent: "surface",
        variant: "contrast",
        class: tw([
          "text-on-surface",
          "hover:bg-surface-hovered",
          "enabled:active:bg-surface-hovered",
          "focus-visible:bg-surface-hovered",
        ]),
      },
      {
        intent: "main",
        variant: "outlined",
        class: tw([
          "hover:bg-main/dim-5",
          "enabled:active:bg-main/dim-5",
          "focus-visible:bg-main/dim-5",
          "text-main",
        ]),
      },
      {
        intent: "support",
        variant: "outlined",
        class: tw([
          "hover:bg-support/dim-5",
          "enabled:active:bg-support/dim-5",
          "focus-visible:bg-support/dim-5",
          "text-support",
        ]),
      },
      {
        intent: "accent",
        variant: "outlined",
        class: tw([
          "hover:bg-accent/dim-5",
          "enabled:active:bg-accent/dim-5",
          "focus-visible:bg-accent/dim-5",
          "text-accent",
        ]),
      },
      {
        intent: "basic",
        variant: "outlined",
        class: tw([
          "hover:bg-basic/dim-5",
          "enabled:active:bg-basic/dim-5",
          "focus-visible:bg-basic/dim-5",
          "text-basic",
        ]),
      },
      {
        intent: "success",
        variant: "outlined",
        class: tw([
          "hover:bg-success/dim-5",
          "enabled:active:bg-success/dim-5",
          "focus-visible:bg-success/dim-5",
          "text-success",
        ]),
      },
      {
        intent: "alert",
        variant: "outlined",
        class: tw([
          "hover:bg-alert/dim-5",
          "enabled:active:bg-alert/dim-5",
          "focus-visible:bg-alert/dim-5",
          "text-alert",
        ]),
      },
      {
        intent: "danger",
        variant: "outlined",
        class: tw([
          "hover:bg-error/dim-5",
          "enabled:active:bg-error/dim-5",
          "focus-visible:bg-error/dim-5",
          "text-error",
        ]),
      },
      {
        intent: "info",
        variant: "outlined",
        class: tw([
          "hover:bg-info/dim-5",
          "enabled:active:bg-info/dim-5",
          "focus-visible:bg-info/dim-5",
          "text-info",
        ]),
      },
      {
        intent: "neutral",
        variant: "outlined",
        class: tw([
          "hover:bg-neutral/dim-5",
          "enabled:active:bg-neutral/dim-5",
          "focus-visible:bg-neutral/dim-5",
          "text-neutral",
        ]),
      },
      {
        intent: "surface",
        variant: "outlined",
        class: tw([
          "hover:bg-surface/dim-5",
          "enabled:active:bg-surface/dim-5",
          "focus-visible:bg-surface/dim-5",
          "text-surface",
        ]),
      },
    ],
    defaultVariants: {
      variant: "solid",
      intent: "basic",
      size: "md",
      shape: "rounded",
    },
  }
);

type ButtonStylesProps = VariantProps<typeof styles>;

type ButtonEventHandler = keyof Omit<
  DOMAttributes<HTMLButtonElement>,
  "children" | "dangerouslySetInnerHTML"
>;

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    ButtonStylesProps {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: boolean;
  /**
   * Display a spinner to indicate to the user that the button is loading something after they interacted with it.
   */
  isLoading?: boolean;
  /**
   * If your loading state should only display a spinner, it's better to specify a label for it (a11y).
   */
  loadingLabel?: string;
  /**
   * If your loading state should also display a label, you can use this prop instead of `loadingLabel`.
   * **Please note that using this can result in layout shifting when the Button goes from loading state to normal state.**
   */
  loadingText?: string;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      variant,
      intent,
      size = "md",
      shape,
      disabled,
      isLoading,
      loadingText,
      loadingLabel,
      asChild,
      className,
      ...others
    },
    ref
  ) => {
    const Component = asChild ? Slot : "button";

    const handlers = useMemo(() => {
      const result: Partial<Record<ButtonEventHandler, () => void>> = {};

      const blocked: ButtonEventHandler[] = [
        "onClick",
        "onMouseDown",
        "onMouseUp",
        "onMouseEnter",
        "onMouseLeave",
        "onMouseOver",
        "onMouseOut",
        "onKeyDown",
        "onKeyPress",
        "onKeyUp",
        "onSubmit",
      ];

      if (isLoading) {
        blocked.forEach((eventHandler) => (result[eventHandler] = undefined));
      }

      return result;
    }, [isLoading]);

    return (
      <Component
        ref={ref}
        className={styles({
          className,
          variant,
          intent,
          size,
          shape,
          disabled: !!disabled || !!isLoading,
        })}
        type="button"
        disabled={!!disabled}
        aria-busy={isLoading}
        aria-live={isLoading ? "assertive" : "off"}
        {...others}
        {...handlers}
      >
        {renderSlot(asChild, children, (slotted) =>
          isLoading ? (
            <>
              <Spinner
                size="current"
                className={loadingText ? "inline-block" : "absolute"}
                aria-label={loadingLabel}
              />

              {loadingText && loadingText}

              <div
                aria-hidden
                className={cn(
                  "inline-flex gap-md",
                  loadingText ? "hidden" : "-opacity-0"
                )}
              >
                {slotted}
              </div>
            </>
          ) : (
            slotted
          )
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";
