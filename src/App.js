import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { About, Approach, BookLink, Contact, CouplesCoaching, Footer, Hero, Navigation, Services, Travel } from './components';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const [themeClass, setThemeClass] = useState(() => {
    if (location.pathname === '/couples-coaching') return 'theme-couples';
    if (location.pathname === '/veteran-coaching') return 'theme-veteran';
    return '';
  });

  useEffect(() => {
    if (location.pathname === '/couples-coaching') {
      setThemeClass('theme-couples');
    } else if (location.pathname === '/veteran-coaching') {
      setThemeClass('theme-veteran');
    }
  }, [location.pathname]);

  return (
    <div className={`app ${themeClass}`}>
      <Navigation />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <About />
            <Approach />
            <Contact />
          </>
        } />
        <Route path="/couples-coaching" element={
          <>
            <CouplesCoaching />
            <Contact />
          </>
        } />
        <Route path="/veteran-coaching" element={
          <>
            <Services />
            <Contact />
          </>
        } />
        <Route path="/travel-with-purpose" element={
          <>
            <Travel />
            <BookLink />
          </>
        } />
      </Routes>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}