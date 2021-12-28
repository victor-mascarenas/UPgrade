//OOP
/* function Person(fName, lName, dob) {//Constructor function, start with capital
    this.fName = fName;
    this.lName = lName;
    this.dob = new Date(dob); */

    /* this.getBirthYear = () => {
        return this.dob.getFullYear();
    } */
    /* this.getFullName = function() {
        return `${this.fName} ${this.lName}`
    }
} */
//Prototypes
/* Person.prototype.getBirthYear = function() {//Function is not in each object
    return this.dob.getFullYear();
} */
//Class
class Person {
    constructor(fName, lName, dob) {
        this.fName = fName;
        this.lName = lName;
        this.dob = new Date(dob);
    }

    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullName() {
        return `${this.fName} ${this.lName}`
    }
}
const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('Marie', 'Smith', '4-3-1980');
const person3 = new Person('Juan', 'Lopez', '4-3-1980');
console.log(person1);
console.log(person2.fName);
console.log(person3.lName);

//Date
console.log(`Full Year: ${person1.dob.getFullYear()}`);
console.log(`Birth Year: ${person1.getBirthYear()}`);
//

console.log(`Full name: ${person1.getFullName()}`);