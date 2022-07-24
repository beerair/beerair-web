import React, { useCallback, useState, useTransition } from 'react';
import { RecoilRoot } from 'recoil';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

import Header from '@/components/commons/Header';
import { BackButton } from '@/components/commons/Header/extras';

import SearchInput from './SearchInput/SearchInput';

const SearchList = dynamic(() => import('@/containers/SearchContainer/SearchList'), {
  ssr: false,
});

const StyledSearchContainer = styled.div`
  & > .search-page-header {
    border-bottom: 1px solid ${(p) => p.theme.semanticColor.secondary};
    margin-bottom: 15px;
  }
`;

const SearchContainer: React.FC = () => {
  const [highlightingText, setHighlightingText] = useState('');
  const [, startTransition] = useTransition();

  const handleChangeHighlightingText = useCallback(
    (searchText: string) =>
      startTransition(() => {
        setHighlightingText(searchText);
      }),
    [],
  );

  return (
    <RecoilRoot>
      <StyledSearchContainer>
        <Header leftExtras={<BackButton />} className="search-page-header">
          <SearchInput onChangeHighlightingText={handleChangeHighlightingText} />
        </Header>
        <SearchList type="history" highlightingText={highlightingText} />
      </StyledSearchContainer>
    </RecoilRoot>
  );
};

export default SearchContainer;
