import Section from './Section';
import SectionHeader from './SectionHeader';
import Card from './Card';
import { veteranServices } from '../data/content';

const Services = () => {
  return (
    <Section id="veteran-coaching" bgColor="bg-gray">
      <SectionHeader
        title="Veteran Coaching"
        subtitle="Specialized coaching designed for veterans of all branches transitioning to civilian life"
      />
      <div className="service-description">
        <p>
          The transition from military to civilian life is one of the most challenging journeys a service member faces. The structure, camaraderie, and clear sense of mission don't just disappear when you take off the uniform. I understand the unique challenges veterans face—whether you served in the Army, Navy, Air Force, Marines, Coast Guard, or Space Force.
        </p>
        <p>
          My coaching approach helps you leverage the leadership skills, discipline, and resilience you developed in service while building a meaningful civilian life grounded in faith. We'll work together to identify your new mission, strengthen relationships, and create a purpose-driven path forward.
        </p>
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