"use client";

import { useCallback, useState } from "react";
import { usePathname } from "next/navigation";
import routes from "@/route";
import Link from "next/link";
import "./navigation.scss";

export default function Navigation() {
  // region [Hooks]
  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();

  // endregiion

  // region [Styles]

  const getActiveClass = useCallback(
    (path: string) => {
      if (pathname === "/" && path === "/") {
        return "navigation__link-active";
      }

      if (pathname.includes(path) && path !== "/") {
        return "navigation__link-active";
      }
      return "";
    },
    [pathname],
  );

  // endregion

  // region [Events]

  const onClickNavigationButton = useCallback(() => {}, []);

  // endregion

  return (
    <>
      <nav className="navigation">
        {routes.map((route) => (
          <Link key={route.id} href={route.path} className={`navigation__link ${getActiveClass(route.path)}`}>
            {route.title}
          </Link>
        ))}
      </nav>
      <button type="button" aria-label="menu" className="navigation__button" onClick={onClickNavigationButton}>
        <span className="navigation__button__bar" />
        <span className="navigation__button__bar" />
        <span className="navigation__button__bar" />
      </button>
    </>
  );
}
