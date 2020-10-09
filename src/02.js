const temperatures = [69, 82, 73, 64];

const result = (arrayElement) => temperatures.indexOf(arrayElement);

console.log(result(82) === -1 && true);

console.log('brake');

const names = ['name1', 'name2', 'name3', 'name4'];

console.log('break');

const temperatures2 = [
	{ degrees: 69, isRecordTemp: false },
	{ degrees: 82, isRecordTemp: true },
	{ degrees: 73, isRecordTemp: false },
	{ degrees: 64, isRecordTemp: false },
];

const result2 = temperatures2.some(
	(temperature) => temperature.isRecordTemp === false,
); // true / false
console.log(result2);
