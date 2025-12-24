import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
import { heroContent } from '../data/content';

const Hero = () => {
  const navigate = useNavigate();
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
        <h1 className="animate-fade-in-up">{heroContent.titleLine1}</h1>
        <h2 className="animate-fade-in-up">{heroContent.titleLine2}</h2>
        <p className="animate-fade-in-up-delay">
          {heroContent.subtitle}
        </p>
        <div className="hero-buttons animate-fade-in-up-delay-2">
          <Button variant="outline" onClick={() => navigate('/couples-coaching')}>
            {heroContent.buttonCouples}
          </Button>
          <Button variant="secondary" onClick={() => navigate('/veteran-coaching')}>
            {heroContent.buttonVeterans}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;