const Circle = require('../../src/shapes/Circle');
const Shape = require('../../src/shapes/Shape');


let circle = null;


describe('Circle', () => {
    beforeEach(() => {
        circle = new Circle('c1', 10);
    });

    test('is a child class of Shape', () => {
        expect(circle instanceof Shape).toBeTruthy();
    });

    test('getArea()', () => {
        expect( circle.getArea() ).toBe(314);
    });

    test('toString()', () => {
        expect( circle.toString() ).toBe('Circle id: c1 w: 20 h: 40');
    });
});