import Section from './Section';

const BookLink = () => {
  return (
    <Section id="bookLink" bgColor="bg-blue" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-subtitle">
          Check out my upcoming book
        </h2>
        <div className="contact-info">
          <div className="contact-item">
            <a href="https://www.amazon.com/Basics-of-Biblical-Greek-Vocabulary/dp/B000HZ72Q8/ref=tmm_aud_swatch_0" target="_blank" rel="noopener noreferrer">
              Amazon
            </a>
          </div>
        </div>
      </div>
    </Section >
  );
};

export default BookLink;