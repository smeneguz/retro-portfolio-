import { useEffect, useState } from 'react';
import { useKonamiCode } from '../../hooks/useKonamiCode';
import './EasterEgg.css';

const EasterEgg = () => {
  const [showSecret, setShowSecret] = useState(false);
  const [achievement, setAchievement] = useState('');

  useKonamiCode(() => {
    setShowSecret(true);
    setAchievement('🎮 KONAMI CODE MASTER');
    console.log('%c🎮 KONAMI CODE ACTIVATED! 🎮', 'color: #fc0fc0; font-size: 20px; font-weight: bold;');
    console.log('%cYou found a secret! Visit /game to play Snake!', 'color: #00e5e8; font-size: 14px;');

    setTimeout(() => setShowSecret(false), 5000);
  });

  // Check for page visits achievements
  useEffect(() => {
    const visited = JSON.parse(localStorage.getItem('pages_visited') || '[]');
    const currentPath = window.location.pathname;

    if (!visited.includes(currentPath)) {
      visited.push(currentPath);
      localStorage.setItem('pages_visited', JSON.stringify(visited));

      if (visited.length === 5) {
        setAchievement('🗺️ EXPLORER - Visited all pages');
        setTimeout(() => setAchievement(''), 3000);
      }
    }
  }, []);

  if (!showSecret && !achievement) return null;

  return (
    <div className="easter-egg">
      {showSecret && (
        <div className="easter-egg__secret">
          <div className="easter-egg__title">SECRET UNLOCKED!</div>
          <div className="easter-egg__message">
            ↑ ↑ ↓ ↓ ← → ← → B A
          </div>
          <div className="easter-egg__subtitle">
            You've mastered the Konami Code! 🎮
          </div>
        </div>
      )}
      {achievement && !showSecret && (
        <div className="easter-egg__achievement">
          <span className="easter-egg__achievement-icon">★</span>
          {achievement}
        </div>
      )}
    </div>
  );
};

export default EasterEgg;
