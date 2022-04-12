import { useState } from 'react';

const FACES = ['NORTH', 'EAST', 'SOUTH', 'WEST'];
const TABLE_LIMIT = [4, 4];

const getNewXY = (xPos: number, yPos: number, facingPos: number) => {
  let newX = xPos;
  let newY = yPos;
  switch (FACES[facingPos]) {
    case 'NORTH':
      newY = yPos + 1;
      break;
    case 'EAST':
      newX = xPos + 1;
      break;
    case 'WEST':
      newX = xPos - 1;
      break;
    case 'SOUTH':
      newY = yPos - 1;
      break;
  }
  return { newX, newY };
};

const validateXYF = (x: number, y: number, f: string) => {
  if (x < 0 || x > TABLE_LIMIT[0]) {
    throw new Error('X postion out of bounds');
  }
  if (y < 0 || y > TABLE_LIMIT[1]) {
    throw new Error('Y postion out of bounds');
  }
  if (!FACES.includes(f)) {
    throw new Error('Invalid Facing Value');
  }
};

const useRobot = () => {
  const [xPos, setXPos] = useState(NaN);
  const [yPos, setYPos] = useState(NaN);
  const [facingPos, setFacingPos] = useState(NaN);
  const [facing, setFacing] = useState('');
  const [isPlaced, setIsPlaced] = useState(false);

  const place = (x: number, y: number, f: string) => {
    try {
      validateXYF(x, y, f);
      setXPos(x);
      setYPos(y);
      setFacingPos(FACES.indexOf(f));
      setFacing(f);
      setIsPlaced(true);
    } catch (_error) {
      // Silently fail to ignore invalid input
    }
  };

  const move = () => {
    const { newX, newY } = getNewXY(xPos, yPos, facingPos);
    try {
      if (isPlaced) {
        validateXYF(newX, newY, FACES[facingPos]);
        setXPos(newX);
        setYPos(newY);
      }
    } catch (_error) {
      // Silently fail to ignore invalid input
    }
  };

  const left = () => {
    if (isPlaced) {
      let newFacingPos = facingPos;
      newFacingPos--;
      if (newFacingPos === -1) {
        setFacingPos(3);
        setFacing(FACES[3]);
        return;
      }
      setFacingPos(newFacingPos);
      setFacing(FACES[newFacingPos]);
    }
  };

  const right = () => {
    if (isPlaced) {
      let newFacingPos = facingPos;
      newFacingPos++;
      if (newFacingPos === 4) {
        setFacingPos(0);
        setFacing(FACES[0]);
        return;
      }
      setFacingPos(newFacingPos);
      setFacing(FACES[newFacingPos]);
    }
  };

  const report = (): string => {
    if (isPlaced) {
      return `${xPos},${yPos},${facing}`;
    }
  };

  return {
    xPos,
    yPos,
    facingPos,
    facing,
    isPlaced,
    place,
    move,
    left,
    right,
    report,
  };
};

export default useRobot;
