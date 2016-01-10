     
//Enemy constructor

var Enemy = function(x,y,speed){

this.sprite = 'images/enemy-bug.png';
//this.yArray = [60,145,230];    
//this.speedArray = [30,45,55,60,90,120]; 
this.y = y;
this.speed = speed;
this.x = -3;
}
//Creating a random Speed out of the array

function makeRandomSpeed() {
//Enemy.prototype.getSpeed = function() {
  var speedArray = [30,45,55,60,90,120]; 
  var randSpeed = speedArray[Math.floor(Math.random() * speedArray.length)];
  return randSpeed;
}//return this.enemy = [this.x,this.randY,this.randSpeed];



//Creating a random Y out of the array
function makeRandomY() {
//Enemy.prototype.getY = function() {
//var yArray =  [10,60,90,145,210];    
//var yArray =  [0,65,155,235];
var yArray =  [60,145,230];
 var randY = yArray[Math.floor(Math.random() * yArray.length)];
 return randY;
}


//Updating enemy if enemy crosses the screen
Enemy.prototype.update = function(dt) {
        this.x += this.speed * dt;
        if (this.x >600)
  
    {
        this.reset();
		
    }
};

//Resetting the enemy with the random values
Enemy.prototype.reset = function() {
    this.x = -2
  this.y = makeRandomY();
  this.speed = makeRandomSpeed();
}



//Resetting the enemy with the random values
//Enemy.prototype.reset = function() {
   //var yArray =  [60,145,230];    
   //var speedArray = [60,90,110]; 
   //var randY = Math.floor(Math.random() * yArray.length);
   //var randSpeed = Math.floor(Math.random() * speedArray.length); 
 //   this.x = -3
//	this.y = 
    //this.y = this.randY();
   // this.speed = this.randSpeed();
//}



//Updating enemy if enemy crosses the screen
Enemy.prototype.update = function(dt) {
        this.x += this.speed * dt;
        if (this.x >600)
        
            {
        this.reset();
    }
}
  



//Enemy.prototype.update = function(dt) {
    //Reset enemy if goes off screen
 //   if(this.x <= 500){
 //       this.x += this.speed * dt;
  //  }else{
  //      this.x = -2;
  //  }
//};


// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};




// Now write your own player class

//var PlayerYArray = [60,145,230,315,400];

// Player object


var Player = function(x,y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
 
}

Player.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
}


// This class requires an update(), render() and
// a handleInput() method.




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


Player.prototype.update = function() {

   if (this.y == -25) {
        //reset if player on water
        this.reset();
        }
       else  if (this.y > 400)
        //player can not go lower than starting position
        {
       this.y = 400;
        }
        else if (this.x > 500)
        //let player appear again on left side
        {
         this.x = -100;
       }
       else if (this.x < -100)
       //let player appear again on right side
       {
       this.x = 500;
       }
         else if (this.y >= 60 && this.y <= 230) {          

       
    if (enemy1.x >= this.x - 20 && enemy1.x <= this.x + 20) {
           this.reset();
      }
       else if (enemy2.x >= this.x - 20 && enemy2.x <= this.x + 20) {
           this.reset();
      }
        else if (enemy3.x >= this.x - 20 && enemy3.x <= this.x + 20) {
           this.reset();
      }
         else if (enemy4.x >= this.x - 20 && enemy4.x <= this.x + 20) {
           this.reset();
      }
}
   }
 
        

Player.prototype.reset = function() {
    this.x = 200;
    this.y = 400;
}

Player.prototype.handleInput = function(key) {
    if (key === 'up') {
     this.y -= 42.5;
     console.log("Up");
     }
     else if (key === 'down')     
     {
     this.y += 42.5;
     console.log("Down");
     }
     else if (key === 'left')
     {
     this.x -= 25;
     console.log("Left");
     }
     else if (key === 'right')
     {
      this.x += 25;
     console.log("Right");
     }
     }


document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies


//Creating an array called allEnemies with set parameters
//var allEnemies = [];
//(function setEnemies(){

//    allEnemies.push(new Enemy(-3,this.getY, this.getSpeed));
//    allEnemies.push(new Enemy(-3,this.getY, this.getSpeed));
//    allEnemies.push(new Enemy(-3,this.getY, this.getSpeed));

//}());

//Creating an array called allEnemies with set para
//   allEnemies.push(new Enemy(-10,145,90));
//  allEnemies.push(new Enemy(-2,230,130));meters
//var allEnemies = [];
//(function setEnemies(){
//   allEnemies.push(new Enemy(-5,60,80));

//}());


var enemy1 = new Enemy(-3, makeRandomY(), makeRandomSpeed());
var enemy2 = new Enemy(-3, makeRandomY(), makeRandomSpeed());
var enemy3 = new Enemy(-3, makeRandomY(), makeRandomSpeed());
var enemy4 = new Enemy(-3, makeRandomY(), makeRandomSpeed());

var allEnemies = [enemy1,enemy2,enemy3,enemy4];

console.log(enemy1);
//var enemy1 = new Enemy();
//var enemy2 = new Enemy();
//var enemy3 = new Enemy();
//var allEnemies = [enemy1,enemy2,enemy3];

//var allEnemies = [];


//(function setEnemies()
//{
//allEnemies.push(createEnemy());
//allEnemies.push(createEnemy());
//allEnemies.push(createEnemy());
//allEnemies.push(createEnemy());
//}());




// Place the player object in a variable called player


var player = new Player(200,400);




