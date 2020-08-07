const connection = require("../db/connection");

class UpdateQueries {

    constructor() { }
    //update table row by role id 
    updateByRole(oldRole, newRole) {

        connection.query(
            `UPDATE employee set role_id =?  WHERE id = ?`, [oldRole, newRole],
            (err) => {
                if (err) throw err;
                console.log("Table Updated By Role successfully")
            })
    }
    //update table row by manager id
    updateByManager(oldManager, newManger) {

        connection.query(
            `UPDATE employee set manager_id =?  WHERE id = ?`, [oldManager, newManger],
            (err) => {
                if (err) throw err;
                console.log("Table Updated By Manager successfully")
            })
    }
}
module.exports = new UpdateQueries()