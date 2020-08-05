
const inquirer = require("inquirer")
const viewDelete = require("../Data/viewDelete/viewDelete")

const createInq = require("./createInquirer")


const deleteEmployee = function () {
    inquirer.prompt(viewDelete).then((answer) => {

        switch(answer.viewUpdateChoices){

            case("---------REMOVE FROM DEPARTMENT-------------"):
          //  createInq.deleteByDepartment();
            break;


            case("---------REMOVE FROM ROLE-------------"):
          //  createInq.deleteByRole();
            break;

            case("---------REMOVE BY EMPLOYEE----------"):
          //  createInq.deleteByEmployee()
            break;

            case("---------EXIT----------"):
            break;

            default:
                console.log("not valid selection");
                break;

        }
  
    })
}



module.exports.deleteEmployee = deleteEmployee;