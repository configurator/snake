const gameState = require('./gamestate');
const { up, down, left, right } = require('./constants');

const { isIn } = require('./util');

function checkNewHead(x, y) {
	if (x < 0 || x >= gameState.boardSize || y < 0 || y >= gameState.boardSize) {
		gameState.dead = true;
	}
	if (isIn(x, y, gameState.snake)) {
		gameState.dead = true;
	}
}

function addApple() {
	var x = Math.floor(Math.random() * gameState.boardSize);
	var y = Math.floor(Math.random() * gameState.boardSize);
	if (!isIn(x, y, gameState.snake) && !isIn(x, y, gameState.apples)) {
		gameState.apples.push({ x, y });
		return;
	}
	addApple();
}

function eatApple(x, y){
	for (var i=0; i<gameState.apples.length; i++){
		if (gameState.apples[i].x === x && gameState.apples[i].y === y){
			gameState.apples.splice(i, 1);
			gameState.applesEaten++;
			return;
		}
	}
}

function tick() {
	if (gameState.turnCounter % 10 === 0) {
		addApple();
	}

	// Calculate new head's location
	var x = gameState.snake[0].x;
	var y = gameState.snake[0].y;
	switch (gameState.direction) {
		case down:
			y = y + 1;
			break;
		case up:
			y = y - 1;
			break;
		case left:
			x = x - 1;
			break;
		case right:
			x = x + 1;
			break;
	}

	if (isIn(x, y, gameState.apples)) {
		eatApple(x, y);
	} else {
		// Off with their tails!
		gameState.snake.pop();
	}

	// Add a new head
	checkNewHead(x, y);
	gameState.snake.unshift({ x, y });

	// increase counter
	gameState.turnCounter++;

	if (gameState.turnCounter % 30 === 0 && gameState.turnLengthMs > 90) {
		gameState.turnLengthMs -= 30;
		return gameState.turnLengthMs;
	}

}

module.exports = {
	tick,
};
