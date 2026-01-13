import { getSocialLinks } from '../../utils/siteData';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const social = getSocialLinks();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__section">
            <h3 className="footer__title">SILVIO MENEGUZZO</h3>
            <p className="footer__subtitle">PhD in Blockchain & DLT</p>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">QUICK LINKS</h4>
            <ul className="footer__links">
              <li><a href="/" className="footer__link">► Home</a></li>
              <li><a href="/about" className="footer__link">► About</a></li>
              <li><a href="/projects" className="footer__link">► Projects</a></li>
              <li><a href="/blog" className="footer__link">► Blog</a></li>
              <li><a href="/contact" className="footer__link">► Contact</a></li>
            </ul>
          </div>

          <div className="footer__section">
            <h4 className="footer__heading">CONNECT</h4>
            <div className="footer__social">
              <a href={social.github.url} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
                GitHub
              </a>
              <a href={social.linkedin.url} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                LinkedIn
              </a>
              <a href={social.twitter.url} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="X (Twitter)">
                X (Twitter)
              </a>
              <a href={social.scholar.url} target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Google Scholar">
                Google Scholar
              </a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__credits">
            <p>© {currentYear} SILVIO MENEGUZZO</p>
            <p className="footer__made-with">
              MADE WITH <span className="footer__heart">♥</span> IN RETRO STYLE
            </p>
          </div>
          <div className="footer__score">
            <span className="blink">●</span> PLAYER 1
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
