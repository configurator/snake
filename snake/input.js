const { up, down, left, right } = require('./constants');
const gameState = require('./gamestate');

const process = require('process');
require('keypress')(process.stdin);

process.stdin.setRawMode(true);
process.stdin.on('keypress', function (chunk, event) {
	if (event.name === 'q') {
		process.exit();
	}
	switch (event.name){
		case 'escape':
			process.exit();
			break;

		case up:
		case down:
		case left:
		case right:
			gameState.direction = event.name;
			break;
	}
});

setInterval(function() {}, 10000);
