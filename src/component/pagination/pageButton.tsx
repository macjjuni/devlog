"use client";

import { memo, ReactNode, useCallback } from "react";
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
  const generateUrl = useCallback(() => {
    return `?page=${href}`;
  }, [href]);

  const children = () => {
    if (text?.toString()) return text;
    if (icon) return icon;
  };

  if (disabled) {
    return (
      <button type="button" name="link" aria-label="Page move Disabled" className={className} disabled>
        {children()}
      </button>
    );
  }
  if (active) {
    return (
      <button type="button" name="link" aria-label={text?.toString()} className={`pagination__number-button--active`} disabled>
        {children()}
      </button>
    );
  }

  return (
    <Link href={generateUrl()} role="link" aria-label={text?.toString() || "Next page in the list"} className={className}>
      {children()}
    </Link>
  );
}

export default memo(PageButton);
