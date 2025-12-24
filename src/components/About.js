import { ChevronRight } from 'lucide-react';
import Section from './Section';
import { aboutPage, coreValues, aboutTitle, coreValuesTitle } from '../data/content';

const About = () => (
  <Section id="about" bgColor="bg-gray">
    <div className="about-grid">
      <div className="about-text">
        <h2>{aboutTitle}</h2>
        {aboutPage.map((step, index) => (
          <p key={index}>{step.desc}</p>
        ))}
      </div>
      <div className="core-values">
        <h3>{coreValuesTitle}</h3>
        <ul>
          {coreValues.map((value, index) => (
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