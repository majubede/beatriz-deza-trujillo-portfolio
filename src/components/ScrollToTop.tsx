import { useEffect, useLayoutEffect } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  const navType = useNavigationType();

  // Use useLayoutEffect to scroll before paint
  useLayoutEffect(() => {
    if (navType !== 'POP') {
      // Temporarily disable smooth scrolling for instant jump
      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = 'auto';
      window.scrollTo(0, 0);
      // Restore after a tick
      requestAnimationFrame(() => {
        html.style.scrollBehavior = prevBehavior;
      });
    }
  }, [pathname, navType]);

  return null;
};

export default ScrollToTop;
