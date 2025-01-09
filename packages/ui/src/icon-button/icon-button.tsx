import { forwardRef } from "react";

import { Button, ButtonProps } from "../button";
import { cva, VariantProps } from "../core";

const styles = cva(["px-none"], {
  variants: {
    /**
     * Sets the size of the icon.
     */
    size: {
      sm: ["text-body-1"],
      md: ["text-body-1"],
      lg: ["text-display-3"],
    },
  },
});

export type IconButtonStylesProps = VariantProps<typeof styles>;

export interface IconButtonProps extends Omit<ButtonProps, "loadingText"> {
  "aria-label": string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    {
      className,
      variant = "solid",
      disabled = false,
      intent = "main",
      shape = "rounded",
      size = "md",
      ...others
    },
    ref
  ) => {
    return (
      <Button
        ref={ref}
        className={styles({ size, className })}
        variant={variant}
        disabled={disabled}
        intent={intent}
        shape={shape}
        size={size}
        {...others}
      />
    );
  }
);

IconButton.displayName = "IconButton";
