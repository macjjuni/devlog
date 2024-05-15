"use client";

import routes from "@/route";
import Link from "next/link";
import "./navigation.scss";
import { useCallback } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

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

  return (
    <nav className="navigation">
      {routes.map((route) => (
        <Link key={route.id} href={route.path} className={`navigation__link ${getActiveClass(route.path)}`}>
          {route.title}
        </Link>
      ))}
    </nav>
  );
}
