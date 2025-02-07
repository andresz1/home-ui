"use client";

import { useEffect, useState } from "react";
import { Icon } from "@adv-re/ui/icon";
import { IconButton, IconButtonProps } from "@adv-re/ui/icon-button";
import { useTheme } from "next-themes";
import { FiMoon, FiSun } from "react-icons/fi";

export type ModeIconButtonProps = Omit<IconButtonProps, "aria-label">;

export const ModeIconButton = (props: ModeIconButtonProps) => {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!resolvedTheme) {
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      setTheme(prefersDark ? "dark" : "light");
    }

    setIsMounted(true);
  }, [resolvedTheme, setTheme]);

  const handleClick = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <IconButton
      aria-label=""
      onClick={handleClick}
      disabled={!isMounted}
      {...props}
    >
      {isMounted && <Icon>{theme === "light" ? <FiMoon /> : <FiSun />}</Icon>}
    </IconButton>
  );
};
