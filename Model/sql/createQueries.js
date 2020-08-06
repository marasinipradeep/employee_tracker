const connection = require("../db/connection");


// Add Department Name Into department Table
const insertIntoDepartment =function(newDepartment){
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
        })
}

const insertIntoEmployee = function(newEmployee){
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

const selectAllRole =function(){
     return   connection.query(
        "select title from role;"
    )
}


//Select All By Employee
const selectAllManager =function(){
  return  connection.query(
    "select first_name from employee"
)
}

//Select Name By Department
const selectNameByDepartment =function(){
    return  connection.query(
      "select name from department"
  )
  }

  //select id from department
  const selectIdByDepartment =function(departmentName){
    return  connection.query(
      "select id from department where name = ?",departmentName
  )
  }

  const selectIdByRole =function(title){
    return   connection.query(
       "select id from role where title = ?;",title
   )
}

const selectIdByEmployee =function(first_name){
    return   connection.query(
       "select id from employee where first_name = ?;",first_name
   )
}

const selectRoleTitleFromEmployeeRoleID=function(){
    console.log(`line 93 selectRoleTitleFromEmployeeRoleID()`)
    return   connection.query(
        `SELECT role.title
         FROM employee 
        INNER JOIN role on role.id = employee.role_id ;`
    )
}

const selectRoleIdFromEmployee=function(roleTitle){

    return   connection.query(
        `SELECT employee.role_id FROM employee 
        INNER JOIN role on role.id = employee.role_id WHERE role.title = ?;`,roleTitle
    )

}






module.exports.insertIntoDepartment = insertIntoDepartment;
module.exports.insertIntoRole=insertIntoRole;
module.exports.insertIntoEmployee=insertIntoEmployee;
module.exports.selectAllRole=selectAllRole;
module.exports.selectAllManager=selectAllManager;
module.exports.selectNameByDepartment=selectNameByDepartment;
module.exports.selectIdByDepartment=selectIdByDepartment;
module.exports.selectIdByRole=selectIdByRole;
module.exports.selectIdByEmployee=selectIdByEmployee;

module.exports.selectRoleTitleFromEmployeeRoleID=selectRoleTitleFromEmployeeRoleID;
module.exports.selectRoleIdFromEmployee=selectRoleIdFromEmployee;