const ansi = require('ansi');
const cursor = ansi(process.stdout);


const down = 'down', up = 'up', left = 'left', right = 'right';

var gameState = {
	boardSize: 21,

	snake: [
		{ x: 10, y: 13 },
		{ x: 10, y: 12 },
		{ x: 10, y: 11 },
		{ x: 10, y: 10 }
	],

	direction: down,

	apples: [
		{ x: 5, y: 5 }
	]
};

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
	gameState.snake.unshift({ x, y });
}

function isIn(x, y, array) {
	return array.some(function (point) {
		return point.x === x
			&& point.y === y;
	});
}

function print() {
	cursor.goto(1,1);

	for (var y = 0; y < gameState.boardSize; y++) {
		for (var x = 0; x < gameState.boardSize; x++) {
			if (isIn(x, y, gameState.snake)) {
				 cursor.write('X');
			} else if (isIn(x, y, gameState.apples)) {
				cursor.write('O');
			} else {
				cursor.write(' ');
			}
		}
		cursor.write('\n');
	}
}

function drawboard() {
	cursor.goto(0,0);
	cursor.write('┌');
	for (var x = 1; x < gameState.boardSize; x++) {
		cursor.write('─');
	}
	cursor.write('┐');
	cursor.write('\n');
	for (var y = 1; y < gameState.boardSize; y++) {
		cursor.goto(0,y);
		cursor.write('│');
		for (var x = 1; x < gameState.boardSize; x++) {
			cursor.write(' ');
		}
		//cursor.goto(gameState.boardSize, y);
		cursor.write('│');
		cursor.write('\n');
	}
	cursor.write('└');
	for (var x = 1; x < gameState.boardSize; x++) {
		cursor.write('─');
	}
	cursor.write('┘');
}

drawboard();

setInterval(function () {
	tick();
	print();
}, 500);

module.exports = gameState;
