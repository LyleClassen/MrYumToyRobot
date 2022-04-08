const FACES = ['N', 'E', 'S', 'W'];
const TABLE_LIMIT = [4, 4];

class Robot {
  xPos: number;

  yPos: number;

  facing: string;

  facingPos: number;

  isPlaced: boolean;

  constructor() {
    this.xPos = NaN;
    this.yPos = NaN;
    this.facingPos = NaN;
    this.facing = '';
    this.isPlaced = false;
  }

  place(x: number, y: number, f: string) {
    this.validateXYF(x, y, f);

    this.xPos = x;
    this.yPos = y;
    this.facingPos = FACES.indexOf(f);
    this.facing = f;
    this.isPlaced = true;
  }

  move() {
    this.hasBeenPlaced();
    const { newX, newY } = this.getNewXY();

    this.validateXYF(newX, newY, this.facing);

    this.xPos = newX;
    this.yPos = newY;
  }

  left() {
    this.hasBeenPlaced();
    let newFacingPos = this.facingPos;
    newFacingPos--;
    if (newFacingPos === -1) {
      this.facingPos = 3;
      this.facing = FACES[3];
      return;
    }
    this.facingPos = newFacingPos;
    this.facing = FACES[newFacingPos];
  }

  right() {
    this.hasBeenPlaced();
    let newFacingPos = this.facingPos;
    newFacingPos++;
    if (newFacingPos === 4) {
      this.facingPos = 0;
      this.facing = FACES[0];
      return;
    }
    this.facingPos = newFacingPos;
    this.facing = FACES[newFacingPos];
  }

  report() {
    this.hasBeenPlaced();
    return `${this.xPos},${this.yPos},${this.facing}`;
  }

  private validateXYF(x: number, y: number, f: string) {
    if (x < 0 || x > TABLE_LIMIT[0]) {
      throw new Error('X postion out of bounds');
    }
    if (y < 0 || y > TABLE_LIMIT[1]) {
      throw new Error('Y postion out of bounds');
    }
    if (!FACES.includes(f)) {
      throw new Error('Invalid Facing Value');
    }
  }

  private hasBeenPlaced() {
    if (!this.isPlaced) {
      throw new Error('Robot has not been placed');
    }
  }

  private getNewXY() {
    let newX = this.xPos;
    let newY = this.yPos;
    switch (FACES[this.facingPos]) {
      case 'N':
        newY = this.yPos + 1;
        break;
      case 'E':
        newX = this.xPos + 1;
        break;
      case 'W':
        newX = this.xPos - 1;
        break;
      case 'S':
        newY = this.yPos - 1;
        break;
    }
    return { newX, newY };
  }
}

export default Robot;
