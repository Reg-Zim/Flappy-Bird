class Bird
{
    constructor()
    {
        this.height = 50;
        this.width = 50;
        
        this.posX = 300;
        this.posY = 200;

        this.dead = false;
        this.onGround = false;

        //gravity params
        this.mass = 2;
        this.accel = this.mass*0.1;
        this.velocity = 0;

        this.jumpForce = 10;
    }

    gravity(ground)
    {
        this.velocity+= this.accel;

        //hitboxes
        this.hitX = this.posX + this.width/2;
        this.hitY = this.posY + this.height/2;

        this.posY+= this.velocity;

        if(this.hitY >= ground){
            this.dead = true;
            this.onGround = true;

            this.posY = constrain(this.posY, ground, ground);
            this.velocity = constrain(this.velocity, 0, 0);
        }
    } 

    flap()
    {
        this.velocity-= this.jumpForce;
    }

    death()
    {

        //game over screen
    }
}