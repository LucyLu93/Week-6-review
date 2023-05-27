
class Group {
    constructor() {
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