import { footerContent } from '../data/content';

const Footer = () => (
  <footer className="footer">
    <div className="footer-content">
      <p>{footerContent.copyright}</p>
      <p className="footer-tagline">{footerContent.tagline}</p>
      <p className="footer-tagline">{footerContent.credit}</p>
    </div>
  </footer>
);

export default Footer;