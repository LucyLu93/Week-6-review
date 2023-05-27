const Rectangle = require('../../src/shapes/Rectangle');
const Shape = require('../../src/shapes/Shape');


let rect = null;


describe('Rectangle', () => {
    beforeEach(() => {
        rect = new Rectangle('r1', 20, 40);
    });

    test('is a child class of Shape', () => {
        expect(rect instanceof Shape).toBeTruthy();
    });

    test('getArea()', () => {
        expect( rect.getArea() ).toBe(this.width * this.height);
    });

    test('toString()', () => {
        expect( rect.toString() ).toBe('Rectangle id: r1 w: 20 h: 40');
    });
});