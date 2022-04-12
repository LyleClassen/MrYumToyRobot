import { useRobotData } from 'providers/RobotProvider';
import { MutableRefObject, useEffect, useRef, useState } from 'react';

export type TableTopType = {
  xPos: number;
  yPos: number;
  facingPos: number;
  isPlaced: boolean;
  tableRef: MutableRefObject<HTMLDivElement>;
  stageSize: number;
  spacing: number;
};

const useTableTop = () => {
  const { xPos, yPos, facingPos, isPlaced } = useRobotData();
  const tableRef = useRef<HTMLDivElement>(null);
  const [stageSize, setStageSize] = useState(400);
  const [spacing, setSpacing] = useState(400 / 5);

  useEffect(() => {
    const newStateSize = tableRef?.current?.clientWidth || 400;
    setStageSize(newStateSize);
    setSpacing(newStateSize / 5);
  }, [tableRef]);

  return {
    xPos,
    yPos,
    facingPos,
    isPlaced,
    tableRef,
    stageSize,
    spacing,
  };
};

export default useTableTop;
