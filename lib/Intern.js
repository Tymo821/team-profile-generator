const Employee = require('./Employee');
const inquirer = require('inquirer');

// Intern class that extends the Employee class
class Intern extends Employee {
    // Constructor function to initialize intern properties
    constructor(name, id, email, role) {
        // Calling the parent class constructor to inherit its properties
        super(name, id, email, role)

        // Property to store school of the intern
        this.school = ''
    }

    // Function to get the school of the intern through inquirer prompt
    async getSchool() {
        return await inquirer
            .prompt({
                type: 'text',
                name: 'schoolInput',
                message: 'What school does this intern attend?'
            })
    } 
}

// Exporting the Intern class for use in other files
module.exports = Intern;