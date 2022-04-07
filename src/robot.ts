const FACES = ['N', 'E', 'S', 'W'];
const TABLE_LIMIT = [5, 5];

class Robot {
  xPos: number;

  yPos: number;

  facingPos: number;

  constructor(x = 0, y = 0, f = 'N') {
    this.xPos = x;
    this.yPos = y;

    this.facingPos = FACES.indexOf(f);
  }

  place(x: number, y: number, f: string) {
    this.xPos = x;
    this.yPos = y;
    this.facingPos = FACES.indexOf(f);
  }

  move() {
    const { newX, newY } = this.getNewXY();

    //TODO: Validate
    //TODO: Execute
  }

  private getNewXY() {
    let newX = this.xPos;
    let newY = this.yPos;
    switch (FACES[this.facingPos]) {
      case 'N':
        newX = this.xPos + 1;
        break;
      case 'E':
        newY = this.yPos + 1;
        break;
      case 'W':
        newY = this.yPos - 1;
        break;
      case 'S':
        newX = this.xPos - 1;
        break;
      default:
        break;
    }
    return { newX, newY };
  }
}

export default Robot;
