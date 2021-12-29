/* var bicycle = {
    cadence: 50,
    speed: 20,
    gear: 4
}; */
var bicycle = createBicycle(50, 20, 4);
var bicycle2 = createBicycle(20, 5, 1);

function createBicycle(cadence, speed, gear) {
    var newBicycle = {};
    newBicycle.cadence = cadence;
    newBicycle.speed = speed;
    newBicycle.gear = gear;
    return newBicycle;
}

//Simple constructor function
/* function bicycleConstructor(cadence, speed, gear) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
} */

//Constructor function with upper camel case
function Bicycle(cadence, speed, gear, tirePreassure) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
    this.tirePreassure = tirePreassure;

    /* this.inflateTires = function (value) {
        this.tirePreassure += value;
    } */
}

//var bicycle3 = new bicycleConstructor(20, 5, 1);

var bicycle3 = new Bicycle(20, 5, 1, 25);
//bicycle3.inflateTires(3);
//console.log(bicycle3);

function Mechanic(name) {
    this.name = name;

    this.inflateTires = function (bicycle, value) {
        bicycle.tirePreassure += value;
    }
}

var mike = new Mechanic('Mike');

//mike.inflateTires = bicycle3.inflateTires;
//mike.inflateTires(3);//Mike doesnt have tirePreassure property
//mike.inflateTires.call(bicycle3);//Binding bicycle3 to inflateTires in Mike

mike.inflateTires(bicycle3, 3);
console.log(bicycle3);