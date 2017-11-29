const path = require('path');

module.exports = {
	entry: './snake/src/scripts/index.js',
	output: {
		path: path.join(__dirname, 'snake/dist'),
		filename: 'snake.js',
	},
};
