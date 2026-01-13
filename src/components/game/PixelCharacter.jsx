import { useState, useEffect } from 'react';
import './PixelCharacter.css';

const PixelCharacter = ({ animate = true }) => {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    if (!animate) return;

    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % 4);
    }, 200);

    return () => clearInterval(interval);
  }, [animate]);

  return (
    <div className="pixel-character">
      <div className={`pixel-character__sprite pixel-character__sprite--frame-${frame}`}>
        {/* 8-bit style character made with divs */}
        <div className="pixel-row">
          <div className="pixel"></div>
          <div className="pixel pixel--primary"></div>
          <div className="pixel pixel--primary"></div>
          <div className="pixel"></div>
        </div>
        <div className="pixel-row">
          <div className="pixel pixel--primary"></div>
          <div className="pixel pixel--secondary"></div>
          <div className="pixel pixel--secondary"></div>
          <div className="pixel pixel--primary"></div>
        </div>
        <div className="pixel-row">
          <div className="pixel pixel--primary"></div>
          <div className="pixel pixel--primary"></div>
          <div className="pixel pixel--primary"></div>
          <div className="pixel pixel--primary"></div>
        </div>
        <div className="pixel-row">
          <div className="pixel"></div>
          <div className="pixel pixel--primary"></div>
          <div className="pixel pixel--primary"></div>
          <div className="pixel"></div>
        </div>
      </div>
    </div>
  );
};

export default PixelCharacter;
