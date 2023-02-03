const inquirer = require("inquirer");
const fs = require('fs');

// Class to define an employee object
class Employee {

    // Constructor to initialize employee object with default values
    constructor(name = '', id = '', email = '', role = '') {
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    // Async function to get name from the user
    async getName() {
        // Use inquirer library to prompt user for name input
        return await inquirer
            .prompt({
                type: 'text',
                name: 'nameInput',
                message: 'What is the name of this employee?'
            })
    } 

    // Async function to get id number from the user
    async getId() {
        // Use inquirer library to prompt user for id input
        return await inquirer
            .prompt({
                type: 'text',
                name: 'idInput',
                message: 'What is the ID number of this employee?'
            })
    } 


    // Async function to get email from the user
    async getEmail() {
        // Use inquirer library to prompt user for email input
        return await inquirer
            .prompt({
                type: 'text',
                name: 'emailInput',
                message: 'What is the email address of this employee?'
            })
    } 

    // Async function to get role from the user
    async getRole() {
        // Use inquirer library to prompt user to select role from a list of choices
        return await inquirer
            .prompt({
                type: 'list',
                name: 'roleSelect',
                message: 'What is the role of this employee?',
                choices: ['Manager', 'Engineer', 'Intern', 'None']
            })
    } 
}

// Export the employee class
module.exports = Employee;