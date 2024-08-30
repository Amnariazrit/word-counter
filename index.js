#! /usr/bin/env node
// This line is called a shebang, it tells us the OS to run it with node
// Import the 'inquirer' module, which is a command line interface for Node.js
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.blue.bold.underline("\n \t Word Counter \n"));
// Declare a constant 'answers' and assign it to the result of inquirer.prompt function
const answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.green("Enter your sentence to count the word:"),
    },
]);
const words = answers.sentence.trim().split(" ");
// Print an array of words to the console
console.log(words);
// Print the word count of the sentence to the console
console.log(chalk.yellow(`Your sentence's word count is ${words.length}. `));
