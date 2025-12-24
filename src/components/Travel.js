import Section from './Section';
import SectionHeader from './SectionHeader';
import Card from './Card';
import { couplesServices } from '../data/content';

const Travel = () => {
  return (
    <Section id="travel" bgColor="bg-white">
      <SectionHeader
        title="Ready to Travel with a Purpose?"
      />
      <div className="service-description">
        <p>
          What is Travel with a Purpose?
        </p>
      </div>
    </Section>
  );
};

export default Travel;