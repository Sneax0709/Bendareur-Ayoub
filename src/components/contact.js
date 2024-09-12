import './contact.css';
import { LinkedinOutlined, GithubOutlined, MailOutlined } from '@ant-design/icons';

function Contact() {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
        alert('Email copié dans le presse-papiers !');
    }).catch((err) => {
        console.error('Erreur lors de la copie dans le presse-papiers : ', err);
    });
  };

  return (
    <section id="contact">
      {/* <h2>Contact :</h2> */}
      <ul className="contact-list">
        <li className="contact-item">
          <a href="https://www.linkedin.com/in/ayoub-b-569602273" target="_blank" rel="noopener noreferrer" className="contact-link">
            <LinkedinOutlined className="contact-icon" style={{ fontSize: '30px', marginRight: '8px' }} />
            <span className="contact-text">LinkedIn</span>
          </a>
        </li>
        <li className="contact-item">
          <a href="https://github.com/Sneax0709" target="_blank" rel="noopener noreferrer" className="contact-link">
            <GithubOutlined className="contact-icon" style={{ fontSize: '30px', marginRight: '8px' }} />
            <span className="contact-text">GitHub</span>
          </a>
        </li>
        <li className="contact-item">
        <a href="mailto:ayoub.bendareur@epitech.eu" className="contact-link">
            <MailOutlined className="contact-icon" style={{ fontSize: '30px', marginRight: '8px' }} />
            <span className="contact-text">Mail</span>
        </a>
        </li>
      </ul>
    </section>
);
}

export default Contact;