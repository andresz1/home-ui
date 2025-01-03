import { cva, VariantProps } from "../core";
import { Children, cloneElement, ComponentPropsWithoutRef } from "react";

export const iconStyles = cva(["fill-current shrink-0"], {
  variants: {
    intent: {
      current: ["text-current"],
      main: ["text-main"],
      support: ["text-support"],
      accent: ["text-accent"],
      basic: ["text-basic"],
      success: ["text-success"],
      alert: ["text-alert"],
      error: ["text-error"],
      info: ["text-info"],
      neutral: ["text-neutral"],
    },
    size: {
      current: ["u-current-font-size"],
      sm: ["w-sz-16", "h-sz-16"],
      md: ["w-sz-24", "h-sz-24"],
      lg: ["w-sz-32", "h-sz-32"],
      xl: ["w-sz-40", "h-sz-40"],
    },
  },
});

export type IconVariantsProps = VariantProps<typeof iconStyles>;

export interface IconProps
  extends IconVariantsProps,
    ComponentPropsWithoutRef<"svg"> {
  /**
   * The svg icon that will be wrapped
   */
  children: React.ReactElement;
  /**
   * The accessible label for the icon. This label will be visually hidden but announced to screen
   * reader users, similar to `alt` text for `img` tags.
   */
  label?: string;
}

export const Icon = ({
  label,
  className,
  size = "current",
  intent = "current",
  children,
  ...others
}: IconProps) => {
  const child = Children.only(children) as React.ReactElement<any>;

  return (
    <>
      {cloneElement(child, {
        className: iconStyles({ className, size, intent }),
        "aria-hidden": "true",
        focusable: "false",
        ...others,
      })}

      {label && <div className="sr-only">{label}</div>}
    </>
  );
};

Icon.displayName = "Icon";
