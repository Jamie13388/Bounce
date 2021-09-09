/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */

 var x = 50;
 var y = 50;
 var vx = 2;
 var vy = 2;

function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280a, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  // stel vulkleur in
  background('blue');
  fill(100, 100, 255);

  // teken een cirkel
  ellipse(x, y, 80, 80);

  //positie updaten
  x = x + vx;
  y = y + vy;

  if(y === 720 || y === 0) {
    vy = vy * -1;
    //vx = vx;

  if(x === 1280 || x === 0) {
    vx = vx * -1;
    //vy = vy;
  }
}
  
}