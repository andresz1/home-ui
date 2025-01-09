import { cx } from "class-variance-authority";
import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { Document } from "content-collections";

export interface DocsFooterProps extends ComponentPropsWithoutRef<"div"> {
  previous?: Document;
  next?: Document;
}

export const DocsFooter = ({
  className,
  previous,
  next,
  ...others
}: DocsFooterProps) => {
  return (
    <div
      className={cx(
        "mb-3xl mt-lg flex h-sz-64 w-full flex-row justify-between border-t-sm border-neutral-container pt-lg",
        className
      )}
      {...others}
    >
      <div>
        {previous && (
          <Link
            className="flex flex-col items-start justify-between pr-3xl text-subhead capitalize leading-6 hover:text-main"
            href={previous.url}
          >
            <span className="text-caption">Previous</span>
            <span>{previous.title}</span>
          </Link>
        )}
      </div>
      <div className="">
        {next && (
          <Link
            className="flex flex-col items-end justify-between pl-3xl text-subhead capitalize leading-6 hover:text-main"
            href={next.url}
          >
            <span className="text-caption">Next</span>
            <span>{next.title}</span>
          </Link>
        )}
      </div>
    </div>
  );
};
