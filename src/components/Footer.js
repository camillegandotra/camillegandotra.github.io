import mail from '../extra/mail.png'
import linkedin from '../extra/linkedin.png'
import './Footer.css';

function Footer() {
  return (
    <div className="Footer">
      <div id="footer-item">
            <a href="mailto:camiillee.ag@gmail.com" className="link" target="_blank">
              <img className="logo" src={mail} alt="GitHub Logo" />
            </a>
          </div>
          <div id="footer-item">
            <a href="https://www.linkedin.com/in/camillegandotra/" className="link" target="_blank">
              <img className="logo" src={linkedin} alt="GitHub Logo" />
            </a>
          </div>
    </div>
  );
}

export default Footer;
