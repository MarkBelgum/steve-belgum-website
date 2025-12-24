import { useState, useEffect, useRef } from 'react';

const SectionHeader = ({ title, subtitle }) => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (headerRef.current) {
      observer.observe(headerRef.current);
    }

    return () => {
      if (headerRef.current) {
        observer.unobserve(headerRef.current);
      }
    };
  }, []);

  return (
    <div ref={headerRef} className={`section-header ${isVisible ? 'visible' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;