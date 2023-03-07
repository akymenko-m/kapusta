import { useEffect, useState } from 'react';

export function useWindowDimensions() {
  const isInBrowserEnvironment = typeof window === 'object';

  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    if (!isInBrowserEnvironment) {
      return false;
    }

    function getWindowDimensions() {
      return {
        width: window.innerWidth,
        height: window.innerHeight,
      };
    }
    function handleResize() {
      setWindowSize(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isInBrowserEnvironment]);
  return windowSize;
}
