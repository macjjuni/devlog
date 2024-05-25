import React from "react";
import Link from "next/link";
import Navigation from "@/component/common/navigation/navigation";
import "./header.scss";

const logoText = process.env.NEXT_PUBLIC_LOGO || "kku";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__logo">
          <Link href="/" className="header__logo__link">
            {logoText}
          </Link>
        </h1>

        <Navigation />
      </div>
    </header>
  );
}
