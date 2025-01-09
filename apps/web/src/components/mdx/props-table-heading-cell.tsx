import { cn } from "@adv-re/ui/core";
import { ComponentPropsWithoutRef } from "react";

export type PropsTableHeadingCellProps = ComponentPropsWithoutRef<"td">;

export const PropsTableHeadingCell = ({
  className,
  ...others
}: PropsTableHeadingCellProps) => {
  return (
    <td
      className={cn(
        "bg-neutral-container p-md text-left text-body-2 font-bold text-on-neutral-container",
        className
      )}
      {...others}
    />
  );
};
