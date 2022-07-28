import { useRef, useCallback, useEffect, useState } from 'react';
import smoothscroll from 'smoothscroll-polyfill';

import { TAB_ITEM_MARGIN_LEFT } from '../TabItem';

smoothscroll.polyfill();

interface useScrollToTabItemProps {
  activatedIndex: number;
  tabItemsLength: number;
}

const useScrollToTabItem = ({ activatedIndex, tabItemsLength }: useScrollToTabItemProps) => {
  const tabListRef = useRef<HTMLUListElement>(null);

  const [isTabListScrolling, setIsTabListScrolling] = useState(false);

  useEffect(() => {
    setIsTabListScrolling(false);
  }, [activatedIndex]);

  useEffect(() => {
    const handleTabListScroll = () => {
      setIsTabListScrolling(true);
    };

    const tabList = tabListRef.current;

    tabList?.addEventListener('scroll', handleTabListScroll);

    return () => tabList?.removeEventListener('scroll', handleTabListScroll);
  }, [activatedIndex]);

  const scrollToTabItem = useCallback(
    (tabItem?: HTMLLIElement) => {
      if (!tabItem || !tabListRef.current || isTabListScrolling) {
        /** tabListRef 스크롤시에는 활성화된 탭버튼으로 자동 스크롤되지 않도록 막아야한다. */
        return;
      }

      const isFirstTab = activatedIndex === 0;
      const isLastTab = activatedIndex === tabItemsLength - 1;

      let left = tabItem.offsetLeft - TAB_ITEM_MARGIN_LEFT;
      if (isFirstTab) {
        left = 0;
      } else if (isLastTab) {
        left = tabListRef.current.scrollWidth;
      }

      tabListRef.current.scrollTo({ left, behavior: 'smooth' });
    },
    [activatedIndex, isTabListScrolling, tabItemsLength],
  );

  return { tabListRef, scrollToTabItem };
};

export default useScrollToTabItem;
