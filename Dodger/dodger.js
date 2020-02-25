function Dodger() {
    this.x = width/2 - 50;
    this.y = height - 75;
    this.xspeed = 0;

    this.update = function() {
        this.x += this.xspeed;
        this.x = constrain(this.x, 0, width-50);
    }

    this.show = function() {
        fill(255);
        rect(this.x, this.y, 50, 50);
    }

    this.gameOver = function(other) {
        d = dist(this.x, this.y, other.x, other.y)
        if (d < 50) {
            score = 0;
            console.log('GameOver')
        }
    }
}