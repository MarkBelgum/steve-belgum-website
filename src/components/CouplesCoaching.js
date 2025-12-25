import Section from './Section';
import SectionHeader from './SectionHeader';
import Card from './Card';
import { couplesServices, couplesPageContent } from '../data/content';

const CouplesCoaching = () => {
  return (
    <Section id="couples-coaching">
      <SectionHeader
        title={couplesPageContent.title}
        subtitle={couplesPageContent.subtitle}
      />
      <div className="service-description">
        {couplesPageContent.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="cards-grid">
        {couplesServices.map((service, index) => (
          <Card key={index} index={index} {...service} />
        ))}
      </div>
    </Section>
  );
};

export default CouplesCoaching;