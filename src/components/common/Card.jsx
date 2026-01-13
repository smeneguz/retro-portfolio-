import './Card.css';

const Card = ({ children, title, className = '', glitch = false }) => {
  return (
    <div className={`retro-card ${className}`}>
      {title && (
        <div className="retro-card__header">
          <h3 className={glitch ? 'glitch' : ''} data-text={title}>
            {title}
          </h3>
        </div>
      )}
      <div className="retro-card__content">
        {children}
      </div>
    </div>
  );
};

export default Card;
