

const ContactEmail = ({ show }) => {
  return show ? (
    <div className="contact-item">
      <p>Email</p>
      <a href="mailto:steve@stevebelgum.com">
        steve@stevebelgum.com
      </a>
    </div>
  ) : <></>;
};

export default ContactEmail;