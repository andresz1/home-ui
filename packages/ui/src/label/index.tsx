import { Label as Root } from "./label";
import { LabelRequiredIndicator } from "./label-required-indicator";

export const Label: typeof Root & {
  RequiredIndicator: typeof LabelRequiredIndicator;
} = Object.assign(Root, {
  RequiredIndicator: LabelRequiredIndicator,
});

Label.displayName = "Label";
LabelRequiredIndicator.displayName = "Label.RequiredIndicator";

export type { LabelProps } from "./label";
export type { LabelRequiredIndicatorProps } from "./label-required-indicator";
