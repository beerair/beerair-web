import { useEffect, useState } from 'react';

const useScroll = () => {
  const [scroll, setScroll] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const scrollEventListener = () => {
      const scrollY = window.scrollY ?? window.pageYOffset;

      if (scrollY > 30) {
        setScroll(true);
        setIsTransparent(false);
      } else {
        setScroll(false);
        setIsTransparent(true);
      }
    };
    window.addEventListener('scroll', scrollEventListener, { passive: true });
    return () => {
      window.removeEventListener('scroll', scrollEventListener);
    };
  }, []);

  return { scroll, isTransparent };
};

export default useScroll;
