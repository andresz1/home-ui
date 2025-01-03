"use client";

import { ComponentPropsWithoutRef, forwardRef, useEffect, useId } from "react";

import { cn } from "../core";
import { useFormField } from "./form-field-context";

export type FormFieldMessageProps = ComponentPropsWithoutRef<"span">;

export const FormFieldMessage = forwardRef<
  HTMLSpanElement,
  FormFieldMessageProps
>(({ id: idProp, className, ...others }, ref) => {
  const { onMessageIdAdd, onMessageIdRemove } = useFormField();
  const currentId = `:form-field-message-${useId()}`;
  const id = idProp || currentId;

  useEffect(() => {
    onMessageIdAdd(id);

    return () => {
      onMessageIdRemove(id);
    };
  }, [id, onMessageIdAdd, onMessageIdRemove]);

  return (
    <span
      ref={ref}
      id={id}
      className={cn(className, "text-caption")}
      {...others}
    />
  );
});

FormFieldMessage.displayName = "FormField.Message";
