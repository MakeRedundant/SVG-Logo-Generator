// Importing Triangle, Circle, Square, classes from ./shapes.js

const { Triangle, Circle, Square } = require("./shapes");

// Triangle Testing 
 // -> testing for Triangle with a green background
describe("Triangle test", () => {
    test("Test for triangle with a green background", () => {
      const shape = new Triangle();
      shape.setColour("green");
      expect(shape.render()).toEqual(
        '<polygon points="0,200 300,200 150,0" fill="green"></polygon>'
      );
    });
  });
  
// Circle Testing 
 //-> testing for a Circle with a blue background
    describe("Circle test", () => {
        test("Test for a circle with a blue background", () => {
          const shape = new Circle();
          shape.setColour("blue");
          expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="blue"></circle>'
          );
        });
      });

// Square Testing 
 //-> testing for a Square with a yellow background
  describe("Square test", () => { // using the describe function to group together related test cases for Squares 
    test("Test for a square with a yellow background", () => {
      const shape = new Square(); //create an new Square class to test its behavior
      shape.setColour("yellow");
      expect(shape.render()).toEqual( //expect function to check the result of the shape.render matches the expected value
        '<rect x="50" y="50" width="200" height="200" fill="yellow"></rect>' //this is the expected code
      );
    });
  });
  
// Jest steps
 // describe function creates a test suite like Circle shape
 // test function defines a specific test scenario within the "Circle test" suite. 
 // Create a new Circle and set the colour and use the expect function to define
  //the expectation or result we are testing.