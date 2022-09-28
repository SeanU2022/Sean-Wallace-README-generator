// Packages needed for this application
const inquirer = require('inquirer')
const fs = require('fs')
// Array of questions for user input
const questions = [{

// create README file, overwrites previous README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// Initialize prompts user with questions and writes answers to README
function init() {

    inquirer.prompt(questions)
            .then(answers=>{
                    console.log(answers)
                    writeToFile('README.md')
    })
}

// At startup
init()
