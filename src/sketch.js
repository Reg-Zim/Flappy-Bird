//canvas variables
let width = 600;
let height = 1000;
let bg;
let ground = 805;
let ceiling = 0;

//classes
const bird = new Bird();
var pipes = new Pipes();

function setup() 
{
  //initial canvas setup
  const canvas = createCanvas(width, height);
  canvas.position(260, 200);

  //load images
  bg = loadImage('images/background.jpg');
  birdSprite = loadImage('images/bird.png');
  pipeSpriteBottom = loadImage('images/pipeTop.png');
  pipeSpriteTop = loadImage('images/pipeBottom.png');
  
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

  //for testing
  if(key === 'a'){
    bird.dead = true;
  }
  return false;
}

function game()
{
  background(bg);
  
  //ellipse(bird.posX, bird.posY, bird.width, bird.height);
/*   rect(pipes.posX, ceiling, pipes.width, pipes.topHeight);
  rect(pipes.posX, pipes.bottomPlacement, pipes.width, pipes.bottomHeight); */

  image(birdSprite, bird.posX, bird.posY, bird.width, bird.height);
  image(pipeSpriteBottom, pipes.posX, ceiling, pipes.width, pipes.topHeight);
  image(pipeSpriteTop, pipes.posX, pipes.bottomPlacement, pipes.width, pipes.bottomHeight);


  //bird.gravity();
  pipes.movement();

  //hitboxes
  bird.hitX = bird.posX + bird.width/2;
  bird.hitY = bird.posY + bird.height/2;
  bird.hitYTop = bird.posY - bird.height/2;

  //gravity/ceiling collision
  if(bird.hitY >= ground){
    bird.dead = true;
    bird.onGround = true;

    bird.posY = constrain(bird.posY, ground, ground);
  }

  if(bird.hitYTop <= ceiling){
      bird.dead = true;
  }

  //pipe collision

  //pipe spawning
  if(pipes.despawn <= 0){
    pipes = new Pipes();
  }

  //game over
  if(bird.dead){
    bird.death();
  }
}