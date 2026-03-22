"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
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
    <div>
      <button
        type="button"
        onClick={handleOpen}
        className="flex h-9 w-full min-w-0 items-center justify-between gap-0 border border-terminal-border bg-white px-3 rounded-lg transition-colors hover:border-terminal-amber focus:outline-none"
      >
        <div className="flex items-center gap-3 text-sm text-terminal-dim">
          <span>🔍</span>
          <span>Search...</span>
        </div>

        <div className="border border-terminal-border px-1.5 py-[2px] text-[10px] font-bold leading-[12px] text-terminal-dim rounded">
          {shortcutText}
        </div>
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-start justify-center bg-black/40 pt-[15vh] animate-[fadeIn_150ms_ease-out]"
          onClick={handleBackdropClick}
        >
          <div className="w-full max-w-[520px] mx-4 overflow-hidden border border-terminal-border bg-white rounded-xl shadow-lg animate-[slideDown_150ms_ease-out]">
            <div className="flex items-center gap-3 px-4 py-3.5">
              <span className="text-terminal-dim">🔍</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="검색어를 입력하세요..."
                className="flex-1 bg-transparent text-sm text-terminal-text placeholder-terminal-dim outline-none font-default"
              />
              <kbd
                onClick={handleClose}
                className="cursor-pointer select-none border border-terminal-border px-1.5 py-0.5 text-[10px] font-bold leading-[12px] text-terminal-dim rounded transition-colors hover:text-terminal-amber hover:border-terminal-amber"
              >
                ESC
              </kbd>
            </div>

            <div className="border-t border-terminal-border px-4 py-2.5">
              <p className="text-[11px] text-terminal-dim">
                <kbd className="mr-1 border border-terminal-border px-1 py-px text-[10px] rounded">Enter</kbd>
                검색
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
