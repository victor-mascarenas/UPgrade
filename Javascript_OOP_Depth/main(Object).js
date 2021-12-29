console.log(Object);

function foo () {

}

//2 layers
console.log(`Is Object.prototype =  foo.__proto__.__proto__? ${foo.__proto__.__proto__ === Object.prototype}`);