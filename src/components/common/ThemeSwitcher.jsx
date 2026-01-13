import { useState } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { currentTheme, changeTheme, availableThemes } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="theme-switcher">
      <button
        className="theme-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change theme"
      >
        <FontAwesomeIcon icon={faPalette} />
        <span className="theme-switcher__label">THEME</span>
      </button>

      {isOpen && (
        <div className="theme-switcher__menu">
          {availableThemes.map((theme) => (
            <button
              key={theme.id}
              className={`theme-option ${currentTheme === theme.id ? 'theme-option--active' : ''}`}
              onClick={() => {
                changeTheme(theme.id);
                setIsOpen(false);
              }}
            >
              <span className="theme-option__name">{theme.name}</span>
              <span className="theme-option__desc">{theme.description}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ThemeSwitcher;
