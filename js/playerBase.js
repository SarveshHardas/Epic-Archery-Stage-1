class PlayerBase
{
    constructor(x,y)
    {
       
        this.x=x
        this.y=y
        this.radius=150
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,this.radius,options)
        this.image=loadImage("assets/base1.png")
        World.add(world,this.body)
    }
    display()
    {
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,this.radius,this.radius)
        pop ()

    }
}