class Sand {
    constructor(x, y) {
        var options ={
            'restitution': 1.2,
            'density':1,
            'friction':5
        }

        this.body = Bodies.circle(x, y, 25, options);

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(1);
        stroke("black");
        fill("red");
        ellipse(0, 0, 25, 25);
        pop();
    }
}