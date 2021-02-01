class Rubber {
    constructor(x, y) {
        var options ={
            'restitution': 1.1,
            'density':1,
            'friction':5
        }

        this.body = Bodies.circle(x, y, 100, options);

        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        strokeWeight(2);
        stroke("black");
        fill("green");
        ellipse(0, 0, 100, 100);
        pop();
    }
}