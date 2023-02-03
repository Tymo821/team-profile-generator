const Employee = require('./Employee');
const inquirer = require('inquirer');

// Class to define an engineer object
class Engineer extends Employee {
    // Constructor to initialize engineer object and call superclass constructor
    constructor(name, id, email, role) {
        super(name, id, email, role);

        this.github = '';
    }

    // Async function to get Github username from the user
    async getGithub() {
        // Use inquirer library to prompt user for Github username input
        return await inquirer
            .prompt({
                type: 'text',
                name: 'githubInput',
                message: "What is this engineer's Github account name?"
            })
    } 
}

// Export the engineer class
module.exports = Engineer;