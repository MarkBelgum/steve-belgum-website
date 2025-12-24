import { useState, useEffect } from 'react';
import Button from './Button';

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const Hero = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero">
      <div
        className="hero-overlay"
        style={{ transform: `translateY(${offsetY * 0.5}px)` }}
      />
      <div className="hero-content">
        <h1 className="animate-fade-in-up">Welcome Home, Warrior</h1>
        <p className="animate-fade-in-up-delay">
          Faith-based life coaching to help veterans and young couples find purpose, clarity, and confidence
        </p>
        <div className="hero-buttons animate-fade-in-up-delay-2">
          <Button variant="outline" onClick={() => scrollToSection('couples-coaching')}>
            Couples Coaching
          </Button>
          <Button variant="secondary" onClick={() => scrollToSection('veteran-coaching')}>
            Veteran Coaching
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;