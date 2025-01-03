import { cx } from "class-variance-authority";
import { forwardRef } from "react";

import { Icon } from "../icon";
import { useFormField } from "./form-field-context";
import { FormFieldMessage, FormFieldMessageProps } from "./form-field-message";

export interface FormFieldStateMessageProps extends FormFieldMessageProps {
  state: "error" | "alert" | "success";
}

export const FormFieldStateMessage = forwardRef<
  HTMLSpanElement,
  FormFieldStateMessageProps
>(({ className, state, children, ...others }, ref) => {
  const field = useFormField();

  if (field.state !== state) {
    return null;
  }

  return (
    <FormFieldMessage
      ref={ref}
      aria-live="polite"
      className={cx(
        "flex items-center gap-sm",
        state === "error" ? "text-error" : "text-on-surface/dim-1",
        className
      )}
      {...others}
    >
      {state === "alert" && (
        <Icon size="sm">
          <div />
        </Icon>
      )}
      {state === "error" && (
        <Icon size="sm" intent="error">
          <div />
        </Icon>
      )}
      {state === "success" && (
        <Icon size="sm">
          <div />
        </Icon>
      )}

      {children}
    </FormFieldMessage>
  );
});

FormFieldStateMessage.displayName = "FormField.StateMessage";
