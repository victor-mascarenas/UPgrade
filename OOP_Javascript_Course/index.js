function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('draw');
    }
}

const circle = new Circle(10);

//Looping
for (let key in circle) {
    if (typeof circle[key] !== 'function') {
        console.log(key, circle[key]);
    }
}

//Getting keys
const keys = Object.keys(circle);
console.log(keys);

//Checking existence
if ('radius' in circle) {
    console.log('Circle has a radius');
}