import  { useState, useEffect, useRef } from 'react';

const Section = ({ id, children, className = '', bgColor = 'bg-white' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`section ${bgColor} ${className} ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;