"use client";

import { memo, UIEvent, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { createDebounce, createThrottle } from "@/utils/lodash";
import { ICategory, SelectPropertyResponse } from "@/@types/notion";
import ActiveCheckSvg from "@/component/sidebar/category/ActiveCheckSvg";
import { getCategoryPageUrl } from "@/route";
import "./category.scss";
import useCategoryName from "@/hook/useCategoryName";
import { usePathname } from "next/navigation";
import { KIcon } from "kku-ui";

type ScrollPositionType = "left" | "between" | "right";
type ScrollDirectionType = Omit<ScrollPositionType, "between">;

interface CategoryProps {
  list?: ICategory;
}

const arrowIconSize = 20;


const initialCategoryList: SelectPropertyResponse[] = [{ id: "all", name: "All", description: "", color: "default" }];

function Category({ list }: CategoryProps) {
  // region [Hooks]

  const pathname = usePathname();
  const categoryRef = useRef<HTMLUListElement>(null);
  const [scrollMaxWidth, setScrollMaxWidth] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<ScrollPositionType>("left");
  const categoryName = useCategoryName();

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

  const sanitizedList = useMemo(() => {
    const filteredList: ICategory = list || [];
    const lowerCaseCategoryName = categoryName?.toLowerCase();

    // Archive 메인 경로 접속
    if (lowerCaseCategoryName === undefined) {
      return initialCategoryList.concat(filteredList);
    }
    // category 페이지 접속
    const currentCategoryIdx = filteredList.findIndex((item) => {
      return item?.name.toLowerCase() === lowerCaseCategoryName;
    });

    // 잘 못된 Category 인 경우
    if (currentCategoryIdx === -1) {
      return initialCategoryList.concat(filteredList);
    }
    // 현재 Category 객체를 All 아래에 위치 시키고 반환
    const currentCategory = { ...filteredList[currentCategoryIdx] };

    const remainingCategories = filteredList?.filter((item) => {
      return item.name.toLowerCase() !== lowerCaseCategoryName;
    });

    return initialCategoryList.concat(currentCategory, remainingCategories);
  }, [list, categoryName, initialCategoryList]);

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
      if ((name === "All" && categoryName === null && !pathname.includes("search")) || name.toLowerCase() === categoryName?.toLowerCase()) {
        return "category__card__item__link--active";
      }
      return "";
    },
    [categoryName],
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
        {sanitizedList.map((listItem) => (
          <li key={listItem.id} className="category__card__item">
            <Link href={listItem.name === "All" ? "/archive" : getCategoryPageUrl(listItem.name)} className={`category__card__item__link ${linkClass(listItem.name)}`}>
              <ActiveCheckSvg className="category__card__item__link__active-character" />
              <div className="category__card__item__link__hover-character" />
              <span className="category__card__item__text">{listItem.name}</span>
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
