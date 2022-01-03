//Function which can combine numbers or strings
function combine (input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text'/*Only accepts this 2 values*/) {
    let result: number | string;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
    //if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-nuber') {//Error, 'as-nuber' not allowed
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    //const result = input1 + input2;
    /* if (resultConversion === 'as-number') {
        result = +result;
    } else {
        result = result.toString();
    } */
    return result;
}

const combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);

const combinedAgesS = combine('30', '26', 'as-number');
console.log(combinedAgesS);

const combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);