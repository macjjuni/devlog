import React from "react";
import Link from "next/link";
import Navigation from "@/component/navigation/navigation";
import "./header.scss";

export default function Header() {
  return (
    <header className="header">
      <div className="header__wrapper">
        <h1 className="header__logo">
          <Link href="/" className="header__logo__link">
            kku.dev
          </Link>
        </h1>

        <Navigation />
      </div>
    </header>
  );
}
