class Stone{
    constructor(){
        var options = {
            isStatic: true,
            restitution: 0,
            friction: 1,
            density: 1.2
        }
        this.body = Bodies.rectangle(15,570,50,50,options);
        this.width = width;
        this.height = height;
        this.stoneImage = loadImage("sprites/stone.png");
        World.add(world,this.body);
    }
        
        display(){
            var pos = this.body.position;
            image(this.stoneImage,pos.x,pos.y,50,50);
        }
    }
    