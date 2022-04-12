import React from 'react';
import { Image } from 'react-konva';
import useRobotImageController, { RobotControllerProps } from './controller';

type RobotImgProps = { x: number; y: number; facingPos: number; size: number };

const RobotImage = ({ x, y, facingPos, size }: RobotImgProps) => {
  const { calcX, calcY, imgNode, image } = useRobotImageController(x, y, facingPos, size) as RobotControllerProps;

  // console.log(calcX, calcY);

  return (
    <Image
      ref={imgNode}
      image={image}
      x={calcX}
      y={calcY}
      width={size}
      height={size}
      offset={{ x: size / 2, y: size / 2 }}
    />
  );
};

export default RobotImage;
