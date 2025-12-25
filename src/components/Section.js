import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Section = ({ id, children, className = '' }) => {
  const [sectionRef, isVisible] = useScrollAnimation();

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`section ${className} ${isVisible ? 'visible' : ''}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;