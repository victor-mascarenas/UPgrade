function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {
        x: 0,
        y: 0
    };

    let computeOptimumLocaation = (factor) => {
        //...
    };

    this.draw = () => {
        computeOptimumLocaation(0.1);

        console.log('draw');
    };
}

const circle = new Circle(10);
circle.draw();