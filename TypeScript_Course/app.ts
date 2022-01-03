function add(n1: number, n2: number): number {
//function add(n1: number, n2: number): string {//Error
    return n1 + n2;
}

function printResult(num: number) {//Void return type (:void)
//function printResult(num: number): undefined {//not valid
    console.log(`Result: ${num}`);
}

//With callback function
function addAndHandle(n1:number, n2:number, cb:(num:number) => void) {
    const result = n1 + n2;
    cb(result);
}

printResult(add(5, 12));

//let combineValues: Function;
let combineValues: (a:number, b:number) => number;//Accepts any function which has 2 parameters (numbers) and returns a number

combineValues = add;//Assigning function to variable
//combineValues = printResult(5);//Error

console.log(combineValues(8, 8));//Using variable with 'add' type

//let someValue: undefined;

addAndHandle(10, 20, (result) => {
    console.log(result);
});
/* addAndHandle(10, 20, (result, b) => {//Error, expecting only one parameter
    console.log(result);
}); */