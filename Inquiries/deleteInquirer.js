
const inquirer = require("inquirer")
const viewDelete = require("../Data/viewDelete/viewDelete")

const createInq = require("./createInquirer")


const deleteEmployee = function () {
  inquirer.prompt(viewDelete).then((answer) => {

    switch (answer.viewDeleteChoices) {

      case ("---------REMOVE FROM ROLE-------------"):
          createInq.selectAndDeleteByRoleId()
        break;

      case ("---------REMOVE BY MANAGER----------"):
          createInq.selectAndDeleteByManagerId();
        break;

      case ("---------REMOVE FROM DEPARTMENT-------------"):
          createInq.selectAndDeleteByDepartmentId();
        break;

      case ("---------EXIT----------"):
        break;

      default:
        console.log("not valid selection");
        break;

    }

  })
}



module.exports.deleteEmployee = deleteEmployee;