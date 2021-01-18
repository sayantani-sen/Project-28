class Ground {
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(400,700,800,10,options);
        this.width = 800;
        this.height = 10;
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        rect(pos.x,pos.y,this.width,this.height);

    }
}
