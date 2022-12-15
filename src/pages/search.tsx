import React, { useCallback, useState, useTransition } from 'react';
import { RecoilRoot } from 'recoil';
import dynamic from 'next/dynamic';
import styled from '@emotion/styled';

import Header from '@/components/commons/Header';
import { BackButton } from '@/components/commons/Header/extras';
import SearchInput from '@/components/search/SearchInput';

const SearchList = dynamic(() => import('@/components/search/SearchList'), {
  ssr: false,
});

const StyledSearchPage = styled.div`
  & > .search-page-header {
    border-bottom: 1px solid ${(p) => p.theme.semanticColor.secondary};
    margin-bottom: 15px;
  }
`;

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
