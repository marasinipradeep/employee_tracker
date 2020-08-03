
const inquirer = require("inquirer")
const queries = require("../Model/sql/createQueries")

const Department = require("../Model/Department")
const Employee = require("../Model/Employee")
const Role = require("../Model/Role")

const department = require("../Data/departmentQuestions")
const role = require("../Data/roleQuestions")
const employee = require("../Data/employeeQuestions")


const departmentQuestion = function () {
    inquirer.prompt(department).then(({ departmentName }) => {
        let newDepartment = new Department(departmentName)
        queries.insertIntoDepartment(newDepartment)
    })
}

const roleQuestions =function () {
    inquirer.prompt(role).then(({ title, salary, department_id }) => {
        let newRole = new Role(title, salary, department_id)
        queries.insertIntoRole(newRole)
    })
}


const employeeQuestions=function () {
    inquirer.prompt(employee).then(({ firstName, lastName, role_id, manager_id }) => {
        let newEmployee = new Employee(firstName, lastName, role_id,manager_id)
        queries.insertIntoEmployee(newEmployee)
    })
}

module.exports.departmentQuestion = departmentQuestion;
module.exports.roleQuestions = roleQuestions;
module.exports.employeeQuestions = employeeQuestions;