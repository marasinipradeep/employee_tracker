
const inquirer = require("inquirer")
const viewEmploy = require("../Data/viewEmployee/viewEmployee")
const viewemployeeTable=require("../Model/sql/viewQueries")


const viewEmployee = function () {
    inquirer.prompt(viewEmploy).then((answer) => {

        switch(answer.viewEmployeeChoices){

            case("---------VIEW ALL EMPLOYEE-----------"):
            viewemployeeTable.viewEmployeeTable()
            break;

            case("---------VIEW EMPLOYEE BY DEPARTMENT-------------"):
            viewemployeeTable.viewEmployeeByDepartment()
            break;

            case("---------VIEW ALL EMPLOYEE BY MANAGER-----------"):
            viewemployeeTable.viewEmployeeByManager()
            break;

            case("---------VIEW ALL EMPLOYEE BY ROLE-----------"):
            viewemployeeTable.viewEmployeeByRole()
            break;

            default:
                console.log("not valid selection");
                break;

        }
  
    })
}

module.exports.viewEmployee = viewEmployee;