const gameState = require('./gamestate');

function print() {
	var board = document.querySelector('.game-board');
	board.innerHTML = ''; // delete everything off the board

	var gameScore = document.querySelector('.game-score');
	gameScore.innerHTML = gameState.applesEaten;

	gameState.snake.forEach(function (part) {
		if (part.x < 0 || part.x >= gameState.boardSize
			|| part.y < 0 || part.y >= gameState.boardSize) {
			return;
		}

		var snakeElement = document.createElement('i');
		snakeElement.classList.add("snake");
		snakeElement.style.top = part.y + "em";
		snakeElement.style.left = part.x + "em";
		board.appendChild(snakeElement);
	});

	gameState.apples.forEach(function (apple){
		var appleElement = document.createElement('i');
		appleElement.classList.add("apple");
		appleElement.style.top = apple.y + "em";
		appleElement.style.left = apple.x + "em";
		board.appendChild(appleElement);
	});

	if (gameState.dead){
		document.body.classList.add("youlose");
	}
}

function drawboard() {}

// const ansi = require('ansi');
// const cursor = ansi(process.stdout);

//
// const { isIn } = require('./util');

// function print() {
// 	cursor.hide();

// 	if (gameState.dead){
// 		if(!gameState.deadPrinted) {
// 			drawDead();
// 			gameState.deadPrinted = true;
// 		}
// 		return;
// 	}

// 	cursor.goto(2,2);

// 	for (var y = 0; y < gameState.boardSize; y++) {
// 		for (var x = 0; x < gameState.boardSize; x++) {
// 			cursor.goto( x+2, y+2)
// 			if (isIn(x, y, gameState.snake)) {
// 				 cursor.write('█');
// 			} else if (isIn(x, y, gameState.apples)) {
// 				cursor.write('☭');
// 			} else {
// 				cursor.write(' ');
// 			}
// 		}
// 		//cursor.write('\n'); //on work computer I had to cancel this line to stop game board from sliding down
// 	}
// }

// function drawboard(space) {
// 	cursor.goto(1,1);
// 	cursor.eraseData();

// 	cursor.write('┌');
// 	for (var x = 0; x < gameState.boardSize; x++) {
// 		cursor.write('─');
// 	}
// 	cursor.write('┐');
// 	cursor.write('\n');
// 	for (var y = 0; y < gameState.boardSize; y++) {
// 		cursor.goto(1, y + 2);
// 		cursor.write('│');
// 		for (var x = 0; x < gameState.boardSize; x++) {
// 			cursor.write(space);
// 		}
// 		//cursor.goto(gameState.boardSize, y);
// 		cursor.write('│');
// 		cursor.write('\n');
// 	}
// 	cursor.write('└');
// 	for (var x = 0; x < gameState.boardSize; x++) {
// 		cursor.write('─');
// 	}
// 	cursor.write('┘');
// 	cursor.write('\n');
// }

// function drawDead() {
// 	drawboard('♿');
// }

module.exports = {
	print, drawboard
};
