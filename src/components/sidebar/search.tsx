"use client";

import { useState, useEffect } from "react";
import { KButton, KIcon } from "kku-ui";
import { getOS } from "@/utils/system";


export default function Search() {

  // region [Hooks]
  const [isOpen, setIsOpen] = useState(false);
  const [shortcutText, setShortcutText] = useState("");
  // endregion


  // region [Privates]
  const handleOpen = () => {
    setIsOpen(true);
  };
  // endregion

  // region [Life Cycles]
  useEffect(() => {
    const os = getOS();
    setShortcutText(os === "MacOS" ? "⌘K" : "Ctrl K");

    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault(); // 브라우저 기본 검색창 방지
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);
  // endregion


  return (
    <div className="rounded-[4px] border-[0.5px] border-gray-200 p-4 md:border-none md:p-0">
      <KButton
        onClick={handleOpen}
        className="flex h-9 w-full min-w-0 items-center justify-between gap-0 rounded-[4px] border-[0.5px] border-gray-200 bg-[#111111] px-3 transition-colors hover:border-gray-400 focus:outline-primary"
      >
        <div className="flex items-center gap-3 text-sm font-light text-[#667183]">
          <KIcon icon="search" size={18} />
          <span>Search...</span>
        </div>

        <div className="rounded-[4px] border-[0.5px] border-gray-200 px-1 py-[2px] text-[10px] font-bold leading-[12px] text-white">
          {shortcutText}
        </div>
      </KButton>

      {/* Search Modal 로직이 여기에 들어갈 예정 (isOpen 상태 사용) */}
    </div>
  );
}