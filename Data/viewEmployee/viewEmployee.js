const viewEmployee ={
    message:"SELECT FROM BELOW TO VIEW EMPLOYEE ?",
    type:"rawlist",
    name:"viewEmployeeChoices",
    choices:[

        "---------VIEW ALL EMPLOYEE-----------",
        "---------VIEW EMPLOYEE BY DEPARTMENT-------------",
        "---------VIEW ALL EMPLOYEE BY MANAGER-----------",
        "---------VIEW ALL EMPLOYEE BY ROLE-----------"
    ]
}

module.exports=viewEmployee;