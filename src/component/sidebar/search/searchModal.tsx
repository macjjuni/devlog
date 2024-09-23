import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import { KIcon, KModal, KTextField, KTextFieldRefs } from "kku-ui";
import { useRouter } from "next/navigation";
import "./searchModal.scss";
import { getSearchPageUrl } from "@/route";
import { useStore } from "@/store/store";
import useSearchText from "@/hook/useSearchText";
import Link from "next/link";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export interface SearchHistoryType {
  text: string;
  date: number;
}

function SearchModal({ isOpen, onClose }: SearchModalProps) {
  // region [Hooks]

  const searchRef = useRef<KTextFieldRefs>(null);
  const { push } = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const sanitizedSearchText = useMemo(() => searchValue?.trim() || "", [searchValue]);
  const searchHistory = useStore((state) => state.searchHistory);
  const setSearchHistory = useStore((state) => state.setSearchHistory);
  const sortByRecentDateHistory = useMemo(() => searchHistory.sort((a, b) => b.date - a.date), [searchHistory]);
  const searchText = useSearchText();

  // endregion

  // region [Privates]

  const removeDuplicatesByRecentDate = useCallback((history: SearchHistoryType[]): SearchHistoryType[] => {
    const map = new Map<string, SearchHistoryType>();

    history.forEach((item) => {
      const existingItem = map.get(item.text);

      if (!existingItem) {
        map.set(item.text, item);
      } else if (new Date(item.date) > new Date(existingItem.date)) {
        map.set(item.text, item);
      }
    });

    return Array.from(map.values());
  }, []);

  const onRemoveSearchHistoryItem = useCallback(
    (historyDate: number) => {
      const removedHistory = searchHistory.filter((item) => item.date !== historyDate);
      setSearchHistory(removedHistory);
    },
    [searchHistory, setSearchHistory],
  );

  const generateSearchHistory = useCallback(
    (text: string) => {
      const historyData = { text, date: Date.now() };
      // 중복 제거
      const list = removeDuplicatesByRecentDate(searchHistory.concat(historyData));
      setSearchHistory(list);
    },
    [sanitizedSearchText, searchHistory],
  );

  const onSearchEvent = useCallback(() => {
    if (sanitizedSearchText === "") {
      searchRef.current?.focus();
      return;
    }
    push(getSearchPageUrl(sanitizedSearchText));
  }, [searchHistory, sanitizedSearchText]);

  // endregion

  // region [Events]

  const onChangeSearchValue = useCallback((value: string) => {
    setSearchValue(value);
  }, []);

  const onClickSearch = useCallback(() => {
    onSearchEvent();
  }, [onSearchEvent]);

  const onKeyDownEnter = useCallback(() => {
    onSearchEvent();
  }, [onSearchEvent]);

  const onClickRemoveHistoryItem = useCallback(
    (historyDate: number) => {
      onRemoveSearchHistoryItem(historyDate);
    },
    [onRemoveSearchHistoryItem],
  );

  // endregion

  // region [Life Cycles]

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        searchRef.current?.focus();
      }, 300);
    }
  }, [isOpen]);

  useEffect(() => {
    if (searchText) {
      generateSearchHistory(searchText);
    }
  }, [searchText]);

  // endregion

  // region [Template]

  const searchContent = useMemo(() => {
    return (
      <>
        <div className={"search__input__container"}>
          <KIcon icon={"search"} size={24} onClick={onClickSearch} />
          <KTextField ref={searchRef} className={"search__modal__search__input"} fullWidth value={searchValue}
            onChange={onChangeSearchValue} onKeyDownEnter={onKeyDownEnter} placeholder={"검색어를 입력하세요."} />
        </div>
        <hr />
        <div className={"search__history__container"}>
          <p className={"search__history__title"}>최근 검색어</p>

          {sortByRecentDateHistory.length === 0 ? (
            <div className={"search__history__no__item"}>최근 검색어가 없습니다.</div>
          ) : (
            <div className={"search__history__list"}>
              {sortByRecentDateHistory.map((item) => (
                <Link href={getSearchPageUrl(item.text)} key={item.date} className={"search__history__list__item"}>
                  <span className={"search__history__list__item__text"}>{item.text}</span>
                  <span className={"search__history__list__item__close"}>
                    <KIcon icon={"close"} size={14} color={"#fff"}
                      onClick={() => {
                        onClickRemoveHistoryItem(item.date);
                      }}
                    />
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </>
    );
  }, [searchValue, searchHistory]);

  // endregion

  return <KModal title={"123"} isOpen={isOpen} onClose={onClose} size={"small"} escClosable overlayClosable content={searchContent} overlayOpacity={0.24} />;
}

export default memo(SearchModal);
