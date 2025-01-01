class Level2 {
    constructor() {
        this.isActive = true
        this.obstacles = []
        this.bombs = []
    }

    start() {
        let side;


        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth;
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 10, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 200;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth;
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 10, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 200;

        side = 1;
        obstacleX = landWidth;
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 10, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 500;

        side = 2;
        obstacleX = canvasWidth - obstacleWidth - landWidth
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 10, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));
        obstacleY += 500;

        side = 1;
        obstacleX = landWidth;
        this.obstacles.push(new Obstacle(obstacleX, obstacleY, 10, obstacleWidth, obstacleHeight, side == 1 ? "left" : "right"));

        this.bombs.push(new Bomb(bombX, -4000, 10))
        this.bombs.push(new Bomb(bombX, -3000, 10))
        this.bombs.push(new Bomb(bombX, -1500, 10))

    }

    update() {
        if (this.isActive) {
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].update()
            }
            for (let i = 0; i < this.bombs.length; i++) {
                this.bombs[i].update()
            }
        }
        else {
            for (let i = 0; i < this.obstacles.length; i++) {
                this.obstacles[i].draw()
            }
            for (let i = 0; i < this.bombs.length; i++) {
                this.bombs[i].draw()
            }
        }

    }

    stopLevel() {
        for (let i = 0; i < this.obstacles.length; i++) {
            this.obstacles[i].velocity = 0
        }
        for (let i = 0; i < this.bombs.length; i++) {
            this.bombs[i].velocity = 0
        }
        this.isActive = false
        if (this.obstacles[0].position.y > canvasHeight)
            return true
        else return false
    }
}