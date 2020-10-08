# Build Flexible Collections with Arrays 01

There are a data structure to save collection of data call it array use [] brackets instead {}, Arrays are a kind of special type of objects, ant that means instead of provider a key arrays do it itself.

A array start with the value 0 in the keys.

```js
const array = [];

//first position
array[0] = { random1 };

//second positon
array[1] = { random2 };

//return
[{ random1 }, { random2 }];
```

doesn't matter how to save the values, the order always is going to be the same.

```js
const array = [];

//first position
array[1] = { random2 };

//second positon
array[0] = { random1 };

//return
[{ random1 }, { random2 }];
```

Also you can add with a array method an item without doing it manually like the example above.

```js
const array = [];

//add with push method
array.push({ random1 });

array.push({ random2 });

// or

array.push(({ random1 },{ random2 })

//return
[{ random1 }, { random2 }];
```

And if you want to delete an the last element you can use pop array method:

```js
const array = [];

//add with push method
array.push(({ random1 },{ random2 })

//return
[{ random1 }, { random2 }];

array.pop()
//return
[{ random1 }];
```
