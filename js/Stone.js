class Stone
{
    constructor(x,y,radius)
    {
        var options={
            restitution:1,
            friction:1,
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
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        ellipse(0,0,radius,options)
    }
}