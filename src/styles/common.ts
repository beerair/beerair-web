import { css } from '@emotion/react';

/** @note 요소의 width가 존재해야 올바르게 동작합니다. */
export const ellipsis = (lineCount = 1) => css`
  text-overflow: ellipsis;
  overflow: hidden;

  word-break: ${lineCount === 1 ? 'break-all' : 'break-word'};
  display: -webkit-box;
  -webkit-line-clamp: ${lineCount};
  -webkit-box-orient: vertical;
`;

export const hideScrollbar = css`
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar,
  &::-webkit-scrollbar-thumb {
    display: none;
    width: 0;
    height: 0;
    display: none;
    background-color: rgba(0, 0, 0, 0);
  }
`;
