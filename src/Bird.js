class Bird
{
    constructor()
    {
        this.height = 50;
        this.width = 50;
        
        this.posX = 300;
        this.posY = 200;

        this.hitX;
        this.hitY;
        this.hitYTop;

        this.dead = false;
        this.onGround = false;

        //gravity params
        this.mass = 2;
        this.accel = this.mass*0.1;
        this.velocity = 0;

        this.jumpForce = 10;
    }

    gravity()
    {
        this.velocity+= this.accel;
        this.posY+= this.velocity;
    } 

    flap()
    {
        this.velocity-= this.jumpForce;
    }

    death()
    {
        if(!this.onGround){
            this.velocity = 2;
            this.posY = constrain(this.posY, 0, ground);
            this.velocity = 10;
        }

        //game over screen
    }
}