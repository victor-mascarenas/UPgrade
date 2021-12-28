//Conditionals
const x = '10';
if (x == 10) {//matches values, not data type
    console.log('X is 10');
}
if (x === 10) {//matches values and data type
    console.log('X is 10');
} else if (x > 10) {
    console.log('X is greater than 10');
} else {
    console.log('X is less 10');
}

const y = 10;
if (x > 5 || y > 10) {
    console.log('x is more than 5 or y is more than 10')
}

if (x > 5 && y > 10) {
    console.log('x is more than 5 and y is more than 10')
}

//Ternary operator
const val = 10;
const color = val > 10 ? 'red' : 'blue';
console.log(`Color: ${color}`);

//Switches
console.log('Switch');
switch(color) {
    case 'red':
        console.log('Color is red');
        break;
    case 'blue':
        console.log('Color is blue');
        break;
    default:
        console.log('Color is not red or blue');
        break;
}