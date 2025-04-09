import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect, useRef } from 'react';

const GRID_SIZE = 20;
const SPEED = 200; // milliseconds
const DIRECTIONS = {
  UP: { x: 0, y: -1 },
  DOWN: { x: 0, y: 1 },
  LEFT: { x: -1, y: 0 },
  RIGHT: { x: 1, y: 0 },
};

const getRandomPosition = () => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  };
};

const SnakeGame = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(getRandomPosition());
  const [direction, setDirection] = useState(DIRECTIONS.RIGHT);
  const [gameOver, setGameOver] = useState(false);
  const gameInterval = useRef(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          direction !== DIRECTIONS.DOWN && setDirection(DIRECTIONS.UP);
          break;
        case 'ArrowDown':
          direction !== DIRECTIONS.UP && setDirection(DIRECTIONS.DOWN);
          break;
        case 'ArrowLeft':
          direction !== DIRECTIONS.RIGHT && setDirection(DIRECTIONS.LEFT);
          break;
        case 'ArrowRight':
          direction !== DIRECTIONS.LEFT && setDirection(DIRECTIONS.RIGHT);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    gameInterval.current = setInterval(() => {
      moveSnake();
    }, SPEED);

    return () => clearInterval(gameInterval.current);
  }, [snake, direction]);

  const moveSnake = () => {
    const head = { x: snake[snake.length - 1].x + direction.x, y: snake[snake.length - 1].y + direction.y };

    if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE || checkCollision(head)) {
      setGameOver(true);
      clearInterval(gameInterval.current);
      return;
    }

    const newSnake = [...snake, head];
    if (head.x === food.x && head.y === food.y) {
      setFood(getRandomPosition());
    } else {
      newSnake.shift();
    }
    setSnake(newSnake);
  };

  const checkCollision = (head) => {
    return snake.slice(0, -1).some((segment) => segment.x === head.x && segment.y === head.y);
  };

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(getRandomPosition());
    setDirection(DIRECTIONS.RIGHT);
    setGameOver(false);
    gameInterval.current = setInterval(() => {
      moveSnake();
    }, SPEED);
  };

  return (
    <div>
      <h1>Snake Game</h1>
      <div className="grid" style={{ width: GRID_SIZE * 20, height: GRID_SIZE * 20 }}>
        {Array.from({ length: GRID_SIZE * GRID_SIZE }).map((_, index) => {
          const x = index % GRID_SIZE;
          const y = Math.floor(index / GRID_SIZE);
          const isSnake = snake.some((segment) => segment.x === x && segment.y === y);
          const isFood = food.x === x && food.y === y;
          return (
            <div
              key={index}
              className={`cell ${isSnake ? 'snake' : ''} ${isFood ? 'food' : ''}`}
              style={{ width: 20, height: 20 }}
            ></div>
          );
        })}
      </div>
      {gameOver && (
        <div className="game-over">
          <h2>Game Over!</h2>
          <button onClick={resetGame}>Play Again</button>
        </div>
      )}
    </div>
  );
};

export default SnakeGame;