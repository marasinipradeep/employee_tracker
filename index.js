
const connectingDB = require("./Model/db/connection")

//Loads Table With All Employee Information On Console In The Begining
const viewemployeeTable = require("./Model/sql/viewQueries")

//Loading Initial Questions
const onStart = require("./Inquiries/onStartInquirer")

init()
function init() {
    connectingDB;
    viewemployeeTable.viewEmployeeTable()
}

var startInFiveSecond = setInterval(() => {
    onStart.start()
    clearInterval(startInFiveSecond)
}, 5000)



