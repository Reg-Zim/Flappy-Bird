class Pipes
{
    constructor(top)
    {
        this.width = 80;
        this.topHeight = this.getRandom(150, 400);

        this.pipeDistance = 170;
        this.bottomPlacement = top + this.pipeDistance;
        this.bottomHeight = ground - this.bottomPlacement;

        this.posX = width;

        this.hitW;
        this.hitYTop;
        this.hitYBottom;

        this.despawn;
    }

    movement()
    {
        let speed = 5;
        this.posX-= speed;
        this.despawn = this.posX + this.width/2;
    }

    getRandom(min, max)
    {
        return Math.floor(Math.random() * (max - min) ) + min;
    }
}