import { useState } from 'react';
import { Link } from 'react-router-dom';
import ThemeSwitcher from '../common/ThemeSwitcher';
import SnakeGame from '../game/SnakeGame';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [gameOpen, setGameOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__content">
            <Link to="/" className="header__logo">
              <span className="header__logo-bracket">&lt;</span>
              <span className="header__logo-text">SM</span>
              <span className="header__logo-bracket">/&gt;</span>
            </Link>

            <div className="header__actions">
              <button
                className="header__game-btn"
                onClick={() => setGameOpen(true)}
                aria-label="Play Snake Game"
                title="Play retro Snake!"
              >
                <FontAwesomeIcon icon={faGamepad} />
              </button>
              <ThemeSwitcher />
              <button
                className="header__menu-toggle"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <span className="menu-icon">{menuOpen ? 'X' : '≡'}</span>
              </button>
            </div>

            <nav className={`header__nav ${menuOpen ? 'header__nav--open' : ''}`}>
              <Link to="/" className="header__nav-link" onClick={() => setMenuOpen(false)}>
                <span className="header__nav-icon">›</span> HOME
              </Link>
              <Link to="/about" className="header__nav-link" onClick={() => setMenuOpen(false)}>
                <span className="header__nav-icon">›</span> ABOUT
              </Link>
              <Link to="/projects" className="header__nav-link" onClick={() => setMenuOpen(false)}>
                <span className="header__nav-icon">›</span> PROJECTS
              </Link>
              <Link to="/blog" className="header__nav-link" onClick={() => setMenuOpen(false)}>
                <span className="header__nav-icon">›</span> BLOG
              </Link>
              <Link to="/contact" className="header__nav-link" onClick={() => setMenuOpen(false)}>
                <span className="header__nav-icon">›</span> CONTACT
              </Link>
            </nav>
          </div>
        </div>
        <div className="header__scanline"></div>
      </header>

      {gameOpen && <SnakeGame onClose={() => setGameOpen(false)} />}
    </>
  );
};

export default Header;
