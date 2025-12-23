import useState from 'react';
import Section from './Section';
import ContactEmail from './ContactEmail';



const Contact = () => {
  const [show, setShow] = useState(false);

  return (
    <Section id="contact" bgColor="bg-blue" className="contact-section">
      <div className="contact-content">
        <h2>Ready to Start Your Next Chapter?</h2>
        <p className="contact-subtitle">
          Whether you're a veteran seeking purpose in civilian life or a couple building a strong marriage foundation, let's talk about how I can support your journey.
        </p>
        <div className="contact-info">
          <ContactEmail show={show} />
          <div className="contact-item">
            <p>Phone</p>
            <a href="tel:+15551234567">
              (555) 123-4567
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;