// const process = require('process');
// require('keypress')(process.stdin);

// const ansi = require('ansi');
// const cursor = ansi(process.stdout);

// const { up, down, left, right } = require('./constants');
// const gameState = require('./gamestate');

// process.stdin.setRawMode(true);
// process.stdin.on('keypress', function (chunk, event) {
// 	switch (event.name){
// 		case 'q':
// 		case 'escape':
// 			cursor.show();
// 			process.exit();
// 			break;

// 		case up:
// 		case down:
// 		case left:
// 		case right:
// 			gameState.direction = event.name;
// 			break;
// 	}
// });

// setInterval(function() {}, 10000);
