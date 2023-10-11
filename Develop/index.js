const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the name of your projecct?',
      name: 'project_name',
    },
    {
        type: 'input',
        message: 'Please describe your project:',
        name: 'project_des',
    },
    {
        type: 'input',
        message: 'Please describe your the installation instructions:',
        name: 'project_ins',
    },
    {
        type: 'input',
        message: 'Please describe your usage information:',
        name: 'project_usa',
    },
    {
        type: 'input',
        message: 'Please describe your contribution guidelines:',
        name: 'project_gui',
    },
    {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'project_test',
    },
    {
        type: 'list',
        message: 'Plese choose your license type:',
        choices: ["MIT License","Apache License 2.0","The Unlicense"],
        name: 'pref_lic',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'project_user',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'project_email',
    },

  ])
  .then((response) =>
  fs.writeFile('README.md', JSON.stringify(response), (err) =>
  err ? console.error(err) : console.log('Success!')
)
     
  );













// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
