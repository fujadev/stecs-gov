
import { useEffect, useState } from 'react';

const useMediaQueryWatcher = (mediaQuery: string): boolean => {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQueryWatcher = window.matchMedia(mediaQuery);
    setIsMatch(mediaQueryWatcher.matches);

    const updateMediaQueryWatcher = (e: MediaQueryListEvent): void => {
      setIsMatch(e.matches);
    };

    mediaQueryWatcher.addEventListener('change', updateMediaQueryWatcher);

    return (): void => {
      mediaQueryWatcher.removeEventListener('change', updateMediaQueryWatcher);
    };

  }, [mediaQuery]);

  return isMatch;
};

export default useMediaQueryWatcher;
