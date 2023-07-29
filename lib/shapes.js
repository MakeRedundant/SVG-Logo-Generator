//https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Basic_Shapes

// Shape class
class shape{
    constructor(){  //the constructor intializes the colour and then sets the colour values
        this.colour=''
    }
    setColour(colour){
        this.colour=(colour);
    }
}

// defines the traingle (polygon) class then it extends/inherits the shape class and renders the SVG Triangle.
class Triangle extends shape{
    render(){
        // Returns polygon/Triangle with colour input
        return`<polygon points="0,200 300,200 150,0" fill="${this.colour}"></polygon>`
    }
};

// defines the circle class it extends/inherits  Shape and  renders the SVG Circle.
class Circle extends shape{
    render(){
        return `<circle cx="150" cy="115" r="80" fill="${this.colour}"></circle>`;

    }
}

// defines the square class then it extends/inherits the shape class and renders the SVG Square.
class Square extends shape {
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.colour}"></rect>`;
    }
  }
  
// Exports classes (Triangle, Circle,Square)
module.exports = {Triangle, Circle, Square,}
