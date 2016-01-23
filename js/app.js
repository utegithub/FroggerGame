//Enemy constructor
var Enemy = function(x, y, speed) {

    this.sprite = 'images/enemy-bug.png';
    this.y = y;
    this.speed = speed;
    this.x = -3;
};
//Creating a random Speed out of the array

function makeRandomSpeed() {

    var speedArray = [30, 45, 55, 60, 90, 120];
    var randSpeed = speedArray[Math.floor(Math.random() * speedArray.length)];
    return randSpeed;
}


function makeRandomY() {

    var yArray = [60, 145, 230];
    var randY = yArray[Math.floor(Math.random() * yArray.length)];
    return randY;
}


//Updating enemy if enemy crosses the screen
Enemy.prototype.update = function(dt) {

    this.x += this.speed * dt;
    if (this.x > 600) {
        this.reset();
    }
};

//Resetting the enemy with the random values
Enemy.prototype.reset = function() {
    this.x = -2;
    this.y = makeRandomY();
    this.speed = makeRandomSpeed();
};



//Updating enemy if enemy crosses the screen
Enemy.prototype.update = function(dt) {
    this.x += this.speed * dt;
    if (this.x > 600)

    {
        this.reset();
    }
};



// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};



var allEnemies = [];
for (var i = 0; i < 5; i++) {
    var enemy = new Enemy(-3, makeRandomY(), makeRandomSpeed());
    allEnemies.push(enemy);
};



// Now write your own player class


// Player object


var Player = function(x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';

};

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
};


// This class requires an update(), render() and
// a handleInput() method.




Player.prototype.update = function() {

    if (this.y == -25) {
        //reset if player on water
        this.reset();
    } else if (this.y > 400)
    //player can not go lower than starting position
    {
        this.y = 400;
    } else if (this.x > 450)
    //if the player passed 450 on the right side, let player appear again on left side
    {
        this.x = -50;
    } else if (this.x < -50)
    //if the player passes - 50 on the left side, let player appear again on right side
    {
        this.x = 450;
    } else {

        for (var i = 0; i < allEnemies.length; i++) {

            if ((allEnemies[i].x > this.x - 16 && allEnemies[i].x < this.x + 25) && (allEnemies[i].y == this.y)) {
                //Check if the enemy is on the same x (range added) and y coordinates as the player
                this.reset();
            }
        }

    }
};



Player.prototype.handleInput = function(key) {
    if (key === 'up') {
        this.y -= 85;
        console.log("Up");
    } else if (key === 'down') {
        this.y += 85;
        console.log("Down");
    } else if (key === 'left') {
        this.x -= 50;
        console.log("Left");
    } else if (key === 'right') {
        this.x += 50;
        console.log("Right");
    }
};


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// Place the player object in a variable called player

var player = new Player(200, 400);