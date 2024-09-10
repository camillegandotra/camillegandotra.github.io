import mail from '../extra/mail.png'
import linkedin from '../extra/linkedin.png'
import './Contact.css';

function Contact() {
  return (
    <div className="Contact">
      <h1>> contact me</h1>
        <div id="contact-links">
          <div id="contact-item">
            <a href="mailto:camiillee.ag@gmail.com" className="link" target="_blank">
              <img className="logo" src={mail} alt="GitHub Logo" />
              gmail
            </a>
          </div>
          <div id="contact-item">
            <a href="https://www.linkedin.com/in/camillegandotra/" className="link" target="_blank">
              <img className="logo" src={linkedin} alt="GitHub Logo" />
              linkedin
            </a>
          </div>
        </div>
    </div>
  );
}

export default Contact;
