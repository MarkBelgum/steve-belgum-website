import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navigationContent } from '../data/content';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = navigationContent.items;

  const handleNavClick = (item) => {
    setIsOpen(false);

    if (item.path) {
      if (location.pathname !== item.path) {
        navigate(item.path);
        if (item.id) {
          setTimeout(() => scrollToSection(item.id), 100);
        } else {
          window.scrollTo(0, 0);
        }
      } else if (item.id) {
        scrollToSection(item.id);
      } else {
        window.scrollTo(0, 0);
      }
    } else if (item.id) {
      scrollToSection(item.id);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-header">
          <div className="logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>{navigationContent.logo}</div>

          <div className="nav-desktop">
            {navItems.map((item, index) => (
              <button
                key={item.label}
                onClick={() => handleNavClick(item)}
                className="nav-link"
              >
                {item.label}
              </button>
            ))}
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
              key={item.label}
              onClick={() => handleNavClick(item)}
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