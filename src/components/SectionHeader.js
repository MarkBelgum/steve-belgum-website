import { useScrollAnimation } from '../hooks/useScrollAnimation';

const SectionHeader = ({ title, subtitle }) => {
  const [headerRef, isVisible] = useScrollAnimation();

  return (
    <div ref={headerRef} className={`section-header ${isVisible ? 'visible' : ''}`}>
      <h2>{title}</h2>
      {subtitle && <p className="subtitle">{subtitle}</p>}
    </div>
  );
};

export default SectionHeader;