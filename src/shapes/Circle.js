const Shape = require('./Shape');


const PI = 3.14;


class Circle extends Shape {
    constructor(id, radius) {
        super(id, radius * 2, radius * 2);
        this.radius = radius;
    }

    getArea() {
        // The area of a circle is PI times the radius squared,
        // or in JavaScript: PI * (radius ** 2)
        // FIX ME
    }

    toString() {
        return `Circle id: ${this.id} r: ${this.radius}`;
    }
}

module.exports = Circle;