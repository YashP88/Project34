class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.03,
            length: 10
        }
        this.bodyA= bodyA;
        this.pointB = pointB
        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
    flya(){
        this.fly.bodyA = null;
    }
    attach(body){
        this.fly.bodyA=body;
    }
   
    display(){
    if(this.fly.bodyA){
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;
       
       stroke("black");
       strokeWeight(2);
       line(pointA.x-20, pointA.y, pointB.x-10, pointB.y);
    }    
    
        
    }
    
}