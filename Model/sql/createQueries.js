const connection = require("../db/connection");

const insertIntoDepartment =function(newDepartment){
return connection.query(
    "INSERT INTO department SET ?",
    {
        name: newDepartment.name
    },
    (err) => {
        if (err) throw err;
        console.log("Department name created successfully")
        connection.end();
    })

}

const insertIntoRole = function(newRole){
    connection.query(
        "INSERT INTO role SET ?",
        {
            title: newRole.title,
            salary: newRole.salary,
            department_id: newRole.department_id

        },
        (err) => {
            if (err) throw err;
            console.log("Role  created successfully")
            connection.end();
        })
}

const insertIntoEmployee = function(newEmployee){

    connection.query(
        "INSERT INTO employee SET ?",
        {
            first_name: newEmployee.first_name,
            last_name: newEmployee.last_name,
            role_id: newEmployee.role_id,
            manager_id: newEmployee.manager_id,

        },
        (err) => {
            if (err) throw err;
            console.log("Employee  created successfully")
            connection.end();
        })
}

module.exports.insertIntoDepartment = insertIntoDepartment;
module.exports.insertIntoRole=insertIntoRole;
module.exports.insertIntoEmployee=insertIntoEmployee;