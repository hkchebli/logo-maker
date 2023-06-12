const Circle = require('./shapes').Circle;
const Triangle = require('./shapes').Triangle;
const Square = require('./shapes').Square;

describe('Circle', () => {
  test('render returns the SVG string for a circle', () => {
    const circle = new Circle('red');
    expect(circle.render()).toContain('<circle cx="150" cy="100" r="50" fill="red" />');
  });
});

describe('Triangle', () => {
  test('render returns the SVG string for a triangle', () => {
    const triangle = new Triangle('blue');
    expect(triangle.render()).toContain('<polygon points="150,20 225,150 75,150" fill="blue" />');
  });
});

describe('Square', () => {
  test('render returns the SVG string for a square', () => {
    const square = new Square('green');
    expect(square.render()).toContain('<rect x="75" y="50" width="150" height="100" fill="green" />');
  });
});
