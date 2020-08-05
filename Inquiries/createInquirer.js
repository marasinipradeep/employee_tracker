
const inquirer = require("inquirer")
const queries = require("../Model/sql/createQueries")
const viewemployeeTable = require("../Model/sql/viewQueries")
const updateTable = require("../Model/sql/updateQueries")

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


//Create role questions hold user input as role name and insert into table
const roleQuestions = async function () {
    const { title, salary } = await inquirer.prompt(role)
    //Get all Roles from Table
    const roles = await queries.selectNameByDepartment();
    var departmentChoiceByNameArray = [];

    for (var i = 0; i < roles.length; i++) {
        console.log(`line 49 ${roles[i].name}`)
        departmentChoiceByNameArray.push(roles[i].name)
    }

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


//Create employee questions hold user input and insert into table
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
    let newEmployee = new Employee(firstName, lastName, idByRole[0].id, idByEmployee[0].id)
    await queries.insertIntoEmployee(newEmployee)
    inqury.insertEmployees()
}


const selectdepartment = async function () {
    const roles = await queries.selectNameByDepartment();
    var departmentChoiceByNameArray = [];

    for (var i = 0; i < roles.length; i++) {
        console.log(`line 49 ${roles[i].name}`)
        departmentChoiceByNameArray.push(roles[i].name)
    }

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
    viewemployeeTable.viewEmployeeByDepartment(idByDepartment[0].id)
}

const selectManager = async function () {
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
    const idByManager = await queries.selectIdByEmployee(managerAnswer.managerId);
    console.log("57")
    console.log(idByManager[0].id)
    viewemployeeTable.viewEmployeeByManager(idByManager[0].id)
}

async function selectRole() {
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
    console.log("57")
    console.log(idByRole[0].id)
    viewemployeeTable.viewEmployeeByRole(idByRole[0].id)



}

async function selectAndUpdateByRole() {
    const role = await queries.selectAllRole();
    var oldroleChoiceArray = [];

    for (var i = 0; i < role.length; i++) {
        oldroleChoiceArray.push(role[i].title)
    }
    const oldroleAnswer = await inquirer.prompt(
        {
            message: "Select Role From List to Update?",
            name: "oldRole",
            type: "rawlist",
            choices: oldroleChoiceArray
        }
    )
    const oldidByRole = await queries.selectIdByRole(oldroleAnswer.oldRole);

    const newrole = await queries.selectAllRole();
    var newroleChoiceArray = [];
    for (var i = 0; i < newrole.length; i++) {
        newroleChoiceArray.push(newrole[i].title)
    }

    const newroleAnswer = await inquirer.prompt(
        {
            message: "Select Role From List to Update?",
            name: "newRole",
            type: "rawlist",
            choices: newroleChoiceArray
        }
    )

    const newidByRole = await queries.selectIdByRole(newroleAnswer.newRole);
    console.log("57")
    console.log(oldidByRole[0].id)
    updateTable.updateByRole(oldidByRole[0].id, newidByRole[0].id)

}


async function selectAndUpdateByManager() {
    const manager = await queries.selectAllManager();
    console.log("206")
    console.log(manager)
    var oldmanagerChoiceArray = [];
    for (var i = 0; i < manager.length; i++) {
        oldmanagerChoiceArray.push(manager[i].first_name)
    }
    const oldrManagerAnswer = await inquirer.prompt(
        {
            message: "Select From Manager to Update?",
            name: "oldManager",
            type: "rawlist",
            choices: oldmanagerChoiceArray
        }
    )
    const oldidByManager = await queries.selectIdByEmployee(oldrManagerAnswer.oldManager);


    const newmanager = await queries.selectAllManager();
    var newmanagerChoiceArray = [];
    for (var i = 0; i < newmanager.length; i++) {
        newmanagerChoiceArray.push(newmanager[i].first_name)
    }
    const newManagerAnswer = await inquirer.prompt(
        {
            message: "Select Manager From List to Update?",
            name: "newManager",
            type: "rawlist",
            choices: newmanagerChoiceArray
        }
    )

    const newidByManager = await queries.selectIdByEmployee(newManagerAnswer.newManager);
    updateTable.updateByRole(oldidByManager[0].id, newidByManager[0].id)



}

module.exports.departmentQuestion = departmentQuestion;
module.exports.roleQuestions = roleQuestions;
module.exports.employeeQuestions = employeeQuestions;

module.exports.selectdepartment = selectdepartment
module.exports.selectManager = selectManager
module.exports.selectRole = selectRole

module.exports.selectAndUpdateByRole = selectAndUpdateByRole
module.exports.selectAndUpdateByManager = selectAndUpdateByManager
