const Shape = require('./Shape');


class Rectangle extends Shape { //added extends
    constructor(id, width, height) {
        super(id, width, height); 
    }

    getArea() {
        return this.width * this.height;
    }

    toString() {
        return `Rectangle id: ${this.id} w: ${this.width} h: ${this.height}`;
    }
}

module.exports = Rectangle;