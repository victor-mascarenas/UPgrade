function foo() {

}
function bar() {
    
}
console.log(foo.prototype);
console.log(bar.prototype);

var newFooObj = new foo();
console.log(newFooObj.__proto__);

foo.prototype.test = 'Proto obj for foo';

console.log(foo.prototype.test);

console.log(newFooObj.__proto__.test);
console.log(`Is prototype function object = __proto__ object object? ${foo.prototype === newFooObj.__proto__}`);

newFooObj.__proto__.hello = 'Hello World!';
console.log(newFooObj.hello);
console.log(newFooObj.test);

function Employee(name) {
    this.name = name;
}
Employee.prototype.playPranks = function() {
    console.log('Prank played!');
};

var emp1 = new Employee('Anna');
var emp2 = new Employee('Diego');

emp1.playPranks();
emp2.playPranks();