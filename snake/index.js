const { drawboard, print } = require('./display');
const { tick } = require('./gameplay');
require('./input');

drawboard(' ');

setInterval(function () {
	tick();
	print();
}, 300);

