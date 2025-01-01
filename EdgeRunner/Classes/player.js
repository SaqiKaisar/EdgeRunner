class Player {
    constructor(x, y) {
        this.position = createVector(x, y)
        this.width = 50
        this.height = 50
        this.color = 'lightgreen'
        this.velocity = createVector(0, 0)
        this.acceleration = 0
        this.jumpStatus = false
        this.side = "left"
        this.level1Part1Complete = false
        this.level1Part2Started = false
        this.level1Part2Complete = false
        this.level1Failed = false
        this.level2Complete = false
        this.reachedTop = false 

        this.sprite = createSprite(this.position.x, this.position.y, this.width, this.height);
        this.sprite.collider = 'static';
        this.sprite.visible = false;

        this.sprite.addAnimation("run", ...gameplay_player_run);
        this.sprite.addAnimation("jump", gameplay_player_jump);
        this.sprite.addAnimation("slide", gameplay_player_slide);
    }

    draw() {
        this.sprite.position.x = this.position.x + (this.width / 2);
        this.sprite.position.y = this.position.y + (this.height / 2);

        if (this.side == "left" && !this.level1Part2Started) {
            this.sprite.changeAnimation("run");
            this.sprite.mirror.x = false;
        } else if (this.side == "right" && !this.level1Part2Started) {
            this.sprite.changeAnimation("run");
            this.sprite.mirror.x = true;
        } else if (this.side == "left" && this.level1Part2Started) {
            this.sprite.changeAnimation("slide");
            this.sprite.mirror.x = false;
        } else if (this.side == "right" && this.level1Part2Started) {
            this.sprite.changeAnimation("slide");
            this.sprite.mirror.x = true;
        } else if (this.side == "right_temp") {
            this.sprite.changeAnimation("jump");
            this.sprite.mirror.x = false;
        } else if (this.side == "left_temp") {
            this.sprite.changeAnimation("jump");
            this.sprite.mirror.x = true;
        }

        drawSprites(this.sprite);
    }

    update() {
        if (this.jumpStatus == true && this.side == "left") {
            this.velocity.x = 20
            this.position.x += this.velocity.x
            if (this.position.x > landWidth + obstacleWidth) {
                this.side = "right_temp"
            }
        }
        else if (this.jumpStatus == true && this.side == "right") {
            this.velocity.x = 20
            this.position.x -= this.velocity.x
            if (this.position.x < canvasWidth - landWidth - obstacleWidth) {
                this.side = "left_temp"
            }
        }

        else if (this.jumpStatus == true && this.side == "right_temp") {
            this.velocity.x = 20
            this.position.x += this.velocity.x
            if (this.position.x >= canvasWidth - landWidth - this.width) {
                this.position.x = canvasWidth - landWidth - this.width
                this.velocity.x = 0
                this.jumpStatus = false
                this.side = "right"
            }
        }
        else if (this.jumpStatus == true && this.side == "left_temp") {
            this.velocity.x = 20
            this.position.x -= this.velocity.x
            if (this.position.x < landWidth) {
                this.position.x = landWidth
                this.velocity.x = 0
                this.jumpStatus = false
                this.side = "left"
            }
        }
        if(this.level1Part1Complete && this.position.y<=50)
        {
            this.reachedTop = true;
        }
        if (this.level1Part1Complete && this.position.y >= 50) 
        {
            this.velocity.y = 10
            this.position.y -= this.velocity.y
        } 
        else 
        {
            this.velocity.y = 0
        }
        if (this.position.y <= 50)
            this.level1Part2Started = true
        this.draw()
    }
}