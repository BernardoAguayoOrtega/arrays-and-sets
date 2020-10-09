# Check Element Existence in Arrays

If you work with a hard code values is easy to work with them because you know where are the values inside the array.

example

```js
// you have an array with names
const names = ['name1','name2','name3',...]

// you can access for example name2 because you know the position
console.log(names.indexOf('name2')) // return 1

// but what happen with an item that doesn't exist?
console.log(names.indexOf('name4')) // return -1 that means that the element doesn't exist

// so you can do something like that to check is an item exist
console.log(names.indexOf('name3') === -1 && true); //return true
```

fortunately for us there is other much easiest way to do this "includes method"

```js
// you have an array with names
const names = ['name1','name2','name3',...]

// use includes method
console.log(names.includes('name4')) // return false
```

** but what happen with more complex data? (objects) **
for the more complex data you cannot use includes and those cases you can use 'some' method.

### some method

The some method takes a callback function with its own parameters and iterate over each element of the array.

example

```js
// array of objects
const persons = [
	{ name: 'random1', age: 5 },
	{ name: 'random2', age: 4 },
	{ name: 'random3', age: 56 },
	{ name: 'random4', age: 11 },
	{ name: 'random5', age: 90 },
];

// use some method
persons.some((element) => element.age === 90); // return true or false
```

with some method at least one element need to match with the condition, once have a match the iteration stop and returns true or false
