"use client";

import { memo, useCallback, useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { KTextField, KTextFieldRefs } from "kku-ui";
import "./search.scss";
import { getSearchPageUrl } from "@/route";
import useSearchText from "@/hook/useSearchText";

function Search() {
  // region [Hooks]

  const searchRef = useRef<KTextFieldRefs>(null);
  const keyword = useSearchText();
  const [searchText, setSearchText] = useState("");
  const [errorClass, setErrorClass] = useState<"search__card__input--error" | "">("");
  const { push } = useRouter();

  // endregion

  // region [Privates]

  const handleAddInputError = useCallback(() => {
    setErrorClass("search__card__input--error");
    searchRef.current?.focus();
  }, []);

  const handleRemoveInputError = useCallback(() => {
    setTimeout(() => {
      setErrorClass("");
    }, 600);
  }, []);

  // endregion

  // region [Events]

  const onChangeSearch = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const onSearch = useCallback(() => {
    const safeSearchText = searchText.trim();

    if (safeSearchText !== "") {
      push(getSearchPageUrl(safeSearchText));
    } else {
      handleAddInputError();
    }
  }, [searchText]);

  // endregion

  // region [Effects]

  useEffect(() => {
    if (errorClass !== "") {
      handleRemoveInputError();
    }
  }, [errorClass]);

  useEffect(() => {
    if (keyword) {
      setSearchText(keyword);
    }
  }, [keyword]);

  // endregion

  return (
    <div className="search__card">
      <KTextField
        ref={searchRef}
        className={`search__card__input ${errorClass}`}
        value={searchText} onChange={onChangeSearch}
        onKeyDownEnter={onSearch} placeholder="검색"
        clearable search onSearch={onSearch} maxLength={100} />
    </div>
  );
}

export default memo(Search);
