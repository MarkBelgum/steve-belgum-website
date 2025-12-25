import Section from './Section';
import SectionHeader from './SectionHeader';
import { travelPageContent } from '../data/content';

const Travel = () => {
  return (
    <Section id="travel">
      <SectionHeader
        title={travelPageContent.title}
      />
      <div className="service-description">
        <p>
          {travelPageContent.description}
        </p>
      </div>
    </Section>
  );
};

export default Travel;