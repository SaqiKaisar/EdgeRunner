class Level1 
{
    constructor() 
    {
        this.isActive = true
        this.obstacles = []
        this.shadowPosition = []
        this.shadows = []
        this.bombs = []
        this.part1Complete = false
        this.part2Complete = false
        this.part2Intialized = false
    }

    start() 
    {
        let side;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;



        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 200;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 200;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 300;

        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 350;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 200;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 350;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 200;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 350;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 350;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 350;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 350;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 350;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 350;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 500;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 500;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 200;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 500;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 200;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 500;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 500;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 500;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 500;

        side = 1;
        obstacleX = landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 8+levelWiseVelocity, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 500;

        this.bombs.push(new Bomb(bombX, -8000, 12+levelWiseVelocity))
        this.bombs.push(new Bomb(bombX, -6000, 12+levelWiseVelocity))
        this.bombs.push(new Bomb(bombX, -3000, 12+levelWiseVelocity))

    }

    updatePart1() {
        if (!this.part1Complete) {
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].update()
            }
            for(let i=0;i<this.bombs.length; i++) {
                this.bombs[i].update()
            }
            for(let i=0;i<this.shadows.length;i++) {
                this.shadows[i].position.y+=8+levelWiseVelocity
            }
        }
        else {
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].draw()
            }
        }
    }

    updatePart2() 
    {
        if (this.part1Complete && !this.part2Complete) {

            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].velocity = -8-levelWiseVelocity
                this.obstacles[i].update()
            }
            for (let i = 0; i < this.shadows.length; i++) {
                this.shadows[i].update()
            }
        }
    }

    stopLevelPart1() 
    {
        for (let i = 0; i < this.obstacles.length; i++) 
        {
            this.obstacles[i].velocity = 0
        }
        if (this.obstacles[0].position.y >= canvasHeight) 
        {
            this.part1Complete = true
            return true
        }
        else
        {
            noLoop()
            return false
        }
    }

    stopLevelPart2() 
    {
        noLoop()
        for (let i = 0; i < this.obstacles.length; i++) 
        {
            this.obstacles[i].velocity = 0
        }
        this.isActive = false
        if (this.obstacles[this.obstacles.length-1].position.y+this.obstacles[this.obstacles.length-1].height <=0) 
        {
            this.part2Complete = true
            this.isActive = false
            h1 = createElement("h1","Winner");
            h1.style('color','lightgreen'); 
            h1.style('font-size','4em'); 
            h1.style('font-family','Orbitron'); 
            h1.style('text-shadow','0 0 20px white');
            h1.position(800,380)
            console.log("gameOver");  
            return true
        }
        return false
    }


}