const { drawboard, print } = require('./display');
const { tick } = require('./gameplay');
require('./input');

drawboard(' ');

function gameLoop() {
	setTimeout(gameLoop, 300);
	tick();
	print();
}

gameLoop();

