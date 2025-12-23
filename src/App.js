import { About, Approach, Contact, CouplesCoaching, Footer, Hero, Navigation, Services, ThemeToggle } from './components';
import { ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import './App.css';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <div className="app">
        <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
        <Navigation />
        <Hero />
        <About />
        <CouplesCoaching />
        <Services />
        <Approach />
        <Contact />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}