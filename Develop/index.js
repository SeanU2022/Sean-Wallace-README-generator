const inquirer = require("inquirer")
// TODO: Include packages needed for this application
const fs = require("fs")
const generateMarkdown = require("./utils/generateMarkdown")

// TODO: Create an array of questions for user input
const questions = [{
    type: "input", 
    name: "title",
    message: "What is the project Title?"
},
{
    type: "input", 
    name: "description",
    message: "What is the description?"
},
{
    type: "input", 
    name: "chalk",
    message: "I want to add Chalk?"
},
// add license
{
    type: "input", 
    name: "GitHub_user_name",
    message: "What is GitHub_user_name?"
}
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(answer=>{
        console.log(answer)

        writeToFile("README.md", generateMarkdown(answer))
    })
}

// Function call to initialize app
init()
