const insertEmployee ={
    message:"SELECT FROM BELOW TO INSERT FROM ?",
    type:"rawlist",
    name:"insertEmployeeChoices",
    choices:[

        "---------ADD EMPLOYEE-----------",
        "---------ADD DEPARTMENT-------------",
        "---------ADD ROLE-----------",
        "---------EXIT--------------"
    ]
}

module.exports=insertEmployee;