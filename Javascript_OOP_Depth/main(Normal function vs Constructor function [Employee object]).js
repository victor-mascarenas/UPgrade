var emp1 = {};
emp1.fName = 'Michael';
emp1.lName = 'Scott';
emp1.gender = 'M';
emp1.designation = 'Regional Manager';

var emp2 = {};
emp2.fName = 'Dwight';
emp2.lName = 'Schrute';
emp2.gender = 'M';
emp2.designation = 'Regional Manager Assistant';

//Object creation as normal function
/* function createEmployeeObject(fName, lName, gender, designation) {
    var newObject = {};
    newObject.fName = fName;
    newObject.lName = lName;
    newObject.gender = gender;
    newObject.designation = designation;
    return newObject;
} */

//Object creation as constructor function
function createEmployeeObject(fName, lName, gender, designation) {
    this.fName = fName;
    this.lName = lName;
    this.gender = gender;
    this.designation = designation;
}

//Object assignation with function
//var emp3 = createEmployeeObject('Jim', 'Halpert', 'M', 'Sales Representative');

//Object assignation with constructor function
var emp3 = new createEmployeeObject('Jim', 'Halpert', 'M', 'Sales Representative');

console.log(emp1);
console.log(emp2);
console.log(emp3);