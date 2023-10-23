import React, { useState, useEffect } from 'react';
import { theme } from '~/theme/theme';

interface ShowOnProps {
  children: React.ReactNode;
  device: 'mobile' | 'desktop';
}

function ShowOn({ children, device }: ShowOnProps) {
  const [isVisible, setIsVisible] = useState(() => {
    if (device === 'mobile') {
      return window.innerWidth <= theme.breakpoints.mobile;
    }
    return window.innerWidth > theme.breakpoints.mobile;
  });

  useEffect(() => {
    const handleResize = () => {
      if (device === 'mobile') {
        setIsVisible(window.innerWidth <= theme.breakpoints.mobile);
      } else {
        setIsVisible(window.innerWidth > theme.breakpoints.mobile);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [device]);

  if (!isVisible) return null;

  return <>{children}</>;
}

export default ShowOn;
