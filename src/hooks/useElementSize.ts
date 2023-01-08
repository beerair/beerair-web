import { debounce as _debounce } from 'lodash';
import { useRef, useState, useEffect, RefObject } from 'react';

const DEBOUNCE_WAIT_TIME = 300;

interface useElementSizeOptions {
  debounce?: boolean;
}

const useElementSize = <T extends HTMLElement>({ debounce }: useElementSizeOptions = {}): {
  ref: RefObject<T>;
  size: { width: number; height: number };
} => {
  const ref = useRef<T>(null);
  const [size, setSize] = useState<{ width: number; height: number }>({ width: 0, height: 0 });

  useEffect(() => {
    if (!ref.current) return;

    const resizeHandler: ResizeObserverCallback = (entries) => {
      const entry = entries[0];
      if (entry.contentRect) {
        setSize({
          width: entry.contentRect.width,
          height: entry.contentRect.height,
        });
      }
    };

    const debouncedResizeHandler = _debounce(resizeHandler, DEBOUNCE_WAIT_TIME);
    const resizeObserver = new ResizeObserver(debounce ? debouncedResizeHandler : resizeHandler);

    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, [ref, debounce]);

  return { ref, size };
};

export default useElementSize;
