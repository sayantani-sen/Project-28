class Mango{
    constructor(x,y){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1
        }
        this.body = Bodies.rectangle(x,y,25,25,options);
        this.width = 25;
        this.height = 25;
        this.mangoImage = loadImage("sprites/mango.png");
        World.add(world,this.body);

    }
    display(){
        var pos = this.body.position;
        image(this.mangoImage,pos.x,pos.y,25,25);
    }
}
