"use client";

import { cx } from "class-variance-authority";
import { ComponentProps } from "react";
import { LivePreview as LivePreviewPrimitive } from "react-live";

export interface LivePreviewProps
  extends ComponentProps<typeof LivePreviewPrimitive> {
  className?: string;
}

export const LivePreview = ({ className, ...others }: LivePreviewProps) => {
  return (
    <div className={cx(className, "overflow-auto p-lg")}>
      <LivePreviewPrimitive {...others} />
    </div>
  );
};
