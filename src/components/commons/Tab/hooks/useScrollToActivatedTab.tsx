import { useRef, useCallback, useEffect } from 'react';

const useScrollToActivatedTab = ({ activatedIndex }: { activatedIndex: number }) => {
  const tabListRef = useRef<HTMLUListElement>(null);
  const tabItemRefs = useRef<(HTMLLIElement | null)[]>([]);

  const scrollToActivatedTabItem = useCallback(() => {
    const activatedTabItem = tabItemRefs.current[activatedIndex];

    if (!activatedTabItem || !tabListRef.current) return;

    const isFirstTab = activatedIndex === 0;
    const isLastTab = activatedIndex === tabItemRefs.current.length - 1;

    tabListRef.current.scrollTo({
      left: isFirstTab
        ? 0
        : isLastTab
        ? tabListRef.current.scrollWidth
        : activatedTabItem.offsetLeft,
      behavior: 'smooth',
    });
  }, [activatedIndex]);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.intersectionRatio < 1) {
        scrollToActivatedTabItem();
      }
    });

    const activatedTabItem = tabItemRefs.current[activatedIndex];

    activatedTabItem && intersectionObserver.observe(activatedTabItem);

    const handleTabListScroll = () => {
      intersectionObserver.disconnect();
    };

    /** tabListRef 스크롤시에는 활성화된 탭버튼으로 자동 스크롤되지 않도록 막아야한다. */
    tabListRef.current?.addEventListener('scroll', handleTabListScroll);

    return () => {
      intersectionObserver.disconnect();
      tabListRef.current?.removeEventListener('scroll', handleTabListScroll);
    };
  }, [activatedIndex, scrollToActivatedTabItem]);

  return { tabListRef, tabItemRefs };
};

export default useScrollToActivatedTab;
