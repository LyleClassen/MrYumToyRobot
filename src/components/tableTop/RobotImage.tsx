import React, { useEffect, useRef, useState } from 'react';
import useImage from 'use-image';
import Konva from 'konva';
import { Image } from 'react-konva';
import robotImg from 'assets/robot.png';

type RobotImgProps = { x: number; y: number; size: number };

const RobotImage = ({ x, y, size }: RobotImgProps) => {
  const [image] = useImage(robotImg);
  const imgNode = useRef(null);
  const spacer = 7;
  const [calcX, setCalcX] = useState(x + size / 2 + spacer);
  const [calcY, setCalcY] = useState(y + size / 2 + spacer);

  const rotate = () => {
    const node: Konva.Node = imgNode?.current as Konva.Node;
    console.log(node.getAbsoluteRotation());

    node.to({
      rotation: node.getAbsoluteRotation() + 90,
      duration: 0.2,
    });
  };
  useEffect(() => {
    console.log('size', size);
  }, [x, y, size]);

  return (
    <Image
      ref={imgNode}
      image={image}
      x={calcX}
      y={calcY}
      width={size}
      height={size}
      offset={{ x: x + size / 2, y: y + size / 2 }}
      onClick={rotate}
    />
  );
};

export default RobotImage;
