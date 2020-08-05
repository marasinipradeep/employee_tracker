const util = require("util");
const mysql = require("mysql")

// database info
const connection = mysql.createConnection({
    host: process.env.DBHOST ||"localhost",
    user: process.env.DBUSER ||"root",
    password: process.env.DBPASSWORD||"alterPassword",
    database: process.env.DATABASE ||"employees",
})
   

//connecting database

connection.connect((err) => {
    if (err)throw err;
    console.log("Database connected successfully")
})

// Setting up connection.query to use promises, which will allow us to use the async/await
connection.query = util.promisify(connection.query);

module.exports=connection;