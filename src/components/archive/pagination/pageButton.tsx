"use client";

import { memo, ReactNode, useCallback } from "react";
import { Link } from 'next-view-transitions'
import { usePathname, useSearchParams } from "next/navigation";
import { KButton } from "kku-ui";

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

  if (disabled || active) {
    return (
      <KButton
        size="sm"
        variant={active ? "primary" : "ghost"}
        disabled={disabled && !active}
        aria-label={text?.toString() || "Page move Disabled"}
      >
        {children}
      </KButton>
    );
  }

  return (
    <KButton size="sm" variant="ghost" asChild>
      <Link href={generatePaginationUrl()} aria-label={text?.toString() || "Next page in the list"}>
        {children}
      </Link>
    </KButton>
  );
};

export default memo(PageButton);
