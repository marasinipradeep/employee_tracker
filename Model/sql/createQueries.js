const connection = require("../db/connection");

// Add Department Name Into department Table

class CreateQueries{
    constructor(){
}

// Query that insert into department
 insertIntoDepartment(newDepartment) {
    connection.query(
        "INSERT INTO department SET ?",
        {
            name: newDepartment.name
        },
        (err) => {
            if (err) throw err;
            console.log("Department name created successfully")
        })

}

// Query that insert into role
 insertIntoRole (newRole) {
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
        })
}

// Query that insert into employee
 insertIntoEmployee (newEmployee) {
    console.log("line 32")
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
        })
}

//Select All By Role

 selectAllRole () {
    return connection.query(
        "select title from role;"
    )
}


//Select All By Employee
 selectAllManager () {
    return connection.query(
        "select first_name from employee"
    )
}

//Select Name By Department
selectNameByDepartment  () {
    return connection.query(
        "select name from department"
    )
}

//select id from department
selectIdByDepartment (departmentName) {
    return connection.query(
        "select id from department where name = ?", departmentName
    )
}

//Select id by role
 selectIdByRole (title) {
    return connection.query(
        "select id from role where title = ?;", title
    )
}

//Select id by employee
 selectIdByEmployee  (first_name) {
    return connection.query(
        "select id from employee where first_name = ?;", first_name
    )
}

//select role title from employee id
 selectRoleTitleFromEmployeeRoleID () {
    console.log(`line 93 selectRoleTitleFromEmployeeRoleID()`)
    return connection.query(
        `SELECT role.title
         FROM employee 
        INNER JOIN role on role.id = employee.role_id ;`
    )
}

//select role id from employee
selectRoleIdFromEmployee (roleTitle) {

    return connection.query(
        `SELECT employee.role_id FROM employee 
        INNER JOIN role on role.id = employee.role_id WHERE role.title = ?;`, roleTitle
    )

}

 selectMaximumIdFromTable () {
    return connection.query(
        `SELECT id FROM employee ORDER BY id DESC LIMIT 1;`
    )
}

}

module.exports=new CreateQueries()