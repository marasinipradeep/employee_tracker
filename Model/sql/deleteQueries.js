const connection = require("../db/connection");

function deleteByRoleId(role_id){

    connection.query(
       `DELETE FROM employee WHERE role_id = ?`,role_id ,
        (err) => {
            if (err) throw err;
            console.log("Table Row Deleted  By Role_Id successfully")
        })

}

function deleteByManagerId(manager_id){

    connection.query(
        `DELETE FROM employee WHERE manager_id = ?`,manager_id ,
         (err) => {
             if (err) throw err;
             console.log("Table Row Deleted By Manager_Id successfully")
         })

}


function deleteByDepartmentId(departmentId){

    connection.query(
        `DELETE FROM department WHERE id =?`,departmentId ,
         (err) => {
             if (err) throw err;
             console.log("Table Row Deleted By Department successfully")
         })

}

module.exports.deleteByRoleId = deleteByRoleId;
module.exports.deleteByManagerId = deleteByManagerId;
module.exports.deleteByDepartmentId = deleteByDepartmentId;