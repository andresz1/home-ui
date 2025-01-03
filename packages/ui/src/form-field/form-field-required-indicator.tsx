import { forwardRef } from "react";

import { cn } from "../core";
import { Label, LabelRequiredIndicatorProps } from "../label";

export type FormFieldRequiredIndicatorProps = LabelRequiredIndicatorProps;

export const FormFieldRequiredIndicator = forwardRef<
  HTMLSpanElement,
  FormFieldRequiredIndicatorProps
>(({ className, ...props }, ref) => {
  return (
    <Label.RequiredIndicator
      ref={ref}
      className={cn("ml-sm", className)}
      {...props}
    />
  );
});

FormFieldRequiredIndicator.displayName = "FormField.RequiredIndicator";
