let Math = window.Math
const canvasPositionX = 1707 / 2 - 200
const canvasWidth = 500
const canvasHeight = 888
const landWidth = 40
const playerX = landWidth
const playerY = canvasHeight - canvasHeight / 4
const obstacleWidth = 75
const obstacleHeight = 75
let player
let obstacles = []
let obstaclestartingY = -13000
let obstacleY = obstaclestartingY
let obstacleX = landWidth
let bombY
let bombX = canvasWidth / 2
let level1
let main_menu_bg
let difficulty_screen_bg
let levelIntialised = false

// let savedTime
// let passedTime

var screen = 0;
var gameOver = false

let button
let button_easy
let button_med
let button_hard
let h1
let h2
let h3
let h4
let h5
let h6
let levelWiseVelocity = 0

let gameplay_bg;
let gameplay_wall = [];
let gameplay_block = [];
let gameplay_shadow = [];
let gameplay_bomb;
let gameplay_player_run = [];
let gameplay_player_jump;
let gameplay_player_slide;

let bgm
let gameplay_playerJump_sound
let gameplay_playerHit_sound

let count = 0;

function preload() {

  ////////////////////////////////
  gameplay_bg = loadImage('assets/sprite/environment/background.png');

  gameplay_wall[0] = loadImage('assets/sprite/environment/wall-left.png');
  gameplay_wall[1] = loadImage('assets/sprite/environment/wall-right.png');

  gameplay_block[0] = loadImage('assets/sprite/environment/block-left.png');
  gameplay_block[1] = loadImage('assets/sprite/environment/block-right.png');

  gameplay_shadow[0] = loadImage('assets/sprite/environment/shadow-left.png');
  gameplay_shadow[1] = loadImage('assets/sprite/environment/shadow-right.png');

  gameplay_bomb = loadImage('assets/sprite/environment/bomb.png');

  for (let i = 0; i < 6; i++) {
    gameplay_player_run[i] = loadImage('assets/sprite/player/run/tile00' + i + '.png');
  }

  gameplay_player_jump = loadImage('assets/sprite/player/jump.png');

  gameplay_player_slide = loadImage('assets/sprite/player/slide.png')

  soundFormats('mp3', 'ogg', 'wav');
  bgm = loadSound('assets/music/bgm.mp3');
  gameplay_playerJump_sound = loadSound('assets/music/jump.wav');
  gameplay_playerHit_sound = loadSound('assets/music/hit.mp3');
  ////////////////////////////////
}


function setup() {
  const canvas = createCanvas(canvasWidth, canvasHeight)
  canvas.position(canvasPositionX, 0)
  player = new Player(playerX, playerY)
  frameRate(60)
  main_menu_bg = loadImage('assets/background.png');
  difficulty_screen_bg = loadImage('assets/background.png');

  let text1 = "EDGERUNNER"
  h5 = createElement("h2", text1);
  h5.style('font-size', '60px');
  h5.style('font-size-width', '100px');
  h5.style('text-align', 'center')
  h5.style('font-weight', 'bold')
  h5.style('font-family', 'Orbitron');
  h5.position(665, 160)
  h5.style('color', 'yellow');
  h5.style('stroke-width', '24px');
  h5.style('stroke-color', 'black');
  h5.style('text-border')

  button = createButton("Start Game")
  button.mousePressed(() => changeScreen("habijabi"));
  button.position(750, 580);
  button.style('background-color', 'transparent');
  button.style('border', 'none');
  button.style('font-size', '50px');
  button.style('text-shadow', '0 0 2px white');
  button.style('padding', '10px');
  button.style('font-family', 'Orbitron');
  button.style('color', 'yellow')
  button.style('size', '40 20');

  button_easy = createButton("Easy")
  button_easy.position(780, 350);
  button_easy.style('background-color', 'transparent');
  button_easy.style('border', 'none');
  button_easy.style('font-size', '24px');
  button_easy.style('text-shadow', '0 0 14px yellow');
  button_easy.style('color', 'white');
  button_easy.style('padding', '10px');
  button_easy.style('size', '40 20');
  button_easy.style('display', 'none');
  button_easy.style('font-family', 'Orbitron');
  button_easy.mousePressed(() => changeScreen("easy"));

  button_med = createButton("Medium")
  button_med.position(780, 400);
  button_med.style('background-color', 'transparent');
  button_med.style('border', 'none');
  button_med.style('font-size', '24px');
  button_med.style('text-shadow', '0 0 14px yellow');
  button_med.style('color', 'white');
  button_med.style('padding', '10px');
  button_med.style('size', '40 20');
  button_med.style('display', 'none');
  button_med.style('font-family', 'Orbitron');
  button_med.mousePressed(() => changeScreen("med"));

  button_hard = createButton("Hard")
  button_hard.position(780, 450);
  button_hard.style('background-color', 'transparent');
  button_hard.style('border', 'none');
  button_hard.style('font-size', '24px');
  button_hard.style('text-shadow', '0 0 14px yellow');
  button_hard.style('color', 'white');
  button_hard.style('padding', '10px');
  button_hard.style('size', '40 20');
  button_hard.style('display', 'none');
  button_hard.style('font-family', 'Orbitron');
  button_hard.mousePressed(() => changeScreen("hard"));

  h1 = createElement("h1", " Select Difficulty");
  h1.size(350, 20)
  h1.position(740, 270)
  h1.style('color', 'red');
  fill(255);
  textStyle("color", 'red');
  h1.style('font-family', 'Orbitron');
  h1.style('display', 'none');

  let text11 = "Story"
  h3 = createElement("h2", text11);
  h3.size(380, 50)
  h3.style('font-size', '100px');
  h3.style('text-align', 'center')
  h3.style('font-weight', 'bold')
  h3.style('font-family', 'Orbitron');
  h3.position(721, 0)
  h3.style('color', 'yellow');
  h3.style('stroke-width', '24px');
  h3.style('stroke-color', 'black');
  h3.style('text-border')
  h3.style('display', 'none');

  let text = "In a dystopian cyberpunk world, you assume the role of a skilled mercenary who has undertaken a dangerous mission: to demolish a highly classified CORPO building. However, complications arise when a recent cyberware enhancement you received begins malfunctioning, creating ethereal shadows that pose a threat to your well-being upon contact. With no other choice but to fulfill the assignment, you must navigate the treacherous environment, complete your objective, and escape while evading the ominous shadows that haunt your every move. Will you have the resourcefulness and tenacity to survive in this high-stakes game?"
  h2 = createElement("h2", text);
  h2.style('font-family', 'Orbitron');
  h2.style('font-size', '20px');
  h2.size(380, 600)
  h2.style('text-align', 'center')
  h2.position(720, 200)
  h2.style('color', 'yellow');
  h2.style('display', 'none');

  let text22 = "Press enter to start the game"
  h4 = createElement("h2", text22);
  h4.size(380, 600)
  h4.style('text-align', 'center')
  h4.position(720, 750)
  h4.style('color', 'lime');
  h4.style('display', 'none');

  bgm.setVolume(0.0375);
  bgm.loop();
  bgm.play();

  gameplay_playerJump_sound.setVolume(0.5);
  gameplay_playerHit_sound.setVolume(0.5);
}

function draw() {
  if (screen == 0) {
    menu_screen();
  }
  else if (screen == 1) {
    difficulty_screen();
  }
  else if (screen == 2) {

    story_screen();
  }
  else if (screen == 3) {
    game_screen();
  }
  else if (screen == 4) {
    game_complete_screen();
  }
}

function story_screen() {
  background(difficulty_screen_bg);
}

function difficulty_screen() {
  background(difficulty_screen_bg);
}

function menu_screen() {
  background(main_menu_bg);
}

function game_screen() {
  clear();

  background(gameplay_bg);
  image(gameplay_wall[0], 0, 0, landWidth, windowHeight);
  image(gameplay_wall[1], canvasWidth - landWidth, 0, landWidth, windowHeight);

  if (!levelIntialised) {
    level1 = new Level1()
    level1.start()
    levelIntialised = true
  }
  player.update()
  if (!level1.part1Complete) {
    level1.updatePart1()
  }
  else if (level1.part1Complete && !level1.part2Complete && player.level1Part2Started) {
    level1.updatePart2()
  }
  if (level1.obstacles[0].position.y >= canvasHeight) {
    if (!level1.part1Complete) {
      player.level1Part1Complete = level1.stopLevelPart1()
    }
  }
  if (level1.part1Complete && !level1.part2Complete) {
    if (level1.obstacles[level1.obstacles.length - 1].position.y + level1.obstacles[level1.obstacles.length - 1].height <= 0 &&
      level1.shadows[0].position.y + level1.shadows[0].radius <= 0) {
      player.level1Part2Complete = level1.stopLevelPart2()
    }
  }

  collision()

  if (gameOver) {
    h1 = createElement("h1", "Game Over");
    h1.position(700, 380)
    console.log("gameOver");
    h1.style('color', 'red');
    h1.style('font-size', '4em');
    h1.style('font-family', 'Orbitron');
    h1.style('text-shadow', '0 0 20px white');
    fill(255);
    textStyle("color", 'red');

    gameplay_playerHit_sound.play();
  }
  if(player.reachedTop && !count)
  {
    h6 = createElement("h1","Planting The Bomb");
    h6.style('color','lightgreen'); 
    h6.style('font-size','2em'); 
    h6.style('font-family','Orbitron'); 
    h6.style('text-shadow','0 0 20px white');
    h6.position(730,380)
    count = 1;
    noLoop();
    setTimeout(resumeDrawing, 3500) 
  }

}

function resumeDrawing()
{
  h6.style('display', 'none');
  loop()
}

function endGame() {
  gameOver = true;
}

function keyPressed() {
  if (keyCode == 32) {                            //keycode of space
    if (!level1.part1Complete)
      level1.shadows.push(new Shadow(player.position.x + 25, player.position.y + player.width / 2 + 25, 3 + levelWiseVelocity/2, -8 - levelWiseVelocity, player.side))
    player.jumpStatus = true

    gameplay_playerJump_sound.play()

    console.log("jumped")
  }
  if (keyCode == ENTER) {
    if (screen == 2) {
      screen = 3;
      h2.style('display', 'none');
      h3.style('display', 'none');
      h4.style('display', 'none');
    }
  }
}

function changeScreen(level) {
  if (screen == 0) {
    screen = 1
    h5.style('display', 'none');
    button.style("display", "none");
    button_easy.style('display', 'block');
    button_med.style('display', 'block');
    button_hard.style('display', 'block');
    h1.style('display', 'block');
  }
  else if (screen == 1) {
    screen = 2
    button_easy.style('display', 'none');
    button_med.style('display', 'none');
    button_hard.style('display', 'none');
    h1.style('display', 'none');
    h2.style('display', 'block');
    h3.style('display', 'block');
    h4.style('display', 'block');
    if (level == "easy") {
      levelWiseVelocity = 0
    }
    else if (level == "med") {
      levelWiseVelocity = 2
    }
    else if (level == "hard") {
      levelWiseVelocity = 4
    }
  }
}

function collision() {
  if (!level1.part1Complete) {
    for (let i = 0; i < level1.obstacles.length; i++) {
      if (collideRectRect(player.position.x, player.position.y, player.width, player.height, level1.obstacles[i].position.x, level1.obstacles[i].position.y, level1.obstacles[i].width, level1.obstacles[i].height)) {
        player.level1Part1Complete = level1.stopLevelPart1()
        endGame()
      }
    }
    for (let i = 0; i < level1.bombs.length; i++) {
      if (collideRectCircle(player.position.x, player.position.y, player.width, player.height, level1.bombs[i].position.x, level1.bombs[i].position.y, level1.bombs[i].radius)) {
        player.level1Part2Complete = level1.stopLevelPart1()
        endGame()
      }
    }
  }
  else if (level1.part1Complete && !level1.part2Complete) {
    for (let i = 0; i < level1.shadows.length; i++) {
      if (collideRectCircle(player.position.x, player.position.y, player.width, player.height, level1.shadows[i].position.x, level1.shadows[i].position.y, level1.shadows[i].radius)) {
        player.level1Part2Complete = level1.stopLevelPart2()
        endGame()
      }
    }
    for (let i = 0; i < level1.obstacles.length; i++) {
      if (collideRectRect(player.position.x, player.position.y, player.width, player.height, level1.obstacles[i].position.x, level1.obstacles[i].position.y, level1.obstacles[i].width, level1.obstacles[i].height)) {
        player.level1Part1Complete = level1.stopLevelPart1()
        endGame()
      }
    }
  }
}



