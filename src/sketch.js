var canvas; 
let bg;

function setup() {
  canvas = createCanvas(600, 1000);
  canvas.position(260, 200);

  bg = loadImage('images/background.png');
}

function draw() {
  background(bg);
}
