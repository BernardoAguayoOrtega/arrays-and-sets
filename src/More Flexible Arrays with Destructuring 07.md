###### tags: `JavaScript` `learning notes`

# More Flexible arrays with destructuring arrays(7) 
We can use array destructuring to take values out of an array and store them into variables:

```js=
let [first, second] = someArray
```
We can also use destructuring to swap the values bewtwen two vairbales:

```js=
const [second, first] = [first, second];
```

Array destructuring is very similar to object destructuring, in this case you destructuring by order of array instead object destructuring by name.

example:
```js=
const array = [1,2,3]
const [second, first] = array;

// returns second = 1, first = 2
```
So doesn't matter the name, matters the position.