const { drawboard, print } = require('./display');
const { tick } = require('./gameplay');

drawboard(' ');

setInterval(function () {
	tick();
	print();
}, 500);

