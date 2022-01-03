function Circle(radius) {
    this.radius = radius;
    this.draw = () => {
        console.log('draw');
    }
}

const circle = new Circle(10);

circle.location = {x: 1};
circle['location'] = {x: 1};

const propertyname = 'location';
circle[propertyname] = 3;

console.log(circle);

delete circle.location;
delete circle['location'];