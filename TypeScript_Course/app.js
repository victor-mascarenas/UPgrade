//Function which can combine numbers or strings
function combine(input1, input2, resultConversion /*Only accepts this 2 values*/) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        //if (typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-nuber') {//Error, 'as-nuber' not allowed
        result = +input1 + +input2;
    }
    else {
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
var combinedAges = combine(30, 26, 'as-number');
console.log(combinedAges);
var combinedAgesS = combine('30', '26', 'as-number');
console.log(combinedAgesS);
var combinedNames = combine('Max', 'Anna', 'as-text');
console.log(combinedNames);
