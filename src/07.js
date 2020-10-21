const finalMenuItems = [
	'American Cheeseburger',
	'Southern Fried Chicken',
	'Glazed Salmon',
];

const [first, second] = finalMenuItems;

const [second_, first_] = [first, second];
// let first = finalMenuItems[0];
// let second = finalMenuItems[1];
// let third = finalMenuItems[2];

// console.log(first, second, third);
console.log({ first_ }, { second_ });

//We can use array destructuring to 
//take values out of an array and store them into variables:

let [first, second] = someArray

//We can also use destructuring to 
//swap the values between two variables:

const [second, first] = [first, second];

//Array destructuring is very similar to object
//destructuring, in this case you destructuring by 
//order of array instead object destructuring by name.

//example:
const array = [1,2,3]
const [second, first] = array;

// returns second = 1, first = 2
//So doesn't matter the name, matters the position