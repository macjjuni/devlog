"use client";

import { UIEvent, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { createDebounce, createThrottle } from "@/utils/debounceThrottle";
import { ICategory, SelectPropertyResponse } from "@/@types/notion";
import { getCategoryPageUrl } from "@/route";
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

export default function Category({ list }: CategoryProps) {
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

  const scrollAction = (direction: ScrollDirectionType) => {
    const scrollDefaultValue = 120;
    const { scrollLeft } = categoryRef.current!;
    const scrollValue = scrollLeft + (direction === "left" ? -scrollDefaultValue : scrollDefaultValue);
    categoryRef.current!.scroll({ top: 0, left: scrollValue, behavior: "smooth" });
  };

  // 순서 재배치 로직 제거: All만 앞에 붙이고 나머지는 원본 순서 유지
  const sanitizedList = useMemo(() => {
    return initialCategoryList.concat(list || []);
  }, [list]);

  const initializeWidth = createDebounce(() => {
    if (!categoryRef.current) return;
    const { innerWidth: fullWidth } = window;
    const { scrollWidth } = categoryRef.current;
    setScrollMaxWidth(scrollWidth - fullWidth + 12 * 2);
    setIsScroll(scrollWidth > fullWidth + 32);
  }, 160);

  const isActiveCategory = (name: string) => {
    if (name === "All") {
      return categoryName === null && !pathname.includes("search");
    }
    return name.toLowerCase() === categoryName?.toLowerCase();
  };
  // endregion

  // region [Events]
  const onScroll = createThrottle((e?: UIEvent<HTMLUListElement>) => {
    if (!e) return; // e가 없을 경우 조기 리턴 (타입 가드)

    const { scrollLeft } = e.target as HTMLElement;
    if (scrollLeft < 2) {
      setScrollPosition("left");
    } else if (scrollLeft > scrollMaxWidth - 2) {
      setScrollPosition("right");
    } else {
      setScrollPosition("between");
    }
  }, 120);
  // endregion

  useEffect(() => {
    initializeWidth();
    window.addEventListener("resize", initializeWidth);
    return () => window.removeEventListener("resize", initializeWidth);
  }, [initializeWidth]);

  return (
    <div className="relative border-b border-border">
      {isLeftScrollIcon && (
        <button
          type="button"
          onClick={() => scrollAction("left")}
          className="hidden md:flex absolute left-0 top-[2px] z-[1] h-[30px] w-6 items-center justify-start border-none bg-[#111111]
          text-white after:absolute after:right-0 after:top-0 after:h-full after:w-[0.5px] after:bg-white after:content-['']"
        >
          <KIcon icon="keyboard_arrow_down" className="rotate-90" size={arrowIconSize} />
        </button>
      )}

      <ul
        ref={categoryRef}
        onScroll={onScroll}
        className="relative w-full rounded-[4px] border-[0.5px] border-gray-200 p-4
          desktop:flex desktop:flex-row desktop:flex-nowrap desktop:gap-[6px] desktop:overflow-auto desktop:border-none desktop:p-0 desktop:pb-4 desktop:whitespace-nowrap no-scrollbar transition-all"
      >
        {sanitizedList.map((listItem) => {
          const active = isActiveCategory(listItem.name);
          return (
            <li
              key={listItem.id}
              className="relative group before:absolute before:bottom-[-0.5px] before:left-1 before:h-[0.5px] before:w-[calc(100%-8px)]
              before:bg-gray-200 before:transition-opacity before:content-[''] first:pt-0 hover:before:opacity-0 md:before:content-none"
            >
              <Link
                href={listItem.name === "All" ? "/archive" : getCategoryPageUrl(listItem.name)}
                className={`flex items-center gap-1 rounded-[4px] py-[6px] pl-4 pr-2 transition-colors duration-300 hover:bg-gray-100 
                  desktop:hover:bg-transparent md:px-4 md:py-2 ${active ? "font-medium bg-gray-50" : ""}`}
              >
                <div
                  className={`relative h-6 overflow-hidden transition-all duration-300 after:absolute after:top-[48%] after:left-1/2 
                      after:-translate-x-1/2 after:content-['>'] ${active ? "hidden" : "w-0 group-hover:w-4 md:group-hover:w-[10px]"}`}
                />
                <span className="text-sm">{listItem.name}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      {isRightScrollIcon && (
        <button
          type="button"
          onClick={() => scrollAction("right")}
          className="hidden md:flex absolute right-0 top-[2px] z-[1] h-[30px] w-6 items-center justify-end border-none bg-[#111111] text-white
                      after:absolute after:left-0 after:top-0 after:h-full after:w-[0.5px] after:bg-white after:content-['']"
        />
      )}
    </div>
  );
}
