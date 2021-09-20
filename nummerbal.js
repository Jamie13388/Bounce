class Nummerbal extends Bal {
    nummer;

    constructor(_x, _y, _speedX, _speedY, _nummer){
        super(_x, _y, _speedX, _speedY);
        this.nummer = _nummer;
    }
  
    update() {
        this.nummer = random(0,9);
    }
    // toont de bal
    show() {
      fill(0,0,0);
      ellipse(this.x, this.y, 50, 50);
    }
  }