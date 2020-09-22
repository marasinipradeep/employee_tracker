const util = require("util");
const mysql = require("mysql")

// database info
const connection = mysql.createConnection({
    host: process.env.DBHOST ||"localhost",
    user: process.env.DBUSER ||"", //add username
    password: process.env.DBPASSWORD||"",//add password 
    database: process.env.DATABASE ||"",//add database name
})
   

//connecting database

connection.connect((err) => {
    if (err)throw err;
    console.log("Database connected successfully")
})

// Setting up connection.query to use promises, which will allow us to use the async/await
connection.query = util.promisify(connection.query);

module.exports=connection;