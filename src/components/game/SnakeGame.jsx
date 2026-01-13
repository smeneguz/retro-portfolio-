import { useState, useEffect, useCallback, useRef } from 'react';
import './SnakeGame.css';

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = { x: 1, y: 0 };
const GAME_SPEED = 150;

const SnakeGame = ({ onClose }) => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [food, setFood] = useState(generateFood());
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const gameLoopRef = useRef(null);

  function generateFood() {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE)
    };
  }

  const moveSnake = useCallback(() => {
    if (gameOver || isPaused) return;

    setSnake(prevSnake => {
      const head = prevSnake[0];
      const newHead = {
        x: head.x + direction.x,
        y: head.y + direction.y
      };

      // Check wall collision
      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        setGameOver(true);
        return prevSnake;
      }

      // Check self collision
      if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        setGameOver(true);
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setFood(generateFood());
        setScore(s => s + 10);
        return newSnake; // Don't remove tail
      }

      newSnake.pop(); // Remove tail
      return newSnake;
    });
  }, [direction, food, gameOver, isPaused]);

  useEffect(() => {
    gameLoopRef.current = setInterval(moveSnake, GAME_SPEED);
    return () => clearInterval(gameLoopRef.current);
  }, [moveSnake]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (gameOver) return;

      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        case ' ':
          setIsPaused(p => !p);
          break;
        case 'Escape':
          onClose();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [direction, gameOver, onClose]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood(generateFood());
    setGameOver(false);
    setScore(0);
    setIsPaused(false);
  };

  return (
    <div className="snake-game-overlay" onClick={onClose}>
      <div className="snake-game-modal" onClick={(e) => e.stopPropagation()}>
        <div className="snake-game-header">
          <h2 className="snake-game-title">RETRO SNAKE</h2>
          <button className="snake-game-close" onClick={onClose}>X</button>
        </div>

        <div className="snake-game-score">
          SCORE: {score} | {isPaused ? 'PAUSED' : 'PLAYING'}
        </div>

        <div
          className="snake-game-grid"
          style={{
            width: GRID_SIZE * CELL_SIZE,
            height: GRID_SIZE * CELL_SIZE,
            gridTemplateColumns: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`,
            gridTemplateRows: `repeat(${GRID_SIZE}, ${CELL_SIZE}px)`
          }}
        >
          {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
            const x = index % GRID_SIZE;
            const y = Math.floor(index / GRID_SIZE);
            const isSnake = snake.some(segment => segment.x === x && segment.y === y);
            const isHead = snake[0].x === x && snake[0].y === y;
            const isFood = food.x === x && food.y === y;

            return (
              <div
                key={index}
                className={`snake-cell ${isSnake ? (isHead ? 'snake-head' : 'snake-body') : ''} ${isFood ? 'snake-food' : ''}`}
              />
            );
          })}
        </div>

        {gameOver && (
          <div className="snake-game-over">
            <h3>GAME OVER!</h3>
            <p>Final Score: {score}</p>
            <button className="snake-restart-btn" onClick={resetGame}>
              RESTART
            </button>
          </div>
        )}

        <div className="snake-game-controls">
          <p>↑ ↓ ← → ARROW KEYS TO MOVE</p>
          <p>SPACE TO PAUSE | ESC TO CLOSE</p>
          {!gameOver && (
            <button className="snake-pause-btn" onClick={() => setIsPaused(!isPaused)}>
              {isPaused ? 'RESUME' : 'PAUSE'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default SnakeGame;
