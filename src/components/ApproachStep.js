import { useScrollAnimation } from '../hooks/useScrollAnimation';

const ApproachStep = ({ step, index }) => {
  const [stepRef, isVisible] = useScrollAnimation();

  return (
    <div
      ref={stepRef}
      className={`approach-step ${isVisible ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 200}ms` }}
    >
      <h3>{step.title}</h3>
      <p>{step.desc}</p>
    </div>
  );
};

export default ApproachStep;