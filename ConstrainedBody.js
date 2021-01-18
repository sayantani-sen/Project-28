class ConstrainedBody{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffnes: 0.04,
            length: 0.004
        }
        this.pointB = pointB;
        this.constrainedBody = Constraint.create(options);
        World.add(world,this.constrainedBody);
    }
    fly(){
        this.constrainedBody.pointA = null;
    }
    display(){
        // var pointA = this.constrainedBody.bodyA.position;
        // var pointB = this.pointB;
        strokeWeight = 4;
        line(50,570,35,595);
    }

}
