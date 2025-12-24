import Section from './Section';
import SectionHeader from './SectionHeader';
import Card from './Card';
import { couplesServices } from '../data/content';

const CouplesCoaching = () => {
  return (
    <Section id="couples-coaching" bgColor="bg-white">
      <SectionHeader
        title="Couples Coaching"
        subtitle="Building strong, Christ-centered marriages for young couples"
      />
      <div className="service-description">
        <p>
          The early years of marriage are both exciting and challenging. You're learning to blend two lives, two backgrounds, and two sets of expectations into one unified partnership. Without proper guidance, small issues can become major obstacles.
        </p>
        <p>
          My couples coaching provides young married couples and engaged partners with the biblical tools, practical strategies, and supportive accountability needed to build a thriving marriage. Whether you're engaged, newlyweds, or in your first few years of marriage, I'll help you establish patterns that lead to lifelong love and partnership.
        </p>
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