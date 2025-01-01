class Shadow {
    constructor(x, y, velocityX, velocityY, side) {
        this.position = createVector(x, y)
        this.radius = 25
        this.velocity = createVector(velocityX, velocityY)
        this.color = "purple"
        this.side = side
    }

    draw() {
        if (this.side == "left") {
            image(gameplay_shadow[0], this.position.x - this.radius, this.position.y - this.radius, this.radius * 2);
        } else {
            image(gameplay_shadow[1], this.position.x - this.radius, this.position.y - this.radius, this.radius * 2);
        }
    }

    update() {
        this.draw()
        if (this.side == "left") 
        {
            this.position.x += this.velocity.x
            this.position.y += this.velocity.y
            if (collidePointCircle(canvasWidth - landWidth, this.position.y, this.position.x, this.position.y, this.radius * 2)) 
            {
                this.side = "right"
                this.position.x = canvasWidth - landWidth - this.radius
            }
            else 
            {
                for (let i = 0; i < level1.obstacles.length; i++) 
                {
                    if (level1.obstacles[i].side == "right" &&
                        !collideRectCircle(player.position.x, player.position.y, player.width, player.height, this.position.x, this.position.y, this.radius) &&
                        collideRectCircle(level1.obstacles[i].position.x, level1.obstacles[i].position.y, level1.obstacles[i].width, level1.obstacles[i].height, this.position.x, this.position.y, this.radius)) 
                    {
                        this.side = "right"
                        this.position.x = canvasWidth - landWidth - this.radius - level1.obstacles[i].width
                    }
                }
            }
        }
        else 
        {
            this.position.x -= this.velocity.x
            this.position.y += this.velocity.y
            if (collidePointCircle(landWidth, this.position.y, this.position.x, this.position.y, this.radius * 2)) 
            {
                this.side = "left"
                this.position.x = landWidth + this.radius
            }
            else 
            {
                for (let i = 0; i < level1.obstacles.length; i++) 
                {
                    if (level1.obstacles[i].side == "left" &&
                        !collideRectCircle(player.position.x, player.position.y, player.width, player.height, this.position.x, this.position.y, this.radius) &&
                        collideRectCircle(level1.obstacles[i].position.x, level1.obstacles[i].position.y, level1.obstacles[i].width, level1.obstacles[i].height, this.position.x, this.position.y, this.radius)) 
                    {
                        this.side = "left"
                        this.position.x = landWidth + this.radius + level1.obstacles[i].width
                    }
                }
            }
        }
    }
}
