import React from 'react';
import { Heart, Target, Users, Book } from 'lucide-react';
import Section from './Section';
import SectionHeader from './SectionHeader';
import Card from './Card';

const Services = () => {
  const veteranServices = [
    {
      icon: Target,
      title: 'Transition Planning',
      description: 'Strategic guidance for moving from military to civilian life, including career planning, education, and finding your new mission.'
    },
    {
      icon: Heart,
      title: 'Faith Integration',
      description: 'Discover how your Christian faith can be the anchor during transition, providing peace, direction, and renewed purpose.'
    },
    {
      icon: Users,
      title: 'Identity & Purpose',
      description: 'Navigate the shift from military identity to civilian life while maintaining the discipline, honor, and sense of purpose that defined your service.'
    },
    {
      icon: Book,
      title: 'Personal Development',
      description: 'Set meaningful goals, develop new skills, and create a roadmap for the next chapter of your life.'
    }
  ];

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