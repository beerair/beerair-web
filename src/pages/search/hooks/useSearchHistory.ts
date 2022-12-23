import { uniq } from 'lodash';
import { useCallback } from 'react';
import { useRecoilState } from 'recoil';

import { config } from '@/constants/config';

import { $searchHistories } from '../atoms';

const useSearchHistory = () => {
  const [searchHistories, setSearchHistories] = useRecoilState($searchHistories);

  const addSearchHistory = useCallback(
    (searchText: string) => {
      if (!searchText?.trim()) {
        return;
      }

      let addedSearchHistories = uniq([searchText, ...searchHistories]);

      if (addedSearchHistories.length > config.history.maxLength) {
        addedSearchHistories = addedSearchHistories.slice(0, config.history.maxLength);
      }

      setSearchHistories(addedSearchHistories);
    },
    [searchHistories, setSearchHistories],
  );

  const removeSearchHistory = useCallback(
    (text: string) => {
      const removeIndex = searchHistories.findIndex((history) => history === text);
      if (removeIndex === -1) {
        return;
      }

      const removedSearchHistories = [...searchHistories];
      removedSearchHistories.splice(removeIndex, 1);
      setSearchHistories(removedSearchHistories);
    },
    [searchHistories, setSearchHistories],
  );

  return { searchHistories, addSearchHistory, removeSearchHistory };
};

export default useSearchHistory;
