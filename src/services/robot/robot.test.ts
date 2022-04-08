import Robot from './robot';

describe('Robot Class', () => {
  describe('Place', () => {
    test('should set X,Y and F to 1,1,E', () => {
      const robo = new Robot();

      robo.place(1, 1, 'E');

      expect(robo.report()).toEqual('1,1,E');
    });
    test('should throw exception when X is out of bounds', () => {
      const robo = new Robot();

      const execute = () => {
        robo.place(-1, 1, 'E');
      };

      expect(execute).toThrowError(new Error('X postion out of bounds'));
    });
    test('should throw exception when Y is out of bounds', () => {
      const robo = new Robot();

      const execute = () => {
        robo.place(1, -1, 'E');
      };

      expect(execute).toThrowError(new Error('Y postion out of bounds'));
    });
    test('should throw exception when F is invalid', () => {
      const robo = new Robot();

      const execute = () => {
        robo.place(1, 1, 'EAST');
      };

      expect(execute).toThrowError(new Error('Invalid Facing Value'));
    });
  });
  describe('Left', () => {
    let robo: Robot;
    beforeAll(() => {
      robo = new Robot();
    });
    test('should initially Face N', () => {
      expect(robo.facing).toEqual('N');
    });
    test('should Turn Left and Face W', () => {
      robo.left();
      expect(robo.facing).toEqual('W');
    });
    test('should Turn Left and Face S', () => {
      robo.left();
      expect(robo.facing).toEqual('S');
    });
    test('should Turn Left and Face E', () => {
      robo.left();
      expect(robo.facing).toEqual('E');
    });
    test('should Turn Left and Face N', () => {
      robo.left();
      expect(robo.facing).toEqual('N');
    });
  });
  describe('Right', () => {
    let robo: Robot;
    beforeAll(() => {
      robo = new Robot();
    });
    test('should initially Face N', () => {
      expect(robo.facing).toEqual('N');
    });
    test('should Turn Right and Face E', () => {
      robo.right();
      expect(robo.facing).toEqual('E');
    });
    test('should Turn Right and Face S', () => {
      robo.right();
      expect(robo.facing).toEqual('S');
    });
    test('should Turn Right and Face W', () => {
      robo.right();
      expect(robo.facing).toEqual('W');
    });
    test('should Turn Right and Face N', () => {
      robo.right();
      expect(robo.facing).toEqual('N');
    });
  });
  describe('Move', () => {
    test('should move once and report 0,1,N', () => {
      const robo = new Robot();
      robo.move();
      expect(robo.report()).toEqual('0,1,N');
    });
    test('should turn left, move and throw out of bounds', () => {
      const robo = new Robot();

      const actions = () => {
        robo.left();
        robo.move();
      };

      expect(actions).toThrowError(new Error('X postion out of bounds'));
    });
    test('should turn move 5 times and throw out of bounds', () => {
      const robo = new Robot();

      const actions = () => {
        robo.move();
        robo.move();
        robo.move();
        robo.move();
        robo.move();
      };

      expect(actions).toThrowError(new Error('Y postion out of bounds'));
    });
    test('should turn right then and report 0,1,E', () => {
      const robo = new Robot();

      robo.right();
      robo.move();

      expect(robo.report()).toEqual('1,0,E');
    });
    test('should place at 4,4,S and move and report 4,3,S', () => {
      const robo = new Robot();

      robo.place(4, 4, 'S');
      robo.move();

      expect(robo.report()).toEqual('4,3,S');
    });
  });
});
