import styled from '@emotion/styled';
import cx from 'classnames';
import React from 'react';
import type { HTMLAttributes } from 'react';

type ColorTextBoxType = 'primary' | 'secondary' | 'ghost' | 'default';

type ColorTextBoxSize = 'long' | 'short';

interface ColorTextBoxProps extends HTMLAttributes<HTMLDivElement> {
  type?: ColorTextBoxType;
  size?: ColorTextBoxSize;
  width?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
}

interface StyledColorTextBoxProps {
  boxType: ColorTextBoxType;
  boxSize: ColorTextBoxSize;
  boxWidth?: string;
}

const ColorTextBox: React.FC<ColorTextBoxProps> = ({
  type = 'primary',
  size = 'long',
  width,
  children,
  className,
  onClick,
  ...attrs
}) => {
  return (
    <StyledColorTextBox
      boxType={type}
      boxSize={size}
      boxWidth={width}
      className={cx(
        `tasteBox--${type}`,
        `tasteBox--size-${size}`,
        onClick && 'tasteBox--cursor',
        className,
      )}
      onClick={onClick}
      {...attrs}
    >
      {children}
    </StyledColorTextBox>
  );
};

const StyledColorTextBox = styled.div<StyledColorTextBoxProps>`
  ${({ theme }) => theme.fonts.SubTitle5}
  display: flex;
  align-items: center;
  justify-content: ${({ boxSize }) => (boxSize === 'long' ? 'flex-start' : 'center')};
  box-sizing: border-box;
  height: 49px;
  border-radius: 8px;
  padding: 16px 20px;
  transition: background 0.3s;
  word-break: keep-all;

  &.tasteBox--cursor {
    cursor: pointer;
  }

  &.tasteBox--primary {
    background-color: ${({ theme }) => theme.semanticColor.primary};
    color: ${({ theme }) => theme.color.white};
  }

  &.tasteBox--secondary {
    background-color: ${({ theme }) => theme.semanticColor.secondary};
    color: ${({ theme }) => theme.color.black100};
  }
  &.tasteBox--ghost {
    background-color: ${({ theme }) => theme.color.whiteOpacity0};
    color: ${({ theme }) => theme.color.white};
  }
  &.tasteBox--default {
    background-color: ${({ theme }) => theme.color.whiteOpacity20};
    color: ${({ theme }) => theme.color.white};
  }
  &.tasteBox--size-long {
    width: 100%;
  }
  &.tasteBox--size-short {
    text-align: center;
    width: calc(50% - 8px); //FixMe: 디자인 보고 조정 필요
  }
`;

export default ColorTextBox;
