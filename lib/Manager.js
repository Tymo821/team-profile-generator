const Employee = require('./Employee');
const inquirer = require('inquirer');

class Manager extends Employee {
    constructor(name, id, email, role) {
        // call the parent class' constructor with arguments
        super(name, id, email, role)

        // initialize the office number property to an empty string
        this.officeNum = ''
    }

    // function to get office number from user input
    async getOfficeNum() {
        return await inquirer
            .prompt({
                type: 'text',
                name: 'officeNumInput',
                message: 'What is the office number of this employee?'
            })
    } 
}

// export the Manager class
module.exports = Manager;