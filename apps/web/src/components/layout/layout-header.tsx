import { IconButton } from "@adv-re/ui/icon-button";
import { Icon } from "@adv-re/ui/icon";
import { FiGithub } from "react-icons/fi";
import { ComponentPropsWithoutRef } from "react";
import { cx } from "class-variance-authority";
import Link from "next/link";
import { Document } from "@content-collections/core";

import { LogoIcon } from "../logo";
import { Container } from "../container";
import { ModeIconButton } from "../mode-icon-button";

export interface LayoutHeaderProps extends ComponentPropsWithoutRef<"header"> {
  hasSearch?: boolean;
  categories?: { [key: string]: Document[] };
}

export const LayoutHeader = ({ className, ...others }: LayoutHeaderProps) => {
  return (
    <header
      className={cx(
        className,
        "sticky top-none z-raised h-sz-64 w-full border-b-sm border-neutral-container backdrop-blur-sm"
      )}
      {...others}
    >
      <Container className="flex h-full items-center justify-between">
        <Link href="/">
          <LogoIcon className="size-sz-36" />
        </Link>

        <div className="flex gap-md">
          <ModeIconButton intent="neutral" variant="ghost" />

          <IconButton
            intent="neutral"
            variant="ghost"
            aria-label="GitHub"
            asChild
          >
            <a
              href="https://github.com/adevinta/spark"
              target="_blank"
              rel="noopener noreferrer nofollow"
            >
              <Icon>
                <FiGithub />
              </Icon>
            </a>
          </IconButton>
        </div>
      </Container>
    </header>
  );
};
