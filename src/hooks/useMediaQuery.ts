import { useState, useEffect } from 'react';

const useMediaQuery = (query: string): boolean => {
  const [isMatch, setIsMatch] = useState<boolean>(false);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query);

    const handleMediaChange = (e: MediaQueryListEvent) => setIsMatch(e.matches);

    mediaQueryList.addEventListener('change', handleMediaChange);

    setIsMatch(mediaQueryList.matches);

    return () =>
      mediaQueryList.removeEventListener('change', handleMediaChange);
  }, [query]);

  return isMatch;
};

export default useMediaQuery;
