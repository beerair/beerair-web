import styled from '@emotion/styled';
import cx from 'classnames';
import React, { useCallback } from 'react';


import Emoji from '@/components/Emoji';
import { FEEL_MESSAGES } from '@/constants/messages';

import EmojiTransitionViewer from './EmojiTransitionViewer';

interface EmojiRadioGroupProps {
  name: string;
  value: EmojiValue;
  className?: string;
  onChange?: (v: number) => void;
  onBlur?: () => void;
}

const emojiValues = [1, 2, 3, 4, 5] as const;
const EMOJI_INPUT_SIZE = 18;
const DEFAULT_VALUE = emojiValues[2];

export type EmojiValue = typeof emojiValues[number];

const StyledEmojiRadioGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1.emoji-feel-message {
    margin: 30px 0 0 0;
    ${({ theme }) => theme.fonts.H1};
    color: ${({ theme }) => theme.color.white};
  }

  & > .emoji-radio-group-wrapper {
    margin-top: auto;

    & > .emoji-radio-wrapper {
      display: inline-block;
      position: relative;

      &:not(:last-child) {
        &::after {
          position: absolute;
          top: 50%;
          right: 0;
          width: 35px;
          height: 2px;
          transform: translateY(-50%);
          content: ' ';
          background: ${({ theme }) => theme.color.darkblue};
        }
      }

      &:last-child {
        & .emoji-radio-value {
          left: 50%;
        }

        & input.emoji-feel-input[type='radio'] {
          margin: 0;
        }
      }

      & > .emoji-radio-value {
        position: absolute;
        top: calc(50% - 1px);
        left: calc((100% - 34px) / 2);
        transform: translate(-50%, -50%);
        transition: opacity 0.3s;
        opacity: 0;
        cursor: pointer;

        &.active {
          opacity: 1;
        }
      }
    }

    & input.emoji-feel-input[type='radio'] {
      width: 32px;
      height: 32px;
      appearance: none;
      cursor: pointer;
      position: relative;
      background: ${({ theme }) => theme.color.darkblue};
      border: 2px solid ${({ theme }) => theme.semanticColor.primary};
      border-radius: 16px;
      margin: 0 35px 0 0;
    }
  }
`;

const EmojiRadioGroup: React.FC<EmojiRadioGroupProps> = ({
  name,
  value = DEFAULT_VALUE,
  className,
  onChange,
  onBlur,
}) => {
  const triggerChange = useCallback(
    (v: number) => {
      onChange?.(v);
      onBlur?.();
    },
    [onChange, onBlur],
  );

  const handleClick = useCallback(
    (e: React.MouseEvent<HTMLSpanElement>) => {
      const _value = Number(e.currentTarget.dataset.value) || 0;
      triggerChange(_value);
    },
    [triggerChange],
  );

  return (
    <StyledEmojiRadioGroup className={className}>
      <EmojiTransitionViewer value={value} />
      <h1 className="emoji-feel-message">{FEEL_MESSAGES[value]}</h1>
      <div className="emoji-radio-group-wrapper">
        {emojiValues.map((emojiValue) => (
          <span
            key={emojiValue}
            className="emoji-radio-wrapper"
            data-value={emojiValue}
            onClick={handleClick}
          >
            <input
              type="radio"
              name={name}
              value={emojiValue}
              checked={value === emojiValue}
              onChange={handleChangeNull}
              className="emoji-feel-input"
            />
            <Emoji
              feel={emojiValue}
              size={EMOJI_INPUT_SIZE}
              className={cx(['emoji-radio-value', value === emojiValue && 'active'])}
            />
          </span>
        ))}
      </div>
    </StyledEmojiRadioGroup>
  );
};

const handleChangeNull = () => null;

export default EmojiRadioGroup;
