"use client";

import { memo, ReactNode, useCallback } from "react";
import { Link } from 'next-view-transitions'
import { usePathname, useSearchParams } from "next/navigation";

interface IPageButton {
  text?: string | number;
  icon?: ReactNode;
  href: number | string;
  active?: boolean;
  disabled?: boolean;
}

const PageButton = ({ text, href, icon, active = false, disabled = false }: IPageButton) => {
  const pathname = usePathname();
  const params = new URLSearchParams(useSearchParams());

  const generatePaginationUrl = useCallback(() => {
    params.set("page", href.toString());
    return `${pathname}/?${params.toString()}`;
  }, [href]);

  const children = text?.toString() ? text : icon;

  const baseStyle = "inline-flex items-center justify-center min-w-[32px] h-8 px-1 text-sm font-mono transition-all";

  if (disabled) {
    return (
      <span className={`${baseStyle} text-terminal-border-dim cursor-not-allowed`}>
        {children}
      </span>
    );
  }

  if (active) {
    return (
      <span className={`${baseStyle} text-terminal-amber text-glow font-bold`}>
        [*{children}*]
      </span>
    );
  }

  return (
    <Link
      href={generatePaginationUrl()}
      aria-label={text?.toString() || "Next page in the list"}
      className={`${baseStyle} text-terminal-dim hover:text-terminal-amber`}
    >
      [ {children} ]
    </Link>
  );
};

export default memo(PageButton);
