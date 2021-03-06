const { down } = require('./constants');

const gameState = {
	boardSize: 21,

	snake: [
		{ x: 10, y: 10 },
		{ x: 10, y: 10 },
		{ x: 10, y: 10 },
		{ x: 10, y: 10 },
		{ x: 10, y: 10 },
		{ x: 10, y: 10 },
		{ x: 10, y: 10 }
	],

	direction: down,

	dead: false,

	deadPrinted: false,

	turnCounter: 0,

	applesEaten: 0,

	turnLengthMs: 300,

	apples: []
};

module.exports = gameState;
