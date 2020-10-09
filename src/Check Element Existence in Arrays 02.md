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
