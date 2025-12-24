import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

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
        <h1 className="animate-fade-in-up">Developing Leaders </h1>
        <h2 className="animate-fade-in-up">by Mentoring and Coaching</h2>
        <p className="animate-fade-in-up-delay">
          Helping young couples and veterans find clarity, purpose, and confidence
        </p>
        <div className="hero-buttons animate-fade-in-up-delay-2">
          <Button variant="outline" onClick={() => navigate('/couples-coaching')}>
            Couples Coaching
          </Button>
          <Button variant="secondary" onClick={() => navigate('/veteran-coaching')}>
            Veterans Coaching
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;