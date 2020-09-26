class Umbrella{
    constructor(x,y,diameter){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.circle(x,y,diameter/2,options);
        this.diameter = diameter;
  
        this.image = loadImage("umbrella.png");
  
        World.add(world,this.body);
        World.add(world,this.image);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(this.image,0,0,330,330);
        pop();
    }
  }