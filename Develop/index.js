// Packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown')

// Array of questions for user input
const questions = [{
    type: 'input', 
    name: 'github-user-name',
    message: 'What is your GitHub username?'
},
{
    type: 'input', 
    name: 'email',
    message: 'What is your email address?'
},
{
    type: 'input', 
    name: 'project',
    message: 'What is the project name?'
},
{
    type: 'input', 
    name: 'short-description',
    message: 'Please write a short description of your project'
},
{
    type: 'list', 
    name: 'license',
    message: 'What kind of license should your project have?',
    choices: [
        'Academic Free License v3.0',
        'Apache license 2.0',
        'Artistic license 2.0',
        'Boost Software License 1.0	bsl-1.0',
        'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license',
        'BSD 3-clause Clear license',
        'Creative Commons license family',
        'Creative Commons Zero v1.0 Universal',
        'Creative Commons Attribution 4.0',
        'Creative Commons Attribution Share Alike 4.0',
        'Do What The F*ck You Want To Public License',
        'Educational Community License v2.0',
        'Eclipse Public License 1.0',
        'Eclipse Public License 2.0',
        'European Union Public License 1.1',
        'GNU Affero General Public License v3.0',
        'GNU General Public License family',
        'GNU General Public License v2.0',
        'GNU General Public License v3.0',
        'GNU Lesser General Public License family',
        'GNU Lesser General Public License v2.1',
        'GNU Lesser General Public License v3.0',
        'ISC',
        'LaTeX Project Public License v1.3c',
        'Microsoft Public License',
        'MIT',
        'Mozilla Public License 2.0',
        'Open Software License 3.0',
        'PostgreSQL License',
        'SIL Open Font License 1.1',
        'University of Illinois/NCSA Open Source License',
        'The Unlicense',
        'zLib License'
    ],
    default: "MIT"
},
{
    type: 'input', 
    name: 'command-install',
    message: 'What command should be run to install dependencies?'
},
{
    type: 'input', 
    name: 'command-tests',
    message: 'What command should be run to run tests?'
},
{
    type: 'input', 
    name: 'repo-info',
    message: 'What does the user need to know about using the repo?'
},
{
    type: 'input', 
    name: 'repo-funds',
    message: 'What does the user need to know about contributing to the repo?'
},
{
    type: 'input', 
    name: 'chalk',
    message: 'I want to add Chalk?'
}
// add license
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answers=>{
        console.log(answers)

        writeToFile('README.md', generateMarkdown(answers))
    })
}

// Function call to initialize app
init()
