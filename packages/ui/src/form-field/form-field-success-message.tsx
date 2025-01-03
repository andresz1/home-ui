import { forwardRef } from "react";

import {
  FormFieldStateMessage,
  FormFieldStateMessageProps,
} from "./form-field-state-message";

export type FormFieldSuccessMessageProps = Omit<
  FormFieldStateMessageProps,
  "state"
>;

export const FormFieldSuccessMessage = forwardRef<
  HTMLSpanElement,
  FormFieldSuccessMessageProps
>((props, ref) => {
  return <FormFieldStateMessage ref={ref} state="success" {...props} />;
});

FormFieldSuccessMessage.displayName = "FormField.SuccessMessage";
