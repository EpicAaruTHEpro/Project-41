class Umbrella {
    constructor(x,y) {
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true
        }
        this.radius = 200;
        this.body = Bodies.circle(x,y,this.radius-40, options);
        this.image = loadImage("images/Walking Frame/walking_1.png");
        World.add(world, this.body);
    }

    display() {
        var pos =this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.radius*2, this.radius*2);
    }
}