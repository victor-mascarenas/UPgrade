let x = {value: 10};
let y = x;

x.value = 20;

//console.log(x);
//console.log(y);

/* let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number); */

let obj = {val: 10};

function increase(obj){
    obj.val++;
}

increase(obj);
console.log(obj);