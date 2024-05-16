"use client";

import { ReactNode, useCallback } from "react";
import Link from "next/link";

interface IPagiButton {
  text?: string | number;
  icon?: ReactNode;
  href: number | string;
  active?: boolean;
  disabled?: boolean;
}

export default function PageButton({ text, href, icon, active = false, disabled = false }: IPagiButton) {

  const generateUrl = useCallback(() => {
    return `?page=${href}`;
    // return `${encodeURIComponent(pathname)}/?page=${href.toString()}`;
  }, []);

  const children = () => {
    if (text?.toString()) return text;
    if (icon) return icon;
  };

  if (disabled) {
    return (
      <button type="button" name="link" aria-label="Page move Disabled" className={""} disabled>
        {children()}
      </button>
    );
  }
  if (active) {
    return (
      <button type="button" name="link" aria-label={text?.toString()} className={""} disabled>
        {children()}
      </button>
    );
  }
  return (
    <Link href={generateUrl()} role="link" aria-label={text?.toString() || "Next page in the list"} className={""}>
      {children()}
    </Link>
  );
}
