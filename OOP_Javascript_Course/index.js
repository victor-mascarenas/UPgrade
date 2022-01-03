//Factories
function createCircle(radius) {
    return {
        radius,
        draw: () => {
            console.log('draw');
        }
    };
}

createCircle(3).draw();