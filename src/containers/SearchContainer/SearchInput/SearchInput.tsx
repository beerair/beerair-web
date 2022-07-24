import React, { useCallback, useState } from 'react';
import { useRecoilValue } from 'recoil';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import Icon from '@/components/commons/Icon';

import { $addSearchHistory } from '../atoms';

const PLACEHOLDER_TEXT = '맥주 이름, 특징 검색';

interface SearchInputProps {
  defaultSearchText?: string;
  onChangeHighlightingText: (searchText: string) => void;
}

const StyledSearchInput = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  & form {
    width: 100%;

    & .search-input {
      ${({ theme }) => theme.fonts.SubTitle1};
      color: ${({ theme }) => theme.color.white};
      padding: 20px 10px;
      width: 100%;

      &::placeholder {
        ${({ theme }) => theme.color.whiteOpacity35};
      }
    }
  }
`;

const SearchInput: React.FC<SearchInputProps> = ({
  defaultSearchText = '',
  onChangeHighlightingText,
}) => {
  const router = useRouter();
  const [searchText, setSearchText] = useState(defaultSearchText);
  const addSearchHistory = useRecoilValue($addSearchHistory);

  const handleChange = useCallback<React.ChangeEventHandler<HTMLInputElement>>(
    (e) => {
      setSearchText(e.target.value);
      onChangeHighlightingText(e.target.value);
    },
    [onChangeHighlightingText],
  );

  const handleReset = useCallback(() => {
    setSearchText('');
    onChangeHighlightingText('');
  }, [onChangeHighlightingText]);

  const handleSubmit = useCallback<React.FormEventHandler>(
    (e) => {
      e.preventDefault();

      if (addSearchHistory) {
        addSearchHistory(searchText);
        /**
         * TODO: 기존 beer list 페이지에서 설정한 filter 유지되도록 refactoring 필요
         * https://github.com/beerair/beerair-web/issues/100
         */
        router.push(`/beers?query=${encodeURI(searchText)}`).then(() => {});
      }
    },
    [searchText, addSearchHistory, router],
  );

  return (
    <StyledSearchInput>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="search-input"
          onChange={handleChange}
          value={searchText}
          placeholder={PLACEHOLDER_TEXT}
        />
      </form>
      {searchText && (
        <button onClick={handleReset}>
          <Icon name="XCircle" size={20} />
        </button>
      )}
    </StyledSearchInput>
  );
};

export default SearchInput;