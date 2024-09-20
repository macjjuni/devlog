"use client";

import { memo, useCallback, useState, useRef, useEffect } from "react";
// import { useRouter } from "next/navigation";
// import { getSearchPageUrl } from "@/route";
// import useSearchText from "@/hook/useSearchText";
import "./search.scss";
import SearchModal from "@/component/sidebar/search/searchModal";
import { KButton, KIcon } from "kku-ui";
import getOS from "@/utils/os";

function Search() {
  // region [Hooks]

  const [isOpen, setIsOpen] = useState(false);
  const [shortcutText, setShortcutText] = useState("");
  const searchRef = useRef<HTMLInputElement | null>(null);
  // const keyword = useSearchText();
  // const [searchText, setSearchText] = useState("");
  // const [errorClass, setErrorClass] = useState<"search__card__input--error" | "">("");
  // const { push } = useRouter();

  // endregion

  // region [Privates]

  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onAddSearchOpenKeyboardEvent = useCallback((e: KeyboardEvent) => {
    if ((e.metaKey || e.ctrlKey) && e.key === "k") {
      setIsOpen(true);
    }
  }, []);

  const initializeShortcutText = useCallback(() => {
    const os = getOS();
    if (os === "mac") {
      setShortcutText("Cmd+K");
    } else {
      setShortcutText("Ctrl+K");
    }
  }, []);

  // endregion

  // region [Events]

  const onFocusSearchInput = useCallback(() => {
    setIsOpen(true);
    searchRef.current?.blur();
  }, []);

  // endregion

  // region [Effects]

  useEffect(() => {
    initializeShortcutText();
    window.addEventListener("keydown", onAddSearchOpenKeyboardEvent);

    return () => window.removeEventListener("keydown", onAddSearchOpenKeyboardEvent);
  }, []);

  // endregion

  return (
    <>
      <div className="search__card">
        <KButton className="search__card__input" onClick={onFocusSearchInput}>
          <div className={"search__card__input__icon__container"}>
            <KIcon icon={"search"} size={18} />
            Search...
          </div>
          <div className="search__card__input__shortcuts">{shortcutText}</div>
        </KButton>
      </div>
      <SearchModal isOpen={isOpen} onClose={onClose} />
    </>
  );
}

export default memo(Search);
