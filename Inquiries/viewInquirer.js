
const inquirer = require("inquirer")
const viewEmploy = require("../Data/viewEmployee/viewEmployee")
const viewemployeeTable=require("../Model/sql/viewQueries")


const viewEmployee = function () {
    inquirer.prompt(viewEmploy).then((answer) => {

        switch(answer.viewEmployeeChoices){

            case("---------VIEW ALL EMPLOYEE-----------"):
            console.log("inside line 13")
            viewemployeeTable.viewEmployeeTable()
            break;

            case("---------VIEW EMPLOYEE BY DEPARTMENT-------------"):
            break;

            case("---------VIEW ALL EMPLOYEE BY MANAGER-----------"):
            break;

            default:
                console.log("not valid selection");
                break;

        }
       
      //  queries.insertIntoDepartment(newDepartment)
    })
}

module.exports.viewEmployee = viewEmployee;