const { drawboard, print } = require('./display');
const gameState = require('./gamestate');
const { tick } = require('./gameplay');
require('./input');

drawboard(' ');

function gameLoop() {
	setTimeout(gameLoop, gameState.miliSeconds);
	tick();
	print();
}

gameLoop();

