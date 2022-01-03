function add(n1, n2, printResult, resultPhrase) {
    /* if (typeof n1 !== 'number' || typeof n2 !== 'number') {
        throw new Error('Incorrect input');
    } */
    var result = n1 + n2;
    if (printResult) {
        console.log("".concat(resultPhrase, " ").concat(result));
    }
    else {
        return n1 + n2;
    }
}
var number1 = 5;
//const number1 = '5';
var number2 = 2.8;
var printResult = true;
var resultPhrase = 'Result is: ';
//const result = add(number1, number2, printResult);
add(number1, number2, printResult, resultPhrase);
//console.log(result);
