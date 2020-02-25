var dodger;
var blocks = [];

function setup(){
    createCanvas(600, 600);
    dodger = new Dodger();

    for (var i = 0; i < 15; i++) {
        blocks[i] = new Block();
    }
    console.log(score);
}

function draw() {
    background(51);

    dodger.show();
    dodger.update();

    for (var i = 0; i < blocks.length; i++){
        blocks[i].fall();
        blocks[i].show();
        dodger.gameOver(blocks[i]);
    }
    
    textSize(32);
    text(score, 10, 30);
    fill(0, 102, 153);
}

function keyPressed() {
    if (keyCode === RIGHT_ARROW){
        dodger.xspeed = 5;
    } else if (keyCode === LEFT_ARROW) {
        dodger.xspeed = -5;
    } else if (keyCode === DOWN_ARROW) {
        dodger.gameOver(blocks[0]);
    } 
}