import Section from './Section';
import { contactUrl, contactPageContent } from '../data/content';

const Contact = () => {
  return (
    <Section id="contact" bgColor="bg-blue" className="contact-section">
      <div className="contact-content">
        <h2>{contactPageContent.title}</h2>
        <p className="contact-subtitle">
          {contactPageContent.subtitle}
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <a href={contactUrl} target="_blank" rel="noopener noreferrer">
              {contactPageContent.buttonText}
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;