
const inquirer = require("inquirer")
const insertEmploy = require("../Data/viewForInsertEmployee/insertEmployee")

//Inquirer For Inserting Data Into Employee,Role,Department Table
const createInquirer = require("../Inquiries/createInquirer")

const onStart=require("./onStartInquirer")


const insertEmployees = function () {
    inquirer.prompt(insertEmploy).then((answer) => {
        

        switch(answer.insertEmployeeChoices){

            case("---------ADD DEPARTMENT-------------"):
            createInquirer.departmentQuestion()
            break;

            case("---------ADD ROLE-----------"):
            createInquirer.roleQuestions()
            break;

            case("---------ADD EMPLOYEE-----------"):
            createInquirer.employeeQuestions()
            break;

           

            case("---------EXIT--------------"):
            onStart.start()
            break;
           
            default:
                console.log("not valid selection");
                process.exit()
               
                break;

        }
  
    })
}

module.exports.insertEmployees = insertEmployees;