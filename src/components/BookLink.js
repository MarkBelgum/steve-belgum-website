import Section from './Section';
import { bookUrl, bookLinkTitle, bookLinkText } from '../data/content';

const BookLink = () => {
  return (
    <Section id="bookLink" className="contact-section">
      <div className="contact-content">
        <h2 className="contact-subtitle">
          {bookLinkTitle}
        </h2>
        <div className="contact-info">
          <div className="contact-item">
            <a href={bookUrl} target="_blank" rel="noopener noreferrer">
              {bookLinkText}
            </a>
          </div>
        </div>
      </div>
    </Section >
  );
};

export default BookLink;