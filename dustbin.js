class Dustbin{
    constructor (x,y,width,height)
    {
        var Dustbin_options = {
            isStatic:true,
            
        }
        this.image = loadImage("sprites/dustbingreen.png");
        this.body=Bodies.rectangle(x,y,width,height,Dustbin_options);
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
       
        World.add(world,this.body);
    }
    display()
    {
        var Dustbinpos=this.body.position;
       rectMode(CENTER)
        fill("white");
        rect(Dustbinpos.x,Dustbinpos.y,this.width,this.height);
        image(this.image,870,300,0,0);
      
    }
}