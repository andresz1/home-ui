import { cx } from "class-variance-authority";
import type { ClassValue } from "class-variance-authority/types";
import { extendTailwindMerge } from "tailwind-merge";

export const twMerge = extendTailwindMerge({});

export { cva, type VariantProps } from "class-variance-authority";

export const cn = (...inputs: ClassValue[]) => {
  return cx(inputs);
};

export const tw = <T>(v: T) => {
  return v;
};
