class Bomb{
    constructor(x,y,velocity){
        this.position =createVector(x,y)
        this.velocity=velocity
        this.radius=20
        this.color="white"
    }

    draw() {
         image(gameplay_bomb, this.position.x - this.radius, this.position.y - this.radius, this.radius*2);
    }

    update(){
        this.draw()
        this.position.y+=this.velocity
    }
}