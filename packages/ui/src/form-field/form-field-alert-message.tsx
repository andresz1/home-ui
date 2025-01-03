import { forwardRef } from "react";

import {
  FormFieldStateMessage,
  FormFieldStateMessageProps,
} from "./form-field-state-message";

export type FormFieldAlertMessageProps = Omit<
  FormFieldStateMessageProps,
  "state"
>;

export const FormFieldAlertMessage = forwardRef<
  HTMLSpanElement,
  FormFieldAlertMessageProps
>((props, ref) => {
  return <FormFieldStateMessage ref={ref} state="alert" {...props} />;
});

FormFieldAlertMessage.displayName = "FormField.AlertMessage";
