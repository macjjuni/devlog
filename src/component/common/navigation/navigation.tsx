"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { useMediaScreen, useOutsideClick } from "@/hook";
import routes from "@/route";
import Link from "next/link";
import NavigationList from "@/component/common/navigation/navigationList";
import "./navigation.scss";

export default function Navigation() {
  // region [Hooks]

  const [isNavOpen, setIsNavOpen] = useState(false);
  const pathname = usePathname();
  const isMobile = useMediaScreen("sm");
  const navListRef = useRef<HTMLDivElement>(null);
  const isOutsideClick = useOutsideClick(navListRef.current, isNavOpen && isMobile !== null && isMobile);

  // endregion

  // region [Styles]

  const mobileButtonClass = useMemo(() => {
    const clazz = [];

    if (isNavOpen) {
      clazz.push("navigation__button--active");
    }

    return clazz.join(" ");
  }, [isNavOpen]);

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

  const onClickNavigationButton = useCallback(() => {
    setIsNavOpen((prev) => !prev);
  }, []);

  const onCloseNaviagation = useCallback(() => {
    setIsNavOpen(false);
  }, []);

  // endregion

  // region [Privates]

  const closeNavigationList = useCallback(() => {
    onCloseNaviagation();
  }, []);

  // endregion

  // region [Effects]

  useEffect(() => {
    if (isOutsideClick) {
      setIsNavOpen(false);
    }
  }, [isOutsideClick]);

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

      <div ref={navListRef} className={"navigation__button__container"}>
        <button type="button" aria-label="menu" className={`navigation__button ${mobileButtonClass}`} onClick={onClickNavigationButton}>
          <span className="navigation__button__bar" />
          <span className="navigation__button__bar" />
          <span className="navigation__button__bar" />
        </button>

        {isMobile && <NavigationList isOpen={isNavOpen} close={closeNavigationList} />}
      </div>
    </>
  );
}
