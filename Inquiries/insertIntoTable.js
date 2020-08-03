
const inquirer = require("inquirer")
const insertEmploy = require("../Data/viewForInsertEmployee/insertEmployee")

//Inquirer For Inserting Data Into Employee,Role,Department Table
const createInquirer = require("../Inquiries/createInquirer")


const insertEmployees = function () {
    inquirer.prompt(insertEmploy).then((answer) => {

        switch(answer.insertEmployeeChoices){

            case("---------ADD EMPLOYEE-----------"):
            createInquirer.employeeQuestions()
            break;

            case("---------ADD DEPARTMENT-------------"):
            console.log("inside line 13")
            createInquirer.departmentQuestion()
            break;

            case("---------ADD ROLE-----------"):
            createInquirer.roleQuestions()
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

module.exports.insertEmployees = insertEmployees;