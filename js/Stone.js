class Stone
{
    constructor(x,y,radius)
    {
        var options={
            restitution:0.8,
            friction:0.8,
        }
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.body=Bodies.circle(x,y,radius,options);
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        fill(255,255,255)
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        ellipse(0,0,this.radius)
        pop();
    }
}