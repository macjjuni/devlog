"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState, UIEvent, MouseEvent } from "react";
import Link from "next/link";
import { throttle, debounce } from "lodash-es";
import { ICategory } from "@/@types/notion";
import ActiveCheckSvg from "@/component/sidebar/category/ActiveCheckSvg";
import { getCategoryPageUrl } from "@/route";
import "./category.scss";
import useCategoryName from "@/hook/useCategoryName";

type ScrollPositionType = "left" | "between" | "right";
type ScrollDirectionType = Omit<ScrollPositionType, "between">;

interface CategoryProps {
  list: ICategory;
}

const initialCategoryList = [{ id: "all", name: "All" }];

function Category({ list }: CategoryProps) {
  // region [Hooks]

  const categoryRef = useRef<HTMLUListElement>(null);
  const [scrollMaxWidth, setScrollMaxWidth] = useState(0);
  const [isScroll, setIsScroll] = useState(false);
  const [scrollPosition, setScrollPosition] = useState<ScrollPositionType>("left");
  const categoryName = useCategoryName();

  // endregion

  // region [Privates]

  const checkCurrentCategory = useCallback((name: string) => {
    return name.toLowerCase() === categoryName?.toLowerCase();
  }, []);

  const isLeftScrollIcon = useMemo(() => isScroll && scrollPosition !== "left", [isScroll, scrollPosition]);
  const isRightScrollIcon = useMemo(() => isScroll && scrollPosition !== "right", [isScroll, scrollPosition]);

  const scrollAction = useCallback((direction: ScrollDirectionType) => {
    const scrollDefaultValue = 120;
    const { scrollLeft } = categoryRef.current!;
    const scrollValue = scrollLeft + (direction === "left" ? -scrollDefaultValue : scrollDefaultValue);

    categoryRef.current!.scroll({ top: 0, left: scrollValue, behavior: "smooth" });
  }, []);

  const sanitizedList = useMemo(() => {
    const filteredList = list || [];
    const lowerCaseCategoryName = categoryName?.toLowerCase();

    const currentCategoryIdx =
      filteredList.findIndex((item) => {
        return item?.name.toLowerCase() === lowerCaseCategoryName;
      }) || -1;

    if (currentCategoryIdx === -1) {
      return initialCategoryList.concat(filteredList);
    }

    const currentCategory = { ...filteredList[currentCategoryIdx] };
    const remainingCategories = filteredList?.filter((item) => {
      return item.name.toLowerCase() !== lowerCaseCategoryName;
    });

    return initialCategoryList.concat(currentCategory, remainingCategories);
  }, [list, categoryName, initialCategoryList]);

  const initializeWidth = useCallback(
    debounce(() => {
      const { innerWidth: fullWidth } = window;
      const { scrollWidth } = categoryRef.current!;

      setScrollMaxWidth(scrollWidth - fullWidth + 12 * 2); // 16 is padding

      if (scrollWidth > fullWidth + 32) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    }, 160),
    [],
  );

  // endregion

  // region [Events]

  const onScroll = useCallback(
    throttle((e: UIEvent<HTMLUListElement>) => {
      const { scrollLeft } = e.target as HTMLElement;

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

  const onClickCategoryLink = useCallback((e: MouseEvent<HTMLAnchorElement>) => {
    // e.target.blur();
  }, []);

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
        <button type="button" className="category__card__scroll-action-icon-start" onClick={() => onScrollAction("left")}>
          &#60;
        </button>
      )}
      <ul ref={categoryRef} className="category__card__list" onScroll={onScroll}>
        {sanitizedList.map((listItem) => (
          <li key={listItem.id} className="category__card__item">
            <Link href={listItem.name === "All" ? "/archive" : getCategoryPageUrl(listItem.name)} className="category__card__item__link" onClick={onClickCategoryLink}>
              {checkCurrentCategory(listItem.name) && <ActiveCheckSvg className="category__card__item__link__active-character" />}
              { !checkCurrentCategory(listItem.name) && <div className="category__card__item__link__hover-character" /> }
              {categoryName === null && listItem.name === "All" && <ActiveCheckSvg className="category__card__item__link__active-character" />}
              {listItem.name}
            </Link>
          </li>
        ))}
      </ul>
      {isRightScrollIcon && (
        <button type="button" className="category__card__scroll-action-icon-end" onClick={() => onScrollAction("right")}>
          &#62;
        </button>
      )}
    </div>
  );
}

export default memo(Category);
