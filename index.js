const inquirer = require('inquirer');
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');
const generatePage = require('./utils/generate-HTML');
const writeFile = require('./utils/write-file');

// Set up employee list array
function App() {
    this.employeeList = [];
}

// Initialize the app and start the prompt questions
App.prototype.initializeApp = async function() {
    // Call the promptQuestions function and store the returned employee data
    await this.promptQuestions()
        .then((createdEmployee) => {
            // Push the created employee to the employee list
            this.employeeList.push(createdEmployee);
            // Log the current team profile
            console.log("Current team profile: ")
            console.table(this.employeeList);
            // Prompt to ask if the user wants to add a new employee
            return inquirer.prompt({
                type: 'confirm',
                message: 'Would you like to add a new employee?',
                name: 'addConfirm'
            })
        })
        .then(async ({ addConfirm }) => {
            // If the user confirms to add a new employee, call the initializeApp function again
            if (addConfirm) {
                await this.initializeApp()
            } else {
                // If the user doesn't want to add a new employee, call the writeFile function to create the HTML file
                await writeFile(generatePage(this.employeeList))
                    .then((response) => {
                        // Log the response after the file is created
                        console.log(response);
                        console.log("File created! Check for 'index.html' in the dist/ folder.")
                    })
                    .catch((err) => {
                        // Log the error if there's an issue in creating the file
                        console.log(error);
                    });
            }
        })
}

// Function to prompt questions for creating an employee
App.prototype.promptQuestions = async function() {
    // Create a new instance of the Employee class
    var newEmployee = new Employee();

    // Call the getRole function to get the role of the employee
    await newEmployee.getRole()
    .then((promptData) => {
        // If the user doesn't select a role, assign 'Employee'
        if (promptData.roleSelect === 'None') {
            newEmployee.role = 'Employee';
        } else {
        // If the user selects a role, assign it to the newEmployee object
        newEmployee.role = promptData.roleSelect
        console.log("newEmployee.role: " + newEmployee.role);
        }
    })
    // Call the getName function to get the name of the employee
    await newEmployee.getName()
        .then((promptData) => {
            newEmployee.name = promptData.nameInput;
        }) 
    await newEmployee.getId()
        .then((promptData) => {
            newEmployee.id = promptData.idInput;
        })
    await newEmployee.getEmail()
        .then((promptData) => {
            newEmployee.email = promptData.emailInput;
        })

    
    // Check if the new employee is an 'Employee'
if (newEmployee.role === 'Employee') {
    console.log("Employee card for " + newEmployee.name + " created!")
    return newEmployee;
}

// Switch case for handling different roles
switch (newEmployee.role) {
    case 'Manager': 
        // Create a new Manager object
        var newManager = new Manager(newEmployee.name, newEmployee.id, newEmployee.email, "Manager");
        // Get office number of the Manager
        await newManager.getOfficeNum()
            .then((promptData) => {
                newManager.officeNum = promptData.officeNumInput;
            })
        // Log message on successful creation of Manager card
        console.log("Employee card for " + newManager.name + " created!");
        return newManager;
    case 'Intern':
        // Create a new Intern object
        var newIntern = new Intern(newEmployee.name, newEmployee.id, newEmployee.email, "Intern")
        // Get school of the Intern
        await newIntern.getSchool()
        .then((promptData) => {
            newIntern.school = promptData.schoolInput;
        })
        // Log message on successful creation of Intern card
        console.log("Employee card for " + newIntern.name + " created!");
        return newIntern;
    case 'Engineer':
        // Create a new Engineer object
        var newEngineer = new Engineer(newEmployee.name, newEmployee.id, newEmployee.email, "Engineer");
        // Get Github username of the Engineer
        await newEngineer.getGithub()
        .then((promptData) => {
            newEngineer.github = promptData.githubInput;
        })
        // Log message on successful creation of Engineer card
        console.log("Employee card for " + newEngineer.name + " created!");
        return newEngineer;
    default: 'Oops! Something went wrong.'
    }
}


console.log(`
Welcome to your Team Profile Generator!
Answer the prompts to create a profile for your team.
`
    )

new App().initializeApp();