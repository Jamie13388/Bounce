class Bal {
    x;
    y;
    speedX;
    speedY;
    kleur;

    constructor(_x, _y) {
        this.x = _x;
        this.y = _y;
        this.speedX = 2;
        this.speedY = 2;
        this.kleur = color(`black`)  

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