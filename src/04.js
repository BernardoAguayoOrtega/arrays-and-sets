const numbers = [1, 2, 3, 4, 5, 6];

// reduce the numbers
const doubleNumbers = numbers.reduce((acc, num) => {
	acc.push(num * 2);
	return acc;
}, []);

// numbers greater than 3
const graterThenTree = numbers.reduce((acc, num) => {
	num > 3 && acc.push(num * 2);
	return acc;
}, []);

console.log(numbers);

console.log(doubleNumbers);

console.log(graterThenTree);
