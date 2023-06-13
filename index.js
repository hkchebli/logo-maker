const inquirer = require('inquirer');
const fs = require('fs');
const Shapes = require('./lib/shapes');

async function promptForLogoDetails() {
  //prompt user to answer questions to gather input for logo using inquirer
  const answers = await inquirer.prompt([
    {
      name: 'text',
      message: 'Enter text (up to three characters):',
      validate: (input) => input.length <= 3,
    },
    {
      name: 'textColor',
      message: 'Enter text color (keyword or hexadecimal):',
    },
    {
      name: 'shape',
      type: 'list',
      message: 'Choose a shape:',
      choices: ['circle', 'triangle', 'square'],
    },
    {
      name: 'shapeColor',
      message: 'Enter shape color (keyword or hexadecimal):',
    },
  ]);

  const logo = Shapes.createLogo(
    answers.text,
    answers.textColor,
    answers.shape,
    answers.shapeColor
  );

  fs.writeFileSync('logo.svg', logo);
  console.log('Generated logo.svg');
}

promptForLogoDetails();
