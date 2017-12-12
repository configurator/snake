const { drawboard, print } = require('./display');
const gameState = require('./gamestate');
const { tick } = require('./gameplay');
require('./input');

drawboard(' ');

var interval = setInterval(gameLoop, gameState.turnLengthMs);

function gameLoop() {
	var newTurnLengthMs = tick();
	if (newTurnLengthMs) {
		clearInterval(interval);
		interval = setInterval(gameLoop, newTurnLengthMs);
	}
	print();
}
