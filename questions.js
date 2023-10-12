const questions = [
    {
      type: 'text',
      message: 'What is the title of your project',
      name: 'title',
    },
    {
        type: 'text',
        message: 'Please describe your project:',
        name: 'description',
    },
    {
        type: 'text',
        message: 'Please describe your the installation instructions:',
        name: 'install',
    },
    {
        type: 'text',
        message: 'Please describe your usage information:',
        name: 'usage',
    },
    {
        type: 'text',
        message: 'Please describe your contribution guidelines:',
        name: 'guidelines',
    },
    {
        type: 'text',
        message: 'What are your test instructions?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'Plese choose your license type:',
        choices: ["MIT License","Apache License 2.0","The Unlicense","N/A"],
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