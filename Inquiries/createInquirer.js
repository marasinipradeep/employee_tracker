
const inquirer = require("inquirer")
const queries = require("../Model/sql/createQueries")

const Department = require("../Model/Department")
const Employee = require("../Model/Employee")
const Role = require("../Model/Role")

const department = require("../Data/departmentQuestions")
const role = require("../Data/roleQuestions")
const employee = require("../Data/employeeQuestions")

const connection = require("../Model/db/connection");

const inqury = require("./insertIntoTable")


const departmentQuestion = function () {
    inquirer.prompt(department).then(({ departmentName }) => {
        let newDepartment = new Department(departmentName)
        queries.insertIntoDepartment(newDepartment)
        inqury.insertEmployees()
    })
}

const roleQuestions = function () {
    inquirer.prompt(role).then(({ title, salary, department_id }) => {
        let newRole = new Role(title, salary, department_id)
        queries.insertIntoRole(newRole)
        inqury.insertEmployees()
    })
}


const employeeQuestions = function () {

    const holdData = {}

    inquirer.prompt(employee).then(({ firstName, lastName}) => {

        //Get all Roles from Table
        connection.query(
            "select title from role;", (err, role) => {
                if (err) throw err;
                inquirer.prompt(
                    {
                        message: "Select Role Of Employee From List?",
                        name: "role_id",
                        type: "rawlist",
                        choices: function () {
                            var roleChoiceArray = [];
                            for (var i = 0; i < role.length; i++) {
                                console.log(`line 49 ${role[i].title}`)
                                roleChoiceArray.push(role[i].title)
                            }
                            console.log(`the choice array is line 52: ${roleChoiceArray}`)
                            return roleChoiceArray
                        }
                    }
                ).then((answer) => {
                    console.log(`line 71`)
                    console.log(answer.role_id)
                    holdData.role_id = answer.role_id;
                    console.log(`line 66 ${holdData.role_id}`)

                     //Get all Manager id from table

                     connection.query(
                        "select manager_id from employee", (err, manager) => {
                            if (err) throw err;
                            inquirer.prompt(
                                {
                                    message: "Select Manage Id Of Employee From List?",
                                    name: "managerId",
                                    type: "rawlist",
                                    choices: function () {
                                        var managerChoiceArray = [];
                                        for (var i = 0; i < manager.length; i++) {
                                            console.log(`line 49 ${manager[i].manager_id}`)
                                            managerChoiceArray.push(manager[i].manager_id)
                                        }
                                        console.log(`the choice array is line 52: ${managerChoiceArray}`)
                                        return managerChoiceArray
                                    }
                                }
                            ).then((answer) => {
                                console.log(`line 71`)
                                console.log(answer.managerId)
                                holdData.managerId = answer.managerId;
                                console.log(`line 66 ${holdData.managerId}`)
                            })
                        }
                    )
                     
                })
            }
        )


                  
      //  let newEmployee = new Employee(firstName, lastName, HoldData.role_id, HoldData.managerId)
      //  queries.insertIntoEmployee(newEmployee)
      //  inqury.insertEmployees()

    })


}

//Getting all the roles in list


module.exports.departmentQuestion = departmentQuestion;
module.exports.roleQuestions = roleQuestions;
module.exports.employeeQuestions = employeeQuestions;