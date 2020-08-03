const mysql = require("mysql")

// database info
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "alterPassword",
    database: "employeeManagement_db",
})
   

//connecting database

connection.connect((err) => {
    if (err)throw err;
    console.log("Database connected successfully")
})

module.exports=connection;