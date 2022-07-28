import { useState, useEffect, ReactNode } from 'react';
import styled from '@emotion/styled';

import { useScrollToTabItem } from './hooks';
import TabItem from './TabItem';

import { hideScrollbar } from '@/styles/common';

type TabType = 'primary' | 'secondary';
type TabSize = 'small' | 'large';

export interface TabProps {
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
  onChange,
}: TabProps) => {
  const [activatedIndex, setActivatedIndex] = useState(outerActivatedIndex);

  const { tabListRef, scrollToTabItem } = useScrollToTabItem({
    activatedIndex,
    tabItemsLength: tabItems.length,
  });

  useEffect(() => {
    setActivatedIndex(outerActivatedIndex);
  }, [outerActivatedIndex]);

  useEffect(() => {
    onChange?.(activatedIndex);
  }, [activatedIndex, onChange]);

  return (
    <>
      <TabList role="tablist" ref={tabListRef} size={size}>
        {tabItems.map((tabItem, index) => (
          <TabItem
            key={`${tabItem}-${index}`}
            type={type}
            isGhost={isGhost}
            size={size}
            isSelected={activatedIndex === index}
            onClick={() => setActivatedIndex(index)}
            scrollToTabItem={scrollToTabItem}
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

export default Tab;
