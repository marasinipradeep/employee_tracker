
const inquirer = require("inquirer")
const viewUpdate = require("../Data/viewUpdate/viewUpdate")

const createInq = require("./createInquirer")


const updateEmployee = function () {
    inquirer.prompt(viewUpdate).then((answer) => {

        switch(answer.viewUpdateChoices){

            case("---------UPDATE BY ROLE-----------"):
            createInq.selectAndUpdateByRole()

            break;

            case("---------UPDATE BY MANAGER-------------"):
            createInq.selectAndUpdateByManager();
            break;

            case("---------EXIT----------"):
            connection.end()
            process.exit()
            break;

            default:
                console.log("not valid selection");
                break;

        }
  
    })
}



module.exports.updateEmployee = updateEmployee;