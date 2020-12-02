class Drop {
    constructor(x,y) {
        this.radius = 5;
        var options ={
            friction: 0.1
        }
        this.body = Bodies.circle(x,y,this.radius, options);
        World.add(world, this.body)
    }

    display() {
        var pos =this.body.position;
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius);
    }
}