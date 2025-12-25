import Section from './Section';
import SectionHeader from './SectionHeader';
import ApproachStep from './ApproachStep';
import { approachSteps, approachTitle } from '../data/content';

const Approach = () => {
  return (
    <Section id="approach">
      <SectionHeader title={approachTitle} />
      <div className="approach-grid">
        {approachSteps.map((step, index) => (
          <ApproachStep key={index} step={step} index={index} />
        ))}
      </div>
    </Section>
  );
};

export default Approach;