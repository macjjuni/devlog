"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import Navigation from "@/components/common/navigation/navigation";
import "./header.scss";
import { useStore } from "@/store/store";

const logoText = process.env.NEXT_PUBLIC_LOGO || "kku";

export default function Header() {
  // region [Hooks]

  const isHeaderMini = useStore((state) => state.isHeaderMini);

  // endregion

  // region [Styles]

  const rootClass = useMemo(() => {
    if (isHeaderMini) {
      return "header--mini";
    }
    return "";
  }, [isHeaderMini]);

  // endregion

  return (
    <header className={`header ${rootClass}`}>
      <div className="header__wrapper">
        <div className="header__wrapper__container">
          <Link href="/" className="header__logo__link">
            {logoText}
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
