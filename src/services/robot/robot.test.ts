import Robot from './robot';

describe('Robot Class', () => {
  describe('Place', () => {
    test('should set X,Y and F to 1,1,EAST', () => {
      const robo = new Robot();

      robo.place(1, 1, 'EAST');

      expect(robo.report()).toEqual('1,1,EAST');
    });
    test('should throw exception when X is out of bounds', () => {
      const robo = new Robot();

      const execute = () => {
        robo.place(-1, 1, 'EAST');
      };

      expect(execute).toThrowError(new Error('X postion out of bounds'));
    });
    test('should throw exception when Y is out of bounds', () => {
      const robo = new Robot();

      const execute = () => {
        robo.place(1, -1, 'EAST');
      };

      expect(execute).toThrowError(new Error('Y postion out of bounds'));
    });
    test('should throw exception when F is invalid', () => {
      const robo = new Robot();

      const execute = () => {
        robo.place(1, 1, 'NORTH WEST');
      };

      expect(execute).toThrowError(new Error('Invalid Facing Value'));
    });
  });
  describe('Left', () => {
    describe('not placed', () => {
      test('should throw "Robot has not been placed"', () => {
        const robo = new Robot();

        const actions = () => {
          robo.left();
        };
        expect(actions).toThrowError('Robot has not been placed');
      });
    });
    describe('after place', () => {
      let robo: Robot;
      beforeAll(() => {
        robo = new Robot();
        robo.place(0, 0, 'NORTH');
      });
      test('should initially Face NORTH', () => {
        expect(robo.facing).toEqual('NORTH');
      });
      test('should Turn Left and Face WEST', () => {
        robo.left();
        expect(robo.facing).toEqual('WEST');
      });
      test('should Turn Left and Face SOUTH', () => {
        robo.left();
        expect(robo.facing).toEqual('SOUTH');
      });
      test('should Turn Left and Face EAST', () => {
        robo.left();
        expect(robo.facing).toEqual('EAST');
      });
      test('should Turn Left and Face NORTH', () => {
        robo.left();
        expect(robo.facing).toEqual('NORTH');
      });
    });
  });
  describe('Right', () => {
    describe('not placed', () => {
      test('should throw "Robot has not been placed"', () => {
        const robo = new Robot();

        const actions = () => {
          robo.right();
        };
        expect(actions).toThrowError('Robot has not been placed');
      });
    });
    describe('after place', () => {
      let robo: Robot;
      beforeAll(() => {
        robo = new Robot();
        robo.place(0, 0, 'NORTH');
      });
      test('should initially Face NORTH', () => {
        expect(robo.facing).toEqual('NORTH');
      });
      test('should Turn Right and Face EAST', () => {
        robo.right();
        expect(robo.facing).toEqual('EAST');
      });
      test('should Turn Right and Face SOUTH', () => {
        robo.right();
        expect(robo.facing).toEqual('SOUTH');
      });
      test('should Turn Right and Face WEST', () => {
        robo.right();
        expect(robo.facing).toEqual('WEST');
      });
      test('should Turn Right and Face NORTH', () => {
        robo.right();
        expect(robo.facing).toEqual('NORTH');
      });
    });
  });
  describe('MovEAST', () => {
    describe('not placed', () => {
      test('should throw "Robot has not been placed"', () => {
        const robo = new Robot();

        const actions = () => {
          robo.move();
        };
        expect(actions).toThrowError('Robot has not been placed');
      });
    });
    describe('after place', () => {
      test('should move once and report 0,1,NORTH', () => {
        const robo = new Robot();
        robo.place(0, 0, 'NORTH');

        robo.move();
        expect(robo.report()).toEqual('0,1,NORTH');
      });
      test('should turn left, move and throw out of bounds', () => {
        const robo = new Robot();
        robo.place(0, 0, 'NORTH');

        const actions = () => {
          robo.left();
          robo.move();
        };

        expect(actions).toThrowError(new Error('X postion out of bounds'));
      });
      test('should turn move 5 times and throw out of bounds', () => {
        const robo = new Robot();
        robo.place(0, 0, 'NORTH');

        const actions = () => {
          robo.move();
          robo.move();
          robo.move();
          robo.move();
          robo.move();
        };

        expect(actions).toThrowError(new Error('Y postion out of bounds'));
      });
      test('should turn right then and report 0,1,EAST', () => {
        const robo = new Robot();
        robo.place(0, 0, 'NORTH');

        robo.right();
        robo.move();

        expect(robo.report()).toEqual('1,0,EAST');
      });
      test('should place at 4,4,S and move and report 4,3,SOUTH', () => {
        const robo = new Robot();
        robo.place(4, 4, 'SOUTH');

        robo.move();

        expect(robo.report()).toEqual('4,3,SOUTH');
      });
    });
  });
  describe('Report', () => {
    describe('not placed', () => {
      test('should throw "Robot has not been placed"', () => {
        const robo = new Robot();

        const actions = () => {
          robo.report();
        };
        expect(actions).toThrowError('Robot has not been placed');
      });
    });
  });
});
