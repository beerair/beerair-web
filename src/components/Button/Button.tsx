import { css } from '@emotion/react';
import styled from '@emotion/styled';
import cx from 'classnames';
import { isNil } from 'lodash';
import Link from 'next/link';
import React from 'react';

import { EmotionTheme } from '@/themes';
import { ColorTheme } from '@/themes/types';

type ButtonType =
  | 'primary'
  | 'secondary'
  | 'primary-line'
  | 'secondary-line'
  | 'ghost'
  | 'default'
  | 'grey'
  | 'red';

export type ButtonCount = 1 | 2 | 3 | 4 | 5 | 7 | 8 | 9;

export interface ButtonProps {
  type?: ButtonType;
  htmlType?: 'button' | 'submit';
  line?: boolean;
  width?: 'small' | 'large' | string;
  maxWidth?: string;
  count?: ButtonCount;
  leftAddon?: React.ReactNode;
  rightAddon?: React.ReactNode;
  disabled?: boolean;
  hasAnimation?: boolean;
  children?: React.ReactNode;
  className?: string;
  iconMargin?: number;
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Button: React.FC<ButtonProps> = ({
  type = 'default',
  htmlType = 'button',
  line = false,
  disabled = false,
  hasAnimation = false,
  width: _width,
  maxWidth,
  count,
  className,
  leftAddon,
  rightAddon,
  iconMargin = 6,
  children,
  onClick,
  href,
}) => {
  const width = getWidth(_width);

  const commonProps: StyledButtonProps & Pick<ButtonProps, 'children'> = {
    buttonType: type,
    buttonWidth: width,
    buttonMaxWidth: maxWidth,
    iconMargin,
    hasAnimation,
    disabled,
    children: (
      <>
        {leftAddon && <span className="common-button-icon-wrapper margin-right">{leftAddon}</span>}
        <span className="common-button-text">{children}</span>
        {!isNil(count) && <span className="common-button-count">{count}</span>}
        {rightAddon && <span className="common-button-icon-wrapper margin-left">{rightAddon}</span>}
      </>
    ),
  };

  if (href) {
    return (
      <Link href={href} passHref>
        <StyledLinkButton
          className={cx([className, line && 'common-button-line'])}
          {...commonProps}
        />
      </Link>
    );
  }

  return (
    <StyledButton
      className={cx([className, line && 'common-button-line'])}
      type={htmlType}
      {...commonProps}
      onClick={onClick}
    />
  );
};

export default Button;

const getWidth = (width?: 'small' | 'large' | string) => {
  switch (width) {
    case 'small':
      return '120px';
    case 'large':
      return '244px';
    default:
      return width;
  }
};

const getColorByType = (type: ButtonType, theme: ColorTheme) => {
  switch (type) {
    case 'primary':
      return theme.semanticColor.primary;
    case 'secondary':
      return theme.semanticColor.secondary;
    case 'ghost':
      return theme.color.whiteOpacity0;
    case 'grey':
      return theme.color.grey4;
    case 'red':
      return theme.color.red;
    default:
      return theme.color.white;
  }
};

const getLineColorByType = (type: ButtonType, theme: ColorTheme) => {
  switch (type) {
    case 'primary':
      return theme.color.blueOpacity25;
    case 'secondary':
      return theme.color.yellowOpacity20;
    default:
      return theme.color.whiteOpacity20;
  }
};

const getFontColorByType = (type: ButtonType, theme: ColorTheme) =>
  ['secondary', 'default'].includes(type) ? theme.color.black100 : theme.color.white;

interface StyledButtonProps {
  buttonType: ButtonType;
  buttonWidth?: string;
  buttonMaxWidth?: string;
  iconMargin: number;
  hasAnimation?: boolean;
  disabled?: boolean;
}

const buttonStyles = (p: StyledButtonProps & { theme: EmotionTheme }) => css`
  background-color: ${getColorByType(p.buttonType, p.theme)};
  color: ${getFontColorByType(p.buttonType, p.theme)};
  min-width: 125px;
  height: 48px;
  border-radius: 200px;
  padding: 11.2px 25px;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: filter transform 0.2s;
  ${p.buttonWidth ? ` width: ${p.buttonWidth};` : ''}
  ${p.buttonMaxWidth ? ` max-width: ${p.buttonMaxWidth};` : ''}
  & > .common-button-icon-wrapper {
    &.margin-right {
      margin-right: ${p.iconMargin}px;
    }
    &.margin-left {
      margin-left: ${p.iconMargin}px;
    }
    & svg {
      width: 20px;
      height: 20px;
    }
  }
  & > .common-button-text {
    display: block;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  & > .common-button-count {
    display: block;
    margin-left: 4px;
    min-width: 20px;
    height: 20px;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${getColorByType(p.buttonType, p.theme)};
    color: ${p.theme.color.white};
  }
  &.common-button-line:not(:disabled) {
    box-shadow: 0 0 0 2px ${getColorByType(p.buttonType, p.theme)};
    color: ${getColorByType(p.buttonType, p.theme)};
    background-color: ${getLineColorByType(p.buttonType, p.theme)};
  }

  ${!p.disabled &&
  `
    &:active {
      filter: brightness(80%);
      ${p.hasAnimation ? 'transform: scale(1.1)' : ''}
    }
    `}
  &:disabled {
    cursor: not-allowed;
    color: ${p.theme.color.grey2};
    background-color: ${p.theme.color.grey4};
  }
`;

const StyledButton = styled.button<StyledButtonProps>`
  ${(p) => buttonStyles(p)}
`;

const StyledLinkButton = styled.a<StyledButtonProps>`
  ${(p) => buttonStyles(p)}
  ${(p) => p.disabled && `pointer-events: none;`}
`;
