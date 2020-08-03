const mysql = require("mysql")

// database info
const connection = mysql.createConnection({
    host: process.env.DBHOST ||"localhost",
    user: process.env.DBUSER ||"root",
    password: process.env.DBPASSWORD||"alterPassword",
    database: process.env.DATABASE ||"employeeManagement_db",
})
   

//connecting database

connection.connect((err) => {
    if (err)throw err;
    console.log("Database connected successfully")
})

module.exports=connection;