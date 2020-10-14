const numbers = [1, 2, 3, 4, 5, 6];

// reduce the numbers
const numbersX2 = numbers.reduce((acc, num) => {
	acc.push(num * 2);
	return acc;
}, []);

console.log(numbers)

console.log(numbersX2);
