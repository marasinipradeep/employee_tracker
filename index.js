const mysql = require("mysql")
const Inquirer = require("inquirer")
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
    departmentQuestions()

})

function departmentQuestions() {
    inquirer.prompt({
        message: "What is your department name?",
        name: "departmentName",
        type: "input"
    }).then(({ departmentName }) => {
        let departName = new Department(departmentName)
        console.log(departName)
        connection.query(
            "INSERT INTO department SET ?",
            {
                name: departName.name
            },
            (err) => {
                if (err) throw err;
                console.log("Department name created successfully")
            })
    })
}


