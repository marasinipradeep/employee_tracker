
const connection = require("../db/connection");
const viewEmployeeTable = function () {
    console.log("inside viewEmployee table line 4")
    return connection.query(
        "SELECT employee.id ,employee.first_name, employee.last_name,role.title, department.name,role.salary, employee.manager_id FROM employee INNER JOIN department on employee.id = department.id INNER JOIN role on department.id = role.id",
        (err, response) => {
            if (err) throw err;
            console.log("View Table Query Executed SuccessFully.....")
           const insertDataIntoTable = []
            for (i = 0; i < response.length; i++) {
                insertDataIntoTable.push( {
                        ID: response[i].id,
                        FIRST_NAME: response[i].first_name,
                        LAST_NAME: response[i].last_name,
                        TITLE: response[i].title,
                        DEPARTMENT: response[i].name,
                        SALARY: response[i].salary,
                        MANAGER_ID: response[i].manager_id
                    });
               
            }
            console.table(insertDataIntoTable);
           
        })
       
}

const viewEmployeeByDepartment = function(){

    console.log("inside viewEmployee By Department line 31")
    return connection.query(
        `SELECT department.id ,department.name,employee.first_name, employee.last_name
        FROM department 
        INNER JOIN employee on department.id = employee.id`,
        (err, response) => {
            if (err) throw err;
            console.log("View Table Query Executed SuccessFully.....")
           const insertDataIntoTable = []
            for (i = 0; i < response.length; i++) {
                insertDataIntoTable.push( {
                        ID: response[i].id,
                        DEPARTMENT: response[i].name,
                        FIRST_NAME: response[i].first_name,
                        LAST_NAME: response[i].last_name
                    });
               
            }
            console.table(insertDataIntoTable);
           
        })
}

const viewEmployeeByManager = function(){
    console.log("inside viewEmployee By Manager line 56")
    return connection.query(
        `SELECT department.id ,department.name,employee.first_name, employee.last_name
        FROM department 
        INNER JOIN employee on department.id = employee.id`,
        (err, response) => {
            if (err) throw err;
            console.log("View Table Query Executed SuccessFully.....")
           const insertDataIntoTable = []
            for (i = 0; i < response.length; i++) {
                insertDataIntoTable.push( {
                        ID: response[i].id,
                        DEPARTMENT: response[i].name,
                        FIRST_NAME: response[i].first_name,
                        LAST_NAME: response[i].last_name
                    });
               
            }
            console.table(insertDataIntoTable);
           
        })
    }

    const viewEmployeeByRole = function(){
        console.log("inside viewEmployee By Role line 79")
        return connection.query(
            `SELECT department.id ,department.name,employee.first_name, employee.last_name
            FROM department 
            INNER JOIN employee on department.id = employee.id`,
            (err, response) => {
                if (err) throw err;
                console.log("View Table Query Executed SuccessFully.....")
               const insertDataIntoTable = []
                for (i = 0; i < response.length; i++) {
                    insertDataIntoTable.push( {
                            ID: response[i].id,
                            DEPARTMENT: response[i].name,
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