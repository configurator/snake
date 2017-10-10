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

function tick() {
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

	// Off with their tails!
	gameState.snake.pop();

	// Add a new head
	checkNewHead(x, y);
	gameState.snake.unshift({ x, y });
}

module.exports = {
	tick
};
