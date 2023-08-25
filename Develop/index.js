// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./generateMarkdown");
const path = require("path");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Please enter a title for your project.",
  },
  {
    type: "input",
    name: "description",
    message: "Please enter a descripition of your project.",
  },
  {
    type: "input",
    name: "installation",
    message:
      "Please provide instructions for the installation of your project.",
  },
  {
    type: "input",
    name: "usage",
    message: "Please provide pertinent usage information for your project.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please provide contribution guidelines for your project.",
  },
  {
    type: "input",
    name: "test",
    message: "Please provide instructions for the testing of your project.",
  },
  {
    type: "list",
    name: "license",
    message: "Please choose a licence: ",
    choices: ["Apache", "Boost", "BSD"],
  },
  {
    type: "input",
    name: "GitHub",
    message: "Please provide your GitHub username.",
  },
  {
    type: "input",
    name: "email",
    message: "Please provide your email address",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    fs.writeFile(
      path.join("dist", "README.md"),
      generateMarkdown(response),
      (err) =>
        err ? console.log(err) : console.log("README successfully created!")
    );
  });
}

// Function call to initialize app
init();
