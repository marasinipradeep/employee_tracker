
const connection = require("../db/connection");

//View all information from employee and common information from role and department
const viewEmployeeTable = function () {
    console.log("inside viewEmployee table line 4")
    return connection.query(
        `SELECT employee.id, employee.first_name,
        employee.last_name, role.title, 
        department.name AS department,
        role.salary, CONCAT(manager.first_name, ' ', manager.last_name) 
        AS manager FROM employee
        LEFT JOIN role on employee.role_id = role.id
        LEFT JOIN department on role.department_id = department.id 
        LEFT JOIN employee manager on manager.id = employee.manager_id`,
        (err, response) => {
            if (err) throw err;
            console.log("View Table Query Executed SuccessFully.....")
            const insertDataIntoTable = []
            for (i = 0; i < response.length; i++) {
                insertDataIntoTable.push({
                    ID: response[i].id,
                    FIRST_NAME: response[i].first_name,
                    LAST_NAME: response[i].last_name,
                    TITLE: response[i].title,
                    DEPARTMENT: response[i].department,
                    SALARY: response[i].salary,
                    MANAGER_ID: response[i].manager
                });

            }
            console.table(insertDataIntoTable);

        })

}


//view information by Department
const viewEmployeeByDepartment = function (department) {

    console.log("inside viewEmployee By Department line 31")
    return connection.query(
        ` SELECT employee.id, employee.first_name,employee.last_name, role.title 
        FROM employee 
        LEFT JOIN role on employee.role_id = role.id 
        LEFT JOIN department department on role.department_id = department.id WHERE department.id =?`, department,
        (err, response) => {
            if (err) throw err;
            console.log("View Table Query Executed SuccessFully.....")
            const insertDataIntoTable = []
            for (i = 0; i < response.length; i++) {
                insertDataIntoTable.push({
                    ID: response[i].id,
                    FIRST_NAME: response[i].first_name,
                    LAST_NAME: response[i].last_name,
                    TITLE: response[i].title,
                });

            }
            console.table(insertDataIntoTable);

        })
}


//View information my employee manager
const viewEmployeeByManager = function (manager) {
    console.log("inside viewEmployee By Manager line 56")
    return connection.query(
        `SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title
         FROM employee LEFT JOIN role on role.id = employee.role_id 
         LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?`, manager,
        (err, response) => {
            if (err) throw err;
            console.log("View Table Query Executed SuccessFully.....")
            const insertDataIntoTable = []
            for (i = 0; i < response.length; i++) {
                insertDataIntoTable.push({
                    ID: response[i].id,
                    DEPARTMENT: response[i].department,
                    FIRST_NAME: response[i].first_name,
                    LAST_NAME: response[i].last_name
                });

            }
            console.table(insertDataIntoTable);

        })
}

//view information by employee role
const viewEmployeeByRole = function (role) {
    console.log("inside viewEmployee By Role line 79")
    return connection.query(
        `SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, role.title
            FROM employee 
            LEFT JOIN role on role.id = employee.role_id 
            LEFT JOIN department ON department.id = role.department_id 
            WHERE manager_id = ?`,role,
        (err, response) => {
            if (err) throw err;
            console.log("View Table Query Executed SuccessFully.....")
            const insertDataIntoTable = []
            for (i = 0; i < response.length; i++) {
                insertDataIntoTable.push({
                    ID: response[i].id,
                    DEPARTMENT: response[i].department,
                    FIRST_NAME: response[i].first_name,
                    LAST_NAME: response[i].last_name
                });

            }
            console.table(insertDataIntoTable);

        })
}

module.exports.viewEmployeeTable = viewEmployeeTable;
module.exports.viewEmployeeByDepartment = viewEmployeeByDepartment;
module.exports.viewEmployeeByManager = viewEmployeeByManager;
module.exports.viewEmployeeByRole = viewEmployeeByRole;