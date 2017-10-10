function isIn(x, y, array) {
	return array.some(function (point) {
		return point.x === x
			&& point.y === y;
	});
}

module.exports = {
	isIn
};
