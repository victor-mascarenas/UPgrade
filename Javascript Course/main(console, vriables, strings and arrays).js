//Console log, error and warning
console.log('Hello');
console.error('This is an error (ignore)');
console.warn('This is a warning (ignore)');

//Variables and types
const name = 'John';
const age = 30;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z; //undefined

console.log('Tipo:');
console.log(typeof rating);

//Strings and concatenation
console.log(`My name is ${name} and I am ${age}`);

const s = 'technology,computers,it,code';
console.log(s.length);
console.log(s.toLowerCase());
console.log(s.toUpperCase());
console.log(s.substring(0, 5));
console.log(s.substring(0, 5).toUpperCase());
console.log(s.split(','));//array
console.log(s.split(''));//array

//Arrays
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
const fruits = ['apple', 'orange', 'pears', 10, true];
console.log(fruits);
console.log(fruits[1]);
fruits[3] = 'grapes';
console.log(fruits);
fruits.push('banana');//Add at last
console.log(fruits);
fruits.unshift('mango');//Add at first
console.log(fruits);
fruits.pop();//Remove last
console.log(fruits);

console.log(Array.isArray(fruits));
console.log(Array.isArray('hello'));

console.log(`Index: ${fruits.indexOf('orange')}`);