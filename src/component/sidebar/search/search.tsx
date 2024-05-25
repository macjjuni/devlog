"use client";

import { memo, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { KTextField } from "kku-ui";
import "./search.scss";
import { getSearchPageUrl } from "@/route";

function Search() {
  // region [Hooks]
  const [searchText, setSearchText] = useState("");
  const { push } = useRouter();

  // endregion

  const onChangeSearch = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const onSearch = useCallback(() => {
    const safeSearchText = searchText.trim();

    if (safeSearchText !== "") {
      push(getSearchPageUrl(safeSearchText));
    }
  }, [searchText]);

  return (
    <div className="search__card">
      <KTextField value={searchText} onChange={onChangeSearch} onKeyDownEnter={onSearch} className="search__card__input" placeholder="검색" clearable maxLength={100} />
    </div>
  );
}

export default memo(Search);
