import { Ref, RefObject, RefCallback, useMemo } from "react";

export type ReactRef<T> = RefCallback<T> | RefObject<T> | Ref<T>;

export function assignRef<T>(ref: ReactRef<T> | null | undefined, value: T) {
  if (ref == null) {
    return;
  }

  if (typeof ref === "function") {
    ref(value);

    return;
  }

  try {
    (ref as RefObject<T | null>).current = value;
  } catch (error) {
    throw new Error(`Cannot assign value '${value}' to ref '${ref}'`);
  }
}

export function mergeRefs<T>(
  ...refs: (RefObject<T> | Ref<T> | null | undefined)[]
): RefCallback<T> {
  return (value) => {
    refs.forEach((ref) => assignRef(ref, value));
  };
}

export function useMergeRefs<T>(...refs: (ReactRef<T> | null | undefined)[]) {
  return useMemo(() => mergeRefs(...refs), refs);
}
