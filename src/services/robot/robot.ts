const FACES = ['N', 'E', 'S', 'W'];
const TABLE_LIMIT = [4, 4];

class Robot {
  xPos: number;

  yPos: number;

  facing: string;

  facingPos: number;

  constructor() {
    this.xPos = 0;
    this.yPos = 0;
    this.facingPos = FACES.indexOf('N');
    this.facing = 'N';
  }

  place(x: number, y: number, f: string) {
    this.validateXYF(x, y, f);

    this.xPos = x;
    this.yPos = y;
    this.facingPos = FACES.indexOf(f);
    this.facing = f;
  }

  move() {
    const { newX, newY } = this.getNewXY();

    this.validateXYF(newX, newY, this.facing);

    this.xPos = newX;
    this.yPos = newY;
  }

  left() {
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
