var fruit = 'orange';
var success = 'The fruit name has more than five characters.';
var fail = 'The fruit name has less or equal than five characters.';
fruit.length > 5
	? console.log(success)
	: console.log(fail);