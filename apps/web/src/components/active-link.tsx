"use client";

import { usePathname } from "next/navigation";
import { LinkProps } from "next/link";
import { ReactNode } from "react";

export interface ActiveLinkProps extends LinkProps {
  children: (props: LinkProps & { isActive?: boolean }) => ReactNode;
}

export const ActiveLink = ({ children, ...props }: ActiveLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === props.href;

  return <>{children({ ...props, isActive })}</>;
};
