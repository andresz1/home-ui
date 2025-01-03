import { forwardRef } from "react";

import {
  FormFieldStateMessage,
  FormFieldStateMessageProps,
} from "./form-field-state-message";

export type FormFieldErrorMessageProps = Omit<
  FormFieldStateMessageProps,
  "state"
>;

export const FormFieldErrorMessage = forwardRef<
  HTMLSpanElement,
  FormFieldErrorMessageProps
>((props, ref) => {
  return <FormFieldStateMessage ref={ref} state="error" {...props} />;
});

FormFieldErrorMessage.displayName = "FormField.ErrorMessage";
