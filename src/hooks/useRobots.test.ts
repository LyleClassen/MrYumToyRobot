import { renderHook, act } from '@testing-library/react-hooks';
import useRobot from './useRobot';

describe('useRobot', () => {
  describe('place()', () => {
    test('should set X,Y and F to 1,1,EAST', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.place(1, 1, 'EAST');
      });
      expect(result.current.xPos).toEqual(1);
      expect(result.current.yPos).toEqual(1);
      expect(result.current.facingPos).toEqual(1);
      expect(result.current.facing).toEqual('EAST');
      expect(result.current.report()).toEqual('1,1,EAST');
    });
    test('should not place when X is out of bounds', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.place(-1, 1, 'EAST');
      });
      expect(result.current.xPos).toEqual(NaN);
      expect(result.current.yPos).toEqual(NaN);
      expect(result.current.facingPos).toEqual(NaN);
      expect(result.current.facing).toEqual('');
      expect(result.current.report()).toEqual(undefined);
    });
    test('should not place when Y is out of bounda', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.place(1, -1, 'EAST');
      });
      expect(result.current.xPos).toEqual(NaN);
      expect(result.current.yPos).toEqual(NaN);
      expect(result.current.facingPos).toEqual(NaN);
      expect(result.current.facing).toEqual('');
      expect(result.current.report()).toEqual(undefined);
    });
    test('should not place when F is invalid', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.place(1, 1, 'SOUTH EAST');
      });
      expect(result.current.xPos).toEqual(NaN);
      expect(result.current.yPos).toEqual(NaN);
      expect(result.current.facingPos).toEqual(NaN);
      expect(result.current.facing).toEqual('');
      expect(result.current.report()).toEqual(undefined);
    });
  });
  describe('left()', () => {
    test('should not set facing if not placed', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.left();
      });
      expect(result.current.facingPos).toEqual(NaN);
      expect(result.current.facing).toEqual('');
    });
    test('should place NORTH and turn left until NORTH again', () => {
      const { result } = renderHook(() => useRobot());

      act(() => {
        result.current.place(0, 0, 'NORTH');
      });

      expect(result.current.report()).toEqual('0,0,NORTH');

      act(() => {
        result.current.left();
      });
      expect(result.current.report()).toEqual('0,0,WEST');

      act(() => {
        result.current.left();
      });
      expect(result.current.report()).toEqual('0,0,SOUTH');

      act(() => {
        result.current.left();
      });
      expect(result.current.report()).toEqual('0,0,EAST');

      act(() => {
        result.current.left();
      });
      expect(result.current.report()).toEqual('0,0,NORTH');
    });
  });
  describe('right()', () => {
    test('should not set facing if not placed', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.right();
      });
      expect(result.current.facingPos).toEqual(NaN);
      expect(result.current.facing).toEqual('');
    });
    test('should place NORTH and turn right until NORTH again', () => {
      const { result } = renderHook(() => useRobot());

      act(() => {
        result.current.place(0, 0, 'NORTH');
      });

      expect(result.current.report()).toEqual('0,0,NORTH');

      act(() => {
        result.current.right();
      });
      expect(result.current.report()).toEqual('0,0,EAST');

      act(() => {
        result.current.right();
      });
      expect(result.current.report()).toEqual('0,0,SOUTH');

      act(() => {
        result.current.right();
      });
      expect(result.current.report()).toEqual('0,0,WEST');

      act(() => {
        result.current.right();
      });
      expect(result.current.report()).toEqual('0,0,NORTH');
    });
  });
  describe('move()', () => {
    test('should not move if not placed', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.right();
      });
      expect(result.current.xPos).toEqual(NaN);
      expect(result.current.yPos).toEqual(NaN);
      expect(result.current.facingPos).toEqual(NaN);
      expect(result.current.facing).toEqual('');
      expect(result.current.report()).toEqual(undefined);
    });
    test('should place(0,0,NORTH) move once to be at 0,1,NORTH', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.place(0, 0, 'NORTH');
      });
      act(() => {
        result.current.move();
      });
      expect(result.current.xPos).toEqual(0);
      expect(result.current.yPos).toEqual(1);
      expect(result.current.facingPos).toEqual(0);
      expect(result.current.facing).toEqual('NORTH');
      expect(result.current.report()).toEqual('0,1,NORTH');
    });
    test('should place turn left and move and be in same position facing WEST', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.place(0, 0, 'NORTH');
      });
      act(() => {
        result.current.left();
      });
      act(() => {
        result.current.move();
      });
      expect(result.current.xPos).toEqual(0);
      expect(result.current.yPos).toEqual(0);
      expect(result.current.facingPos).toEqual(3);
      expect(result.current.facing).toEqual('WEST');
      expect(result.current.report()).toEqual('0,0,WEST');
    });
    test('should place turn right and move and be in 1,0,EAST', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.place(0, 0, 'NORTH');
      });
      act(() => {
        result.current.right();
      });
      act(() => {
        result.current.move();
      });
      expect(result.current.xPos).toEqual(1);
      expect(result.current.yPos).toEqual(0);
      expect(result.current.facingPos).toEqual(1);
      expect(result.current.facing).toEqual('EAST');
      expect(result.current.report()).toEqual('1,0,EAST');
    });
    test('should place 4,4,SOUTH and move and be in 4,3,SOUTH', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.place(4, 4, 'SOUTH');
      });
      act(() => {
        result.current.move();
      });
      expect(result.current.xPos).toEqual(4);
      expect(result.current.yPos).toEqual(3);
      expect(result.current.facingPos).toEqual(2);
      expect(result.current.facing).toEqual('SOUTH');
      expect(result.current.report()).toEqual('4,3,SOUTH');
    });
    test('should place move 5 times and be in position 0,4,NORTH', () => {
      const { result } = renderHook(() => useRobot());
      act(() => {
        result.current.place(0, 0, 'NORTH');
      });

      for (let index = 0; index < 5; index++) {
        act(() => {
          result.current.move();
        });
      }

      expect(result.current.xPos).toEqual(0);
      expect(result.current.yPos).toEqual(4);
      expect(result.current.facingPos).toEqual(0);
      expect(result.current.facing).toEqual('NORTH');
      expect(result.current.report()).toEqual('0,4,NORTH');
    });
  });
  describe('report()', () => {
    test('should not report if not placed', () => {
      const { result } = renderHook(() => useRobot());
      expect(result.current.xPos).toEqual(NaN);
      expect(result.current.yPos).toEqual(NaN);
      expect(result.current.facingPos).toEqual(NaN);
      expect(result.current.facing).toEqual('');
      expect(result.current.report()).toEqual(undefined);
    });
  });
});
