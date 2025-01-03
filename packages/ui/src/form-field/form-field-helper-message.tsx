import { cx } from "class-variance-authority";
import { forwardRef } from "react";

import { FormFieldMessage, FormFieldMessageProps } from "./form-field-message";

export type FormFieldHelperMessageProps = FormFieldMessageProps;

export const FormFieldHelperMessage = forwardRef<
  HTMLSpanElement,
  FormFieldHelperMessageProps
>(({ className, ...others }, ref) => {
  return (
    <FormFieldMessage
      ref={ref}
      className={cx("text-on-surface/dim-1", className)}
      {...others}
    />
  );
});

FormFieldHelperMessage.displayName = "FormField.HelperMessage";
