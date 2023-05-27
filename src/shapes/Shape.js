class Shape {

    /***
     * The 'id' is a string that uniquely identifies a shape.
     * The 'width' and 'height' are the smallest dimensions that contain the entire shape.
     */

    constructor(id, width, height) {
        this.id = id;
        this.width = width;
        this.height = height;
    }

    toString() {
        return `Shape id: ${this.id} w: ${this.width} h: ${this.height}`;
    }
}

module.exports = Shape;