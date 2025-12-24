import { ChevronRight } from 'lucide-react';
import Section from './Section';

const About = () => (
  <Section id="about" bgColor="bg-gray">
    <div className="about-grid">
      <div className="about-text">
        <h2>About Steve</h2>
        <p>
          As a Christian life coach, I'm passionate about serving two distinct communities: veterans transitioning to civilian life and young couples building strong foundations for their marriages.
        </p>
        <p>
          Whether you're a veteran navigating the challenges of coming home or a couple learning to grow together in faith and partnership, I'm here to provide guidance, accountability, and support rooted in Christian principles.
        </p>
        <p>
          Together, we'll work through challenges, celebrate victories, and build the purposeful life you're called to live.
        </p>
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