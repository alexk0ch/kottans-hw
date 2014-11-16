function repeat (operation, num) {
	// for (var i; i<num; i++) {
	// 	operation();
	// }

	// while (num--) {
	// 	operation();
	// }

	if (num<=0) return
	operation();
	return repeat(operation, --num);
}

module.exports = repeat;