//Creating object in-line
//var myObj = {};

//Object syntax
var myObj = {
    "foo": 'value',
    age: 30,
    address: {
        stret: '123 JS',
        city: 'JS',
        pincode: '12345'
    }
}

console.log(myObj);
myObj.foo = 'value';
console.log(myObj.foo);
myObj.foo = 12;
console.log(myObj.foo);
console.log(myObj['foo']);
console.log(myObj.address.city);