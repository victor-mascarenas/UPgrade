//Factories
function createCircle(radius) {
    return {
        radius,
        draw: () => {
            console.log('draw');
        }
    };
}

//const circle = createCircle(3);

//Constructor function

function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('draw');
    }
}

console.log(Circle.name);
console.log(Circle.lenght);
console.log(Circle.constructor);

const Circle1 = new Function('radius', `this.radius = radius;
this.draw = () => {
    console.log('draw');
}`);

const circle = new Circle1(1);

console.log(circle);

const circle2 = new Circle(1);