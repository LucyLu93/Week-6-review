const Shape = require('./Shape'); //added this in


class Group extends Shape { //added extends
    constructor(id, width, height, radius) {
        super(id, width, height, radius * 2);
        this.shapes = [];
    }

    addShape(shape) {
        this.shapes.push(shape);
    }

    getArea() {
        // Compute the sum of all the areas of the shapes in the group
       let area = 0;
       for(let shape of this.shapes) { //can you explain what shape in this means
        area += shape.getArea();
       }
       return area;
    }
}

module.exports = Group;