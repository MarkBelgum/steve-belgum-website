import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { About, Approach, BookLink, Contact, CouplesCoaching, Footer, Hero, Navigation, Services, Travel } from './components';
import './App.css';

const AppContent = () => {
  const location = useLocation();

  let themeClass = '';
  if (location.pathname === '/couples-coaching') themeClass = 'theme-couples';
  else if (location.pathname === '/veteran-coaching') themeClass = 'theme-veteran';

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