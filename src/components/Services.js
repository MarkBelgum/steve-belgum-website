import Section from './Section';
import SectionHeader from './SectionHeader';
import Card from './Card';
import { veteranServices, veteranPageContent } from '../data/content';

const Services = () => {
  return (
    <Section id="veteran-coaching" bgColor="bg-gray">
      <SectionHeader
        title={veteranPageContent.title}
        subtitle={veteranPageContent.subtitle}
      />
      <div className="service-description">
        {veteranPageContent.description.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      <div className="cards-grid">
        {veteranServices.map((service, index) => (
          <Card key={index} index={index} {...service} />
        ))}
      </div>
    </Section>
  );
};

export default Services;