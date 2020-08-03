const inquirer = require("inquirer")
//After Table Has Been Loaded Provides User With Options To CREATE,READ,UPDATE and DELETE Employee Data
const initialQuestions = require("../Data/initialQuestions")



//Inquirer For Inserting Data Into Employee,Role,Department Table
const insertIntoInquirer = require("../Inquiries/insertIntoTable")

//Inquirer For Viewing Data From Employee,Role,Department Table
const viewInquirer = require("../Inquiries/viewInquirer")



function start() {
    inquirer.prompt(initialQuestions).then((answer) => {

        switch (answer.initialChoices) {

            case ("---------CREATE EMPLOYEE-----------"):
                insertIntoInquirer.insertEmployees();
                break;

            case ("---------VIEW EMPLOYEE-------------"):
                viewInquirer.viewEmployee();
                break;

            case ("---------UPDATE EMPLOYEE-----------"):
                break;

            case ("---------DELETE EMPLOYEE-----------"):
                break;

            case("---------EXIT--------------"):
                process.exit()
                break;

            default:
                console.log("not valid selection");
                process.exit()
                break;

        }

    })
}

module.exports.start=start;