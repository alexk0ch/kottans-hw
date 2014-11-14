var numbers = [];

for (var i = 1, max = 11; i<max; i++) {
	numbers.push(i);
}

var filtered = numbers.filter(function getEven(number) {
	return number % 2 === 0;
})

console.log(filtered);