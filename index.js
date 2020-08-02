const mysql = require("mysql")
const Department = require("./Model/Department")
const Employee = require("./Model/Employee")
const Role = require("./Model/Role")
const inquirer = require("inquirer")


// database info
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alterPassword",
    database: "employeeManagement_db"
})


//connecting database
connection.connect((err) => {
    if (err) throw err;
    console.log("Database connected successfully")
    //  departmentQuestions()
    // roleQuestions()
    employeeQuestions()

})

function departmentQuestions() {
    inquirer.prompt({
        message: "What is your department name?",
        name: "departmentName",
        type: "input"
    }).then(({ departmentName }) => {
        let newDepartment = new Department(departmentName)
        console.log(newDepartment)
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: newDepartment.name
            },
            (err) => {
                if (err) throw err;
                console.log("Department name created successfully")
            })

        //   roleQuestions()

    })
}

function roleQuestions() {
    inquirer.prompt([
        {
            message: "What is title of Employee?",
            name: "title",
            type: "input"
        },
        {

            message: "What is salary of Employee?",
            name: "salary",
            type: "input"

        },

        {
            message: "What is department_id of Employee?",
            name: "department_id",
            type: "input"

        }
    ]).then(({ title, salary, department_id }) => {
        let newRole = new Role(title, salary, department_id)
        console.log(newRole)
        console.log(newRole.title)
        console.log(newRole.salary)
        console.log(newRole.department_id)

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
    })
}


function employeeQuestions() {
    inquirer.prompt([
        {
            message: "What is first name of Employee?",
            name: "firstName",
            type: "input"
        },
        {

            message: "What is lst name of Employee?",
            name: "lastName",
            type: "input"

        },

        {
            message: "What is role_id of Employee?",
            name: "role_id",
            type: "input"

        },
        {
            message: "What is manager_id of Employee?",
            name: "manager_id",
            type: "input"

        }
    ]).then(({ firstName, lastName, role_id, manager_id }) => {
        let newEmployee = new Employee(firstName, lastName, role_id,manager_id)
        console.log(newEmployee)
        console.log(newEmployee.first_name)
        console.log(newEmployee.last_name)
        console.log(newEmployee.role_id)
        console.log(newEmployee.manager_id)

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
    })
}

function init(){


}


