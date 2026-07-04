import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Clear any hash immediately if present
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
    // Instantly snap to top on route change
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}