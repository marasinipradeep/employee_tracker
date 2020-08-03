const inquirer = require("inquirer")
const connectingDB = require("./Model/db/connection")

//Loads Table With All Employee Information On Console In The Begining
const viewemployeeTable=require("./Model/sql/viewQueries")

//After Table Has Been Loaded Provides User With Options To CREATE,READ,UPDATE and DELETE Employee Data
const initialQuestions = require("./Data/initialQuestions")

//Inquirer For Inserting Data Into Employee,Role,Department Table
const inquirey = require("./Inquiries/createInquirer")

//Inquirer For Viewing Data From Employee,Role,Department Table
const viewInquirer = require("./Inquiries/viewInquirer")





init()
 function init(){
   connectingDB;
   viewemployeeTable.viewEmployeeTable()
 //  startInFiveSecond;
}

var startInFiveSecond = setInterval(()=>{
    start()
    clearInterval(startInFiveSecond)
   },5000)

 function start(){
    inquirer.prompt(initialQuestions).then(async (answer)=>{

        switch(answer.initialChoices){
            
            case("---------CREATE EMPLOYEE-----------"):
           await inquirey.departmentQuestion();
            inquirey.roleQuestions();
            inquirey.employeeQuestions();
            break;

            case("---------VIEW EMPLOYEE-------------"):
            viewInquirer.viewEmployee();
            break;

            case("---------UPDATE EMPLOYEE-----------"):
            break;

            case("---------DELETE EMPLOYEE-----------"):
            break;

            default:
                console.log("not valid selection");
                break;

        }
    
    })
}

// case("View All Employees"):
// inquirey.departmentQuestion();
// break;

// case("View All Employees By Department"):
// inquirey.departmentQuestion();
// break;

// case("View All Employees By Manager"):
// inquirey.departmentQuestion();
// break;

// case("ADD Employee"):
// inquirey.departmentQuestion();
// break;

// case("Update Employee Role"):
// inquirey.departmentQuestion();
// break;

// case("Remove Employee"):
// inquirey.departmentQuestion();
// break;






