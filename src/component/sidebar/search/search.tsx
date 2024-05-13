'use client';

import { memo, useCallback, useState } from 'react';
import { KTextField } from 'kku-ui';
import './search.scss';

function Search() {
  const [searchText, setSearchText] = useState('');

  const onChangeSearch = useCallback((text: string) => {
    setSearchText(text);
  }, []);

  const onSearch = useCallback(() => {
    console.log(searchText);
  }, [searchText]);

  return (
    <div className="search__card">
      <KTextField value={searchText} onChange={onChangeSearch} onKeyDownEnter={onSearch} className="search__card__input" placeholder="검색" clearable maxLength={100} />
    </div>
  );
}

export default memo(Search);
