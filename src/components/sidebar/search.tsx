"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { KIcon } from "kku-ui";
import { getOS } from "@/utils/system";


export default function Search() {

  // region [Hooks]
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [shortcutText, setShortcutText] = useState("");
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  // endregion


  // region [Privates]
  const handleOpen = useCallback(() => {
    setIsOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  const handleSearch = useCallback(() => {
    const trimmed = query.trim();
    if (!trimmed) return;
    router.push(`/archive/search?q=${encodeURIComponent(trimmed)}`);
    handleClose();
  }, [query, router, handleClose]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    } else if (e.key === "Escape") {
      handleClose();
    }
  }, [handleSearch, handleClose]);

  const handleBackdropClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  }, [handleClose]);
  // endregion

  // region [Life Cycles]
  useEffect(() => {
    const os = getOS();
    setShortcutText(os === "MacOS" ? "⌘K" : "Ctrl K");

    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);
    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);
  // endregion


  return (
    <div className="rounded-[4px] border-[0.5px] border-gray-200 md:border-none md:p-0">
      <button
        type="button"
        onClick={handleOpen}
        className="flex h-9 w-full min-w-0 items-center justify-between gap-0 rounded-[4px] border border-gray-200 bg-white px-3 transition-colors hover:border-gray-400 focus:outline-primary dark:border-gray-700 dark:bg-[#111111]"
      >
        <div className="flex items-center gap-3 text-sm font-light text-gray-400 dark:text-[#667183]">
          <KIcon icon="search" size={18} />
          <span>Search...</span>
        </div>

        <div className="rounded-[4px] border border-gray-200 px-1 py-[2px] text-[10px] font-bold leading-[12px] text-gray-500 dark:border-gray-700 dark:text-white">
          {shortcutText}
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-start justify-center backdrop-blur-sm bg-black/20 pt-[15vh] animate-[fadeIn_150ms_ease-out] dark:bg-black/50"
          onClick={handleBackdropClick}
        >
          <div className="w-full max-w-[520px] mx-4 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-[0_16px_70px_rgba(0,0,0,0.15)] dark:border-gray-700 dark:bg-[#111111] dark:shadow-[0_16px_70px_rgba(0,0,0,0.6)] animate-[slideDown_150ms_ease-out]">
            <div className="flex items-center gap-3 px-4 py-3.5">
              <KIcon icon="search" size={20} color="#9ca3af" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="검색어를 입력하세요..."
                className="flex-1 bg-transparent text-sm text-gray-900 placeholder-gray-400 outline-none font-default dark:text-white dark:placeholder-gray-500"
              />
              <kbd
                onClick={handleClose}
                className="cursor-pointer select-none rounded border border-gray-200 px-1.5 py-0.5 text-[10px] font-bold leading-[12px] text-gray-400 transition-colors hover:border-gray-100 hover:text-gray-700 dark:border-gray-700 dark:hover:text-white"
              >
                ESC
              </kbd>
            </div>

            <div className="border-t border-gray-200 px-4 py-2.5 dark:border-gray-700">
              <p className="text-[11px] text-gray-400 dark:text-gray-500">
                <kbd className="mr-1 rounded border border-gray-200 px-1 py-px text-[10px] dark:border-gray-700">Enter</kbd>
                검색
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
