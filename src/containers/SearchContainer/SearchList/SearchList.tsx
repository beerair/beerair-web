import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import SearchItem, { SearchIconType, DEFAULT_ICON_TYPE } from '../SearchItem';
import { useSearchHistory } from '../hooks';
import { $addSearchHistory } from '../atoms';

interface SearchListProps {
  type?: SearchIconType;
  searchList?: string[];
  highlightingText?: string;
}

const SearchList: React.FC<SearchListProps> = ({
  type = DEFAULT_ICON_TYPE,
  searchList,
  highlightingText,
}) => {
  const setAddSearchHistory = useSetRecoilState($addSearchHistory);
  const { searchHistories, addSearchHistory } = useSearchHistory();

  const renderedSearchList = searchList || searchHistories;

  useEffect(() => {
    if (addSearchHistory) {
      setAddSearchHistory(() => addSearchHistory);
    }
  }, [setAddSearchHistory, addSearchHistory]);

  return (
    <div>
      {renderedSearchList?.map((item) => (
        <SearchItem
          key={item}
          text={item}
          type={type}
          highlightingText={highlightingText}
          hasDeleteButton={type === 'history'}
        />
      ))}
    </div>
  );
};

export default SearchList;
