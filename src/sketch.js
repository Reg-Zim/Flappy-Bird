//canvas variables
let width = 600;
let height = 1000;
let bg;
let ground = 805;

//classes
const bird = new Bird();

function setup() 
{
  //initial canvas setup
  const canvas = createCanvas(width, height);
  canvas.position(260, 200);

  //load images
  bg = loadImage('images/background.jpg');
  bSprite = loadImage('images/bird.png');
  
}

function draw()
{
  game();
}

function keyPressed()
{
  if(key === ' ' && !bird.dead){
    bird.flap();
    console.log("flap");
  }
  if(key === 'a'){
    bird.dead = true;
  }
  return false;
}

function game()
{
  background(bg);
  
  ellipse(bird.posX, bird.posY, bird.width, bird.height);
  bird.gravity(ground);

  if(bird.dead){
    bird.death();
  }
}