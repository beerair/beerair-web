import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useCallback, useMemo } from 'react';

import Icon from '@/components/Icon';

import { useSearchHistory } from '../../hooks';

export type SearchIconType = 'search' | 'history';

interface SearchItemProps {
  type?: SearchIconType;
  text: string;
  highlightingText?: string;
  deleteButtonText?: string;
  className?: string;
  hasDeleteButton?: boolean;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

const DEFAULT_DELETE_BUTTON_TEXT = '삭제';
export const DEFAULT_ICON_TYPE = 'search';

const SearchItem: React.FC<SearchItemProps> = ({
  type = DEFAULT_ICON_TYPE,
  text,
  highlightingText = '',
  deleteButtonText = DEFAULT_DELETE_BUTTON_TEXT,
  className,
  hasDeleteButton = false,
  onClick,
}) => {
  const router = useRouter();
  const { removeSearchHistory, addSearchHistory } = useSearchHistory();
  const renderedText = useMemo(() => {
    if (!highlightingText?.trim()) {
      return text;
    }

    const highlightingTextRegExp = new RegExp(`(${highlightingText})`, 'gi');

    return text
      .split(highlightingTextRegExp)
      .map((v, i) => (highlightingTextRegExp.test(v) ? <strong key={`${v}-${i}`}>{v}</strong> : v));
  }, [text, highlightingText]);

  const handleDelete = useCallback<React.MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.stopPropagation();
      removeSearchHistory(text);
    },
    [removeSearchHistory, text],
  );

  const handleClick = useCallback(() => {
    router.push(`/beers?query=${encodeURI(text)}`);
    addSearchHistory(text);
  }, [text, router, addSearchHistory]);

  return (
    <StyledSearchItem onClick={onClick || handleClick} className={className} data-cy="search-item">
      <div className="search-item-side">
        <span className="search-item-icon-wrapper">
          {type === DEFAULT_ICON_TYPE ? (
            <Icon name="Search" color="whiteOpacity50" />
          ) : (
            <Icon name="History" />
          )}
        </span>
        <span className="search-item-content" data-cy="search-item-text">
          {renderedText}
        </span>
      </div>
      <div className="search-item-side">
        {hasDeleteButton && (
          <button
            type="button"
            onClick={handleDelete}
            className="search-item-delete-btn"
            data-cy="search-item-delete-btn"
          >
            {deleteButtonText}
          </button>
        )}
      </div>
    </StyledSearchItem>
  );
};

const StyledSearchItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 20px;
  cursor: pointer;

  & .search-item-side {
    display: flex;
    align-items: center;
  }

  & .search-item-icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.2);
    width: 28px;
    height: 28px;
    border-radius: 14px;
    margin-right: 16px;

    & svg {
      width: 18px;
      height: 18px;
    }
  }

  & .search-item-content {
    font-size: 15px;
    color: #fff;

    & strong {
      font-weight: bold;
    }
  }

  & .search-item-delete-btn {
    font-size: 12px;
    color: #f6c000;
    background: none;
    border: none;
    cursor: pointer;
  }
`;

export default SearchItem;
