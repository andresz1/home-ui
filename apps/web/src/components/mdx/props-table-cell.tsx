import { cn } from "@adv-re/ui/core";
import { ComponentPropsWithoutRef } from "react";

export type PropsTableCellProps = ComponentPropsWithoutRef<"td">;

export const PropsTableCell = ({
  className,
  ...others
}: PropsTableCellProps) => {
  return (
    <td
      className={cn(
        "p-2 max-w-[200px] overflow-auto whitespace-normal break-normal p-md text-body-2",
        className
      )}
      {...others}
    />
  );
};
