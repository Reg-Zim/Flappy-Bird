var canvas; 
let bg, pipe, bird;

function setup() {
  canvas = createCanvas(600, 1000);
  canvas.position(260, 200);

  bg = loadImage('images/background.jpg');
  pipe = loadImage('images/pipes.png');
  bird = loadImage('images/bird.png');

}

function draw() {
  background(bg);
}
