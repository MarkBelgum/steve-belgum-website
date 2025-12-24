import Section from './Section';

const Contact = () => {
  return (
    <Section id="contact" bgColor="bg-blue" className="contact-section">
      <div className="contact-content">
        <h2>Ready to Start Your Next Chapter?</h2>
        <p className="contact-subtitle">
          Whether you're a veteran seeking purpose in civilian life or a couple building a strong marriage foundation, let's talk about how I can support your journey.
        </p>
        <div className="contact-info">
          <div className="contact-item">
            <a href="https://docs.google.com/forms/d/1VwmxQI2TTV2qKhpFGYhYS0q1bHRuk2rMRtKt9w-xtGQ/edit" target="_blank" rel="noopener noreferrer">
              Contact Form
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;