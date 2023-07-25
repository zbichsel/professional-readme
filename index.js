const inquirer = require('inquirer');
const generateMarkdown = require('./assets/generateMarkdown');
const fs = require('fs');

function questions() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'What is the title of your project?',
                name: 'title',
            },
            {
                type: 'input',
                message: 'What is the description of your application?',
                name: 'description',
            },
            {
                type: 'input',
                message: 'What are the instructions for the installation of your application?',
                name: 'installation',
            },
            {
                type: 'input',
                message: 'How should the application be utilized by the user?',
                name: 'usage',
            },
            {
                type: 'input',
                message: 'What guidelines, if any, should be maintained for contributions?',
                name: 'contributions',
            },
            {
                type: 'input',
                message: 'What are the instructions for testing the application?',
                name: 'testing',
            },
            {
                type: 'list',
                message: 'Which license will you choose for your project?',
                name: 'license',
                choices: ['MIT', 'Apache_2.0', 'MPL_2.0', 'ISC'],
            },
            {
                type: 'input',
                message: 'What is your GitHub username?',
                name: 'username',
            },
            {
                type: 'input',
                message: 'What is your email address?',
                name: 'email',
            },
        ])
        .then((response) =>
            writeToFile(generateMarkdown(response))
        )
};

function writeToFile(data) {
    fs.appendFile('ExampleREADME.md', `${data}\n`, (err) => err ? console.log(err) : console.log('Success!'));
};

questions();