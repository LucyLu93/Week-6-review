const Shape = require('./Shape');


const PI = 3.14;


class Circle extends Shape { //added extends 
    constructor(id, radius) {
        super(id, radius * 2, radius * 2);
        this.radius = radius;
    }

    getArea() {
        // The area of a circle is PI times the radius squared,
        // or in JavaScript: PI * (radius ** 2)
       return PI * (this.radius ** 2);
    }

    toString() {
        return `Circle id: ${this.id} r: ${this.radius}`;
    }
}

module.exports = Circle;