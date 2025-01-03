import { FormField as Root } from "./form-field";
import { FormFieldAlertMessage } from "./form-field-alert-message";
import { FormFieldCharactersCount } from "./form-field-character-count";
import { FormFieldControl } from "./form-field-control";
import { FormFieldErrorMessage } from "./form-field-error-message";
import { FormFieldHelperMessage } from "./form-field-helper-message";
import { FormFieldLabel } from "./form-field-label";
import { FormFieldRequiredIndicator } from "./form-field-required-indicator";
import { FormFieldStateMessage } from "./form-field-state-message";
import { FormFieldSuccessMessage } from "./form-field-success-message";

export const FormField: typeof Root & {
  Label: typeof FormFieldLabel;
  Control: typeof FormFieldControl;
  StateMessage: typeof FormFieldStateMessage;
  SuccessMessage: typeof FormFieldSuccessMessage;
  AlertMessage: typeof FormFieldAlertMessage;
  ErrorMessage: typeof FormFieldErrorMessage;
  HelperMessage: typeof FormFieldHelperMessage;
  RequiredIndicator: typeof FormFieldRequiredIndicator;
  CharactersCount: typeof FormFieldCharactersCount;
} = Object.assign(Root, {
  Label: FormFieldLabel,
  Control: FormFieldControl,
  StateMessage: FormFieldStateMessage,
  SuccessMessage: FormFieldSuccessMessage,
  AlertMessage: FormFieldAlertMessage,
  ErrorMessage: FormFieldErrorMessage,
  HelperMessage: FormFieldHelperMessage,
  RequiredIndicator: FormFieldRequiredIndicator,
  CharactersCount: FormFieldCharactersCount,
});

FormField.displayName = "FormField";
FormFieldLabel.displayName = "FormField.Label";
FormFieldControl.displayName = "FormField.Control";
FormFieldStateMessage.displayName = "FormField.StateMessage";
FormFieldSuccessMessage.displayName = "FormField.SuccessMessage";
FormFieldAlertMessage.displayName = "FormField.AlertMessage";
FormFieldErrorMessage.displayName = "FormField.ErrorMessage";
FormFieldHelperMessage.displayName = "FormField.HelperMessage";
FormFieldRequiredIndicator.displayName = "FormField.RequiredIndicator";
FormFieldCharactersCount.displayName = "FormField.CharactersCount";

export { type FormFieldProps } from "./form-field";
export { type FormFieldAlertMessageProps } from "./form-field-alert-message";
export { type FormFieldCharactersCountProps } from "./form-field-character-count";
export {
  type FormFieldControl,
  useFormFieldControl,
} from "./form-field-control";
export { type FormFieldErrorMessageProps } from "./form-field-error-message";
export { type FormFieldHelperMessageProps } from "./form-field-helper-message";
export { type FormFieldLabelProps } from "./form-field-label";
export { type FormFieldRequiredIndicatorProps } from "./form-field-required-indicator";
export { type FormFieldStateMessageProps } from "./form-field-state-message";
export { type FormFieldSuccessMessageProps } from "./form-field-success-message";
