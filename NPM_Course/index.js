const _ = require('lodash');

const numbers = [33, 46, 76, 44, 32, 3];

_.each(numbers, (number, i) => {
    console.log(number);
});