frontend-nanodegree-arcade-game
===============================

Students should use this [rubric](https://www.udacity.com/course/viewer/#!/c-nd001/l-2696458597/m-2687128535) for self-checking their submission.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

To play the game: All files - js, css, images and index.html - need to be located in one folder.
Open index.html in a browser to start playing the game.


frontend-nanodegree-arcade-game includes three JS files

Resources.js = Image loading utility
Engine.js = Provides the game loop functionality, draws the initial game board on the screen. Calls update and render functions
App.js = Initiates the enemies and player and let's them move over the screen. Checks for collision and resets player and enemies.

Details for App.js

Enemies:
The enemies move from left to right on the canvas. 
Once they are off screen they need to be reset.
The enemies can take three different y values (60, 145 and 230) this sets the enemy on of the three grass lanes.
Enemies get a randomly assigned values from two arrays for y and speed. 

Construct Enemy and create enemies 
var Enemy = function(x, y, speed) constructs the enemies, with y and x coordinates and speed.
var allEnemies = []; is the array that holds the instances of four enemies used in the game. 

Radom speed and y
function makeRandomSpeed() and function makeRandomY()
These functions create random speed and a random y for the enemies and will be used to render and reset the enemy.
The value of x will be set to -3 at render and reset, so that the enemy always starts off screen.

Enemy update and reset
Enemy.prototype.update; makes the enemy move over the screen. dt values is defined in engine.js. Also calls reset if the enemy has crossed over on the right side of the screen.
Enemy.prototype.reset; gets called by update in that case and resets the enemy with random y and speed

Player
The player will move over the canvas according to the keyboard input of the user.

Player construction, initialization and reset
Player is added to the screen at coordinate (200,400) and reset to the same coordinate.

Player update and handleInput
Player.prototype.handleInput  makes the player move over the canvas and Player.prototype.update resets if the player crosses the screen or collides with an enemy.
For collision checking, a for loop goes through the allEnemies array and checks for every enemy if the x an y position is the same as the player
An offset by -16 and +25 was chosen for the x coordinate for better reaction, player and enemy are overlapping to much if wait for player.x= enemy.x

