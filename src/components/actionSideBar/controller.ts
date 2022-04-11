import { RobotContent, useRobotData } from 'providers/RobotProvider';
import { useEffect } from 'react';

const useActionSideBar = () => {
  const { isPlaced, place }: RobotContent = useRobotData();

  const onPlace = () => {
    place(0, 0, 'NORTH');
  };

  useEffect(() => {
    console.log('placed', isPlaced);
  }, [isPlaced]);

  return {
    isPlaced,
    onPlace,
  };
};

export default useActionSideBar;
