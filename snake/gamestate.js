const { down } = require('./constants');

const gameState = {
	boardSize: 21,

	snake: [
		{ x: 10, y: 13 },
		{ x: 10, y: 12 },
		{ x: 10, y: 11 },
		{ x: 10, y: 10 }
	],

	direction: down,

	dead: false,

	apples: [
		{ x: 5, y: 5 }
	]
};

module.exports = gameState;
