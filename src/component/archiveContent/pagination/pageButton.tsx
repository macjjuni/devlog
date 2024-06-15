"use client";

import { memo, ReactNode, useCallback } from "react";
// import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import Link from "next/link";

interface IPageButton {
  text?: string | number;
  className?: string;
  icon?: ReactNode;
  href: number | string;
  active?: boolean;
  disabled?: boolean;
}

const PageButton = ({ text, href, icon, active = false, disabled = false, className }: IPageButton) => {
  // region [Hooks]

  const pathname = usePathname();
  const params = new URLSearchParams(useSearchParams());

  // endregion

  // region [Privates]

  const generatePaginationUrl = useCallback(() => {
    params.set("page", href.toString());
    return `${pathname}/?${params.toString()}`;
  }, [href]);

  const children = useCallback(() => {
    if (text?.toString()) return text;
    if (icon) return icon;
  }, [text]);

  // endregion

  // region [Templates]

  if (disabled) {
    return (
      <button type="button" name="link" aria-label="Page move Disabled" className={className} disabled>
        {children()}
      </button>
    );
  }
  if (active) {
    return (
      <button type="button" name="link" aria-label={text?.toString()} className="pagination__number-button--active" disabled>
        {children()}
      </button>
    );
  }

  // endregion

  return (
    <Link href={generatePaginationUrl()} aria-label={text?.toString() || "Next page in the list"} className={className}>
      {children()}
    </Link>
  );
};

export default memo(PageButton);
