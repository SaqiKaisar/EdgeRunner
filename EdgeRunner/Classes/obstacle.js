class Obstacle{
    constructor(x,y,velocity,width,height,side){
        this.position=createVector(x,y)
        this.velocity=velocity
        this.width=width
        this.height=height
        this.color="red"
        this.side=side
    }

    draw(){
        if(this.side == "left") {
            image(gameplay_block[0], this.position.x,this.position.y,this.width,this.height);
        } else {
            image(gameplay_block[1], this.position.x,this.position.y,this.width,this.height);
        }
    }

    update(){
        this.draw()
        this.position.y+=this.velocity
    }

    stop(){
        this.velocity=0
    }

}