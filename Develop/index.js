// Packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')

const { generateMarkdown, licences } = require('./utils/generateMarkdown')

// Array of questions for user input
const questions = [{
    type: 'input', 
    name: 'title',
    message: 'What is the project name?'
},
{
    type: 'input', 
    name: 'description',
    message: 'Please write a short description of your project:'
},
{
    type: 'input', 
    name: 'installation',
    message: 'What command should be run to install dependencies?'
},
{
    type: 'input', 
    name: 'usage',
    message: 'Instructions and examples for use (you can add screenshots later):'
},
{
    type: 'input', 
    name: 'contributing',
    message: 'What does the user need to know about contributing to the repo?'
},
{
    type: 'input', 
    name: 'tests',
    message: 'What command should be used to run tests?'
},
{
    type: 'input', 
    name: 'githubusername',
    message: 'What is your GitHub username?'
},
{
    type: 'input', 
    name: 'email',
    message: 'What is your email address?'
},
{
    type: 'list', 
    name: 'licence',
    message: 'What kind of licence should your project have?',
    // lic is used as an example to a new developer
    choices: licences.map(lic => lic.name),
    default: "MIT"
},
{
    type: 'input', 
    name: 'repo-info',
    message: 'What does the user need to know about using the repo?'
},
{
    type: 'input', 
    name: 'chalk',
    message: 'I want to add Chalk?'
}
]

// create README file, overwrites previous README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// Initialize prompts user with questions and writes answers to README
function init() {

    inquirer.prompt(questions).then(answers=>{
        console.log(answers)

        writeToFile('README.md', generateMarkdown(answers, licences))
    })
}

// At startup
init()
