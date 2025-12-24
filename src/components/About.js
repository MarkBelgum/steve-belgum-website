import { ChevronRight } from 'lucide-react';
import Section from './Section';
import { aboutPage } from '../data/content';

const About = () => (
  <Section id="about" bgColor="bg-gray">
    <div className="about-grid">
      <div className="about-text">
        <h2>About Steve</h2>
        {aboutPage.map((step, index) => (
          <p key={index}>{step.desc}</p>
        ))}
      </div>
      <div className="core-values">
        <h3>Core Values</h3>
        <ul>
          {['Faith-Centered Guidance', 'Honor & Integrity', 'Purpose-Driven Living', 'Accountability & Support'].map((value, index) => (
            <li key={value} className="animate-slide-in-right" style={{ animationDelay: `${index * 100}ms` }}>
              <ChevronRight size={24} />
              <span>{value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </Section>
);

export default About;