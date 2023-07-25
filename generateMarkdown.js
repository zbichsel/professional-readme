function generateMarkdown(data) {
return `# ${data.title}
[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})\n
## Description\n\n${data.description}\n
## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Questions](#questions)\n
## Installation\n\n${data.installation}\n
## Usage\n\n${data.usage}\n
## License\n\nThis project is licensed under ${data.license}. Please check LICENSE document in the repository for more information.\n
## How to Contribute\n\n${data.contributions}\n
## Tests\n\n${data.testing}\n
## Questions\n
If you have any questions, please reach out to me at [Github](https://github.com/${data.username}) or via email at [${data.email}](${data.email}).`;
}

module.exports = generateMarkdown;