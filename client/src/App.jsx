import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Portfolio from "./Pages/page";
import ServicesAndCheckout from "./Pages/ServicesAndCheckout"; // Path to your golden glassmorphism file
import ScrollToTop from "./components/ScrollToTop";
import './App.css';

function App() {
      useEffect(() => {
  
  if (window.location.hash) {
    history.replaceState(null, "", window.location.pathname + window.location.search);
  }

  // Scroll to top on first load
  window.scrollTo({ top: 0, behavior: "auto" });
}, []);
  return (
    <>
      {/* Ensures scroll position drops to 0,0 across every single route transition */}
      <ScrollToTop /> 
      
      <Routes>
        {/* Your Main Portfolio Page */}
        <Route path="/" element={<Portfolio />} />
        
        {/* Your New Business Services & Booking Router */}
        <Route path="/services" element={<ServicesAndCheckout />} />
      </Routes>
    </>
  );
}

export default App;