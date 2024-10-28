"use client";

import { memo, UIEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { createDebounce, createThrottle } from "@/lib/lodash";
import ActiveCheckSvg from "@/component/sidebar/category/ActiveCheckSvg";
import { getCategoryPageUrl } from "@/route";
import { usePathname } from "next/navigation";
import { KIcon } from "kku-ui";
import "./category.scss";
import { capitalizeFirstLetter } from "@/utils/string";
import config from "@/config/config";

interface CategoryProps {
  currentCategory: string;
  list: string[];
}

type ScrollPositionType = "left" | "between" | "right";
type ScrollDirectionType = Omit<ScrollPositionType, "between">;

const arrowIconSize = 20;
const { allText } = config.category;

function Category({ currentCategory, list }: CategoryProps) {
  // region [Hooks]

  const pathname = usePathname();
  const categoryRef = useRef<HTMLUListElement>(null);
  const [scrollMaxWidth, setScrollMaxWidth] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<ScrollPositionType>("left");

  // endregion

  // region [Privates]

  const isLeftScrollIcon = useMemo(() => isScroll && scrollPosition !== "left", [isScroll, scrollPosition]);
  const isRightScrollIcon = useMemo(() => isScroll && scrollPosition !== "right", [isScroll, scrollPosition]);

  const scrollAction = useCallback((direction: ScrollDirectionType) => {
    const scrollDefaultValue = 120;
    const { scrollLeft } = categoryRef.current!;
    const scrollValue = scrollLeft + (direction === "left" ? -scrollDefaultValue : scrollDefaultValue);

    categoryRef.current!.scroll({ top: 0, left: scrollValue, behavior: "smooth" });
  }, []);

  const initializeWidth = useCallback(
    createDebounce(() => {
      if (!categoryRef.current) {
        return;
      }

      const { innerWidth: fullWidth } = window;
      const { scrollWidth } = categoryRef.current;

      setScrollMaxWidth(scrollWidth - fullWidth + 12 * 2); // 16 is padding

      if (scrollWidth > fullWidth + 32) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }, 160),
    [],
  );

  const linkClass = useCallback(
    (name: string) => {
      if ((name === "All" && currentCategory === null && !pathname.includes("search")) || name.toLowerCase() === currentCategory?.toLowerCase()) {
        return "category__card__item__link--active";
      }
      return "";
    },
    [currentCategory],
  );

  // endregion

  // region [Events]

  const onScroll = useCallback(
    createThrottle((e) => {
      const event = e as UIEvent<HTMLUListElement>;
      const { scrollLeft } = event.target as HTMLElement;

      if (scrollLeft < 2) {
        setScrollPosition("left");
        return;
      }
      if (scrollLeft > scrollMaxWidth - 2) {
        setScrollPosition("right");
        return;
      }
      if (scrollLeft > 0) {
        setScrollPosition("between");
      }
    }, 120),
    [scrollMaxWidth],
  );

  const onScrollAction = useCallback(
    (direction: ScrollDirectionType) => {
      scrollAction(direction);
    },
    [scrollAction],
  );

  // endregion

  // region [Effects]

  useEffect(() => {
    initializeWidth();

    window.addEventListener("resize", initializeWidth);
    return () => window.removeEventListener("resize", initializeWidth);
  }, []);

  // endregion

  return (
    <div className="category__card">
      {isLeftScrollIcon && (
        <button type="button" className="category__card__scroll-action-start__button" aria-label={"left scroll"} onClick={() => onScrollAction("left")}>
          <KIcon icon={"keyboard_arrow_down"} className="category__card__scroll-action-start__button-icon" size={arrowIconSize} />
        </button>
      )}
      <ul ref={categoryRef} className="category__card__list" onScroll={onScroll}>
        {list.map((listItem) => (
          <li key={listItem} className="category__card__item">
            <Link href={listItem === allText ? "/archive" : getCategoryPageUrl(listItem)} className={`category__card__item__link ${linkClass(listItem)}`}>
              <ActiveCheckSvg className="category__card__item__link__active-character" />
              <div className="category__card__item__link__hover-character" />
              <span className="category__card__item__text">{capitalizeFirstLetter(listItem)}</span>
            </Link>
          </li>
        ))}
      </ul>
      {isRightScrollIcon && (
        <button type="button" className="category__card__scroll-action-end__button" aria-label={"right scroll"} onClick={() => onScrollAction("right")}>
          <KIcon icon={"keyboard_arrow_down"} className="category__card__scroll-action-end__button-icon" size={arrowIconSize} />
        </button>
      )}
    </div>
  );
}

export default memo(Category);
