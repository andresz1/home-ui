import { Progress as Root } from "./progress";
import { ProgressBar } from "./progress-bar";
import { ProgressIndicator } from "./progress-indicator";
import { ProgressLabel } from "./progress-label";

export const Progress: typeof Root & {
  Label: typeof ProgressLabel;
  Bar: typeof ProgressBar;
  Indicator: typeof ProgressIndicator;
} = Object.assign(Root, {
  Label: ProgressLabel,
  Bar: ProgressBar,
  Indicator: ProgressIndicator,
});

Progress.displayName = "Progress";
ProgressBar.displayName = "Progress.Bar";
ProgressIndicator.displayName = "Progress.Indicator";
ProgressLabel.displayName = "Progress.Label";

export { type ProgressProps } from "./progress";
export { type ProgressBarProps } from "./progress-bar";
export { type ProgressIndicatorProps } from "./progress-indicator";
export { type ProgressLabelProps } from "./progress-label";
