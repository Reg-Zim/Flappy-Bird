//canvas variables
let width = 600;
let height = 1000;
let bg;
let ground = 805;
let ceiling = 0;

//classes
const bird = new Bird();
var pipeTop = new Pipes();
var pipeBottom = new Pipes(pipeTop.topHeight);

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

  //for testing lmao --do want to add a restart button tho...--
  if(key === 'a'){
    setup();
    console.log("test");
  }
  return false;
}

function game()
{
  background(bg);

  //sprites
  image(pipeSpriteTop, pipeTop.posX, ceiling, pipeTop.width, pipeTop.topHeight);
  image(pipeSpriteBottom, pipeBottom.posX, pipeBottom.bottomPlacement, pipeBottom.width, pipeBottom.bottomHeight);
  image(birdSprite, bird.posX, bird.posY, bird.width, bird.height);

  //show score
  textSize(50);
  text(bird.score, width/2, 200);
  fill(255,255,255);


  bird.gravity();

  if(!bird.dead){
    pipeTop.movement();
    pipeBottom.movement();

    //bird.scoreCount(condition); //FIGURE OUT HOW TO ADD A SCORE COUNT
  }

  //hitboxes bird
  bird.hitX = bird.posX + bird.width/2 + bird.width/5;
  bird.hitY = bird.posY + bird.height/2 + bird.height/5;
  bird.hitYTop = bird.posY + bird.height/3;

  //hitboxes pipes
  pipeBottom.hitW = pipeBottom.posX + 5;
  pipeTop.hitW = pipeTop.posX + 5;
  pipeTop.hitYTop = pipeTop.topHeight - 15;
  pipeBottom.hitYBottom = pipeBottom.bottomPlacement + 20;

  let topHit = ((bird.hitX >= pipeTop.hitW && bird.hitX <= pipeTop.hitW+pipeTop.width) && (bird.hitYTop <= pipeTop.hitYTop));
  let bottomHit = ((bird.hitX >= pipeBottom.hitW && bird.hitX <= pipeBottom.hitW+pipeBottom.width) && (bird.hitY >= pipeBottom.hitYBottom));

  //gravity/ceiling collision
  if(bird.hitY >= ground){
    bird.dead = true;
    bird.onGround = true;

    bird.posY = constrain(bird.posY, 750, 750); //<-- dunno why 750, but it works so don't touch it xdd
  }

  if(bird.hitYTop <= ceiling){
      bird.dead = true;   
  }

  //pipe collision
  if(topHit || bottomHit){
    bird.dead = true;
  }

  //pipe spawning
  if(pipeTop.despawn <= 0 && pipeBottom.despawn <= 0){
    pipeTop = new Pipes();
    pipeBottom = new Pipes(pipeTop.topHeight);
  }

  //game over
  if(bird.dead){
    bird.death();
  }
}