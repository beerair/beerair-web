import styled from '@emotion/styled';
import { useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

import { EmotionTheme } from '@/themes';

import { TabProps } from './Tab';


export const TAB_ITEM_MARGIN_LEFT = 10;

interface TabItemProps extends Required<Pick<TabProps, 'type' | 'isGhost' | 'size'>> {
  children: string;
  isSelected: boolean;
  onClick: () => void;
  scrollToTabItem: (element?: HTMLLIElement) => void;
}

const TabItem = ({
  children,
  isSelected,
  type,
  isGhost,
  size,
  onClick,
  scrollToTabItem,
}: TabItemProps) => {
  const ref = useRef<HTMLLIElement>();

  const { ref: inViewRef } = useInView({
    skip: !isSelected,
    onChange: (_, entry) => {
      if (isSelected && entry.intersectionRatio < 1) {
        scrollToTabItem(ref.current);
      }
    },
  });

  const setRefs = useCallback(
    (node: HTMLLIElement) => {
      ref.current = node;
      inViewRef(node);
    },
    [inViewRef],
  );

  return (
    <StyledTabItem
      role="tab"
      ref={setRefs}
      isSelected={isSelected}
      aria-selected={isSelected}
      onClick={onClick}
      tabType={type}
      isGhost={isGhost}
      size={size}
    >
      {children}
    </StyledTabItem>
  );
};

const getTabItemBackgroundColor = ({
  type,
  isSelected,
  theme,
  isGhost,
}: {
  isSelected: boolean;
  theme: EmotionTheme;
} & Pick<TabProps, 'type' | 'isGhost'>) => {
  if (isGhost && !isSelected) return 'transparent';

  if (type === 'primary') {
    return isSelected ? theme.semanticColor.primary : theme.color.whiteOpacity20;
  }
  return isSelected ? theme.semanticColor.secondary : theme.color.whiteOpacity20;
};

const getTabItemColor = ({
  type,
  isSelected,
  theme,
  isGhost,
}: {
  isSelected: boolean;
  theme: EmotionTheme;
} & Pick<TabProps, 'type' | 'isGhost'>) => {
  if (isGhost && !isSelected) return theme.color.whiteOpacity50;

  if (type === 'primary') {
    return isSelected ? theme.color.whiteOpacity80 : theme.color.white;
  }
  return isSelected ? theme.color.black80 : theme.color.whiteOpacity80;
};

const getHeightBySize = (size: TabProps['size']) => {
  return size === 'large' ? '36px' : '29px';
};

const getBorderRadiusBySize = (size: TabProps['size']) => {
  return size === 'large' ? '20px' : '25px';
};

const getFontBySize = ({ size, theme }: Pick<TabProps, 'size'> & { theme: EmotionTheme }) => {
  return size === 'large' ? theme.fonts.Body2 : theme.fonts.Body1;
};

const StyledTabItem = styled.li<
  { isSelected: boolean; tabType: TabProps['type'] } & Pick<TabProps, 'isGhost' | 'size'>
>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  height: ${(p) => getHeightBySize(p.size)};
  padding: 0 24px;
  border-radius: ${(p) => getBorderRadiusBySize(p.size)};
  ${(p) =>
    `border: 1px solid ${
      p.isGhost && !p.isSelected ? p.theme.color.whiteOpacity65 : 'transparent'
    };`};
  background-color: ${(p) => getTabItemBackgroundColor({ ...p, type: p.tabType })};
  color: ${(p) => getTabItemColor({ ...p, type: p.tabType })};

  ${(p) => getFontBySize(p)};

  & + li {
    margin-left: ${TAB_ITEM_MARGIN_LEFT}px;
  }
`;

export default TabItem;
