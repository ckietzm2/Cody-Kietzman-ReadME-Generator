const fs = require('fs')
const inquirer = require('inquirer');
const genRMjs = require('./genRM.js')
const questionsjs = require('./questions.js')

inquirer
  .prompt(questionsjs)
  .then((response) =>
    fs.writeFile('README.md', genRMjs(response), (err) => 
    err ? console.error(err) : console.log('success!'))
  );