import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navigation = ({ isDark, toggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Couples Coaching', id: 'couples-coaching' },
    { label: 'Veteran Coaching', id: 'veteran-coaching' },
    { label: 'Contact', id: 'contact' }
  ];

  const handleNavClick = (id) => {
    scrollToSection(id);
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-header">
          <div className="logo">Steve Belgum</div>

          <div className="nav-desktop">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
            <ThemeToggle isDark={isDark} toggleTheme={toggleTheme} />
          </div>

          <button
            className="mobile-menu-btn"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <div className={`nav-mobile ${isOpen ? 'open' : ''}`}>
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className="nav-link-mobile"
            >
              {item.label}
            </button>
            // todo: add theme button to mobile
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;