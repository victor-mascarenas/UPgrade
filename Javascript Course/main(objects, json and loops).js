//Object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}
console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const {firstName, lastName, address:{city}} = person;//Extractiong values
console.log(firstName, lastName, city);

person.email = 'john@gmail.com';
console.log(person.email);

//Arrays
const todos = [
    {
        id: 1,
        text: 'take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'dentist appointment',
        isCompleted: false
    }
];
console.log(todos);
console.log(`Second object text: ${todos[1].text}`);

//JSON
const todoJSON = JSON.stringify(todos);
console.log(`JSON: ${todoJSON}`);

//Loops
for(let i = 0; i < 10; i++) {//for
    console.log(i + 1);
}

let i = 0;
while (i < 10) {//while
    console.log(i + 1);
    i ++;
}

console.log('Normal for');
for(let i = 0; i < todos.length; i++) {
    console.log(`Todo text: ${todos[i].text}`);
}
console.log('for Of');
for(let todo of todos) {
    console.log(`Todo text: ${todo.text}`);
}

//Functional array loops
console.log('ForEach');
todos.forEach((todo) => {//forEach
    console.log(`Todo text: ${todo.text}`);
});

console.log('Map');
const todoText = todos.map((todo) => {//Map, returns array
    return todo.text;
});
console.log(todoText);

console.log('Filter');
const todoCompleted = todos.filter((todo) => {//Filters array
    return todo.isCompleted;
});
console.log(todoCompleted);

console.log('Filter and map');
const todoCompletedText = todos.filter((todo) => {//Filters array and maps to text
    return todo.isCompleted;
}).map((todo) => {
    return todo.text;
});
console.log(todoCompletedText);