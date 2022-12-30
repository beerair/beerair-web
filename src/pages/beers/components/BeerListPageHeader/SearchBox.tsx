import styled from '@emotion/styled';
import { MouseEvent } from 'react';

import Icon from '@/components/Icon';
import { ellipsis } from '@/styles/common';

interface SearchBoxProps {
  query?: string;
  placeHolder?: string;
  onClick?: () => void;
  onClearClick?: () => void;
}

const SearchBox = ({ query, placeHolder, onClick, onClearClick }: SearchBoxProps) => {
  const handleClearClick = (e: MouseEvent) => {
    e.stopPropagation();
    onClearClick?.();
  };

  return (
    <SearchBoxButton isPlaceHolder={!query} onClick={onClick}>
      <p>{query || placeHolder}</p>
      {!!query && (
        <button className="clear" aria-label="검색어 초기화" onClick={handleClearClick}>
          <Icon name="XCircle" size={20} />
        </button>
      )}
    </SearchBoxButton>
  );
};

export default SearchBox;

const SearchBoxButton = styled.button<{ isPlaceHolder: boolean }>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 40px;
  border-radius: 8px;

  background-color: ${(p) => p.theme.color.whiteOpacity20};

  > p {
    flex: 1;
    height: 100%;
    padding: 10px 16px;
    text-align: left;
    ${(p) => p.theme.fonts.SubTitle2};
    color: ${(p) => (p.isPlaceHolder ? p.theme.color.whiteOpacity35 : p.theme.color.white)};

    ${ellipsis()};
  }

  > .clear {
    padding: 10px 16px 10px 0;

    > svg {
      width: 20px;
      height: 20px;
    }
  }
`;
