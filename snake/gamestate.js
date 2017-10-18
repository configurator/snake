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

	turnCounter: 0,

	apples: []
};

module.exports = gameState;
