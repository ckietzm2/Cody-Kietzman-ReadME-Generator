




function genRM(res){

  if (res.license=="MIT License") {
    var url = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }

  if (res.license=="Apache License 2.0") {
    var url = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }

  if (res.license=="The Unlicense") {
    var url = '[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)'
  }

  if (res.license=="N/A") {
    var url = ""
  }

 










  return `# ${res.title}
  ## Badge
  ${url}
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
  
  My GitHub link is https://github.com/${res.user}\n
  You can contact me via email at ${res.email} `
}

module.exports = genRM



