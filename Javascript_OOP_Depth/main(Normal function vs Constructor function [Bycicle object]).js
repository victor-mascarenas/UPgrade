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
function Bicycle(cadence, speed, gear) {
    this.cadence = cadence;
    this.speed = speed;
    this.gear = gear;
}

//var bicycle3 = new bicycleConstructor(20, 5, 1);

var bicycle3 = new Bicycle(20, 5, 1);