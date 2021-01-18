class Tree {
    constructor(){
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(100,100,5,5,options);
        this.width = width;
        this.height = height;
       
        this.treeImage = loadImage("sprites/tree.png");
        World.add(world,this.body);
    }

    display(){
        // var pos = this.body.position;
        image(this.treeImage,400,300,400,400);
    }
}
