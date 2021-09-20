class Bal {
    x;
    y;
    speedX;
    speedY;
  
    constructor(_x, _y, _speedX, _speedY) {
      this.x = _x;
      this.y = _y;
      this.speedX = _speedX;
      this.speedY = _speedY;
    }
  
    // update de positie van de bal en klapt bij
    // de kant de snelheid om
    update() {
      this.x = this.x + this.speedX;
      this.y = this.y + this.speedY;
  
      if (this.x <=25 || this.x >= 1255) {
        this.speedX = this.speedX * -1;
      }
      if (this.y <=25 || this.y >= 695) {
        this.speedY = this.speedY * -1;
      }
    }
  
    // toont de bal
    show() {
      fill(255, 0, 0);
      ellipse(this.x, this.y, 50, 50);
    }
  }