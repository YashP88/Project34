class Hero{
    constructor(x, y,r) {
        var options = {
          isStatic:false,
            restitution:0,
            frictionAir:0.1,
            density:1.9
        }
        this.body = Bodies.circle(x, y,r/2, options);
        this.x = x;
        this.y = y;
        this.r=r;
        this.image = loadImage("SuperHero-01.png");
        World.add(world, this.body);
      }
     

      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r*3, this.r*1);
        pop();
      }
}