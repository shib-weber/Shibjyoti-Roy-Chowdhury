import Portfolio from "./Pages/page";
import './App.css'
import { useEffect } from 'react';

function App() {
    useEffect(() => {
  
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  // Scroll to top on first load
  window.scrollTo({ top: 0, behavior: "auto" });
}, []);

  return (
      <Portfolio></Portfolio>
  );
}


export default App
