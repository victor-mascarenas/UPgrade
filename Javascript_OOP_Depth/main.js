function Employee(name) {
    this.name = name;
}
Employee.prototype.getName = function() {
    return this.name;
}

emp1 = new Employee('Juan');
console.log(emp1.getName());

function Manager(name, department) {
    this.name = name;
    this.department = department;
}
Manager.prototype.getDepartment = function () {
    return this.department;
}

man1 = new Manager('Pedro', 'Sales');
console.log(man1.getDepartment());

//Inheritance
man1.__proto__.__proto__ = Employee.prototype;

console.log(man1.getName());