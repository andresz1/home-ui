import { forwardRef, ReactNode } from "react";

import { cn } from "../core";
import { Label, LabelProps } from "../label";
import { Slottable } from "../slot";
import { useFormField } from "./form-field-context";
import { FormFieldRequiredIndicator } from "./form-field-required-indicator";

export interface FormFieldLabelProps extends LabelProps {
  /**
   * Element shown when the input is required inside the label.
   */
  requiredIndicator?: ReactNode;
}

export const FormFieldLabel = forwardRef<HTMLLabelElement, FormFieldLabelProps>(
  (
    {
      htmlFor: htmlForProp,
      className,
      children,
      requiredIndicator = <FormFieldRequiredIndicator />,
      asChild,
      ...others
    },
    ref
  ) => {
    const control = useFormField();

    const { disabled, labelId, isRequired } = control;
    const htmlFor = asChild ? undefined : htmlForProp || control.id;

    return (
      <Label
        ref={ref}
        id={labelId}
        htmlFor={htmlFor}
        className={cn(
          className,
          disabled ? "pointer-events-none text-on-surface/dim-3" : undefined
        )}
        asChild={asChild}
        {...others}
      >
        <>
          <Slottable>{children}</Slottable>
          {isRequired && requiredIndicator}
        </>
      </Label>
    );
  }
);

FormFieldLabel.displayName = "FormField.Label";
