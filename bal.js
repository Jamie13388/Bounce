class Bal {
    x;
    y;
    speedX;
    speedY;
    kleur;

    constructor(_x, _y, _speedX, _speedY) {
        this.x = _x;
        this.y = _y;
        this.speedX = _speedX;
        this.speedY = _speedY;
        this.kleur = color(205,213,32);

    }

    show() {
        fill(this.kleur);
        ellipse(this.x, this.y, 80, 80);
    }

    update() {
        
        if(this.y >= 680) {
            this.speedY = this.speedY * -1;
        }
        if(this.y <= 40) {
            this.speedY = this.speedY * -1;
        }
            
        
        if(this.x >= 1240){
            this.speedX = this.speedX * -1;
          } 
        if(this.x <= 40) {
            this.speedX = this.speedX * -1;
        }
            
    }
}