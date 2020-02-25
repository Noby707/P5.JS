var score = 0;

function Block() {
    this.x = random(50, width - 50);
    this.y = height - 75//random(-200, -400);

    this.fall = function() {
        this.y += 2.5;

        if (this.y > 650) {
            this.y = random(-200, -400);
            score++;
            // console.log(score);
        }
    }

    this.show = function() {
        fill(50, 205, 50)
        ellipse(this.x, this.y-20, 50, 50)
    }
}


// Instantiate blocks a random x position between 0+25 to width - 25
// 