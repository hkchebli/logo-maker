//circle class
class Circle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<circle cx="150" cy="100" r="50" fill="${this.color}" />`;
  }
}
//triangle class

class Triangle {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<polygon points="150,20 225,150 75,150" fill="${this.color}" />`;
  }
}
//square class

class Square {
  constructor(color) {
    this.color = color;
  }

  render() {
    return `<rect x="75" y="50" width="150" height="100" fill="${this.color}" />`;
  }
}
//shapes class
class Shapes {
  //utility funstion that returns svg file 
  static createLogo(text, textColor, shape, shapeColor) {
    const shapeObj = Shapes.createShape(shape, shapeColor);
    const shapeSvg = shapeObj.render();
    const textSvg = Shapes.createText(text, textColor);

    return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
        ${shapeSvg}
        ${textSvg}
      </svg>`;
  }
//utility function that returns returns created constructor
  static createShape(shape, color) {
    switch (shape) {
      case 'circle':
        return new Circle(color);
      case 'triangle':
        return new Triangle(color);
      case 'square':
        return new Square(color);
      default:
        throw new Error('Invalid shape');
    }
  }
//utility function that returns text for description of created logo
  static createText(text, color) {
    return `<text x="150" y="125" font-size="50" fill="${color}" text-anchor="middle">${text}</text>`;
  }
}

module.exports = Shapes;
