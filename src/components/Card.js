import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Card = ({ icon: Icon, title, description, className = '', index = 0 }) => {
  const [cardRef, isVisible] = useScrollAnimation();

  return (
    <div
      ref={cardRef}
      className={`card ${className} ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="card-icon">
        <Icon size={32} />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Card;