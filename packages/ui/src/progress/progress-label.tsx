"use client";

import {
  ComponentPropsWithoutRef,
  forwardRef,
  useCallback,
  useId,
} from "react";

import { useMergeRefs } from "../hooks/use-merge-refs";
import { useProgress } from "./progress-context";

export type ProgressLabelProps = ComponentPropsWithoutRef<"span">;

export const ProgressLabel = forwardRef<HTMLSpanElement, ProgressLabelProps>(
  ({ id: idProp, children, ...others }, forwardedRef) => {
    const internalId = `:progress-label-${useId()}`;
    const id = idProp || internalId;

    const { onLabelId } = useProgress();
    const rootRef = useCallback(
      (el: HTMLSpanElement) => {
        onLabelId(el ? id : undefined);
      },
      [id, onLabelId]
    );
    const ref = useMergeRefs(forwardedRef, rootRef);

    return (
      <span
        id={id}
        className="text-body-2 text-on-surface"
        ref={ref}
        {...others}
      >
        {children}
      </span>
    );
  }
);

ProgressLabel.displayName = "Progress.Label";
