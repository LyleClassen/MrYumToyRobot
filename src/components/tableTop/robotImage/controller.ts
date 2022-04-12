import useImage from 'use-image';
import robotImg from 'assets/robot.png';
import { Image } from 'konva/lib/shapes/Image';
import { useRef, useState, useEffect } from 'react';
import Konva from 'konva';

export type RobotControllerProps = {
  calcX: number;
  calcY: number;
  imgNode: React.LegacyRef<Image>;
  image: HTMLImageElement;
};

const calculateX = (x: number, size: number) => {
  const newX = x * size + size / 2;
  return newX;
};

const calculateY = (y: number, size: number) => {
  const newY = (4 - y) * size + size / 2;
  return newY;
};

const useRobotImageController = (x: number, y: number, facingPos: number, size: number) => {
  const [image] = useImage(robotImg);
  const imgNode = useRef(null);
  const [calcX, setCalcX] = useState(calculateX(x, size));
  const [calcY, setCalcY] = useState(calculateY(y, size));
  const [calcFacing, setCalcFacing] = useState(facingPos);
  const [rotation, setRotation] = useState(facingPos * 90);

  useEffect(() => {
    const node: Konva.Node = imgNode?.current as Konva.Node;

    const direction = facingPos - calcFacing;

    if ((direction > 0 || direction === -3) && direction !== 3) {
      const newRotation = rotation + 90;
      node.to({
        rotation: newRotation,
        duration: 0.1,
      });
      setRotation(newRotation);
    } else if (direction < 0 || direction === 3) {
      const newRotation = rotation - 90;
      console.log('LEFT', newRotation);
      node.to({
        rotation: newRotation,
        duration: 0.1,
      });
      setRotation(newRotation);
    }

    setCalcFacing(facingPos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [facingPos]);

  useEffect(() => {
    const node: Konva.Node = imgNode?.current as Konva.Node;
    const newX = calculateX(x, size);
    node.to({
      x: newX,
      duration: 0.1,
    });
    setCalcX(newX);
  }, [x, size]);

  useEffect(() => {
    const node: Konva.Node = imgNode?.current as Konva.Node;
    const newY = calculateY(y, size);
    node.to({
      y: newY,
      duration: 0.1,
    });
    setCalcY(newY);
  }, [y, size]);

  return {
    calcX,
    calcY,
    imgNode,
    image,
  };
};

export default useRobotImageController;
