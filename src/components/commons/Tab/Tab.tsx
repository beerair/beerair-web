import { useState, useEffect, ReactNode } from 'react';
import styled from '@emotion/styled';

import { hideScrollbar } from '@/styles/common';
import { EmotionTheme } from '@/themes';
import { useScrollToActivatedTab } from './hooks';

type TabType = 'primary' | 'secondary';
type TabSize = 'small' | 'large';

interface TabProps {
  tabItems: string[];
  children?: ReactNode;
  /** 컴포넌트 외부에서 activatedIndex를 제어할 수 있게 하기 위한 속성  */
  activatedIndex?: number;
  /** 탭 타입 (default: 'primary') */
  type?: TabType;
  /** 고스트 타입 여부 (default:false) */
  isGhost?: boolean;
  /** 탭 사이즈 (default:'small') */
  size?: TabSize;
  className?: string;
  onChange?: (activatedIndex: number) => void;
}

const Tab = ({
  tabItems = [],
  children,
  activatedIndex: outerActivatedIndex = 0,
  type = 'primary',
  isGhost = false,
  size = 'small',
  onChange = () => null,
}: TabProps) => {
  const [activatedIndex, setActivatedIndex] = useState(outerActivatedIndex);

  const { tabListRef, tabItemRefs } = useScrollToActivatedTab({ activatedIndex });

  useEffect(() => {
    setActivatedIndex(outerActivatedIndex);
  }, [outerActivatedIndex]);

  useEffect(() => {
    onChange(activatedIndex);
  }, [activatedIndex, onChange]);

  return (
    <>
      <TabList role="tablist" ref={tabListRef} size={size}>
        {tabItems.map((tabItem, index) => (
          <TabItem
            role="tab"
            ref={(element) => (tabItemRefs.current[index] = element)}
            key={tabItem}
            isSelected={activatedIndex === index}
            aria-selected={activatedIndex === index}
            onClick={() => setActivatedIndex(index)}
            tabType={type}
            isGhost={isGhost}
            size={size}
          >
            {tabItem}
          </TabItem>
        ))}
      </TabList>
      {Array.isArray(children) ? children[activatedIndex] : children}
    </>
  );
};

const TabList = styled.ul<Pick<TabProps, 'size'>>`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  padding: ${(p) => (p.size ? '12px 20px;' : '8px 20px;')};
  overflow-x: scroll;

  ${hideScrollbar};
`;

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

const TabItem = styled.li<
  { isSelected: boolean; tabType: TabType } & Pick<TabProps, 'isGhost' | 'size'>
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
    margin-left: 10px;
  }
`;

export default Tab;
