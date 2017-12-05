const { up, down, left, right } = require('./constants');
const gameState = require('./gamestate');

document.body.addEventListener('keydown', function(event){
	switch (event.key) {
		case 'ArrowUp':
			gameState.direction = up;
			break;
		case 'ArrowRight':
			gameState.direction = right;
			break;
		case 'ArrowDown':
			gameState.direction = down;
			break;
		case 'ArrowLeft':
			gameState.direction = left;
			break;
	}
});
