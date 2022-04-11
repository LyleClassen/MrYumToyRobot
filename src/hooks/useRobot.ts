import { useState } from 'react';

const useRobot = () => {
  const [xPos, setXPos] = useState(NaN);
  const [yPos, setYPos] = useState(NaN);
  const [facingPos, setFacingPos] = useState(NaN);
  const [facing, setFacing] = useState('');
  const [isPlaced, setIsPlaced] = useState(false);

  const place = (x: number, y: number, f: string) => {};
  const move = () => {};
  const left = () => {};
  const right = () => {};
  const report = (): string => {
    return '';
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
