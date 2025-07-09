import Portfolio from "./Pages/page";
import './App.css'
import { useEffect } from 'react';

function App() {
    useEffect(() => {
    // Clear hash before scroll
    const clearHash = () => {
      if (window.location.hash) {
        // Prevent GitHub from jumping to anchor
        history.replaceState(null, "", window.location.pathname + window.location.search);
      }
    };

    // Scroll to top with delay to override GitHub behavior
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
      }, 200); // Delay to ensure layout is complete
    };

    window.addEventListener("load", () => {
      clearHash();
      scrollToTop();
    });

    return () => {
      // clean up
    };
  }, []);
  return (
      <Portfolio></Portfolio>
  );
}


export default App
