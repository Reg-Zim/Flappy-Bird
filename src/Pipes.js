class Pipes
{
    constructor()
    {
        this.width = 80;
        this.topHeight = this.getRandom(150, 400);

        this.pipeDistance = 170;
        this.bottomPlacement = this.topHeight + this.pipeDistance;
        this.bottomHeight = ground - this.bottomPlacement;

        this.posX = width;

        this.hitW = 'math';
        this.hitH = 'more math';

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