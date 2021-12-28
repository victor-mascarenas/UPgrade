//Functions
function addNums(n1 = 1, n2 = 1){
    console.log(n1 + n2);
}
function addNumsWithReturn(n1 = 1, n2 = 1){
    return n1 + n2;
}
addNums(5,4);
addNums();//Default values
console.log(addNumsWithReturn(2, 6));

//Arrow functions
const addNumsArrow = (n1 = 1, n2 =1) => {
    let result = n1 + n2;
    return result;
}
const addNumsArrowNoReturn = (n1 = 1, n2 =1) => n1 + n2;//No return
console.log(addNumsArrow(56, 34));
console.log(addNumsArrowNoReturn(56, 34));