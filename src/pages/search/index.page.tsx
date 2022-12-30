import styled from '@emotion/styled';
import dynamic from 'next/dynamic';
import React, { useCallback, useState, useTransition } from 'react';
import { RecoilRoot } from 'recoil';

import Header, { HEADER_HEIGHT } from '@/components/Header';
import { BackButton } from '@/components/Header/extras';

import SearchInput from './components/SearchInput';

const SearchList = dynamic(() => import('./components/SearchList'), {
  ssr: false,
});

const SearchPage: React.FC = () => {
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
      <StyledSearchPage>
        <Header leftExtras={<BackButton />} className="search-page-header">
          <SearchInput onChangeHighlightingText={handleChangeHighlightingText} />
        </Header>
        <SearchList type="history" highlightingText={highlightingText} />
      </StyledSearchPage>
    </RecoilRoot>
  );
};

export default SearchPage;

const StyledSearchPage = styled.div`
  padding: ${HEADER_HEIGHT + 15}px 0 0;

  & > .search-page-header {
    border-bottom: 1px solid ${(p) => p.theme.semanticColor.secondary};
  }
`;
