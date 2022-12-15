import React from 'react';
import styled from '@emotion/styled';
import type { HTMLAttributes } from 'react';
import cx from 'classnames';

import { ColorTheme } from '@/themes/types';

type ChipType = 'primary' | 'secondary' | 'ghost' | 'default';

interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  type?: ChipType;
  width?: string;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  disabled?: boolean;
  label?: React.ReactNode;
  className?: string;
}

interface StyledChipProps {
  chipType: ChipType;
  chipWidth?: string;
}

const Chip: React.FC<ChipProps> = ({
  type = 'default',
  width,
  className,
  leftAddon,
  rightAddon,
  label,
  ...attrs
}) => {
  return (
    <StyledChip chipType={type} chipWidth={width} className={className} {...attrs}>
      {leftAddon && <span className="common-chip-icon-wrapper margin-right">{leftAddon}</span>}
      <span className={cx('common-chip-text')}>{label}</span>
      {rightAddon && <span className={`common-chip-icon-wrapper margin-left`}>{rightAddon}</span>}
    </StyledChip>
  );
};

const getColorByType = (type: ChipType, theme: ColorTheme) => {
  switch (type) {
    case 'primary':
      return theme.semanticColor.primary;
    case 'secondary':
      return theme.semanticColor.secondary;
    case 'ghost':
      return theme.color.whiteOpacity0;
    default:
      return theme.color.whiteOpacity20;
  }
};

const getFontColorByType = (type: ChipType, theme: ColorTheme) => {
  switch (type) {
    case 'primary':
      return theme.color.white;
    case 'secondary':
      return theme.semanticColor.backgroundLow;
    case 'ghost':
      return theme.color.white;
    default:
      return theme.semanticColor.secondary;
  }
};
const StyledChip = styled.div<StyledChipProps>`
  background-color: ${({ theme, chipType }) => getColorByType(chipType, theme)};
  color: ${({ theme, chipType }) => getFontColorByType(chipType, theme)};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: filter 0.2s;
  box-sizing: border-box;
  width: fit-content;
  ${({ chipWidth }) => (chipWidth ? ` width: ${chipWidth};` : '')};

  border-radius: 12px;
  padding: 6px 11px;
  height: 24px;

  & > .common-chip-icon-wrapper {
    height: 14px;

    &.margin-right {
      margin-right: 5px;
    }
    &.margin-left {
      margin-left: 5px;
    }

    & svg {
      width: 14px;
      height: 14px;
    }
  }

  & > .common-chip-text {
    display: inline-block;
    font-weight: 400;
    font-size: 10px;
    line-height: 12px;
  }

  &:active {
    filter: brightness(80%);
  }

  &:disabled {
    cursor: not-allowed;
    outline: ${({ theme }) => theme.color.whiteOpacity20} solid 2px;
    outline-offset: -2px;
    color: ${({ theme }) => theme.color.whiteOpacity20};
    background-color: ${({ theme }) => theme.color.black80};
  }
`;

export default Chip;
