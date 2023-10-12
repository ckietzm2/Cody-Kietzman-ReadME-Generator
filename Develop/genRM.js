function genRM(res){
    return `# Project Title: ${res.title}

    ## Table of Contents
    [1. Description](#description)
    [2. Installation](#2-installation)
    [3. Usage](#3-usage)
    [4. License](#4-license)
    [5. Contributing](#5-contributing)
    [6. Tests](#6-tests)
    [7. Questions](#7-questions)
    
   
    #1 Description
    
    ${res.description}
    

    #2 Installation

    ${res.install}
    
    
    #3 Usage
    
    ${res.usage}

    #4 License
    
    ${res.license}


    #5 Contributing
    
    ${res.guidelines}


    #6 Tests
    
    ${res.test}


    #7 Questions
    
    My GitHub link is https://github.com/${res.user}
    My email address is ${res.email}
    `
  }
  
  module.exports = genRM



