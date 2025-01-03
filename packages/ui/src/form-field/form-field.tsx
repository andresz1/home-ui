import { cx } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef, useId } from "react";

import { Slot } from "../slot";
import { FormFieldContextState } from "./form-field-context";
import { FormFieldProvider } from "./form-field-provider";

export interface FormFieldProps
  extends ComponentPropsWithoutRef<"div">,
    Pick<FormFieldContextState, "name" | "state" | "isRequired"> {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: boolean;
  /**
   * When `true`, prevents the user from interacting.
   */
  disabled?: boolean;
  /**
   * Sets the component as interactive or not.
   */
  readOnly?: boolean;
}

export const FormField = forwardRef<HTMLDivElement, FormFieldProps>(
  (
    {
      className,
      disabled = false,
      readOnly = false,
      name,
      state,
      isRequired = false,
      asChild = false,
      ...others
    },
    ref
  ) => {
    const id = `:form-field-${useId()}`;
    const Component = asChild ? Slot : "div";

    return (
      <FormFieldProvider
        id={id}
        name={name}
        isRequired={isRequired}
        disabled={disabled}
        readOnly={readOnly}
        state={state}
      >
        <Component
          ref={ref}
          className={cx(className, "flex flex-col gap-sm")}
          {...others}
        />
      </FormFieldProvider>
    );
  }
);

FormField.displayName = "FormField";
