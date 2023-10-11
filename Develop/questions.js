const questions = [
    {
      type: 'input',
      message: 'What is the title of your project',
      name: 'title',
    },
    {
        type: 'input',
        message: 'Please describe your project:',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Please describe your the installation instructions:',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Please describe your usage information:',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please describe your contribution guidelines:',
        name: 'guidelines',
    },
    {
        type: 'input',
        message: 'What are your test instructions?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Plese choose your license type:',
        choices: ["MIT License","Apache License 2.0","The Unlicense"],
        name: 'license',
      },
      {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'user',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
  ]
  
  module.exports = questions