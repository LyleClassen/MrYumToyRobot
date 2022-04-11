import React, { createContext, FC, ReactNode, useContext } from 'react';
import useRobot from 'hooks/useRobot';

type Props = {
  children: ReactNode;
};

export type RobotContent = {
  xPos: number;
  yPos: number;
  facing: string;
  facingPos: number;
  isPlaced: boolean;
  place: (x: number, y: number, facing: string) => void;
  move: () => void;
  left: () => void;
  right: () => void;
  report: () => string;
};

const RobotContext = createContext({
  xPos: NaN,
  yPos: NaN,
  facingPos: NaN,
  facing: '',
  isPlaced: false,
  place: (_x: number, _y: number, _facing: string) => {},
  move: () => {},
  left: () => {},
  right: () => {},
  report: (): string => '',
});

const RobotProvider: FC<Props> = ({ children }) => {
  const robotContext = useRobot();
  return <RobotContext.Provider value={robotContext}>{children}</RobotContext.Provider>;
};

export const useRobotData = () => useContext(RobotContext);

export default RobotProvider;
