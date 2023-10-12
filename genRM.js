function genRM(res){
  return `# ${res.title}
  ## Description
  
  ${res.description}
 
  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  

  ## Installation

  ${res.install}
  
  
  ## Usage
  
  ${res.usage}

  ## License
  
  ${res.license}


  ## Contributing
  
  ${res.guidelines}


  ## Tests
  
  ${res.test}


  ## Questions
  
  My GitHub link is https://github.com/${res.user}
  My email address is ${res.email} `
}

module.exports = genRM



