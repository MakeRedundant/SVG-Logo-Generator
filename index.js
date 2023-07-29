// Require Modules

const fs = require("fs");
const inquirer = require("inquirer");
const jest = require("jest");

const { Triangle, Circle, Square } = require("./lib/shapes");

//Inquirer function
// Prompts the user with questions to render the SVG logo
const promptSVG = () => {
  return inquirer
    .prompt([
      // Text prompt
      {
        type: "input",
        message:
          "What text would you like your logo to display? (Enter up to three characters)",
        name: "text",
        validate: (nameInput) =>
          nameInput.length <= 3 ? true : "Please enter up to three characters", //Uses a conditional (ternary) operator to determine validation
      },
      // Text colour prompt
      {
        type: "input",
        message: "Choose text color (Enter a color or a hexadecimal#)",
        name: "textColor",
        validate: (nameInput) =>
          nameInput ? true : "Please enter a color for the text",
      },
      // Shapes choice prompt
      {
        type: "list",
        message: "What shape would you like your logo to be?",
        choices: ["Triangle", "Circle", "Square"],
        name: "shape",
        validate: (nameInput) =>
          nameInput ? true : "Please select a shape for the logo",
      },
      // Shape colour prompt
      {
        type: "input",
        message: "Choose shape color (Enter a color or a hexadecimal#)",
        name: "shapeColour",
        validate: (nameInput) =>
          nameInput ? true : "Please enter a color for the shape",
      },
    ])
    .then((answers) => {
      // Calling write to file function to generate SVG file
      generateSVG("logo.svg", answers);
    });
};

const generateSVG = (fileName, answers) => {
  let svgFiles = "";
  svgFiles =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
  svgFiles += "<g>";
  svgFiles += `${answers.shape}`;

  //For the Answer.Shape choice + colour choice 

  let shapeChoice;
  if (answers.shape === "Triangle") {
    shapeChoice = new Triangle();
    svgFiles +='<polygon points= "0,200 300,200 150,0" fill="${answers.shapeColour}"/>';
  } else if (answers.shape === "Square") {
    shapeChoice = new Square();
    svgString += `<rect x="50" y="50" fill="${answers.shapeColour}"/>`;
  } else {
    shapeChoice = new Circle();
    svgString += `<circle cx="50" cy="50" r="100" fill="${answers.shapeColour}"/>`;
  }

  //For the Answer.text
  svgFiles += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
  // Closing </g> tag
  svgFiles += "</g>";
  // Closing </svg> tag
  svgFiles += "</svg>";

  // Using FS to generate SVG,
  fs.writeFile(fileName, svgFiles, (err) => {
    err ? console.log(err) : console.log("Generated logo.svg");
  });
};

//Initilise promptSVG function for user questions
promptSVG();

//  GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
