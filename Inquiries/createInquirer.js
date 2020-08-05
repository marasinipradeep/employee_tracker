
const inquirer = require("inquirer")
const queries = require("../Model/sql/createQueries")

const Department = require("../Model/Department")
const Employee = require("../Model/Employee")
const Role = require("../Model/Role")

const department = require("../Data/departmentQuestions")
const role = require("../Data/roleQuestions")
const employee = require("../Data/employeeQuestions")

const inqury = require("./insertIntoTable")

//Create department questions hold user input as department name and insert into table
const departmentQuestion = function () {
    inquirer.prompt(department).then(({ departmentName }) => {
        let newDepartment = new Department(departmentName)
        queries.insertIntoDepartment(newDepartment)
        inqury.insertEmployees()
    })
}



const roleQuestions = async function () {
    const { title, salary } = await inquirer.prompt(role)
    //Get all Roles from Table
    const roles = await queries.selectNameByDepartment();
    var departmentChoiceByNameArray = [];

    for (var i = 0; i < roles.length; i++) {
        console.log(`line 49 ${roles[i].name}`)
        departmentChoiceByNameArray.push(roles[i].name)
    }

    console.log(roles)
    const answer = await inquirer.prompt(
        {
            message: "What is department_id of Employee?",
            name: "department_id",
            type: "rawlist",
            choices: departmentChoiceByNameArray
        }
    )
    const idByDepartment = await queries.selectIdByDepartment(answer.department_id);
    console.log("57")
    console.log(idByDepartment[0].id)
    let newRole = new Role(title, salary, idByDepartment[0].id)
    await queries.insertIntoRole(newRole)
    inqury.insertEmployees()
}

const employeeQuestions = async function () {

    const { firstName, lastName } = await inquirer.prompt(employee)
    const role = await queries.selectAllRole();
    var roleChoiceArray = [];
    for (var i = 0; i < role.length; i++) {
        roleChoiceArray.push(role[i].title)
    }

    const roleAnswer = await inquirer.prompt(
        {
            message: "Select Role Of Employee From List?",
            name: "role_id",
            type: "rawlist",
            choices: roleChoiceArray
        }
    )
    const idByRole = await queries.selectIdByRole(roleAnswer.role_id);

    //Get all Manager id from table
    const manager = await queries.selectAllManager();

    var managerChoiceArray = [];
    for (var i = 0; i < manager.length; i++) {
        managerChoiceArray.push(manager[i].first_name)
    }
    const managerAnswer = await inquirer.prompt(
        {
            message: "Select Manager From List?",
            name: "managerId",
            type: "rawlist",
            choices: managerChoiceArray
        }
    )

    const idByEmployee = await queries.selectIdByEmployee(managerAnswer.managerId);
    let newEmployee = new Employee(firstName, lastName, idByRole[0].id,idByEmployee[0].id)
    await queries.insertIntoEmployee(newEmployee)
    inqury.insertEmployees()
}
module.exports.departmentQuestion = departmentQuestion;
module.exports.roleQuestions = roleQuestions;
module.exports.employeeQuestions = employeeQuestions;
