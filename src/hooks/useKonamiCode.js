import { useEffect, useState } from 'react';

// Classic Konami Code: ↑ ↑ ↓ ↓ ← → ← → B A
const KONAMI_CODE = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'b',
  'a'
];

export const useKonamiCode = (callback) => {
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const newKeys = [...keys, e.key].slice(-KONAMI_CODE.length);
      setKeys(newKeys);

      // Check if Konami code is matched
      if (newKeys.join(',') === KONAMI_CODE.join(',')) {
        callback();
        setKeys([]); // Reset
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [keys, callback]);

  return keys.length;
};
