const ansi = require('ansi');
const cursor = ansi(process.stdout);

const gameState = require('./gamestate');
const { isIn } = require('./util');

function print() {
	cursor.hide();

	if (gameState.dead){
		if(!gameState.deadPrinted) {
			drawDead();
			gameState.deadPrinted = true;
		}
		return;
	}

	cursor.goto(2,2);

	for (var y = 0; y < gameState.boardSize; y++) {
		for (var x = 0; x < gameState.boardSize; x++) {
			cursor.goto( x+2, y+2)
			if (isIn(x, y, gameState.snake)) {
				 cursor.write('█');
			} else if (isIn(x, y, gameState.apples)) {
				cursor.write('🍔');
			} else {
				cursor.write(' ');
			}
		}
		cursor.write('\n');
	}
}

function drawboard(space) {
	cursor.goto(1,1);
	cursor.eraseData();

	cursor.write('┌');
	for (var x = 0; x < gameState.boardSize; x++) {
		cursor.write('─');
	}
	cursor.write('┐');
	cursor.write('\n');
	for (var y = 0; y < gameState.boardSize; y++) {
		cursor.goto(1, y + 2);
		cursor.write('│');
		for (var x = 0; x < gameState.boardSize; x++) {
			cursor.write(space);
		}
		//cursor.goto(gameState.boardSize, y);
		cursor.write('│');
		cursor.write('\n');
	}
	cursor.write('└');
	for (var x = 0; x < gameState.boardSize; x++) {
		cursor.write('─');
	}
	cursor.write('┘');
	cursor.write('\n');
}

function drawDead() {
	drawboard('☠');
}

module.exports = {
	print, drawboard
};
