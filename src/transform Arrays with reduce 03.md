As developers sometimes when we work with arrays, we don't want to iterate or do some operation in every element inside the array, fortunately we have a method called reduce that allow us transform elements of array in something useful.

Reduce method

Reduce method iterate each array element and return a final value instead a new array like other array methods, we pass a callback function as parameter and for second parameter value we pass the initial value of the operation.

```js
array.reduce(callback, initalvalue)
```

and the callback has two parameters

```js
array.reduce((accumulator, arrayItem)=>{}, inialvalue)
```

reduce are going remember the value of the acumulator every iteration.

// there is an array with dishes of restaurant, and we want the total price instead iterate and transform each one element we can to use reduce method to get the total of prices.

```js 
const menuItems = [
  { item: "Blue Cheese Salad", price: 8 },
  { item: "Spicy Chicken Rigatoni", price: 18 },
  { item: "Ponzu Glazed Salmon", price: 23 },
  { item: "Philly Cheese Steak", price: 13 },
  { item: "Baked Italian Chicken Sub", price: 12 },
  { item: "Pan Seared Ribeye", price: 31 }

];

menuItems.reduce()
```