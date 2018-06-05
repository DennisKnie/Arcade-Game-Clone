// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
    this.hitbox = [50, 77];
    this.speed = speed;
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.pos[0] = this.pos[0] + this.speed * dt;
    if (this.pos[0] > ctx.canvas.width) {
        this.pos[0] = -100;
    }
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
let Player = function(x, y) {
    this.sprite = 'images/char-princess-girl.png';
    this.pos = [x, y];
    this.size = [171, 101];
    this.hitbox = [50, 60];
};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.pos[0], this.pos[1]);
        ctx.font = "500 40px arial";
        ctx.fillText("Score: " + score, 0, 50);
};

Player.prototype.update = function(dt) {
    if (this.pos[1] <= 40) {
        this.pos = [200, 430];
        score += 10;
        ctix.canvas.width = ctx.canvas.width;
    }
    
    if (this.pos[0] , 0) {
        this.pos[0] = 0;
    } else if (this.pos[0] > ctx.canvas.width - this.size[1]) {
        this.pos[0] = ctx.canvas.width - this.size[1];
    }
    
    if (this.pos[1] < 0) {
        this.pos[1] = 0;
    } else if (this.pos[1] > ctx.canvas.height - this.size[0]) {
        this.pos[1] = ctx.canvas.height - this.size[0];
    }
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
