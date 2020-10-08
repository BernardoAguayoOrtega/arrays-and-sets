'use strict';

const todos = [];

const todo1 = {
	text: 'wash the dishes',
	complete: false,
};

const todo2 = {
	text: 'Do laundry',
	complete: false,
};

todos[1] = todo1;
todos[2] = todo2;

console.log(todos);

const todosB = [];

todosB.push(todo1);
todosB.push(todo2);

console.log(todosB);

todosB.pop();
console.log(todosB);
