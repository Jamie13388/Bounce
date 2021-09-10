/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

 var x = Math.floor(Math.random() * 1000) + 40;
 var y = Math.floor(Math.random() * 100) + 120;
 var vx = Math.floor(Math.random() * 10) + 1;
 var vy = Math.floor(Math.random() * 10) + 1;

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('grey');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  background('grey');
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(x, y, 80, 80);

  //positie updaten
  x = x + vx;
  y = y + vy;

  if(y >= 680) {
    vy = vy * -1;
  }
  if(y <= 40) {
    vy = vy * -1;
  }
    
  

  if(x >= 1240){
    vx = vx * -1;
  } 
  if(x <= 40) {
    vx = vx * -1;
    
  }
}
  
