import './Button.css';

const Button = ({
  children,
  onClick,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  type = 'button',
  icon = null
}) => {
  return (
    <button
      type={type}
      className={`retro-button retro-button--${variant} retro-button--${size}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <span className="retro-button__icon">{icon}</span>}
      <span className="retro-button__text">{children}</span>
    </button>
  );
};

export default Button;
