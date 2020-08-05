const deleteEmployee ={
    message:"SELECT FROM BELOW TO DELETE EMPLOYEE ?",
    type:"rawlist",
    name:"viewEmployeeChoices",
    choices:[

        "---------REMOVE FROM DEPARTMENT-------------",
        "---------REMOVE FROM ROLE-------------",
        "---------REMOVE BY EMPLOYEE----------"
    ]
}

module.exports=deleteEmployee;