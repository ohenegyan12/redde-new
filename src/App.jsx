import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import PoliciesPage from './pages/PoliciesPage';
import FAQPage from './pages/FAQPage';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <Router>
      <div className="app-container">
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<FeaturesPage />} />
          <Route path="/policies" element={<PoliciesPage />} />
          <Route path="/faq" element={<FAQPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
