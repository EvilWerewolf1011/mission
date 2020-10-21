class Box {
    constructor(x,y,width,height){
        //Define all the properties here

        var body_options = {
            restitution : 0.8
        }

        this.body = Bodies.rectangle (x,y,width,height, body_options);

        this.width = width;
        this.height = height;

     

        World.add(myWorld, this.body);
    }

    //Define all the functions here
    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
        fill("white");
        rect (0, 0, this.width, this.height);
        pop();

    }
}